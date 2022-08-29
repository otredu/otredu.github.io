## AWS with docker (running node.js)

### Vaihe 1. käynnistetään yksi docker-kontti AWS:ään:

1. Luo uusi EC2 small instanssi Ubuntu 20.04, tallenna *.pem - file .ssh kansioon omaan profiiliisi (pidä tallessa, älä anna näitä kenellekään!). [ohjeet](https://www.clickittech.com/devops/deploy-nodejs-app-to-aws/). Huom! ei oteta käyttöön Aurora tietokantaa.
2. Caraa Elastic IP ja liitä se serveriin
3. Konfiguroi security group niin, että se sallii sisääntulevat SSH-yhteydet (portti 22) koulun opetusverkosta sekä kaiken HTTP-liikenteen (portti 80)
4. Ota yhteys EC2 instansiin Bash:illä (SSH-connection ohjeet löytyvät AWS:stä)

    ```cmd
    > ssh -i "my_indentity.pem" ubuntu@my_ec2_instance.compute.amazonas.com
    ```

5. Asenna docker ja configuroi HTTPS [ohjeet](https://docs.docker.com/engine/install/ubuntu/)

    ```cmd
    $ sudo apt-get update
    $ sudo apt-get install ca-certificates curl gnupg lsb-release
    $ sudo mkdir -p /etc/apt/keyrings
    $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    $ echo deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) $ stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    $ sudo apt-get update
    $ sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
    $ sudo docker run hello-world
    ```

6. lisää docker group ja liitä käyttäjä siihen (niin ei tarvitse kirjoittaa aina sudo kun käytää dockeria)

    ```cmd
    $ sudo groupadd docker
    $ sudo usermod -aG docker <your-user-name>
    ```

7. Asenna git

    ```cmd
    $ sudo apt update
    $ sudo apt install git
    ```

8. Aseta Github SSH key:t [ohjeet](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/GitHub-SSH-Key-Setup-Config-Ubuntu-Linux)

    ```cmd
    $ ssh-keygen
    $ cd /home/ubuntu/.ssh
    $ cat id_rsa.pub
    $ cd ~
    ```

    Kopioi *public key* hiiren oikealla ja tallenna avain github-repoon (Account Settings -> SSH -> Add key)

9. Kloonaa repo käyttämällä SSH - osoitetta:

    ```cmd
    $ git clone git@github.com:xxx/yyy.git
    ```

10. Siirry repokansioon, aja Docker build ja käynnistä kontti, ennen tätä varmista että *.env*:ssä portti on 80.

    ```cmd
    $ cd yyy
    $ docker build . -t myapp
    $ docker run -d -p 80:80 myapp
    ```

11. Nyt pitäisi sivun aueta selaimesta Elastic IP-osoitteesta

---

### Vaihe 2. lisätään HTTPS ja oma domain:

1. Luo EC2:een Application Load Balancer (ALB), jonka tehtävänä on ohjata liikennetä eri porteissa pyöriville dockerkonteille sekä terminoida HTTPS-liikenne.

2. Lisää yksi Target Group, liitä siihen em. serveri (portti 80).

3. Lisää ALB:iin HTTP - listener, ja lisää em. Target Group default haaraan.

4. Varaa dommain nimi, tilaa AWS:ltä sertifikaatti (*.mydomain.zz), linkitä domain edellä tehty ALB:in osoitteeseen, tilaa domainille sertifikaatti ja tallenna AWS:n antamat tiedot DNS-tietokantaan (näin varmistetaan, että omistat domainin).

5. Lisää ALB:iin HTTPS - listener, ja lisää siihen em. Target Group:in lisäksi edellä tehty sertifikaatti.

---

### Vaihe 3. listään useampi käyttäjä ja docker-kontti

1. Tehtään uusia käyttäjiä ja kotihakemistoja Ubuntussa, lisätään niille salasana ja lisää ne docker-käyttäjäryhmään:

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

3. Nyt jokainen ryhmä voi ottaa SSH-yhteyden (kysyy salasanan):

    ```cmd 
    $ ssh team1@my_ubuntu_ip
    ```

4. Tiimi voi kloonata repon, tehdä buildin ja käynnistää sen. 
Huom! Jokaisella tiimillä pitää olla eri portti, eli .env:iin tulee muokata ennen buildia käytössä oleva portti.

5. Lisätään jokaiselle ryhmälle oma TargetGroup, jossa liikenne ohjataan ryhmän portiin. Lisätään myös uusi sääntö per tiimi ALB:in HTTPS-listenerille, eli esim. team1.my_domain.yy forward:ataan Target Group:iin, jossa serverin portti on 81,
team2.my_domain.yy portti 82 jne.

6. Jotta käytettäisiin aina HTTPS:ää lisätään jokaiselle ryhmälle redirect-sääntö HTTP -> HTTPS 443.

Nyt jokaisen ryhmän node.js applikaatio löytyy subdomainin alta esim.

https://team1.my_domain.yy
https://team2.my_domain.yy

---
<!-- 
### Vaihe 4. Container Registry ja Container Service

ALB:ia voisi käyttää myös ECR:n ja ECS:n kanssa (ei ole testattu). Tämä vaatisi sen, että opiskelijalla on tili AWS:ään, opettajalle voisi lähettää linkin imageen ja opettaja voisi sen deployata (ei ole järkevää).

1. Asenna AWS-CLI ja konffaa se 

Lataa Access key ID, Secret access key [ohjeet](https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html)

    ```cmd 
    > aws ecr get-login-password --region eu-north-1 | docker login --username AWS --password-stdin my_ecr.amazonaws.com 
    ```

    > docker tag mypp:latest my_ecr.amazonaws.com/my_registry:latest

    > docker push my_ecr.amazonaws.com/notesdemo:latest
    ``` -->