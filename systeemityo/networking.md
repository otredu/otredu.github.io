## Networking basics with linux

Käydään läpi peruskomennot tietoverkon ja yhteyksien testaamiseksi.

Käynnistä dockeriin Ubuntun bash-terminaali:

    ```bash
    docker pull ubuntu
    winpty docker run -it ubuntu bash
    ```

Jos kontti on jo käynnissä pääset terminaaliin:

    ```bash
    docker ps -a
    winpty docker exec -it <container_id> bash
    ```

Asenna Ubuntuun tarvittavia työkaluja:

    ```bash
    apt-get update && apt-get -y install whois netbase iputils-ping traceroute curl man-db net-tools nano
    unminimize
    ```

Testaa niitä:

    ```bash 
    ifconfig
    route
    curl ifconfig.me
    traceroute --icmp 8.8.8.8
    ping 8.8.8.8
    whois google.com 
    ```

Huom! *whois* ei toimi toimi koulun verkossa, koska koulun palomuuri estää portiin 43 liikennöinnin. Voit sen sijaan tarkistaa saman asian täältä [whois.com](https://www.whois.com/whois).

## Kali ja Metasploitable

Käynnistä tietoturvatestausta varten kaksi konttia (Kali ja Metasploitable):

```bash
docker pull kalilinux/kali-rolling
docker pull tleemcjr/metasploitable2
docker run -it --name kali kalilinux/kali-rolling
docker run -it --name metasploitable tleemcjr/metasploitable2
```

Tee kontteja varten verkko ja liitä kontit siihen:

```bash
docker network create lab_network
docker network connect lab_network kali
docker network connect lab_network metasploitable
```

Käynnistä konteille bash-terminaalit:

```bash
winpty docker exec -it kali bash
winpty docker exec -it metasploitable bash
```

Selvitä:
- mikä on kalin privaatti IP-osoite
- mikä on metasploitablen privaatti IP-osoite
- mikä on IP-gatewayn IP-osoite
- mikä on privaatin verkon aliverkkomaski
- mikä on konttien public IP-osoite
- testaa että ping toimii molempiin suuntiin
- selvitä mikä on aliverkon pienin ja suurin IP-osoite
voit tutkia asiaa tällä: [ipcalc](https://jodies.de/ipcalc)

## Haavoittuvuuksien skannaus

Asenna nmap-ohjelma kali-linux:iin

```bash
    apt-get update && apt-get -y install nmap
```

Käynnistä nmap _dockerin_ _sisäisessä_ _private-verkossa_:

```bash
    nmap -sP 172.17.0.0/16
```
*Huom!* SKANNAUSTA EI SAA TEHDÄ MISSÄÄN MUUSSA YMPÄRISTÖSSÄ!!!





