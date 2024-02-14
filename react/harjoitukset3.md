## Harjoitukset 3

Tarkemmat uudet ohjeet:

- [Notesdemo, osa 1](./demot/notesdemo_osa1.html)
- [Notesdemo, osa 2](./demot/notesdemo_osa2.html)
- [Notesdemo, osa 3](./demot/notesdemo_osa3.html)

### JSON-serverin asennus ja käynnistys

Tee uusi kansio notesdemo. Tee sen sisälle *notesback* kansio. Tee siihen *db.json*-tiedosto, kopioi sinne tämä [json-muotoinen *notes*-tieto:](https://fullstackopen.com/osa2/palvelimella_olevan_datan_hakeminen).

Asenna ja käynnistä json-serveri kansioon notesback (katso [asennusohjeet](./json-server.html))

Avaa selaimella osoite: http://localhost:3001/notes.

json-server toimii kehitysaikaisena backendinä. Oikean tietokannan sijaan tiedot tallennetaan *json*-tiedostona levylle.

*Huom!* Jos olet tehnyt toisella kurssilla notes-backendin, voit käyttää suoraan sitä JSON-serverin tilalla.

Kun näissä tehtävissä viitataan *notes-backend*:iin, se tarkoittaa joko em. JSON-serveriä tai node/express:illä itse tehtyä backend:iä.

### Tehtävä 0

Tutustu REST-rajapinnan toimintaan JSON-serverin ja Postmanin avulla [Ohjeet täällä](../tietokannat/rest-json.html).
Tee seuraavat operaatiot postmanin avulla (Harjoittele HTTP-metodien GET, POST, DELETE ja PUT käyttöä):

1. Hae kaikki muistiinpanot
2. Hae musitiinpano id:llä 1
3. Lisää uusi muistiinpano
4. Poista muistiinpano
5. Muuta muistiinpanon tekstiä

### Tehtävä 1

Tee uusi React-sovellus ajamalla *vite*-scriptit:

```cmd
> cd c:/users/oma.nimi/documents/react/notesdemo/
> npm create vite@latest notesfront -- --template react
> cd notesfront
> npm install
> npm run dev
```

Asenna *axios*-kirjasto ja hae sen avulla *notes*-tiedot notes-backendiltä. Tulosta muistiinpanot consolille.

```cmd
> npm install axios --save
```

Tallenna saanut tiedot *notes*-tilamuuttuujaan. Muuta hakeminen *event*-hookiksi, joka suoritetaan vain kun *apps.js* renderöidään ensimmäisen kerran.

Voit laittaa toistaiseksi kaiken axios-koodin *Apps.jsx*-tiedostoon. [Ohjeet axios:en käyttöön löytyvät täältä (Axios ja promiset):](https://fullstackopen.com/osa2/palvelimella_olevan_datan_hakeminen) tai voit ladata valmiin koodin [täältä](./axios-service.html).

### Tehtävä 2

Tallenna axioksen avulla json-servejille (tai notes-backendille) uusi kovakoodattu muistiinpano (*notes*-olio). Katso json-serveriltä, että se ilmestyi myös sinne.

*Huom* id-tulee serveriltä, älä lähetä sitä.'

![notes](./img/json_server.PNG)

### Tehtävä 3

Tee uusi komponentti, joka tulostaa ruudulle kaikki muistiinpanot ranskalaisilla viivoilla.

![notes](./img/notes_server.PNG)

### Tehtävä 4

Tee lomakekomponentti, jonka avulla saadaan syötettyä uusi muistiinpano, sekä sen tärkeys (true/false) esim.*check-box*:in avulla. Tallenna lomakekentät tilamuuttujiin ja lähetä uusi *notes*-olio notes-backendille, kun lomake *submit*:oidaan.

Muista päivittää axis-kutsun jälkeen *notes*-tilamuuttuja, jotta ruutu päivittyy!

### Tehtävä 5

Lisää jokaiselle muistiinpanolle poistanappi.Lisää myös toiminnallisuus, jolla voi muuttaa muistiinpanon tärkeyttä (esim. klikkaamalla muistiinpanoa). Muista päivittää onnistuneen *axios*-kutsun jälkeen *notes*-tilamuuttuja vastaamaan notes-backend:in tilannetta (poistettu muistiinpano poistetaan myös notes-tilamuuttujasta, vanha muistiinpano korvataan muutetulla).

### Tehtävä 6

Julkaise ohjelmasi Dockerin avulla Herokussa (ks. [ohjeet](../docker/notesdemo.html)).

### Lisätehtävä 1

Tee *dropdown*-valikko, jonka avulla filteröit ruudulle näkyviin vain tärkeät muistiinpanot.

