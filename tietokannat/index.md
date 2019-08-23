## Tietokannat

### Johdanto

### Tietokannan luominen (PHPAdmin)

1. Asenna konellesi MySQL-tietokanta sekä PHPMyAdmin käyttäen Docker-ohjelmaa [ohje](https://medium.com/@migueldoctor/run-mysql-phpmyadmin-locally-in-3-steps-using-docker-74eb735fa1fc)

docker pull mysql:8.0.1

docker run --name my-own-mysql -e MYSQL_ROOT_PASSWORD=mypass123 -d mysql:8.0.1

docker pull phpmyadmin/phpmyadmin:latest

docker run --name my-own-phpmyadmin -d --link my-own-mysql:db -p 8081:80 phpmyadmin/phpmyadmin

docker ps -a

käynnistä localhost:8081
käyttäjätunnus: root
salasana: mypass123

2. Tee sen avulla seuraavat harjoitukset

---

### Tietokannan luominen (PHPPGAdmin)

1. Asenna koneellesi PostgreSQL dockerin avulla:

2. Asenna koneellesi PHPPGAdmin dockerin avulla:
[ohje](https://hub.docker.com/r/dockage/phppgadmin/)

docker pull 

docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres

docker pull dockage/phppgadmin:latest

docker run --name=phppgadmin -d --publish=80:80 dockage/phppgadmin:latest

käynnistä localhost:80
käyttäjätunnus: postgres
salasana: mysecretpassword
