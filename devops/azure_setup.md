## Ubuntu virtual server in Azure

### Vaihe 1. käynnistetään yksi docker-kontti pyörimään ubuntu-serverissä, aukeaa public IP-osoitteesta:

1. Luo Azureen uusi virtuaalikone ([ohjeet](../devops/azure_virtuaalikone.html)):

    - Valitse Ubuntu server 20.04 (ja mahdollisimman halpa kone)
    - Valitse *create security keys*, tarvitset näitä SSH-yhteyden muodostamiseen serverille. Kun luot serverin, konellesi latautuu *.pem - file. Tallenna se profiilisi .ssh - kansioon (koululla yleensä k-levyllä, pidä *.pem-file tallessa, älä anna sitä kenellekään!). 
    - Valitse myös *create new public IP-address*. Muuten et pysty ottamaan serveriisi yhteyttä Internetistä.
    - Konfiguroi Security Group niin, että se sallii sisääntulevat SSH-yhteydet (portti 22) koulun opetusverkosta sekä kaiken HTTP-liikenteen (porttiin 80).

2. Ota yhteys ubuntu-serveriin Bash:illä (my_user on *ubuntu*, ellet valinnut eri käyttäjää):

    ```cmd
    $ cd .ssh
    $ ssh -i "my_indentity.pem" my_user@my_server_ip
    ```

3. Asenna ja configuroi HTTPS, docker sekä docker-compose:

    ```cmd
    $ sudo apt-get update
    $ sudo apt-get install ca-certificates curl gnupg lsb-release
    $ sudo mkdir -p /etc/apt/keyrings
    $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    $ echo \
        "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
        $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    $ sudo apt-get update
    $ sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
    $ sudo apt install docker-compose
    $ sudo docker run hello-world
    ```

    Tarkemmat [ohjeet täällä](https://docs.docker.com/engine/install/ubuntu/)


4. Lisää docker - group ja liitä käyttäjä siihen (niin ei tarvitse kirjoittaa aina sudo kun käytää dockeria).

    ```cmd
    $ sudo groupadd docker
    $ sudo usermod -aG docker my_user
    ```

    *Huom* Kirjaudu nyt uudelleen ubuntu-koneeseen, että edellä tehty muutos tulee voimaan (kirjoita *exit* ja tee uusi SSH-yhteys).

5. Lataa kokeeksi yksi container dockerhub:ista ja käynnistä se:

    ```cmd
    $ docker login
    $ docker pull my_docker_user/my_app:my_tag
    ```

6. Luo uusi *nano*:lla tiedosto *docker-compose.yml* ja tallenna siihen tarvittavat ympäristömuuttujat (ENV), että saat ohjelmasi käyntiin. Liitä teksti hiiren oikealla ja tallenna *Ctrl-x* ja yes.

    ```cmd
    $ nano docker-compose.yml
    ```

    Katso docker-compose.yml rakenne [täältä](../docker/notesdemofull.html).

9. Käynnistä kontti docker-compose:lla:

    ```cmd
    docker-compose up -d
    ```

8. Nyt selaimessa pitäisi näkyä kontin sisältämä appi serverin public IP-osoiteessa (HTTP portissa 80).

    *Huom:* Jos ei näy, käy konffaamassa serverin portti 80 auki internettiin (security group).

--- 

## Vaihe 2: Monta docker-konttia samalla serverillä (HTTP)

Jotta saadaan useampaan porttiin eri applikaatioita omissa konteissaan, asennetaan nginx *reverse proxy*:ksi. [Ohjeet nginx:in asennukseen](https://www.hostinger.com/tutorials/how-to-set-up-nginx-reverse-proxy/)

1. Asenna nginx

    ```cmd
    $ sudo apt-get update
    $ sudo apt-get install nginx
    ```

2. Konffaa se *reverse-proxy*:ksi

    ```cmd
    $ sudo unlink /etc/nginx/sites-enabled/default
    
    $ cd /etc/nginx/sites-available
    
    $ sudo nano reverse-proxy.conf
    ```
    Lisää tiedostoon haluamasi proxy-asetukset, tässä käytetty polkua: (tallenna Ctrl-x, yes):

    ```cmd
    server {
      listen 80;
      location /team1/ {
        proxy_pass http://localhost:81/;
      }
    }
    ```

3. Ota käyttöön samat proxy-asetukset myös *sites-enabled*-kansiossa ja käynnistä uudelleen nginx:

    ```cmd
    $ sudo ln -s /etc/nginx/sites-available/reverse-proxy.conf /etc/nginx/sites-enabled/reverse-proxy.conf

    $ sudo systemctl restart nginx
    ```

4. Huomataan, että kontti ei mahdollisesti täysin toimikaan tässä polussa (frontti pitäisi buildata uudelleen käyttäen ["homepage" - asetusta](./build_with_path.html)). Ei tehdä sitä kuitenkaan nyt vaan siirrytään käyttämään omaa domainia (vaihe 3.) ja tehdään reverse-proxy:n konffaus sen avulla.

---

### Vaihe 3. lisätään oma alidomain:

1. Pyydä opettajalta oma alidomain Teams:illa serverisi public IP-osoitteelle. Hän konffaa sellaisen AWS:n Route 53:een. 

    AWS:n Route53:ssa on *hosted zone* (domain: treok.eu), johon lisätään uusi *record*, joka reitittää kaikki \*.my_new_domain.treok.eu - osoiteet Azure serverisi public IP-osoiteeseen. 
    *Huom.* DNS:n päivitys voi kestää 24h.

---

### Vaihe 4. konffataan nginex käyttämään edellä tehtyä alidomainia

1. Jos käytössäsi on domain name, voit tehdä proxyn alidomaineille:

    ```cmd
    server {
      listen 80;
      server_name my_subdomain.my_domain.xy;
      location / {
        proxy_pass http://localhost:200;
      }
    } 
    ```
2. Ota käyttöön samat proxy-asetukset myös *sites-enabled*-kansiossa ja käynnistä uudelleen nginx:

    ```cmd
    $ sudo ln -s /etc/nginx/sites-available/reverse-proxy.conf /etc/nginx/sites-enabled/reverse-proxy.conf

    $ sudo systemctl restart nginx
    ```

### Vaihe 5. Otetaan käyttoon HTTPS

1. Asenna certbot, joka luo Let's encrypt - sertifikaatit kaikille domaineillesi [ohjeet](https://certbot.eff.org/instructions?ws=nginx&os=ubuntufocal)

    ```cmd
    $ sudo snap install core; sudo snap refresh core
    $ sudo snap install --classic certbot
    $ sudo ln -s /snap/bin/certbot /usr/bin/certbot
    $ sudo certbot --nginx
    ```

*Huom!* Muista avata portti 443 liikenteelle Azuressa (networking->network settings->create port rule)
---

Nyt sinulla pitäisi olla HTTPS:n kautta toiminnassa kaksi sovellusta joilla on molemmilla oma alidomain:

    https://myapp1.my_subdomain.treok.eu
    https://myapp2.my_subdomain.treok.eu
