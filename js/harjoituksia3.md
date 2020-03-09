## DOM jatkoharjoitukset

### Ohjeet

Katso mallia [Pure JS](./eventit.html). Käytä pelkästään JavaScriptiä, kaikissa tehtävissä. Lähde liikkeelle tästä HTML-tiedostosta, ja lisää jokaiselle tehtävälle oma *div*:insä "teht"-*div*:n sisälle.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Harjoitukset 4</title>
</head>
    <body>
        <h1>Harjoitukset 4</h1>
        <div id="teht"></div>
        <script type="module" src="harj4.js"></script>
    </body>
</html>
```

### Tehtävä 1

Tee taulukko, joka sisältää koulun ruokalistan tälle viikolle. Yhden päivän ruokatiedot ovat oliossa, jossaon kentät: pääruoka, lisukkeet, kasvisruoka, juomat, päivämäärä, viikonpäivä, kuva (url).

Tulosta taulukon sisältö ruudulle käyttäen toistorakennetta. Muotoile sisältö div:in sisälle listaelementtien avulla, käytä ulkonäön muotoiluun CSS:ää.

### Tehtävä 2

Lisää koodiin toiminnallisuus, jossa ensin näet pelkän listan viikonpäivistä, ja päivää klikkaamalla, aukeaa ruokalistatiedot kuvineen. Otsikkoa klikkaamalla tiedot sulkeutuvat.

### Tehtävä 3

Lisää tykkäysnappi avattuun ruokalistaan. Esitä tykäämisten määrä ruokalistan lisätietojen lopussa.

### Lisätehtävä 1a. Värin vaihtoa

Vaihda ruokalistan otsikon väriä kun 10 tykkäystä on tullut täyteen.

### Tehtävä 1b. Palautekenttä

Lisää palautekenttä, johon voi jättää palautetta, jonka voi lukea kun painaa "lue palautteet" napista (muuten suljettuna).
