## Pohjoismaat - demo

### Koodin jakaminen useampaan tiedostoon

Kun ohjelma tulee monimutkaisemmaksi, ei aina ole järkevää sijoittaa kaikkea JavaScript-koodia samaan tiedostoon.

Otamme tässä käyttöön JavaScript - moduulit. Toisesta moduulista *export*:ataan ja toiseen moduuliin *import*:ataan. Moduulista voidaan *export*:ata funktioita, muuttujia, luokkia jne. Riittää, että määritelmän eteen kirjoittaa *export*;

Kopioi seuraava koodi ja tallenna se *pohjoismaat.js*-nimellä. Tiedosto sisältää taulukon, jossa on viisi oliota, jotka sisältävät pohjoismaihin liittyvää tietoa.

```js
export let pohjoismaat = [
    {   name:"Finland",
        capital:"Helsinki", 
        population:5491817,
        currencies:[{code:"EUR",name:"Euro",symbol:"€"}],
        flag:"https://restcountries.eu/data/fin.svg"
    },
    {   name:"Sweden",
        capital:"Stockholm", 
        population:9894888,
        currencies:[{code:"SEK",name:"Swedish krona",symbol:"kr"}],
        flag:"https://restcountries.eu/data/swe.svg"
    },
    {   name:"Norway",
        capital:"Oslo",
        population:5223256,
        currencies:[{code:"NOK",name:"Norwegian krone",symbol:"kr"}],
        flag:"https://restcountries.eu/data/nor.svg"
    },
    {   name:"Denmark",
        capital:"Copenhagen",
        population:5717014, 
        currencies:[{code:"DKK",name:"Danish krone",symbol:"kr"}],
        flag:"https://restcountries.eu/data/dnk.svg"
    },
    {   name:"Iceland",
        capital:"Reykjavík",
        population:334300, 
        currencies:[{code:"ISK",name:"Icelandic króna",symbol:"kr"}],
        flag:"https://restcountries.eu/data/isl.svg"
    }]
```

Tee toinen tiedosto, jossa käytetään em. taulukkoa. Tallenna se nimellä *maat.js*.

```js
import { pohjoismaat } from './pohjoismaat.js';
```

Nyt *HTML*-tiedostossa pitää ladata molemmat JavaScript-tiedostot, ja niille pitää merkitä tyypiksi *module*.

Tallenna seuraava koodi *maat.html*-tiedostoon:

```html
!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>DOM demo</title>
    <link rel="stylesheet" href="maat.css">
</head>
    <body>
        <h1>Pohjoismaat</h1>
        <div id="maalista"></div>
        <script type="module" src="pohjoismaat.js"></script>
        <script type="module" src="maat.js"></script>
    </body>
</html>
```

Harjoitus tarvitsee myös *CSS*-tiedoston. Tallenna sen koodi *maat.css*-tiedostoon.

```css
img {
    max-width:50%;
    max-height:50%;
  }

.country {
    /* background: lightblue; */
    border-style: solid;
    border-width: 1px;
    border-radius: 15px;
    width: 30%;
    padding: 10px;
    text-align: center;
}
```

### Pure JavaScript

Tämä harjoitus tehdään kokonaan kirjoittamalla JavaScript:iä. Emme siis muokkaa HTML-tiedostoa tai CSS-tiedostoa ollenkaan. Tieto pohjoismaista liitetään HTML-tiedostossa sijaitsevaan *div*:iin, jonka *id* on "maalista". Tähän *div*:iin luodaan dynaamisesti riittää määrä pohjoismaiden tietoa sisältäviä *div*:ejä. Ensin haetaan ko. elementti ja tallennetaan se muuttujaan "maaLista"

```js
let maaLista = document.getElementById("maalista");
```

Tehdään apufunktio, jonka avulla voidaan tehdä uusia tekstiä sisältäviä elementtejä. Funktiolle annetaan parametriksi halutun elementin *tyyppi* (esim. "H1"), sekä tekstinodeen kirjoitettava teksti (esim. "Heippa"). Funktio palauttaa uuden elementin (*return*);

```js
const teeTextNode = function(tyyppi, teksti){
    let elem = document.createElement(tyyppi);
    let text = document.createTextNode(teksti);
    elem.appendChild(text);
    return elem;
}
```


