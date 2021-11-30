## Harjoitukset 3

Tarkemmat uudet ohjeet:

- [Notesdemo, osa 1](./demot/notesdemo_osa1.html)
- [Notesdemo, osa 2](./demot/notesdemo_osa2.html)
### JSON-serverin asennus ja käynnistys

Tee uusi kansio notesdemo. Tee siihen *db.json*-tiedosto, kopioi sinne tämä [json-muotoinen *notes*-tieto:](https://fullstackopen.com/osa2/palvelimella_olevan_datan_hakeminen).

Asenna ja käynnistä json-serveri kansioon notesback.

```cmd
> cd c:/users/oma.nimi/documents/react/notesdemo/notesback
> npx json-server --port=3001 --watch db.json
```

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

Tee uusi React-sovellus ajamalla create-react-app:

```cmd
> cd c:/users/oma.nimi/documents/react/
> npx create-react-app notesfront
> cd notesfront
> npm start
```

Asenna *axios*-kirjasto ja hae sen avulla *notes*-tiedot notes-backendiltä. Tulosta muistiinpanot consolille.

```cmd
> npm install axios --save
```

Tallenna saanut tiedot *notes*-tilamuuttuujaan. Muuta hakeminen *event*-hookiksi, joka suoritetaan vain kun *apps.js* renderöidään ensimmäisen kerran.

Voit laittaa toistaiseksi kaiken axios-koodin *apps.js*-tiedostoon. [Ohjeet axios:en käyttöön löytyvät täältä (Axios ja promiset):](https://fullstackopen.com/osa2/palvelimella_olevan_datan_hakeminen) tai voit ladata valmiin koodin [täältä](./axios-service.html).

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

Tee *dropdown*-valikko, jonka avulla filteröit ruudulle näkyviin vain tärkeät muistiinpanot.

---
### Tehtävä 7

Tässä vaiheessa täytyy viimeistään siirtyä pois JSON-serverin käytöstä ja koodata varsinainen backend käyttäen node.js:ää. Toteuta edellä kuvattu toiminnallisuus tietokannan ja node.js:n avulla. [Ohjeita täällä](https://otredu.github.io/frameworks/node.html)

### Tehtävä 8

Toteuta käyttäjän rekisteröityminen ja kirjautuminen. Vain kirjautunut käyttäjä voi lisätä, muokata tai poistaa muistiinpanoja. Muistiinpanoja voi lukea ilman kirjautumista.

*Huom* Tämä vaatii lisää koodia niin fronttiin kuin backendiinkin sekä muutoksen tietokantaan (users-taulu).

### Tehtävä 9

Lisää userid-kenttä muistiinpanoon, niin että kirjatunut käyttäjä voi muokata ja poistaa vain omia muistiinpanojaan.

*Huom* Tämä vaatii lisää koodia myös backendiin ja muutoksen tietokantaan (relaatio users- ja notes-taulujen väliin).

### Tehtävä 10

Refaktoroi backend koodi niin, että se käyttää autentikointiin middlewareja.

### Tehtävä 11

Luo frontista build, siirrä se backendin static-kansioon. Testaa käynnistämällä vain backend.

### Lisätehtävä 1

Ota käyttöön POI-kirjasto ja lisää JSON-datan validointi sen avulla.

### Lisätehtävä 2

Deployaa notesdemo pyörimään webbihotelliin tai herokuun.