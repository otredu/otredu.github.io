## JavaScript Harjoitukset 2.2

Tee Visual Studio Code:lla uusi tiedosto, nimeä se harjoitukset2_2.js. Avaa VS:n terminaali ja aja koodi kirjoittamalla konsoliin: node harjoitukset2_2.js. Tee tehtävät 1-4 samaan tiedostoon. Testaa funktioiden toiminta usealla eri syötteellä, jätä kaikki testit näkyville tiedostoon.

### Tehtävä 1: Tervehdys

Tee funktio, joka tervehtii päivän ajankohdasta riippuen eri tavoilla. Ajankohdan saat seuraavasti:
var aika = new Date().getHours();

- jos aika on alle 10, ohjelma tervehtii "Huomenta"
- jos aika on alle 19, ohjelma tervehtii "Päivää"
- muuten ohjelma tervehtii "Iltaa"
Mieti, mikä ehtorakenne toimii parhaiten

### Tehtävä 2: Avaruusalus

Tee funktio, joka saa tiedoikseen avaruusaluksen nopeuden, nopeuden yksikön, määränpään etäisyyden ja yksikön. Muista antaa kaikille muuttujille kuvaavat nimet. Funktio laskee kuinka kauan lento kestää ja palauttaa vastauksen sekä käytetyn aikayksikön sekä käytetyt lähtöarvot. Nopeus voidaan antaa muodossa m/s, km/h ja etäisyys muodossa m, km.

*Lisätehtävä*: lisää etäisyydeksi myös valovuosi

### Tehtävä 3: Vuosiluvun tarkistus ja iän laskeminen

Tee funktio, joka tarkistaa, onko annettu vuosiluku järkevä, eli välillä 1920 - nykyinen vuosiluku. Funktio palauttaa arvon *true*, jos syöte on ok, muuten se palauttaa *false*.

Tee toinen funktio, joka laskee iän vuoden lopussa, kun syötteenä annetaan syntymävuosi. Nykyisen vuosiluvun saat seuraavasti:

```js
    var d = new Date(); 
    var n = d.getFullYear();
```

Tee kolmasfunktio, jonka avulla testaan edellisten funktioiden toimintaa: tarkista syötteen järkysyys ensimmäisen funktioin avulla, jos syöte on järkevä käytä toista funktiota ja laske henkilön ikä. Tulosta lähtöarvot sekä saatu tulos. Jos syötetty vuosi on ohi annettujen arvojen, ohjelma luonnollisesti huomauttaa siitä eikä laske ikää.

### Tehtävä 4: Bensan hinta

Tee funktio, joka tarkistaa annettavista syötteistä bensiinin hinnan (€/litra) järkevyyden (pitää olla välillä 1.2 - 2.5).

Tee toinen funktio, joka tarkistaa auton kulutuksen (litraa/100km) järkevyyden (pitää olla välillä 2.0 - 20).

Tee kolmas funktio, joka saa auton kulutuksen (litraa/100km),matkan pituuden (km), sekä bensanhinnan (€/litra) ja laskee matkaan kulutetun bensiinin kustannuksen euroissa. Tarkista ennen laskua bensiinin hinnan ja kulutuksen järkevyys ja tulosta lähtöarvot sekä saatu euromäärä. Jos lähtöarvot eivät ole järkeviä, ilmoita siitä virheilmoituksella.

---

Tutustu ennen seuraavia tehtäviä JavaScriptin käyttöön HTML-tiedostossa:

- [JS ja HTML](./js_html.html)

---

Tee Visual Studio Code:lla uusi tiedosto, nimeä se harjoitukset2_2.html. Tee tehtävät 5-14 samaan tiedostoon. Tehtävät testataan selaimessa avaamalla ko. tiedosto. Voit kirjoittaa funktiot suoraan HTML-tiedostoon \<script>\</script> tägien sisään tai tehdä ne omaan *.js tiedostoon ja liittää sen HTML-tiedostoon:

```html
<script src="harj2.2.js"></script>
```

### Tehtävä 5: Alert painike

Tee painike (button), jota klikkaamalla saat esiin pop-up-ikkunan (alert), jossa lukee "Tervetuloa". Lisää painikkeeseen teksti "tehtävä 5".

### Tehtävä 6: Nimi promptilla

Tee funktio, joka kysyy käyttäjältä ensin promptilla etunimen ja sitten sukunimen. Liitä arvot yhteen tulosta ne alert-ikkunassa. Käynnistä omalla paikikkeella.

### Tehtävä 7: Yhteenlasku

Tee funktio, joka kysyy käyttäjältä kaksi numeroa, laskee ne yhteen, sekä ilmoittaa vastauksen console.log:illa kehittäjänäkymässä. Käynnistä omalla painikkeella. Lisää myös alert-viesti, joka antaa ohjeet kehittäjänäkymän avaamiselle.

### Tehtävä 8: Suurempi luku (ehtolause)

Tee funktio, joka kysyy kahta lukua ja ilmoita niistä suuremman käyttäen alert:ia. Käynnistä omalla paikikkeella.

### Tehtävä 9: Täysi-ikäisyys (ehtolause)

Tee funktio, joka kysyy ikää, ja päättelee, onko käyttäjä täysi-ikäinen ja ilmoittaa tilanteeseen sopivan viestin. Käynnistä funktio napista ja käytä alert:ia.

### Tehtävä 10: Koiran ikä

Tee funktio, joka laskee ja palauttaa koiran iän ihmisikänä (yksi vuosi vastaa ihmisen iässä 7 vuotta). Pääohjelma pyytää promptilla koiran iän ja ilmoittaa alertilla vastaavan ihmisiän.

### Tehtävä 11: Laskuri

Tee nappi, jota painamalla kehittäjänäkymän konsolille tulostuu luku, joka kasvaa yhdellä joka painalluksella (aloittaa nollasta).

*Lisätehtävä*: tee myös vähentävä nappi.

### Tehtävä 12: Torttutaikina

Torttutaikinaan laitetaan 1 dl sokeria, 200g rasvaa ja 3 dl vehnäjauhoja. Laadi funktio kokin avuksi: ohjelma kysyy, paljonko laitetaan sokeria ja se laskee paljonko tarvitaan rasvaa ja jauhoja. Tulosta koko resepti, käytä alert:ia.

### Lisätehtävä 1: Tietokilpailu

Laadi tietokoneaiheinen tietokilpailu (voit myös valita jonkin muun aiheen). Kysymyksiä on 5, joista jokaisesta voi saada 1 pisteen. Lopuksi muunna saadut pisteet arvosanaksi:

- pisteitä 1 - 2, arvosana on välttävä
- pisteitä 3 - 4, arvosana on tyydyttävä
- pisteitä 5, arvosana on kiitettävä

Anna jokaisen vastauksen jälkeen palaute siitä, oliko vastaus oikein vai väärin.

### Lisätehtävä 2: Aukkotarina

Tee tarina, jossa on aukkoja käyttäjän antamille sanoille (esim. anna verbi, anna nimi, anna adjektiivi). Yhdistää annetut sanat keksimääsi tekstiin ja tulosta lopputulos alertilla.