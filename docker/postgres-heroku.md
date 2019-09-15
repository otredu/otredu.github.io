### PHPPGMyAdmin (Heroku)

PHPPGAdmin:in avulla voidaan ottaa yhteys myös jollakin ulkoisella palvelimella tai pilvipalvelussa toimivaan tietokantaan. Silloin docker:in käynnistyskomentoon sijoitetaan ko. tietokannan url sekä tietokannan nimi.

Esim. jos haluat ottaa yhteyden Herokussa sijaitsevaan PostgreSQL-tietokantaan, kopioi tietokannan url ja nimi (löytyvät Herokusta kohdasta: *Settings: database credentials*) seuraavaan docker käynnistyskomentoon:

```cmd
docker run --name=phppgadmin-heroku -d --publish=81:80 -e PHP_PG_ADMIN_SERVER_HOST=<your_db_url_from_heroku> -e PHP_PG_ADMIN_SERVER_DEFAULT_DB=<your_db_name_from_heroku> -e PHP_PG_ADMIN_OWNED_ONLY=true dockage/phppgadmin:latest
```

Nyt voit käyttää Heroku:n PostgreSQL-tietokantaa kirjautumalla Herokusta poimituilla käyttäjänimellä sekä salasanalla:

- käynnistä localhost:81
- käyttäjätunnus: \<your_db_user_name_from_heroku\>
- salasana: \<your_db_password_from_heroku\>

### Lisätietoa

- [Getting Started with Heroku, Postgres and PgAdmin](https://medium.com/@vapurrmaid/getting-started-with-heroku-postgres-and-pgadmin-run-on-part-2-90d9499ed8fb)
