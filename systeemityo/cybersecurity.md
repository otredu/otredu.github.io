## Cyber security

1. Johdatus kyberturvallisuuteen

    Valitse näistä joko suomenkielinen tai englanninkielinen kurssi. Rekisteröityessäsi Edukamuun käytä koulun sähköpostia ja valitse: GUEST

    - [Johdatus kyberturvallisuuteen ja pilvipalveluihin](https://cs.edukamu.fi/elements-of-cloud-and-cybersecurity-fi)
    - [Elements of cloud and cybersecurity](https://cs.edukamu.fi/elements-of-cloud-and-cybersecurity)

    Kun olet suorittanut kurssin, liitä saamasi badge linkedin-tilillesi.

2. Netacad - Ethical Hacker 

    Asenna näiden ohjeiden mukaisesti [Kali Linux VM](./owasp_kali.md). Kirjaudu sitten Netacad:in Ethical Hacker - kurssille. Rekisteröityessäsi käytä koulun google-tunnuksia.

    Huom! Saat opettajalta kutsulinkin kurssille, käytä sitä ensimmäisellä kerralla.

    - Ethical Hacker - kurssi, osa 6 [linkki](https://www.netacad.com/)

    Kun olet suorittanut osion, näytä suoritusmerkintä opettajalle.

3. WebGoat - harjoitukset

    - Käynnistä WebGoat dockeriin:

    ```cmd
    docker run -it -p 127.0.0.1:8080:8080 -p 127.0.0.1:9090:9090 -e TZ=Europe/Helsinki webgoat/webgoat
    ```
    - Tee itsellesi käyttäjä, ja tee pyydetyt harjoitukset

4. DVWA - harjoitukset 

    - Käynnistä DVWA dockeriin:

    ```cmd
    docker run --rm -it -p 80:80 vulnerables/web-dvwa
    ```
    - Kirjaudu: Username: admin, Password: password, ja tee pyydetyt harjoitukset

--- 

Linkkejä:
    - [WebGoat](https://github.com/WebGoat/WebGoat)
    - [zap](https://hub.docker.com/r/zaproxy/zap-stable)
