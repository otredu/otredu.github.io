## Docker

### Johdanto

Docker:in avulla voit käynnistää koneellesi kehitysympäristön ilman, että asennat ohjelmia. Eli voit esim. pyörittää  haluaamaasi MySQL- tai PostgreSQL-tietokantaa.

### MySQL ja PHPAdmin (localhost)

1. Asenna konellesi MySQL-tietokanta käyttäen Docker:ia:

Käynnistä CMD ja kirjoita:

```cmd
docker pull mysql:8.0.1

docker run --name my-own-mysql -e MYSQL_ROOT_PASSWORD=mypass123 -p 3306:3306 -d mysql:8.0.1
```

2. Asenna koneellesi PHPMyAdmin-ohjelma käyttäen Docker:ia:

```cmd
docker pull phpmyadmin/phpmyadmin:latest

docker run --name my-own-phpmyadmin -d --link my-own-mysql:db -p 8081:80 phpmyadmin/phpmyadmin
```

3. Nyt voit käyttää MySQL-tietokantaa:

- käynnistä localhost:8081
- käyttäjätunnus: root
- salasana: mypass123

[Tarkemmat ohjeet](https://medium.com/@migueldoctor/run-mysql-phpmyadmin-locally-in-3-steps-using-docker-74eb735fa1fc)

### PostgreSQL ja PHPPGAdmin (localhost)

1. Asenna koneellesi PostgreSQL-ohjelma Dockerin avulla:

```cmd
docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
```

2. Asenna koneellesi PHPPGAdmin-ohjelma Dockerin avulla:

```cmd
docker pull dockage/phppgadmin:latest

docker run --name=phppgadmin -d --publish=80:80 -e PHP_PG_ADMIN_SERVER_HOST=host.docker.internal dockage/phppgadmin:latest
```

Nyt voit käyttää PostgreSQL-tietokantaa:

- käynnistä localhost:80
- käyttäjätunnus: postgres
- salasana: mysecretpassword

[Tarkemmat ohjeet](https://hub.docker.com/r/dockage/phppgadmin/)

### PHPPGMyAdmin (Heroku)

PHPPGAdmin:in avulla voidaan ottaa yhteys myös jollakin ulkoisella palvelimella tai pilvipalvelussa toimivaan tietokantaan. Silloin docker:in käynnistyskomentoon sijoitetaan ko. tietokannan url sekä tietokannan nimi.

Esim. jos haluat ottaa yhteyden Herokussa sijaitsevaan PostgreSQL-tietokantaan, kopioi tietokannan url ja nimi (löytyvät Herokusta kohdasta: *Settings: database credentials*) seuraavaan docker käynnistyskomentoon:

```php
docker run --name=phppgadmin -d --publish=81:80 -e PHP_PG_ADMIN_SERVER_HOST=\<your_db_url_from_heroku\> -e PHP_PG_ADMIN_SERVER_DEFAULT_DB=\<your_db_name_from_heroku\> -e PHP_PG_ADMIN_OWNED_ONLY=true dockage/phppgadmin:latest
```

Nyt voit käyttää Heroku:n PostgreSQL-tietokantaa kirjautumalla Herokusta poimituilla käyttäjänimellä sekä salasanalla:

- käynnistä localhost:81
- käyttäjätunnus: <your_db_user_name_from_heroku>
- salasana: <your_db_password_from_heroku>

### Docker-container:eiden hallinta

Docker-container:it voidaan pysäyttää, uudelleen käynnistää ja poistaa koneelta:

1. Voit tutkia mitä Docker-containereita koneella on käynnissä:

```cmd
docker ps -a
```

2. Voit pysäyttää Docker-container:in kirjoittamalla sen nimen:

```cmd
docker stop my_container
```

3. Voit uudelleen käynnistää Docker-container:in kirjoittamalla sen nimen:

```cmd
docker restart my_container
```
---

4. Kaikki Docker-containerit, jotka eivät ole käynnissä voi poistaa:

```cmd
docker container prune
```

*Huom!* Tämä tyhjentää tietokannan, eli jos haluat palauttaa tietokannan scheman ja sen datan tee tietokannasta *dump*-tiedosto (Vienti->Tuonti, Export->Import). Muista luoda tietokanta ennen import:ia (Luo tietokanta, Create database).


