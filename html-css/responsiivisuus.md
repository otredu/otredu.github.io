## Responsiivisuus

### @media

Nettisivun asetteluun eri laitteille soveltuvaksi voi vaikuttaa @media-säännöillä. Niiden avulla voidaan määritellä eri CSS-säännöt eri leveyksisille laitteille.

Jotta mobiililaitteen selain tietää, että sivusto on suunniteltu responsiiviseksi, HTML-tiedoston *head*-tagiin pitää lisätä tieto siitä (meta-tag):

```html
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link type="text/css" rel="stylesheet" href="myPage.css" >
</head>
```

Tämän jälkeen CSS-tiedostoon voidaan lisätä @media-sääntöjä eri levyisille näytöille. Seuraavassa esimerkissä leveällä näytöllä käytetään *grid*-asettelua, ja kapealla näytöllä *flex-box*-asettelua. Lisäksi kapealla näytöllä jätetään *aside*-elementti kokonaan pois. *screen* viittaa tietokoneen, tabletin tai puhelimen ruudun kokoon, sen tilalla voi käyttää myös *all* (viittaa kaikkiin medialaitteisiin).

Jotta sivun elementit eivät kutistu aivan älyttömiksi ruudun leveyden kaventuessa, leveys on syytä lukita jollekin tasolle (tässä esimerkissä 320px).

```css
@media screen and (max-width: 960px){
  body {
    display: grid;
    grid-template-areas:
      'header header header header header header'
      'aside nav nav nav nav nav'
      'aside article article article section section'
      'footer footer footer footer footer footer';
    grid-gap: 10px;
    background-color: peru;
    padding: 10px;
    font-size: 16px;
  }
}

@media screen and (max-width: 480px){
  body {
    display: flex;
    flex-direction: column;
    background-color: #3196F3;
    padding: 3px;
    font-size: 10px;
    }

  aside {
    display: none;
  }
}

@media screen and (max-width: 320px){
  body {
    width: 320px;
  }
}
```

### Mitat

Sivuston asettelun lisäksi on syytä tarkistaa sivulla käytetyt mitat kuten fonttien koko, margin ja padding asetukset jne. Vaikka @media-säännöllä voidaan määritellä eri kokoisia fontteja ei näytöille, jotta kovin montaa kohtaa koodissa ei joutuisi säätämään, kannattaa määritellä sivun perusfonttikoko (*body*-tagissä) ja viitata tähän kaikissa muissa mitoissa käyttämällä *em* yksikköä, jonka koko määrittyy suhteessa sivun perusfonttikokoon.

```css
body{
    font-size: 12px;
}

.myDiv {
    font-size: 1.5em;
    padding: 0.25em;
    margin: 0.5em;
}
```

### Testaaminen

Selaimen kehittäjänäkymässä on mahdollista aktivoida responsiivinen näkymä:

![Kehittäjänäkymän valikko](./img/aktivoi_mobiili2.PNG)

Voit kokeilla miltä sivusi näyttää eri laitteilla, vaaka- ja pystyasennossa:

![iPhone-pysty](./img/resp_iphone_pysty.PNG)

![iPhone-vaaka](./img/resp_iphone_vaaka.PNG)

### Lisätietoa

- Tutustu @media-säännön käyttöön [@media w3school](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)
- Video @media-säännön käytöstä  
[HTML5 and CSS3 Responsive design with media queries](https://www.youtube.com/watch?v=fA1NW-T1QXc)
