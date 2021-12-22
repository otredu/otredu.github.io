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

---

- [Harjoitukset 5: Notes-backend demo](./node-harjoitukset1.html), tehdään yhdessä

- [Harjoitukset 6: Fanikauppa 2.0](./node-harjoitukset2.html)