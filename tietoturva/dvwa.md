## Asenna DVWA dockeriin

1. Tallenna oheinen docker-compose-tiedosto levylle nimellä compose.yml

    ```yml
    volumes:
    dvwa:

    networks:
    dvwa:

    services:
    dvwa:
        build: .
        image: ghcr.io/digininja/dvwa:latest
        # Change `always` to `build` to build from local source
        pull_policy: always
        environment:
        - DB_SERVER=db
        depends_on:
        - db
        networks:
        - dvwa
        ports:
        - 127.0.0.1:4280:80
        restart: unless-stopped

    db:
        image: docker.io/library/mariadb:10
        environment:
        - MYSQL_ROOT_PASSWORD=dvwa
        - MYSQL_DATABASE=dvwa
        - MYSQL_USER=dvwa
        - MYSQL_PASSWORD=p@ssw0rd
        volumes:
        - dvwa:/var/lib/mysql
        networks:
        - dvwa
        restart: unless-stopped
    ```

2. Avaa terminaali ja aja siinä

    ```cmd
    docker compose up -d
    ```

3. Avaa selaimessa http://localhost:4280

4. Kirjaudu sisään: root + toor, paina "create database"

5. Kirjaudu sisään uudelleen: admin + password