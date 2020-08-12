## Ohjelmointikielet: React ja node.js

Materiaalia, joka täydentyy kurssin edetessä...

### React -osuuden sisältö

Osa 1:
- Kurssin esittely ja kehitysympäristöön tutustuminen
- React-komponentti, props:it, map
- Props:ien destrukturointi, keys-props
- Eventhandlers/callbacks, tilamuuttujat (state, useState)
- Harjoitukset 1 (demo)
- Harjoitukset 2 (fanikauppa)

Osa 2:
- JSON-serverin käyttö backend-mock:ina (notes), Postman, REST-rajapinta (CRUD: Create-Read-Update-Delete)
- Backendin REST-rajapinnan käyttäminen axioksen avulla
- React-router
- React-boostrap
- Harjoitukset 3 (demo)
- Harjoitukset 4 (keikkainfo)

### React (frontend)

- [Johdanto](../react/johdanto.html)
- [Reactin alkeet](https://fullstackopen.com/osa1/reactin_alkeet)
- [JavaScriptiä](https://fullstackopen.com/osa1/javascriptia)
- [Komponentin tila ja tapahtuman käsittely](https://fullstackopen.com/osa1/komponentin_tila_ja_tapahtumankasittely)
- [Monimutkaisempi tila, debuggaus](https://fullstackopen.com/osa1/monimutkaisempi_tila_reactin_debuggaus)
- [Kokoelmien renderöinti ja moduulit](https://fullstackopen.com/osa2/kokoelmien_renderointi_ja_moduulit)
- [Lomakkeiden käsittely](https://fullstackopen.com/osa2/lomakkeiden_kasittely)

---

- [Harjoituksia 1: react-alkeet](./harjoitukset1.html), tehdään yhdessä demona
- [Harjoituksia 2: fanikauppa](./harjoitukset2.html), tehdään itsenäisesti

### Palvelimen kanssa kommunikointi (frontend)

- [Palvelimella olevan datan hakeminen](https://fullstackopen.com/osa2/palvelimella_olevan_datan_hakeminen)
- [Palvelimella olevan datan muokkaaminen](https://fullstackopen.com/osa2/palvelimella_olevan_datan_muokkaaminen)
- [Tyylien lisääminen react sovellukseen](https://fullstackopen.com/osa2/tyylien_lisaaminen_react_sovellukseen)

---

- [Harjoituksia 3: notes-demo](./harjoitukset3.html), tehdään yhdessä demona
- [Harjoituksia 4: keikkainfo](./harjoitukset4.html), tehdään itsenäisesti

---

- [React-boostrap - demo](./react-bootstrap.html), voit käyttää boostrap-komponentteja harjoitusten tekemiseen, jos haluat
- [Effect-hooks](./effect-hooks.html)
- [React-router](https://fullstackopen.com/osa7/react_router)

---

### node/express (backend + tietokantayhteys)

Tähän asti olemme tehneet vain Frontend-koodia. Tässä demossa tehdään yksinkertainen web-palvelin node.js:n ja expressin avulla (harjoitukset 3:n muistiinpanosovelluksen backend).

[Notes-backend demo](https://fullstackopen.com/osa3/node_js_ja_express)

Tässä versiossa ei ole vielä tietokantaa, joten siitä ei ole meille mitään hyötyä. Otetaan käytöön tietokanta...

#### Tietokantayhteys

Backend keskustelee tietokannan kanssa. Käytetty tietokanta voi olla relaatiotietokanta (SQL) tai dokumenttitietokanta (NoSQL). Tässä esimerkit molemmista:

- [Relaatiotietokannan (MySQL) luominen, migrations](../tietokannat/migrations.html)
- [Relaatiotietokannan (MySQL) liittäminen backendiin](../tietokannat/db-testing-knex.md)

- [NoSQL-tietokannan (MongoDB) scheman luominen](https://fullstackopen.com/osa3/tietojen_tallettaminen_mongo_db_tietokantaan#skeema)
- [NoSQL-tietokannan (MongoDB) liittäminen backendiin](https://fullstackopen.com/osa3/tietojen_tallettaminen_mongo_db_tietokantaan#frontendin-ja-backendin-yhteistoiminnallisuuden-varmistaminen)

### Kirjautuminen, käyttäjähallinta, JSON webtoken

Kun käyttäjä kirjautuu järjestelmään hän saa JSON webtoken:in tallenttavaksi selaimen muistiin. Token liitetään jokaiseen frontend:in tekemään pyyntöön. Webtoken:in sisään koodatun userid:n avulla backend tunnistaa kirjautuneen käyttäjän.

- [Token-perustainen kirjautuminen](https://fullstackopen.com/osa4/token_perustainen_kirjautuminen)

- [Harjoitukset 5: Notes-backend demo](../frameworks/node.html), tehdään yhdessä

- [Harjoitukset 6: fanikauppa 2](./harjoitukset5.html)

### Koodin siirtäminen palvelimelle

Koodi siirretään (*deploy*) joko koulun webhotelliin, tai Herokuun. Ensin React-frontend:istä tehdään *build*, joka sitten ladataan webserveriltä (backend).

- [Sovelluksen siirtäminen internettiin](https://fullstackopen.com/osa3/sovellus_internetiin)

- [Sovelluksen siirtäminen koulun webhotelliin](../webframeworks/deployment)