## PostgreSQL ja PHPPGAdmin (localhost)

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

### Lisätietoa

- [Dockerhub - dokumentaatio](https://hub.docker.com/r/dockage/phppgadmin/)

- [Connect From Your Local Machine to a PostgreSQL Database in Docker](https://medium.com/better-programming/connect-from-local-machine-to-postgresql-docker-container-f785f00461a7)