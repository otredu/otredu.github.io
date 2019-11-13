## Harjoitukset 3

### JSON-serverin asennus

Tee uusi kansio demo2. Tee siihen *db.json*-tiedosto, kopioi sinne tämä [json-muotoinen *notes*-tieto:](https://fullstackopen.com/osa2/palvelimella_olevan_datan_hakeminen).

Asenna ja käynnistä json-serveri kansioon demo2.

```cmd
> cd c:/users/oma.nimi/documents/react/demo2
> npx json-server --port=3001 --watch db.json
```

Avaa selaimella osoite: http://localhost:3001/notes.

json-server toimii kehitysaikaisena "tietokantana" tallentaen tiedot json-tiedostoon levylle.



### Tehtävä 1

Tee uusi React-sovellus ajamalla create-react-app:

```cmd
> cd c:/users/oma.nimi/documents/react/
> npx create-react-app demo3
> cd demo3
> npm start
```

Asenna *axios*-kirjasto ja hae sen avulla *notes*-tiedot json-serveriltä. Tulosta ne consolille.

```cmd
> npm install axios --save
```

Tallenna saanut tiedot *notes*-tilamuuttuujaan. Muuta hakeminen *event*-hookiksi, joka suoritetaan vain kun *apps.js* renderöidään ensimmäisen kerran.

Voit laittaa toistaiseksi kaiken axios-koodin *apps.js*-tiedostoon. [Ohjeet axios:en käyttöön löytyvät täältä (Axios ja promiset):](https://fullstackopen.com/osa2/palvelimella_olevan_datan_hakeminen) tai voit ladata valmiin koodin [täältä](./axios-service.html).

### Tehtävä 2

Tallenna axioksen avulla json-servejille uusi kovakoodattu muistiinpano (*notes*-olio). Katso json-serveriltä, että se ilmestyi myös sinne.

*Huom* id-tulee serveriltä, älä lähetä sitä.'

![notes](./img/json_server.PNG)

### Tehtävä 3

Tee uusi komponentti, joka tulostaa ruudulle kaikki muistiinpanot ranskalaisilla viivoilla.

![notes](./img/notes_server.PNG)

### Tehtävä 4

Tee lomakekomponentti, jonka avulla saadaan syötettyä uusi muistiinpano, sekä sen tärkeys (true/false). Tallenna lomakekentät tilamuuttujiin ja lähetä uusi *notes*-olio json-serverille kun lomake *submit*:oidaan.

Muista päivittää myös *notes*-tilamuuttuja!

### Tehtävä 5

Tee *dropdown*-valikko, jonka avulla filteröit ruudulle näkyviin vain tärkeät muistiinpanot.

### Tehtävä 6

Lisää jokaiselle muistiinpanolle poista ja päivitä -napit ja toteuta toiminnallisuus. Muista päivittää json-serverin lisäksi *notes*-tilamuuttuja.