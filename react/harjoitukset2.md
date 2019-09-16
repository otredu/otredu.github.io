## Harjoitukset 2: Fanikauppa

### Yleistä

Tehtävänä on suunnitella prototyyppi fanikaupalle. Fanikauppa on ReactJS:llä toteutettava Single Page Application. Voit valita kaupan aiheen vapaasti. Kaupassa voidaan myydä esimerkiksi jonkin urheiluseuran tms. tuotteita.

*Huom!* Aloita uusi projekti käyttämällä create_react_app:ia!

*Huom!* Käytä vain sellaisia tuotekuvia, joiden käyttöehdot sallivat uudelleen käytön ja julkaisemisen (projekti käynnistetään Herokussa).

### Toiminnot

1. Tuotteiden selailu

    Käyttäjä voi selailla myynnissä olevia tuotteita. Tuotteista näytetään kuva, lyhyt nimi sekä kappalehinta (euroissa). Tuotelistaa pitää voida selata, sekä tutustua tuotteen tarkempiin tietoihin (tarkemmat tuotetiedot avautuvat otsikkoa klikkaamalla) tai niin että kerrallaan näytetään vain yksi tuote ("karuselli"-tyylinen selaaminen). Voit siis itse valita millä tavoin tuotteiden selailu tapahtuisi, pyri kiinnittämään huomiota sovelluksesi käytettävyyteen. Prototyypissä tulisi olla vähintään kolme tuotetta.
    Tuotteita voisivat olla...

    - Muki
    - Lippis
    - T-paita
    - Juliste

2. Tuotteiden lisääminen ostoskoriin

    Kun käyttäjä haluaa lisätä tietyn tuotteen ostoskoriin täytyy häneltä varmistaa myös kappalemäärä. Ostoskoriin lisätään haluttu määrä tuotetta ja kasvatetaan ostoskorin kokonaishintaa vastaavasti.

    - Ostoskori voi olla samalla sivulla, näytä sisältö mikäli tuotteita on lisätty ostoskoriin.
    - Tässä harjoituksessa keskeinen asia on tilamuuttujien käsittely (*useState*).

3. Ostoskorin tyhjentäminen

    Käyttäjä voi tyhjentää ostoskorin sisällön eli tyhjentää kaikkien lisättyjen tuotteiden määrät. Tällöin myös tilauksen kokonaishinta tyhjennetään.

4. Tilauksen vahvistaminen

    Käyttäjä voi painaa nappia "Vahvista tilaus". Käyttäjältä pyydetään tällöin yhteystiedot tilauksen lähettämistä varten. Vaaditut tiedot ovat sähköpostiosoite (email), nimi, lähiosoite, postiosoite sekä postitoimipaikka. Mikäli kaikki tiedot on syötetty käyttäjälle annetaan viesti "Paketti lähetetty!" ja kaikki henkilön sekä ostoskorin tiedot tyhjennetään.

5. Heroku:ssa käynnistäminen

    Tee tili Herokuun ja liitä reposi siihen. Palauta linkki live-versioon.

### Edistyneet toiminnot

6. Alennus

    Tuotteiden tilauksesta saa alennuksen kokonaissummasta seuraavan taulukon mukaan:
    - Kokonaissumma 100 €, alennus 2.5%
    - Kokonaissumma 250 €, alennus 4%
    - Kokonaissumma 500 €, alennus 10%

7. Ostoskorin hallinta

    Käyttäjä voisi hallita ostoskorin tuotteita siten, että voidaan poistaa jokin tietty tuote kokonaan tai muuttaa tietyn tuotteen kappalemäärää.

8. Kirjautuminen

    Kun käyttäjä tulee ensimmäistä kertaa sivulle hänelle näytetään kirjautumissivu, jossa pyydetään käyttäjätunnus sekä salasana. Prototyypin tunnukset ovat "proto" ja salasana "proto". Mikäli tunnukset syötetään oikein näytetään käyttäjälle fanikaupan etusivu ja tuotteiden selailu.