## Fanikauppa osa 2

Näissä harjoituksissa muutetaan fanikauppa (harjoitukset 2) hakemaan ja tallentamaan tietoa backend:in kautta.

### Tehtävä 1

Toteuta JSON-serverin avulla fanikaupan backend. Toteuta tuotetiedot, tilaustiedot sekä asiakastiedot (ostoskorin voi jättää tässä vaiheessa pois). Testaa fanikauppa API:n toiminta Postman:in avulla.

Katso [ohje täältä](../tietokannat/json-rest.html).

### Tehtävä 2

Muuta fanikauppa hakemaan tuotetiedot fanikauppa-backendiltä axioksen avulla (GET products). Tallenna tiedot tilamuuttujaan kuten aikaisemminkin.

*Huom!* Muista lisätä tilausmäärää kuvaava kenttä tietorakenteeseen, aseta se nollaksi (*amount*).

### Tehtävä 3

Muuta fanikauppasi lomakkeen käsittelijä tallentamaan tilaustiedot (sisältää tilatut tuotteet ja niiden määrät sekä asiakkaan tiedot) fanikauppa-backendille axioksen kautta (POST orders).

### Tehtävä 4

Toteuta fanikaupan backend käyttäen node/express:iä. Luo tietokantataulut MySQL:ään, toteuta edellä käytetyt GET (products) ja POST (orders), toiminnallisuudet.

### Tehtävä 5

Toteuta käyttäjän rekisteröityminen, login ja logout. Lisää backendiin reitit: register ja login. Rekisteröitymisessä tallennetaan käyttäjän kaikki tiedot lomakkeen avulla backendiin.

### Lisätehtävä 1

Toteuta toiminnallisuus, jossa kirjautunut käyttäjä voi tarkastella aikaisemmin tekemiään tilauksia.

### Lisätehtävä 2

Tallenna myös ostoskorin sisältö backendiin niin, että käyttäjä voi myöhemmin jatkaa ostoksiaan.