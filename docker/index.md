## Docker

### Johdanto

Docker:in avulla voit käynnistää koneellesi kehitysympäristön ilman, että asennat ohjelmia. Eli voit esim. pyörittää haluaamaasi MySQL- tai PostgreSQL-tietokantaa.

### Docker - lokaalit kehitysympäristöt

- [MySQL ja PHPMyAdmin, localhost](mysql.html)
- [MySQL ja PHPMyAdmin, localhost, docker-compose](mysql-phpmyadmin.html)
- [PostgreSQL ja PHPPGAdmin, localhost](postgres.html)
- [PostgreSQL ja PGAdmin4, localhost, docker-compose](postgres-pgadmin4.html)
- [MongoDB ja mongo-express](mongodb.html)
- [PHPPGAdmin, Heroku PostgreSQL](postgres-heroku.html)
- [PHPMyAdmin, Azure](phpmyadmin-remote.html)
- [CodeIgniter](codeigniter.html)

### Docker - deployment

- [Notesdemo (simple) - docker deployment](notesdemo.html)
- [Notesdemo (full) - docker deployment](notesdemofull.html)
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

4. Kaikki Docker-containerit, jotka eivät ole käynnissä voi poistaa:

    ```cmd
    docker container prune
    ```

    *Huom!* Tämä tyhjentää tietokannan, eli jos haluat palauttaa tietokannan scheman ja sen datan tee tietokannasta *dump*-tiedosto (Vienti->Tuonti, Export->Import). Muista luoda tietokanta ennen import:ia (Luo tietokanta, Create database).
