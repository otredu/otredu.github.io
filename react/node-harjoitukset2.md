## Fanikauppa osa 2

Näissä harjoituksissa muutetaan fanikauppa (React harjoitukset 2) hakemaan ja tallentamaan tietoa backend:in kautta. Tee repoon uusi kansio fanikauppa2, ja kopioi sinne vanhan fanikaupan front:

fanikauppa2/
    front
    back
    database

### Tehtävä 0

Jos et ole vielä tehnyt MySQL - tietokantaa fanikauppa2:lle tee sille migrations ja seeds. Katso ohjeita:
    - knex: [migrations ja seeds](../tietokannat/migrations.html).
    - fanikauppa2: [DB ja API](../tietokannat/rest-fanikauppa.html)

---

### Tehtävä 1

Toteuta fanikaupan backend käyttäen node/express:iä, käytä tietokantana kohdassa 0 tekemääsi MySQL-tietokantaa. Toteuta vähintään *GET /products* ja *POST /orders* -toiminnallisuudet. Testaa näiden toiminta REST-testeillä, ennen frontin koodaamista!

HUOM!
Tässä vaiheessa ei vielä kannata toteuttaa rekisteröitymistä, kirjautumista ja tostoskorin tallentamista. Tee nämä jos jää aikaa.

### Tehtävä 2

Muuta aikaisemmin tekemäsi fanikauppa-front hakemaan tuotetiedot fanikauppa-backenditä axioksen avulla (GET /products). Tallenna tiedot tilamuuttujaan kuten aikaisemminkin.

*Huom!* Muista lisätä tilausmäärää kuvaava kenttä backendin antamaan tietorakenteeseen, aseta se nollaksi (*amount*).

### Tehtävä 3

Muuta fanikauppasi lomakkeen käsittelijä tallentamaan tilaustiedot (sisältää tilatut tuotteet, niiden määrät sekä asiakkaan tiedot) fanikauppa-backendille axioksen kautta (POST /orders).

### Lisätehtävä 1

Muuta ohjelma toimimaan niin, että käyttäjä voi halutessaan myös rekisteröityä ja kirjautua sivustolle. Nyt tilaaminen on kätevämpää, koska tilauslomakkeeseen ei tarvitse syöttää yhteystietoja, joka kerta tilausta tehdessä. Lisää backendiin reitit: register ja login. 

*Huom!* Nyt tilauksen yhteydessä käyttäjän id viedään backendille *authtokenissa*. Tee rekisteröityneen käyttäjän tilausta varten uusi *endpoint* backendiin esim. /customer_orders.

### Lisätehtävä 2

Tallenna nyt myös reaaliajassa ostoskorin sisältö backendiin niin, että käyttäjä voi myöhemmin jatkaa ostoksiaan.

### Lisätehtävä 3

Toteuta toiminnallisuus, jossa kirjautunut käyttäjä voi tarkastella aikaisemmin tekemiään tilauksia.