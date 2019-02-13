## Pohjoismaat - demo

### Koodin jakaminen useampaan tiedostoon

Kun ohjelma tulee monimutkaisemmaksi, ei aina ole järkevää sijoittaa kaikkea JavaScript-koodia samaan tiedostoon.

Otamme tässä käyttöön JavaScript - moduulit. Toisesta moduulista *export*:ataan ja toiseen moduuliin *import*:ataan. Moduulista voidaan *export*:ata funktioita, muuttujia, luokkia jne. Riittää, että määritelmän eteen kirjoittaa *export*;

Kopioi seuraava koodi ja tallenna se *countries-data.js*-nimellä. Tiedosto sisältää taulukon, jossa on viisi oliota, jotka sisältävät pohjoismaihin liittyvää tietoa.

```js
export let countries = [
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

Tee toinen tiedosto, johon *import*:ataan em. modulista *countries*-taulukko. Tallenna tiedosto nimellä *countries.js*.

```js
import { countries } from './countries-data.js';
```

Nyt *HTML*-tiedostossa pitää ladata molemmat JavaScript-tiedostot, ja niille pitää merkitä tyypiksi *module*.

Tallenna seuraava koodi *countries.html*-tiedostoon:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Pohjoismaat</title>
    <link rel="stylesheet" href="countries.css">
</head>
    <body>
        <h1>Pohjoismaat</h1>
        <div id="countrylist"></div>
        <script type="module" src="countries-data.js"></script>
        <script type="module" src="countries.js"></script>
    </body>
</html>
```

Harjoitus tarvitsee myös *CSS*-tiedoston. Tallenna sen koodi *countries.css*-tiedostoon.

```css
img {
    max-width:50%;
    max-height:50%;
  }

.country {
    border-style: solid;
    border-width: 1px;
    border-radius: 15px;
    width: 30%;
    padding: 10px;
    text-align: center;
}
```

### Pure JavaScript, part 1

Tämä harjoitus tehdään kokonaan kirjoittamalla JavaScript:iä. Emme siis muokkaa HTML-tiedostoa tai CSS-tiedostoa ollenkaan. Tieto pohjoismaista liitetään HTML-tiedostossa sijaitsevaan *div*:iin, jonka *id* on "countrylist". Tähän *div*:iin luodaan dynaamisesti riittää määrä pohjoismaiden tietoa sisältäviä *div*:ejä. Ensin haetaan ko. elementti ja tallennetaan se muuttujaan "countryList"

```js
let countryList = document.getElementById("countrylist");
```

Tehdään apufunktio *makeTextNode*, jonka avulla voidaan tehdä uusia tekstiä sisältäviä elementtejä. Funktiolle annetaan parametriksi halutun elementin *type* (esim. "H1"), sekä tekstinodeen kirjoitettava teksti *text* (esim. "Heippa"). Funktio palauttaa uuden elementin (*return*);

```js
const makeTextNode = function(type, text){
    let elem = document.createElement(type);
    let textNode = document.createTextNode(text);
    elem.appendChild(textNode);
    return elem;
}
```

Aloitetaan tekemällä pelkät otsikot kullekin maalle. Tehdään funktio, joka saa parametrinaan *country*-olion. Funktiossa luodaan maan tietoja varten tyhjä *div*-elementti. Siihen liitetään uusi tekstinode, jonka tyyppi on "H3" ja jonka tekstinä on maan nimi. Jotta CSS-selektori toimisi oikein, lisätään *div*:lle luokaksi "country". Funktio palauttaa uuden elementin (*return*);

```js
const countryTitle = function(country){
    let newDiv = document.createElement("div");
    newDiv.className = "country";
    let elem = makeTextNode("H3", country.name)
    newDiv.appendChild(elem);
    return newDiv;
}
```

Sivulla ei vielä näy mitään, koska emme ole kutsuneet näitä funktioita. Tehdään se käyttämällä taulukon *map*-metodia. *map* käy läpi taulukon alkiot järjestyksessä ja kutsuu sille annettua funktiota jokaisella taulukon alkiolla. *map* palauttaa uuden taulukon, johon se kerää saamansa paluuarvot. Tässä tapauksessa *map* kutsuu *countryTitle*-funktiota viisi kertaa, jonka jälkeen *countryElems*-taulukossa on viisi uutta *div*-elementtiä (joissa kussakin on maan nimi otsikko-elementissä).

*Huom!* Tässä käytetään JavaScript:in nuolifunktio-notaatiota.

```js
let countryElems = countries.map(country => countryTitle(country));
```

Viimeinen vaihe on liittää taulukossa olevat elementit yksikerrallaan DOM:iin, aikaisemmin hakemaamme *countryList*-elementtiin.

```js
for(let i = 0; i < countryElems.length; i++){
    countryList.appendChild(countryElems[i]);
}
```

*for*-silmukan tilalla voi käyttää lyhyempää *forEach*-rakennetta:

```js
countryElems.forEach(elem => countryList.appendChild(elem));
```

Nyt HTML-sivulla pitäisi näkyä pohjoismaiden nimet omissa *div*:eissään.

### Pure JavaScript, part 2 (addEventListener)

Lisätään maiden otsikoille tapahtumakuuntelijat (addEventListener) määrittämällä tapahtuman (*event*) tyypin jota kuunnellaan (tässä "mouseon" ja "mouseout"), sekä antamalla *callback*-funktio, jota kutsutaan kun ko. tapahtuma tapahtuu. Tässä *callback*-funktion nimi on *changeColor*.

```js
function changeColor(item, color){
    item.style.color = color;
}
```

Lisää nämä koodirivit *countryTitle*-funktioon:

```js
elem.addEventListener("mouseover", () => changeColor(elem, "red"));
elem.addEventListener("mouseout", () => changeColor(elem, "black"));
```

Nyt maan nimen pitäisi muuttua punaiseksi, kun hiiri viedään sen päälle.

### Pure JavaScript, part 3

Nyt lisätään otsikoiden alle uudet *div*-elementit, jotka sisältävät lisätietoa kustakin maasta ml. maan lipun. Tehdään uusi funktio datan käsittelyä varten:

```js
const countryData = function(country){
    let newDiv = document.createElement("div");
    let capital = makeTextNode("p", "Pääkaupunki:" + country.capital);
    let population = makeTextNode("p", "Asukasluku:" + country.population);
    let image = document.createElement("img");
    image.src = country.flag;
    newDiv.appendChild(capital);
    newDiv.appendChild(population);
    newDiv.appendChild(image);
    return newDiv;
}
```

Jotta uusi *countryData*:n palauttama *div*-elementti saadaan mukaan, lisätään seuraava koodirivi *countryTitle*-funktioon, juuri ennen *return*:ia:

```js
    newDiv.appendChild(countryData(country));
```

Nyt sivulla pitäis näkyä maiden nimet, sekä niihin liittyvä lisätieto jokaisen otsikon alla.

### Pure JS, part 4

Jotta sivulle mahtuisi enemmänkin maita, piilotetaan yksityiskohtaista dataa sisältävät *div*:t. Lisää seuraava koodirivi *countryData*-funktioon:

```js
    newDiv.style.display = "none";
```

Lisätään uusi tapahtumakuuntelija (*countryTitle*-funktioon edellisten jatkoksi), niin että maan nimeä klikkaamalla saadaan data näkyviin ja uudelleen klikkaamalla taas piilotettua. Huomaa, että *toggleData*:lle annetaan parametrina ko. elementin (maan otsikko - elementti) sisarus (*nextSibling*), joka sisältä piilotettavan datan. Ilman tätä otsikko itse piilotettaisiin.

```js
elem.addEventListener("click", () => toggleData(elem.nextSibling));
```

Tässä *callback*-funktioksi annetaan *toggleData*-funktio, joka muuttaa elementin näkyvyyttä:

```js
function toggleData(item){
    if(item.style.display === "none"){
        item.style.display = "block";
    } else {
        item.style.display = "none";
    }
}
```

Nyt sivun pitäisi toimia niin, että aluksi näytetään pelkät maiden nimet mutta maan nimeä klikkaamalla näytetään lisätietoja ml. maan lippu.