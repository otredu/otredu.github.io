## node.js - ohjelman ajaminen AWS - serverillä

Kaikilla tiimeillä on oma käyttäjä/salasana sekä kotihakemisto yhteisellä Ubuntu - palvelimella. Jokaisella ryhmällä on oma portti, johon käynnistetään projektityön docker-kontti. Koska käytämme yhteistä serveriä, sama docker instanssi ajaa kaikkien ryhmien kontteja, älä koske muoden kontteihin vain omaasi.

1. Ota SSH-yhteys serverille (kysyy salasanan):

    ```cmd 
    $ ssh team1@my_ubuntu_ip
    ```

2. Aseta Github SSH key:t projektin koodirepoon [ohjeet](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/GitHub-SSH-Key-Setup-Config-Ubuntu-Linux)

    ```cmd
    $ ssh-keygen
    $ cd /home/ubuntu/.ssh
    $ cat id_rsa.pub
    $ cd ~
    ```

    Kopioi *public key* hiiren oikealla ja tallenna avain github-projektin koodirepoon (Account Settings -> SSH -> Add key).

3. Kloonaa repo käyttämällä SSH - osoitetta:

    ```cmd
    $ git clone git@github.com:xxx/yyy.git
    ```

4. Buildaa projekti Koska jokaisella tiimillä pitää olla käytössään eri portti, muokkaa .env:ä ennen buildin ajamista (tässä portti on 81).

    ```cmd
    > docker build . -t myapp
    > docker run -d -p 81:81 myapp
    ```

Nyt jokaisen ryhmän node.js - applikaatio löytyy oman subdomainin alta esim.

https://team1.my_domain.yy
https://team2.my_domain.yy

