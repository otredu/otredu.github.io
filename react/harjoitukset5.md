## Fanikauppa osa 2

Näissä harjoituksissa muutetaan fanikauppa (harjoitukset 2) hakemaan ja tallentamaan tietoa backend:in kautta.

### Tehtävä 1

Toteuta JSON-serverin avulla fanikaupan backend. Toteuta tuotetiedot, tilaustiedot sekä asiakastiedot (ostoskorin voi jättää tässä vaiheessa pois). Testaa fanikauppa API:n toiminta Postman:in avulla.

Katso [ohje täältä](../tietokannat/json-rest.html).

### Tehtävä 2

Muuta fanikauppa hakemaan tuotetiedot fanikauppa-backendiltä axioksen avulla (GET products). Tallenna tiedot tilamuuttujaan kuten aikaisemminkin.

*Huom!* Muista lisätä tilausmäärää kuvaava kenttä tietorakenteeseen, aseta se nollaksi (*amount*).

### Tehtävä 3

Muuta fanikauppasi lomakkeen käsittelijä tallentamaan käyttäjätiedot fanikauppa-backendille axioksen kautta (POST customers). Tallenna backend:in antama käyttäjä id, ja tallenna tilatut tuotteet (POST orders).

### Lisätehtävä 1

Toteuta käyttäjän rekisteröityminen (tallenna jo tässä yhteydessä käyttäjän tiedot lomakkeen avulla backendiin). Toteuta kirjautuminen.

Ohje [JSON-serverin käyttöön autentikoinnissa](https://www.npmjs.com/package/json-server-auth).

### Lisätehtävä 2

Toteuta toiminnallisuus niin, että vain kirjautuneet käyttäjät voivat tilata tuotteita. Tallenna myös ostoskorin sisältö backendiin (tämä vaatii lisäyksiä myös db.json:iin).