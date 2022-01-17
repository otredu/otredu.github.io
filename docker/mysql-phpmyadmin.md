### MySQL ja PHPAdmin (localhost)

Asenna konellesi MySQL-tietokanta ja PhpMyAdmin käyttäen docker-compose:a:

1. Tallenna seuraava teksti tiedostoon nimeltä docker-compose.yml:

    ```cmd
    version: '3.1'

    services:
      db:
        image: mysql:8.0.27
        restart: always
        environment:
          MYSQL_ROOT_PASSWORD: mypass123

      phpmyadmin:
        image: phpmyadmin
        restart: always
        ports:
          - 8081:80
    ```

2. Käynnistä CMD ja kirjoita:

    ```cmd
    docker-compose up -d 
    ```

3. Avaa PhpMyAdmin selaimessa

    http://localhost:8081

    käyttäjätunnus: root
    salasana: mypass123

---

Tässä vaihtoehtoinen version docker-compose-tiedostosta:

```yml
version: '3'

services:
  db_server:
    image: mysql:8.0.27
    container_name: notesdemo_mysql
    ports:
      - 3306:3306
    environment:
      - TZ=Europe/Helsinki
      - MYSQL_ROOT_PASSWORD=mypass123
    networks:
      - sqlnotesdemo
    cap_add: 
      - SYS_NICE 

  phpmyadmin:
    image: phpmyadmin
    networks:
      - sqlnotesdemo
    container_name: notesdemo_phpmyadmin
    ports:
      - 8081:80
    environment:
      - PMA_HOST=db_server
      - TZ=Europe/Helsinki
    depends_on:
      - db_server

networks:
  sqlnotesdemo:
``` 
