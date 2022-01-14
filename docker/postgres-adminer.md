### Postgres ja Adminer (localhost)

Asenna konellesi Postgres-tietokanta ja Adminer käyttäen docker-compose:a:

1. Tallenna seuraava teksti tiedostoon nimeltä docker-compose.yml:

```cmd
version: '3.1'

services:

  db:
    image: postgres
    restart: always
    environment:
      POSTGRES_PASSWORD: mypass123

  adminer:
    image: adminer
    restart: always
    ports:
      - 8082:8080
    ```

2. Käynnistä CMD ja kirjoita:

    ```cmd
    docker-compose up -d 
    ```

3. Avaa Adminer selaimessa

    http://localhost:8082

    käyttäjätunnus: postgres
    salasana: mypass123

---

