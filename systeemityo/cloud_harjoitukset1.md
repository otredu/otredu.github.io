## Harjoitukset 1

1. Web-serverin (reverse-proxy) ja dockerin konffaaminen ubuntu-serverille pareittain:

    Kirjaudu parisi kanssa omalle ubuntu-serverillenne käyttäen SSH:tä. Asentakaa sinne docker sekä nginx (reverse-proxyksi). Konffatkaa se niin, että saatte serverille käyntiin docker-kontin, joka aukeaa valitsemastanne subdomain-osoitteesta (voit alkuun testata yhtäkonttia portissa 80, sitten sulkea sen ja asentaa nginx:n):

    - https://group_subdomain.treok.eu/

    Ohjeet:
    - serverin asennus: [ohje](https://otredu.github.io/devops/csc_setup.html) 

2. Tehkää edellisestä set-up:ista arkkitehtuurikuva, sekä asennusohje, jossa selitätte järjestelmään liittyvät käsitteet sekä pystyttämänne järjestelmän tiedot:

    - public IP address, IP osoite serverille, jonka kautta sivustosi toimii
    - private IP address, IP osoite serverille, josta sivusi oikeasti tulee
    - private IP address subnet mask, käyttämäsi virtuaalisen aliverkon maski
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
    - sudo, missä tilanteissa tätä piti käyttää
    - dockerhub, mikä se on ja mitä sen avulla tehdään
    - docker, mikä se on ja mitä sen avulla voi tehdä

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
     
Palauttakaa harjoitustyö systeemityön repoon. Liitä linkkit konffaamallasi serverillä oleviin applikaatioihin.