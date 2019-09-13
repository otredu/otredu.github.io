## Heroku ja Postgres

### Heroku

Herokun avulla voidaan deployata palvelinkoodia (esim. PHP tai node.js). Koodin voi imuroida sinne suoraan omasta Github-repostansa. 

- [Heroku-ohjeet](../github/heroku.html).

Herokussa ei ole MySQL-tietokantaa automaattisesti, joten käytämme PostgreSQL:ää sen tilalla. Kooditasolla muutoksia ei pitäisi tulla muualle kuin kohtaan, jossa otetaan yhteys tietokantaan. Erona on siis erilainen *connection string*, sekä eri kirjautumistiedot. Heroku:ssa kirjautumistiedot saadaan DATABASE_URL:sta (ei .env-tiedostosta).

Muuta siis tietokantayhteyden ottamiseen tarkoitettu koodi haarautumaan sen perusteella onko ympäristömuuttuja *DATABASE_URL* olemassa:

```php
if(getenv("DATABASE_URL")){
            // The connection parameters are extracted from the DATABASE_URL environment variable
             $db = parse_url(getenv("DATABASE_URL"));
             $host = $db["host"];
             $port = $db["port"];
             $dbname = ltrim($db["path"], "/");
             $user = $db["user"];
             $password = $db["pass"];
             $connectionString = "pgsql:host=$host;dbname=$dbname;port=$port";
          } else {
              $host = getenv('DB_HOST');
              $port = getenv('DB_PORT');
              $dbname = getenv('DB_NAME');
              $user = getenv('DB_USERNAME');
              $password = getenv('DB_PASSWORD');
              $connectionString = "mysql:host=$host;dbname=$dbname;port=$port;charset=utf8";
          }
```

### PostgreSQL

Lisää sovellukselle tietokanta [Postgres Database On Heroku](https://docs.appery.io/docs/apiexpress-databaseconnection-heroku-postgres). Postgres-tietokannan lisääminen tapahtuu sovelluksen välilehdellä *Resources*, *More add-ons* ja etsimällä hakusanalla *postgres* (valitse ja asenna *Heroku Postgres*). Valitse sovellus, johon lisäät tietokannan.

- [Heroku Postgres-documentation](https://devcenter.heroku.com/articles/heroku-postgresql)

Tietokanta on vielä täysin tyhjä, ja se pitää vielä alustaa kuntoon, eli tehdä sinne sovelluksen tarvitsemat tietokannat sekä taulut.

Tätä varten tarvitsemme [PGAdmin 4](https://hub.docker.com/r/dpage/pgadmin4/)-ohjelman tai [SQL Workbench](https://www.sql-workbench.eu/)-ohjelman.

Esimmäisen voi käynnistää dockerilla:

```cmd
docker run --rm -p 5050:5050 thajeztah/pgadmin4
```

Valitse *Add a new server*, lisää seuraavat tiedot 

Löydät *connection string*:in sekä kirjatumistiedot avaamalla *Heroku Postgres*-tietokannan ja sen alta kohdan *Settings* -> *Database credentials*.

### Heroku Postgres:in käyttäminen

PGAdmin Docker:in avulla:
- [Connect From Your Local Machine to a PostgreSQL Database in Docker](https://medium.com/better-programming/connect-from-local-machine-to-postgresql-docker-container-f785f00461a7)

PGAdmin asennettuna:
- [Getting Started with Heroku, Postgres and PgAdmin](https://medium.com/@vapurrmaid/getting-started-with-heroku-postgres-and-pgadmin-run-on-part-2-90d9499ed8fb)
