## Notes-demo osa 1

Tässä harjoituksessa harjoitellaan tiedon hakemista palvelimelta (backend) sekä tiedon tallentamista palvelimelle. Palvelimena  käytetään json-serveriä, joka on hyvä työkalu fronttikoodarilla, silloin kun varsinaista backend:iä ei vielä ole käytössä.

### JSON-serverin asennus ja käynnistys

Tee uusi kansio notesdemo. Tee siihen *db.json*-tiedosto, kopioi sinne tämä [json-muotoinen *notes*-tieto:](https://fullstackopen.com/osa2/palvelimella_olevan_datan_hakeminen).

Asenna ja käynnistä json-serveri kansioon notesback.

```cmd
> cd c:/users/oma.nimi/documents/react/notesdemo/notesback
> npx json-server --port=3001 --watch db.json
```

Avaa selaimella osoite: http://localhost:3001/notes.

json-server toimii kehitysaikaisena backendinä. Oikean tietokannan sijaan tiedot tallennetaan *json*-tiedostona levylle.

*Huom!* Jos olet tehnyt toisella kurssilla notes-backendin, voit käyttää suoraan sitä JSON-serverin tilalla.

Kun näissä tehtävissä viitataan *notes-backend*:iin, se tarkoittaa joko em. JSON-serveriä tai node/express:illä itse tehtyä backend:iä.

### Tehtävä 0 (REST-rajapinnan toiminnan ymmärtäminen)

Tutustu REST-rajapinnan toimintaan JSON-serverin ja Postmanin avulla [Ohjeet täällä](../tietokannat/rest-json.html).
Tee seuraavat operaatiot postmanin avulla (Harjoittele HTTP-metodien GET, POST, DELETE ja PUT käyttöä):

1. Hae kaikki muistiinpanot
2. Hae musitiinpano id:llä 1
3. Lisää uusi muistiinpano
4. Poista muistiinpano
5. Muuta muistiinpanon tekstiä

### Tehtävä 1 (Tietojen hakeminen backendiltä)

Tee uusi React-sovellus ajamalla create-react-app:

```cmd
> cd c:/users/oma.nimi/documents/react/
> npx create-react-app notesfront
> cd notesfront
> npm start
```

Asenna *axios*-kirjasto ja hae sen avulla *notes*-tiedot notes-backendiltä. Tulosta muistiinpanot consolille.

```cmd
> cd notesfront
> npm install axios --save
```

Lisää app.js tiedostoon:

```js
import axios from 'axios'

const App = () => {
// konsolille saadaan tulostumaan Promise
const promise = axios.get('http://localhost:3001/notes')
console.log(promise)

return (
    ...
)
}
```

Promise on *asynkronisen* - kutsun käsittelyyn tarkoitettu tietorakenne JavaScriptissä. Sen tila voi olla jokin näistä kolmesta: *fail*, *success* tai *pending*. Varsinainen data saadaan *promise.data* kentästä.

Jotta tietoa voidaan muokata, saadut tiedot tallennetaan *notes*-tilamuuttuujaan. Jotta osaamme lukea *data*-kentän oikealla hetkellä, jäämme odottamaan *response*-viestiä *then*-rakenteen avulla:

```js
import axios from 'axios'

const App = () => {
// tilamuuttuja:    
const [notes, setNotes] = useState([]);
// konsolille saadaan tulostumaan palvelimelta saatu data
axios
  .get('http://localhost:3001/notes')
  .then(response => {
    const notes = response.data
    console.log(notes)
    // tallennus tilamuuttujaan:
    setNotes(note)
  })

return (
    ...
)
}
```

Nyt konsolille tulee sama tulostus monta kertaa! Korjataan se niin, että tiedot haetaan palavelimelta vain komponentin latausvaiheessa. Otetaan käyttöön ns. eventHook. Paketoidaan edellinen kooti *hook()* - funktion sisään ja kutsutaan sitä kerran komponentin latautumisvaiheessa.

```js


```


Muuta hakeminen *event*-hookiksi, joka suoritetaan vain kun *apps.js* renderöidään ensimmäisen kerran.

Voit laittaa toistaiseksi kaiken axios-koodin *apps.js*-tiedostoon. [Ohjeet axios:en käyttöön löytyvät täältä (Axios ja promiset):](https://fullstackopen.com/osa2/palvelimella_olevan_datan_hakeminen) tai voit ladata valmiin koodin [täältä](./axios-service.html).

### Tehtävä 2

Tallenna axioksen avulla json-servejille (tai notes-backendille) uusi kovakoodattu muistiinpano (*notes*-olio). Katso json-serveriltä, että se ilmestyi myös sinne.

*Huom* id-tulee serveriltä, älä lähetä sitä.'

![notes](./img/json_server.PNG)

### Tehtävä 3

Tee uusi komponentti, joka tulostaa ruudulle kaikki muistiinpanot ranskalaisilla viivoilla.

![notes](./img/notes_server.PNG)

### Tehtävä 4

Tee lomakekomponentti, jonka avulla saadaan syötettyä uusi muistiinpano, sekä sen tärkeys (true/false) esim.*check-box*:in avulla. Tallenna lomakekentät tilamuuttujiin ja lähetä uusi *notes*-olio notes-backendille, kun lomake *submit*:oidaan.

Muista päivittää axis-kutsun jälkeen *notes*-tilamuuttuja, jotta ruutu päivittyy!

### Tehtävä 5

Lisää jokaiselle muistiinpanolle poistanappi.Lisää myös toiminnallisuus, jolla voi muuttaa muistiinpanon tärkeyttä (esim. klikkaamalla muistiinpanoa). Muista päivittää onnistuneen *axios*-kutsun jälkeen *notes*-tilamuuttuja vastaamaan notes-backend:in tilannetta (poistettu muistiinpano poistetaan myös notes-tilamuuttujasta, vanha muistiinpano korvataan muutetulla).

### Tehtävä 6

Tee *dropdown*-valikko, jonka avulla filteröit ruudulle näkyviin vain tärkeät muistiinpanot.

---
