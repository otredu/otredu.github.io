## Fanikauppa osa 2

Näissä harjoituksissa muutetaan fanikauppa (harjoitukset 2) hakemaan ja tallentamaan tietoa backend:in kautta.

### Tehtävä 1

Toteuta json-serverin avulla fanikaupan backend. Toteuta tuotetiedot, tilaustiedot sekä asiakastiedot (ostoskorin tallentamisen tietokantaan voi jättää tässä vaiheessa pois). Testaa fanikauppa API:n toiminta REST-clientin:in avulla.

Katso [ohje täältä](../tietokannat/rest-json.html).

### Tehtävä 2

Muuta fanikauppa hakemaan tuotetiedot fanikauppa-backendiltä axioksen avulla (GET products). Tallenna tiedot tilamuuttujaan kuten aikaisemminkin.

*Huom!* Muista lisätä tilausmäärää kuvaava kenttä tietorakenteeseen, aseta se nollaksi (*amount*).

### Tehtävä 3

Muuta fanikauppasi lomakkeen käsittelijä tallentamaan tilaustiedot (sisältää tilatut tuotteet ja niiden määrät sekä asiakkaan tiedot) fanikauppa-backendille axioksen kautta (POST orders).

### Tehtävä 4

Toteuta fanikaupan backend käyttäen node/express:iä, käytä tietokantana MondoDB:tä. Toteuta edellä käytetyt GET (products) ja POST (orders), toiminnallisuudet.

### Lisätehtävä 1

Muuta ohjelma toimimaan niin, että se vaatii rekisteröitymisen ja kirjautumisen ensin. Lisää backendiin reitit: register ja login. Rekisteröitymisessä tallennetaan käyttäjän kaikki tiedot lomakkeen avulla backendiin (voit uudelleen käyttää aikaisemman lomakkeen tähän tarkoitukseen). 

*Huom!* Nyt tilauksen yhteydessä käyttäjän id viedään backendille *auth-tokenissa*

### Lisätehtävä 2

Tallenna nyt myös reaaliajassa ostoskorin sisältö backendiin niin, että käyttäjä voi myöhemmin jatkaa ostoksiaan.

### Lisätehtävä 3

Toteuta toiminnallisuus, jossa kirjautunut käyttäjä voi tarkastella aikaisemmin tekemiään tilauksiaan.