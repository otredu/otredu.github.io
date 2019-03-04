## Bootstrap

### Yleistä

Bootstrap on erittäin suosittu ilmainen framework nettisivujen tekoon. Se sisältää valmiin CSS-määrittelyn sekä JavaScript-kirjaston, joiden avulla on helppo tehdä responsiivisia, erityisesti mobiililaitteilla hyvin toimivia, web-sovelluksia.

Bootstrap 4 käyttää 12-sarakkeista grid-asettelua sekä @media-määrittelyjä. Jotta valmiit CSS-määrittelyt toimivat oikein, nettisivun tekijän on osattava käyttää Bootstrapin omia luokkanimiä omassa HTML-koodissaan.

### Bootstrap - HTML - pohja

Bootstap:in voi ottaa käyttöön liittämällä HTML-tiedostoon Bootstrap:in CSS-määrittelyt sekä meta-tagin (name=viewport), joka varmistaa että responsiivinen osuus toimii oikein. Bootstrap sisältää myös JavaScript-kirjaston, joka puolestaan tarvitsee JQuery.js sekä Popper.js kirjastot (tässä järjestyksessä).

Bootstrapin kanssa pääsee siis alkuun tällä [templaatilla](https://getbootstrap.com/docs/4.3/getting-started/introduction/).

```html
<!doctype html>
<html lang="fi">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>
```

### Bootstrap-grid

Kuten grid:in ja flex-boxin kanssa, Bootstrap:issä pitää määritellä *container*-luokka. Sen sisällä ryhmitellään sisältö riveille *row*-luokkien avulla. Kaikki sisältö tulee laittaa rivien sisälle sijoitettaviin sarakkeisiin eli *column*-luokkiin. *column*-luokkia on useita: *col*-luokkaa käytetään, jos kaikki sarakkeet ovat samanlevyisiä keskenään. Jos sarakkeiden keskinäiset leveydet ovat erilaiset, gridin 12-saraketta jaetaan osiin esim. *col-4* ja *col-8*, jolloin jälkimmäinen osa (*div*) on kaksi kertaa leveämpi kuin ensimmäinen osa. Jos sarakkeelle ei määritellä leveyttä, se toimii kuin *flexbox* ja se laajenee täyttämään vapaana olevan tilan.

```html
<div class="container">
  <div class="row">
    <div class="col-4">
      1. rivin kapeampi div
    </div>
    <div class="col-8">
      1. rivin leveämpi div
    </div>
  <div class="row">
    <div class="col-2">
      2. rivin pieni div
    </div>
    <div class="col-4">
      2. rivin keskimmäinen div
    </div>
    <div class="col-6">
      2. rivin levein div
    </div>
  </div>
</div>
```

Bootsrap grid adaptoituu jollakin tapaa näytön kokoon, mutta jos tätä halutaan parantaa määritellemällä itse tarkasti erilaisia leveyksiä eri kokoisille näytöille sekin onnistuu. Silloin *div*:eille annetaan useita luokkia erilaisilla leveyksillä. Asetukset skaalautuvat ylöspäin, eli pienemmän näytön asetuksia käytetään sitä suuremmille näytöille ellei niille ole erikseen annettu omia asetuksia.

- .col- (erittäin pieni näyttö, jonka leveys on alle 576px)
- .col-sm- (pieni näyttö, jonka leveys on 576px tai enemmän)
- .col-md- (keskikokoinen näyttö, jonka leveys on 768px tai enemmän)
- .col-lg- (suuri näyttö, jonka leveys on 992px tai enemmän)
- .col-xl- (erittäin suuri näyttö, jonka leveys on 1200px tai enemmän)

```html
<div class="row">
  <div class="col-6 col-md-4">Leveälle näytölle mahtuu kolme div:iä</div>
  <div class="col-6 col-md-4">Kapealle näytölle vain kaksi div:iä vierekkäin</div>
  <div class="col-6 col-md-4">ja kolmas siirtyy uudelle riville</div>
</div>
```

Lisää grid-systeemistä:
- [w3school](https://www.w3schools.com/bootstrap4/bootstrap_grid_system.asp)
- [Grid layout](https://getbootstrap.com/docs/4.3/layout/grid/)

### Bootsrap - komponentit

Bootstrap sisältää paljon erilaisia valmiita komponentteja, joiden avulla nettisivuista saa nopeasti näyttäviä:

- [Jumbotron](https://getbootstrap.com/docs/4.3/components/jumbotron/)
- [Carousel](https://getbootstrap.com/docs/4.3/components/carousel/)
- [Card](https://getbootstrap.com/docs/4.3/components/card/)
- [Collapse](https://getbootstrap.com/docs/4.3/components/collapse/)
- [Dropdown](https://getbootstrap.com/docs/4.3/components/dropdowns/)
- [Navbar](https://getbootstrap.com/docs/4.3/components/navbar/)

### Valmiit sivupohjat

Boostrap-pohjaisia valmiita sivupohjia hyödyntämällä saat sivut aikaan vielä nopeammpin. Kokeile esim. jotain valmista *template*:a:

- Ilmaisia Boostrap-templaatteja [Bootstrapmade.com](https://bootstrapmade.com/)