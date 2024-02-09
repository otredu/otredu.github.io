### Harjoitukset 4

Tee keikkainfo-sivusto, johon bändin edustaja voi kirjauduttuaan lisätä uusia keikkoja (artistin nimi, tapahtuman nimi, keikkamainoskuva, keikkakuvaus, keikkapäivä, alkamisaika, katuosoite, paikkakunta, linkki lippujen myyntiin, artistin musiikkityylilaji ja linkki artistin sivuille.

Käyttäjä voi kirjautumatta selata keikkoja, tykätä menneistä keikoista (1-5 tähteä), etsiä keikkoja tyylilajin, paikkakunnan ja kuukauden mukaan.

Keikat näkyvät *menneet keikat* -osiossa, jos niiden päivämäärä on mennyt ja *tulevat keikat* -osiossa, jos ne tapahtuvat tulevaisuudessa.

Voit käyttää tiedon tallentamiseen [JSON-serveriä](https://fullstackopen.com/osa2/palvelimella_olevan_datan_hakeminen), keskustele backendin kanssa [axios-kirjaston](https://fullstackopen.com/osa2/palvelimella_olevan_datan_hakeminen#axios-ja-promiset) avulla.

Tee harjoitusta varten uusi kansio *react*-kansion sisälle: esim. *musicinfo*.

### Tehtävä 0 (db.json)

Suunnittele json-tietorakenne, joka mallintaa keikkatietoa (*gigs*-kokoelma), tallenna muutama testikeikkatieto *db.json*-tiedostoon (voit käyttää samaa json-server-asennusta kuin *notes*-demossa). Käynnistä json-server ja testaa Postman:in avulla, että backendin virkaa ajava json-server toimii kuten pitääkin (get, post, delete, put).

json-serverin pitäisi siis palauttaa kaikki keikat, kun kirjoitat selaimeen: *http://localhost:3001/gigs* (get).

Katso mallia *notes*-demon *db.json*-tiedostosta.

Voit myös suoraan tehdä node/express-backendin ja käyttää sitä. Toteuta vähintään GET ja POST tässä vaiheessa. Katso mallia notesdemo-backend:istä. Muista testata REST-metodit esim. Postman:illa ennen kuin aloitat fronttia!

### Tehtävä 1

Tee uusi react-projekti (ks. *vite*-scprit) ellet ole jo tehnyt sellaista (voit myös käyttää frontin pohjana bootsrap-demoa ja jatkaa siitä). Hae axioksen avulla keikkatiedot ja tallenna ne tilamuuttujaan (app:issa). Katso mallia *notes*-demossa luodusta *service*:stä.

Tulosta saamasi keikkatiedot konsolille tilamuuttujasta.

### Tehtävä 2

Tee komponentti, joka näyttää keikkatiedot ruudulla (keikkatiedot välitetään app:ista props:ina). Tee kaksi eri näkymää, joista toisessa näkyvät menneet keikat ja toisessa tulevat keikat (käytä komponentin sisäistä tilamuuttujaa).

Vinkki: käytä *filter*-metodia keikkataulukolle.

### Tehtävä 3

Tee komponentti, jonka avulla voi lisätä uuden keikan tiedot. Tallenna tiedot joko yhteen olio-muotoiseen tilamuuttujaan tai käytä jokaiselle kentälle omaa tilamuuttujaansa. Muista tehdä *input*-kentille *two-way-binding*. Tallenna uusi keikka *json-serverille* axioksen avulla (*handleSubmit*-callback kutsuu axiosta).

### Tehtävä 4

Ota käyttöön [React-router](https://www.w3schools.com/react/react_router.asp). Hyvä react-router-tutoriaali löytyy [täältä](https://reactrouter.com/en/main/start/tutorial).

Sijoita keikkojen katseluun liittyvät toiminnot omaan komponenttiinsa esim. *<Home />* ja keikkojen lisääminen omaan komponenttinsa esim. *<AddGig />*.

### Tehtävä 5

Lisää käyttöliittymään toiminnallisuus, jonka avulla käyttäjä voi valita filteröintiasetukset: paikkakunnat, kuukausi, tyylilaji (käytä esim. dropdown-valikkoa, valittavan listan ei tarvitse tulla tietokannasta). Valinnat tallennetaan tilamuuttujiin, joiden pohjalta näytölle rendeöitävä tieto filteröidään.

Vinkki: käytä *filter*-metodia keikkataulukolle.

### Lisätehtävä 1

Lisätään käyttäjänhallinta (rekisteröityminen ja kirjautuminen). Toteuta keikkojen lisääminen niin, että vain kirjautunut käyttäjä voi lisätä keikkoja.

Huom! Tässä vaiheessa siirry pois JSON-serveristä ja toteuta backend node/express:illä.

### Lisätehtävä 2

Lisää toiminnallisuus, että vain kirjautunut käyttäjä voi poistaa ja muuttaa vain itse lisäämiään keikkoja.

### Lisätehtävä 3

Toteuta tykkäysten (tähtien) lisääminen. Tämä vaatii muutoksia tietokannassa, backendsisä ja frontissa.