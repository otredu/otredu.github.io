### Build with path

1. Jos käytät polku-proxia, kontti pitää vielä build:ata uudelleen seuraavilla muutoksilla, koska applikaatio ei pyöri web-serverin juuressa (tätä ei tarvita jos käytät *subdomain*:eja):

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

2. Push:aa uusi kontti dockerhub:iin ja tee pull ubuntu-serverillä. Stop:aa tarvittaessa edellinen (toimimaton) kontti ja käynnistä uusi. Nyt kontin pitäisi aueta osoitteesta:

    ```cmd
    http://my_server_ip/team1
    ```
---

