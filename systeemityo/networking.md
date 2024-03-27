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
    apt-get update && apt -y install whois netbase iputils-ping traceroute curl man-db net-tools nano
    unminimize
    ```

Testaa niitä:

    ```bash 
    curl ifconfig.me
    traceroute --icmp 8.8.8.8
    ping 8.8.8.8
    whois google.com
    ```

*whois* ei toimi toimi koulun verkossa, koska palomuuri estää portiin 43 liikennöinnin. Voit sen sijaan tarkistaa saman asian täältä [whois.com](https://www.whois.com/whois)






