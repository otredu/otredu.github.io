## Node - harjoitukset 1

### Tehtävä 0

Tutustu näihin ohjeisiin ja luo notes_db - tietokanta knex-migrations:eiden avulla:

- [Relaatiotietokannan (MySQL) luominen, migrations](../tietokannat/migrations.html)

Tutustu knex:in tietokantakyselyihin tekemällä nämä esimerkit:

- [Relaatiotietokannan (MySQL) liittäminen backendiin](../tietokannat/db-testing-knex.md)

### Tehtävä 1

Tässä vaiheessa täytyy viimeistään siirtyä pois JSON-serverin käytöstä ja koodata varsinainen backend käyttäen node.js:ää. Notes-demon toiminnallisuus MySQL-tietokannan ja node.js:n avulla. [Ohjeita täällä](./demot/notesdemo_osa4.html)

### Tehtävä 2

Toteuta käyttäjän rekisteröityminen ja kirjautuminen. Kirjautunut käyttäjä voi lukea, lisätä, muokata tai poistaa vain omia muistiinpanojaan. [Ohjeita täällä](./demot/notesdemo_osa5.html)

*Huom* Tämä vaatii lisää koodia niin fronttiin kuin backendiinkin. Tarkista myös, että tietokannassa on notes-taulun lisäksi users-taulun sekä relaatio näiden taulujen välillä.

### Tehtävä 3

Refaktoroi backend koodi niin, että se käyttää autentikointiin middlewareja.
[Ohjeita täällä](https://otredu.github.io/frameworks/node.html)

### Tehtävä 4

Lisää JSON-datan validointi JSON-scheman avulla. [Ohjeita täällä](https://otredu.github.io/frameworks/node.html)

### Tehtävä 5

Deployaa notesdemo pyörimään koulun pilviympäristössä: aja migrates+seeds remote-tietokantaan (koulun DB-ympäristössä), tee koodista Docker-kontti ja siirrä se DockerHub:iin. Käynnistä kontti koulun pilviympäristössä.
[Ohjeita täällä](../deployment/aws/notesfull.html)
