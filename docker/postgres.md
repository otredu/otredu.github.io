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
