## PHPMyAdmin

PHPMyAdmin:in avulla voidaan ottaa yhteys myös jollakin ulkoisella palvelimella tai pilvipalvelussa toimivaan tietokantaan. Silloin docker:in käynnistyskomentoon sijoitetaan ko. tietokannan url sekä tietokannan nimi.

Esim. jos haluat ottaa yhteyden Azuressa sijaitsevaan MySQL-tietokantaan, kopioi tietokannan url ja nimi seuraavaan docker käynnistyskomentoon:

```cmd
docker run --name phpmyadmin-azure -d -e PMA_HOST=<your_db_url>:3306 -p 8084:80 phpmyadmin/phpmyadmin
```