## CSC with docker (running node.js)

### Vaihe 1. käynnistetään yksi docker-kontti AWS:ään:

1. Luo CSC:llä uusi keypair kohdassa *create keypair*. Tarvitset näitä SSH-yhteyden muodostamiseen serverille. Tallenna ladatut kansioon ilmestynyt *.pem - file profiilisi .ssh - kansioon (koululla yleensä k-levyllä, pidä *.pem-file tallessa, älä anna sitä kenellekään!). 
2. Luo CSC:hen uusi virtuaalikone (tiny) Ubuntu 20.04 ja valitse *security*-välilehdeltä edellä tehty keypair. 
2. Liitä public (floating) IP-osoite serveriin (vain ensimmäiselle serverille, ei tarvita jatkossa).
3. Konfiguroi Security Group niin, että se sallii sisääntulevat SSH-yhteydet (portti 22) koulun opetusverkosta sekä kaiken HTTP-liikenteen (porttiin 80).
4. Ota yhteys ubuntu-serveriin Bash:illä 

    *Huom!* jos yrität ottaa yhteyden private IP-osoitteeseen, katso ohjeet [täältä](https://help.dreamhost.com/hc/en-us/articles/215879497-How-to-SSH-to-a-private-instance-without-a-public-IP-address)

    ```cmd
    $ ssh -i "my_indentity.pem" ubuntu@my_server_ip
    ```

5. Asenna docker ja configuroi HTTPS [ohjeet](https://docs.docker.com/engine/install/ubuntu/)

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
    $ sudo docker run hello-world
    ```

6. Lisää docker - group ja liitä käyttäjä siihen (niin ei tarvitse kirjoittaa aina sudo kun käytää dockeria).

    ```cmd
    $ sudo groupadd docker
    $ sudo usermod -aG docker ubuntu
    ```

7. Lataa kokeeksi yksi container dockerhub:ista ja käynnistä se:

    ```cmd
    $ docker login
    $ docker pull my_docker_user/my_app:my_tag
    $ docker run -d -p 80:3001 my_docker_user/my_app:my_tag
    ```

8. Nyt selaimessa pitäisi näkyä kontin sisältämä appi serverin public IP-osoiteessa TAI subdomainissa. 

--- 

## Vaihe 2: Monta docker-konttia samalla serverillä

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

    Jos käytössäsi on domain name, voit tehdä proxyn alidomaineille:

    ```cmd
    server {
      listen 80;
      server_name my_subdomain.my_domain.xy;
      location / {
        proxy_pass http://localhost:200;
      }
    } 
    ```

2. Ota käyttöön samat proxy-asetukset myös *sites-enabled*-kansiossa) ja käynnistä uudelleen nginx:

    ```cmd
    $ sudo ln -s /etc/nginx/sites-available/reverse-proxy.conf /etc/nginx/sites-enabled/reverse-proxy.conf

    $ sudo systemctl restart nginx
    ```

3. Jos käytät polku-proxia, kontti pitää vielä build:ata uudelleen seuraavilla muutoksilla, koska applikaatio ei pyöri web-serverin juuressa (tätä ei tarvita jos käytät *subdomain*:eja):

    - Lisää frontin package.json tiedostoon alla oleva "homepage"-asetus. Tämä tarvitaan, että static tiedostot (JS, CSS) latautuvat oikein web-serveriltä (. viittaa samaan polkuun kuin index.html).

        ```json
        "homepage": ".",
        ```
    - Docker - tiedostoon lisätään seuraava ympäristömuuttuja, ennen frontin build-komentoa:
        ```cmd
        ENV NODE_ENV=production 
        ```
    - front:in koodissa määritellään *service URI* ottamaan huomioon sen, että *production*-versiossa *backend*:illä on serverillä uusi polku:
        ```cmd
        var serviceURI = '/notes';
        if(process.env.NODE_ENV == 'production'){
            serviceURI = window.location.pathname + serviceURI
        }
        ```

4. Push:aa uusi kontti dockerhub:iin ja tee pull ubuntu-serverillä. Stop:aa tarvittaessa edellinen kontti ja käynnistä uusi. Nyt kontin pitäisi aueta jommasta kummasta aueta osoitteesta riippuen kumpaa proxy-tapaa käytit:

    ```cmd
    http://my_server_ip/team1
    http://my_subdomain.mydomain.xy
    ```
---

### Vaihe 3. lisätään HTTPS ja oma domain:

1. Hanki oma domain, esim. [Hostinpalvelu](https://www.hostingpalvelu.fi/)

2. Ota käyttöön AWS:ssä Route53:ssa *hosted zone*, uudelle domainille. Lisää uusi *record*, joka reitittää kaikki \*.my_new_domain - osoiteet *reverse proxy*:n IP-osoiteeseen. Tallenna AWS:n nimipalvelinten osoiteet palveluun, josta ostit domain:in.
*Huom.* DNS:n päivitys voi kestää 24h.

3. Asenna certbot, joka luo Let's encrypt - sertifikaatit kaikille domaineillesi [ohjeet](https://certbot.eff.org/instructions?ws=nginx&os=ubuntufocal)

    ```cmd
    $ sudo snap install core; sudo snap refresh core
    $ sudo snap install --classic certbot
    $ sudo ln -s /snap/bin/certbot /usr/bin/certbot
    $ sudo certbot --nginx
    ```
---

### Vaihe 4. listään useampi käyttäjä ja docker-kontti

1. Tehdään uusia käyttäjiä (yksi per tiimi) ja kotihakemistoja serverille, lisätään niille salasana ja lisää käyttäjät docker-käyttäjäryhmään:

    ```cmd
        $ sudo useradd -s /bin/bash -d /home/team1/ -m team1
        $ sudo passwd team1
        4 sudo usermod -aG docker team1
    ```

2. Enabloidaan SSH password - autentikaatio (muokkaa: PasswordAuthentication yes, tallenna Ctrl-x + yes):

    ```cmd
    $ sudo nano /etc/ssh/sshd_config 
    $ sudo systemctl restart sshd
    ```

3. Nyt jokainen ryhmä voi ottaa SSH-yhteyden serverille (kysyy salasanan):

    ```cmd 
    $ ssh -i "my_indentity.pem" team1@my_server_ip
    ```

4. Tiimi voi nyt ladata imagen ja käynnistää sen omaan porttiinsa.
Huom! Jokaisella tiimillä pitää olla eri portti (tässä 81).

    ```cmd
    $ docker pull my_docker_user/my_app:my_tag
    $ docker run -d -p 81:3001 my_docker_user/my_app:my_tag
    ```

5. Nyt jokaisen ryhmän node.js - applikaatio löytyy oman polun alta esim.

    ```cmd
    https://my_domain.xy/team1
    https://my_domain.xy/team2
    ```

    TAI 
    ```cmd
    https://team1.my_domain.xy
    https://team2.my_domain.xy
    ```

[Ohje subdomainien reititykseen](https://ryan.himmelwright.net/post/nginx-subdomain-reverse-proxy/). Vaatii toimivan domainin.

---

### Vaihe 5. Asenna oma postgres server ubuntuun

1. [Asennusohjeet](https://linuxhint.com/install-and-setup-postgresql-database-ubuntu-22-04/)

---

### Lisäohjeita:

1. SSH-yhteys käyttäen toista ubuntu-serveriä proxynä:

    ```cmd
    Host jump
      HostName xxx.xxx.xxx.xxx #Floating IP
      User my_ubuntu_user
      IdentityFile ~/.ssh/my_rsa_id
    Host yyy.yyy.yyy.*  #Private IP
      ProxyCommand ssh jump -W %h:%p
      User ubuntu
      IdentityFile ~/.ssh/my_rsa_id
     ```
    Nyt voi ottaa ssh-yhteyden suoraan kohdekoneeseen:

    ```cmd
    ssh yyy.yyy.yyy.*
    ```
