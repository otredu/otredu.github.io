## HTML-alkeita

### HTML-dokumentin perusrakenne

HTML-dokumentti aloitetaan aina kertomalla sen tyyppi. Tämä on tärkeä tieto selaimelle.

```html
<!DOCTYPE html>
```

HTML-dokumentti rakennetaan *tag*:ien avulla. Alku-tagi on suljettava loppu-tagillä, ellei kyseinen tagi ole ns.*void* eli tyhjä, jolloin sen sisään ei koskaan tulekaan mitään.

HTML-dokumentin perusrakenteet muodostuvat: *html*-, *head*- ja *body*-tageistä, joilla kaikilla on alku- ja lopputagit. *head*:in sisällä on yksi *void*-tagi, *meta*, joka kertoo mitä enkoodausta dokumentin tekstissä käytetään. UTF-8 enkoodaus on tarpeen skandinaavisten merkkien kanssa, ilman sitä ääkköset näkyvät väärin.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Sivuston nimi</title>
    </head>
    <body></body>
</html>
```

*head*-tagien välissä olisi hyvä olla *title*-tagi, kertomassa hakukoneille sivuston nimi. Seuraavassa käsitellyt elementit tulevat *body*-tagien väliin.

### Otsikot ja kappaleet

Sivun teksti jaotellaan kappaleisiin, jotka merkitään *p*-tagillä, ja otsikot *h1*, *h2*, *h3* -tageillä (*h1* on pääotsikko, ja seuraavat aliotsikoita). 


```html
    <h1>Pääotsikko</h1>
    <h2>Aliotsikko 1</h2>
    <p>Tämä on ensimmäinen kappale. Jonka teksti voi jatkua pitkään. </p>
    <p>Toinen kappale alkaa uudelta riviltä automaattisesti. Jos se ei mahdu yhdelle riville, voit jatkaa tekstiä seuraavalle riviltä. </p>
```

### Listat

Listat muodostetaan joko *ul*- tai *ol*-tagin avulla. *ul* on *unordered list* (ranskalaiset viivat) ja *ol* puolestaan *ordered list* (numeroitu). Listan muodostavat alkiot annetaan *li*-tagin avulla. 

```html
    <ul>
        <li>ensimmäinen numeroimattoman listan alkio</li>
        <li>toinen numeroimattoman listan alkio</li>
    </ul>
    <ol>
        <li>ensimmäinen numeroidun listan alkio</li>
        <li>toinen numeroidun listan alkio</li>
    </ol>
```

### Taulukot

Taulukoiden avulla voidaan esittää tiedoa, joka sisältää rivejä ja sarakkeita avulla. Taulukko koostetaan rivi-riviltä laittamalla *td*-elementtejä (*table data*) *tr*-elementtien (*table row*) sisälle. *th*-tagillä merkitään *table header* eli otsikkosolut.

```html
<table>
    <caption>Taulukon otsikko</caption>
    <tr>
        <th>Sarake 1, otsikko</th>
        <th>Sarake 2, otsikko</th>
    </tr>
    <tr>
        <td>Sarake 1, rivi 1</td>
        <td>Sarake 2, rivi 1</td>
    </tr>
    <tr>
        <td>Sarake 1, rivi 2</td>
        <td>Sarake 2, rivi 2</td>
    </tr>
</table>
```

Jos taulukko on suuri tai jos taulukon osia haluaa muotoilla CSS-määrittelyillä, siihen kannattaa lisätä vielä *thead*, *tbody* ja *tfoot* osiot (ks. [lisätietoja](https://www.w3schools.com/tags/tag_thead.asp)).

### Kuvat

HTML-dokumenttiin liitetään kuva *img*-tagin avulla. Tagin *src*-attribuutissa annetaan kuvatiedoston nimi ja tarvittaessa suhteellinen polku siihen palvelimella. *img*-tagissa olisi hyvä olla aina *alt*-attribuutti, joka on tärkeä *screen reader*:eille. Kuvan voi linkittää sivulle myös URL:in avulla. 

```html
<img src="img/kuva1.png" alt="talvimaisema">
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Flower_poster_2.jpg" alt="kukkia" width="30%"/>
```

**Huom** Vaikka kuvan leveyttä voi säätää *width*-attribuutin avulla, se olisi parempi säätää käyttämällä CSS-määrittelyjä.

### Linkit

Dokumentissa oleva linkki voi johtaa sivuston ulkopuolelle tai se voi olla sivun sisäinen linkki. *a*-tagi sisältää aina vähintään yhden attribuutin *href*, joka kertoo URL-osoitteen, joka linkkiin liittyy. Alku- ja lopputagien väliin tulee ruudulla näytettävä teksti, tässä "Google". Linkki voi olla myös suhteellinen ja viedä samassa hakemistossa palvelimella olevalle toiselle sivulle.

```html
<a href="http://www.google.fi">Google</a>
<a href="toinensivu.html">Toinen sivu</a>
```

Sivun sisäinen linkki muodostetaan lisäämällä kohteeseen *id*-attribuutti ja viittaamaalla siihen *href*-attribuutissa:

```html
<h1 id="alku">Sivun alussa oleva otsikko</h1>
...
<a href="#alku">Sivun alkuu</a>
```

Kuvasta voi tehdä linkin lisäämällä *img*-tagin linkkitagin sisään:

```html
<a href="talvisivu.html">
    <img src="img/kuva1.png" alt="talvimaisema">
</a>
```

### Tekstityylit

Teksti ulkoasu määritellään täysin käyttämällä CSS:ää, joten erilaiset tekstityypit merkitään tekstiin niiden merkityksen mukaan: lyhyt lainaus (*q*), pitkä lainaus (*blockquote*) merkitty (*mark*), tärkeä (*strong*) tai painotettu (*em*) teksti. Myös alaindeksi (*sub*) ja yläindeksi (*sup*) voidaan merkitä omilla tageillään samoin koodiesimerkki (*code*).

```html
<q>lyhyt lainaus</q>
<blockquote>pidempi lainaus, jossa on paljon tekstiä</blockquote>
<mark>selkeästi merkitty teksti</mark>
<strong>tärkeä teksti</strong>
<em>painotettu asia</em>
<sub>alaindeksi</sub>
<sup>yläindeksi</sup>
<code>let a = 2 + 4;</code>
```

**Huom** Vaikka selaimessa on näille omat *default*-tyylinsä, CSS:n avulla ne voidaan määritellä paremmin.

Toinen tapa merkitä teksti, jolle halutaan kohdistaa jokin tietty tyyli, on liittää siihen *span*-tag. Tämän tagi ei vaikuta tekstin asemointiin, eli se toimii ns. *inline*:

```html
Tässä on jotakin <span class="important">todella tärkeää</span>, joka halutaan muotoilla omalla tyylillään.
```

### Sivun asettelu

Jotta tekstin osia saisi aseteltua sivulle, kannattaa ryhmitellä elementtejä käyttämällä *div*-tagejä. Jotta CSS-määrittelyjä saa ohjattua tietyille *div*-elementeille, niille kannattaa antaa niiden tarkoitusta kuvaavat *id*. Usein *id*:einä käytetään *header*, *footer* tai *sidebar*. CSS-tyylin voi liittää myös luokkaan, jolloin se lisätään *class*-attribuuttiin kuten  *navbar*. Ero näiden kahden välillä on se, että luokkaan voi kuulua monta elementtiä, *id* on uniikki.

```html
<div id="header">
    <h1>Tervetuloa sivuilleni</h1>
    <div class="navbar">
        <ul>
            <li><a href="etusivu.html">Etusivu</a></li>
            <li><a href="toinensivu.html">Toinen sivu</a></li>
            <li><a href="kolmassivu.html">Kolmas sivu</a></li>
        </ul>
    </div>
</div>
```

**Huom** *ul*-tagiä käytetään usein navigointipalkin kokoamiseen.

### CSS-tyylimäärittely HTML-dokumentissa

HTML-koodin sekaan voi kirjoittaa sekä CSS-määrittelyitä ns. *inline* eli HTML:n koodin sisään tai erillisten *style*-tagien väliin. *style*-tagin tulee olla *head*-tagien välissä.

```html
<p style="color: red">Tässä fontin väri inline-määrittelynä</p>
```

Edellinen esimerkki toteutettuna *style*-tageillä:

```html
<style>
    p {
        color: red;
    }
</style>
```

Kaikkein paras tapa, olisi kuitenkin erottaa CSS-määrittelyt kokonaan omaan tiedostoonsa ja lisätä HTML-dokumenttiin *style*-tagi, joka kertoo CSS-tiedoston nimen ja sijainnin palvelimella:

```html
<link rel="stylesheet" type="text/css" href="tyylit.css">
```

## Lisätietoa:

- [HTML5-tutorial, W3Schools](https://www.w3schools.com/html/default.asp)
- [Character sets, W3Schools](https://www.w3schools.com/html/html_charset.asp)