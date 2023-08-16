## Harjoitukset 1

1. Pelaa [AWS Cloud Quest Cloud Practitioner](https://cloudquest.skillbuilder.aws/):iä läpi seuraavat osiot:

    1. Cloud Computing Essentials (Web Page using S3)
    2. Cloud First Steps (EC2 instanses in multiple availability zones)
    3. Computing Solutions (EC2 instance types, scaling and connections)
    4. Networking Concepts (VPC, subnets, internet gateways, route tables, IP addresses, CIDR block notation, network access control lists, security groups)
    5. Databases in Practice (Amazon RDS, scaling and availability)

    Näytä opettajalle, että olet saanut pelin tähän pisteeseen.

2.  Piirrä kuva web-palvelusta, joka on toteutettu AWS:ään käyttämällä yhtä VPC:tä, yhtä EC2-serveriä sekä yhtä RDS-tietokantaa. Palvelu on toteutettu tietoturvasyistä niin, ettei EC2-serveriin eikä RDS-tietokantaan pääse suoraan internetin kautta (private subnet), vaan liikenne serverille ohjataan ALB:in kautta (HTTPS-sertifikaatti on sidottu ALB:iin). Palvelujen toimivuus on lisäksi varmistettu käyttämällä kahta availability zonea. Merkitse kuvaan: VPC, ALB, EC2-serveri, RDS-tietokanta, private subnet, public subnet, IGW, NAT GW sekä vaaditut 2 availability zonea.  

    Ota selvää mitä seuraavat AWS - termit tarkoittavat, ja tee niistä raportti: 
        - S3
        - region
        - VPC
        - availability zone
        - ALB
        - NAT gateway
        - security group
        - network access control lists
        - public/private subnet
        - internet gateway
        - route table
        - RDS 
        - EC2
        - Cloud Formation
        - ECR
        - ECS
        - Task/service
        - Environmental variables
        - Autoscaling

    Palauta harjoitustyö systeemityön repoon. Liitä mukaan kuvankaappaus pelin lopputilanteesta.

3. Web-serverin, reverse-proxy:n ja dockerin konffaaminen ubuntu-serverille:

    1. Luo Azure:een yksi Ubuntu server (Standard B1, North Europe). Tallenna pem-file K-levylle .ssh - kansioon. 
    2. Ota SSH-yhteys ubuntu-serverillenne käyttäen Bash:iä. 
    3. Asenna koneeseen docker, docker-compose sekä nginx (reverse-proxyksi). 
    4. Konffaa se niin, että saat serverille käyntiin 2 docker-konttia (esim. notesdemo sekä fanikauppa), jotka aukeavat valitsemastasi subdomain-osoitteesta (voit alkuun testata yhtäkonttia portissa 80, sitten sulkea sen ja asentaa nginx:n):

    - https://myown_subdomain.azure-created-domain

    Ohjeet:
    - Linux-virtuaalikoneen käynnistys Azureen [ohje](../devops/azure_virtuaalikone.html)
    - serverin asennus: [ohje](../devops/azure_setup.html) 

4. Piirrä edellisestä set-up:ista arkkitehtuurikuva, jonka avulla selität miten kaikki toimii:

    - miten selaimeen kirjoitettu osoite muuttuu serverin IP-osoitteeksi
    - miten selain tietää, että palvelin on se kuka se väittää olevansa
    - miten yhteys selaimen ja web-serverin välillä on suojattu (onko se suojattu?)
    - miten pyydetty osoite (alidomain) löytää palvelimella oikeaan docker-konttiin ilman tietoa missä  portissa se toimii
    - miten serveri saa yhteyden tietokantapalvelimeen
    - miten yhteys tietokantapalvelimelle on suojattu (onko se suojattu?)
    - miten saat yhteyden web-serveriisi admin-toimintoja varten (onko yhteys suojattu?)

    Kuvassa olisi hyvä näkyvä ainakin Azuren virtuaalipalvelin ja siihen asennetut docker-kontit sekä reverse-proxy (nginx), cpanel:in tietokantapalvelin, opettajan käyttämä AWS:n DNS-palvelin sekä virtuaaliset palomuurit (security groups) järjestelmien välillä.

    Tee raportti, jossa selität järjestelmään liittyvät käsitteet sekä pystyttämäsi järjestelmän tiedot:

    - public IP address, IP osoite serverillesi
    - private IP address, IP osoite serverillesi
    - private IP address with subnet mask, käyttämäsi IP osoite virtuaalisen aliverkon maskin kanssa
    - DNS + domain name, verkko-osoite josta sivusi toimii
    - subdomain, alidomain josta sivusi toimii
    - DB server, missä osoitteessa tietokantapalvelin toimii
    - security group, asetukset, jotka pitää olla voimassa, että yhteydet toimivat
    - ingress/egress
    - reverse-proxy, mikä se on, miksi se tarvitaan ja miten se on konffattu sivullesi
    - SSH/SSH client, miten otat yhteyden serveriisi
    - RSA/asymmetric encryption, miten se toimii 
    - privatekey/publickey, miten ne luodaan ja mihin ne tallennetaan
    - certificate authority, mikä se on ja mihin sitä tarvitaan
    - HTTPS/certificate, miten HTTPS enabloidaan webserverille
    - sudo, missä tilanteissa tätä piti käyttää
    - dockerhub, mikä se on ja mitä sen avulla tehdään
    - docker, mikä se on ja mitä sen avulla voi tehdä
     
    Palauttakaa harjoitustyö systeemityön repoon. Liitä linkkit konffaamallasi serverillä oleviin applikaatioihin.