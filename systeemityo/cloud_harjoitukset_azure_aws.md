## Harjoitukset 1

1. Pelaa [AWS Cloud Quest Cloud Practitioner](https://cloudquest.skillbuilder.aws/):iä läpi seuraavat osiot:

    1. Cloud Computing Essentials (Web Page using S3)
    2. Cloud First Steps (EC2 instanses in multiple availability zones)
    3. Computing Solutions (EC2 instance types, scaling and connections)
    4. Networking Concepts (VPC, subnets, internet gateways, route tables, IP addresses, CIDR block notation, network access control lists, security groups)
    5. Databases in Practice (Amazon RDS, scaling and availability)

    Näytä opettajalle, että olet saanut pelin tähän pisteeseen.

2.  Piirrä kuva AWS palvelusta, jossa on yksi VPC, yksi ALB public subnet:issä, yksi EC2 instanssi sekä yksi RDS tietokanta private     subnetissä. Piirrä kuvaan myös IGW sekä NAT GW sekä 2 availability zonea.

    Ota selvää mitä seuraavat AWS - termit tarkoittavat, ja tee niitä raportti: 
        - S3
        - region
        - VPC
        - availability zone
        - ALB
        - NAT gateway
        - CIDR block
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

    Palauta harjoitustyö systeemityön repoon. Liitä mukaan kuvankaappaus pelin tilanteesta.

3. Web-serverin, reverse-proxy:n ja dockerin konffaaminen ubuntu-serverille:

    1. Luo Azure:een yksi Ubuntu server. Tallenna pem-file K-levylle .ssh - kansioon. 
    2. Ota SSH-yhteys ubuntu-serverillenne käyttäen Bash:iä. 
    3. Asenna koneeseen docker sekä nginx (reverse-proxyksi). 
    4. Konffaa se niin, että saat serverille käyntiin 2 docker-konttia (esim. notesdemo sekä fanikauppa), jotka aukeavat valitsemastasi subdomain-osoitteesta (voit alkuun testata yhtäkonttia portissa 80, sitten sulkea sen ja asentaa nginx:n):

    - https://myown_subdomain.azure-created-domain

    Ohjeet:
    - serverin asennus: [ohje](https://otredu.github.io/devops/azure_setup.html) 

4. Piirrä edellisestä set-up:ista arkkitehtuurikuva sekä kirjoita asennusohje, jonka avulla sen saisi tehtyä uudelleen. 

    Tee raportti, jossa selität järjestelmään liittyvät käsitteet sekä pystyttämäsi järjestelmän tiedot:

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
     
    Palauttakaa harjoitustyö systeemityön repoon. Liitä linkkit konffaamallasi serverillä oleviin applikaatioihin.