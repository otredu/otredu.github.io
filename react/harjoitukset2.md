## Harjoitukset 2: Fanikauppa

### Yleistä

Tehtävänä on suunnitella prototyyppi fanikaupalle. Fanikauppa on ReactJS:llä toteutettava Single Page Application. Voit valita kaupan aiheen vapaasti. Kaupassa voidaan myydä esimerkiksi jonkin urheiluseuran tms. tuotteita.

*Huom!* Aloita uusi projekti käyttämällä *vite*-scriptiä!

*Huom!* Käytä vain sellaisia tuotekuvia, joiden käyttöehdot sallivat uudelleen käytön ja julkaisemisen (projekti käynnistetään Herokussa).

Kannattaa tutustua taulukko- ja oliomuotoistaen tilamuuttujien käsittelyyn ennen harjoituksen tekemistä:

- [Tilamuuttujien käsittely](./immutable-state.html).

### Toiminnot

1. Tuotteiden selailu

    Käyttäjä voi selailla myynnissä olevia tuotteita. Tuotteista näytetään kuva, lyhyt nimi sekä kappalehinta (euroissa). Muista lisätä myös uniikki id sekä tuotetyyppi. Tuotelistaa pitää voida selata, sekä tutustua tuotteen tarkempiin tietoihin. Tarkemmat tuotetiedot voivat avautuvat otsikkoa klikkaamalla tai niin että kerrallaan näytetään vain yksi tuote ns. "karuselli"-tyylinen selaaminen. Voit siis itse valita millä tavoin tuotteiden selailu tapahtuisi. Pyri kiinnittämään huomiota sovelluksesi käytettävyyteen. Prototyypissä tulisi olla vähintään kolme tuotetta.

    Tuotteita voisivat olla...

    - Muki
    - Lippis
    - T-paita
    - Juliste

2. Tuotteiden lisääminen ostoskoriin

    Kun käyttäjä haluaa lisätä tietyn tuotteen ostoskoriin, täytyy häneltä varmistaa myös kappalemäärä. Ostoskoriin lisätään haluttu määrä tuotetta ja kasvatetaan ostoskorin kokonaishintaa vastaavasti. Määrän voi totetuttaa +/- napeilla tai lomakekentällä.

    - Ostoskori voi olla samalla sivulla, näytä sisältö mikäli tuotteita on lisätty ostoskoriin.
    - Tässä harjoituksessa keskeinen asia on tilamuuttujien käsittely (*useState*).

3. Ostoskorin tyhjentäminen

    Käyttäjä voi tyhjentää ostoskorin sisällön eli tyhjentää kaikkien lisättyjen tuotteiden määrät kerrallaan. Tällöin myös tilauksen kokonaishinta tyhjennetään.

4. Tilauksen vahvistaminen

    Käyttäjä voi painaa nappia "Vahvista tilaus". Käyttäjältä pyydetään tällöin yhteystiedot tilauksen lähettämistä varten. Vaaditut tiedot ovat nimi, sähköpostiosoite, puhelinnumero sekä osoite, johon paketti toimitetaan (katuosoite, postinumero, postitoimipaikka).

    Mikäli kaikki tiedot on syötetty käyttäjälle näytetään yhteenveto ostostapahtumasta (listataan tilatut tuotteet, lopullinen hinta sekä osoite, johon patetti toimitetaan) ja kiitetään tilauksesta. Lopuksi kaikki henkilön sekä ostoskorin tiedot tyhjennetään.

5. Projektin siirtäminen portfolioon

    Tee itsellesi github-pages repository (tavallinen public repo, jonka nimi on <githubtunnus>.github.io>). 
    
    Lisää fanikaupan package.json tiedostoon seuraava rivi:

    ```js
    "homepage": "https://<githubtunnus>.github.io/fanikauppa",
    ```
    
    Tee fanikaupasta build:

    ```cmd
    npm run build
    ```

    Kopioi *dist*-kansion sisältö github-pages repoosi kansioon "fanikauppa". Tee github-pages sivulle portfolion etusivu (index.html), ja linkkaa fanikauppasi siihen. Esim.

    ```html
    <!DOCTYPE html>
    <html>
    <body>

    <h1>Portfolio</h1>
    <a href="/fanikauppa/index.html">Fanikauppa (react)</a>
    </body>
    </html>
    ```

    Palauta linkki live-versioon reposi *read.me* - kentässä.

### Edistyneet toiminnot (lisätehtävät)

6. Alennus

    Tuotteiden tilauksesta saa alennuksen kokonaissummasta seuraavan taulukon mukaan:
    - Kokonaissumma 100 €, alennus 2.5%
    - Kokonaissumma 250 €, alennus 4%
    - Kokonaissumma 500 €, alennus 10%

