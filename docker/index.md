## Docker

### Johdanto

Docker:in avulla voit käynnistää koneellesi kehitysympäristön ilman, että asennat ohjelmia. Eli voit esim. pyörittää  haluaamaasi MySQL- tai PostgreSQL-tietokantaa.

### MySQL ja PHPAdmin

1. Asenna konellesi MySQL-tietokanta käyttäen Docker:ia:

Käynnistä CMD ja kirjoita:

```cmd
docker pull mysql:8.0.1

docker run --name my-own-mysql -e MYSQL_ROOT_PASSWORD=mypass123 -d mysql:8.0.1
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

### PostgreSQL ja PHPPGAdmin

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

<!-- ---
https://stackoverflow.com/questions/25540711/docker-postgres-pgadmin-local-connection
docker network create --driver bridge postgres-network

docker run --name postgres1 --network postgres-network -e POSTGRES_PASSWORD=mysecretpassword -d postgres

docker run --name=phppgadmin --network postgres-network -d --publish=80:80 dockage/phppgadmin:latest  -->