## Harjoitukset 1

1. Web-serverin (reverse-proxy) ja dockerin konffaaminen ubuntu-serverille pareittain:

    Kirjaudu parisi kanssa omalle ubuntu-serverillenne käyttäen SSH:tä. Asentakaa sinne docker sekä nginx (reverse-proxy). Konffatkaa se niin, että saatte serverille käyntiin docker-kontin, joka aukeaa osoitteesta (voit käyttää HTTP-porttia: 80) ja kertoo, että olet päässyt ryhmän sivulle:

    - https://groupname.treok.eu/harjoitus1

    Ohjeet:
    - serverin asennus: [ohje](https://otredu.github.io/devops/csc_setup.html) 

2. Tehkää edellisestä set-up:ista arkkitehtuurikuva, sekä asennusohje, jossa selitätte järjestelmään liittyvät käsitteet sekä pystyttämänne järjestelmän tiedot:

    - DHCP, mikä se on ja miten se toimii
    - public IP address, IP osoite josta sivusi toimii
    - private IP address, IP osoite josta sivusi toimii
    - private IP address subnet mask, käyttämäsi aliverkon maski
    - DNS + domain name, verkko-osoite josta sivusi toimii
    - subdomain, alidomain josta sivusi toimii
    - security group, asetukset, jotka pitää olla voimassa, että yhteydet toimivat
    - ingress/egress
    - reverse-proxy, mikä se on, miksi se tarvitaan ja miten se on konffattu sivullesi
    - SSH/SSH client, miten otat yhteyden serveriisi
    - RSA/asymmetric encryption, miten se toimii 
    - privatekey/publickey, miten ne luodaan ja mihin ne tallennetaan
    - certificate authority, mikä se on ja mihin sitä tarvitaan
    - HTTPS/certificate, miten HTTPS enabloidaan webserverille

3. Tehkää vastaava raportti/kuva siitä mitä AWS-demossa tehtiin [tässä työohje](https://container-workshop.juhala.people.aws.dev/). 

    Selittäkää seuraavat käsitteet:

    - region
    - VPC
    - availability zone
    - ALB
    - NAT gateway
    - security group
    - public/private subnet
    - internet gateway
    - Fargate
    - RDS 
    - EC2
    - ECR
    - ECS
    - Task/service
    - Environmental variables
     
Palauttakaa harjoitustyö systeemityön repoon. Liitä linkki konffaamaasi serveriin.