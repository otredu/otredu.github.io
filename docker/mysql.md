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