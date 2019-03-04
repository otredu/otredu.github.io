## Harjoituksia 3

### Ohjeet

Katso mallia [Pure JS](./eventit.html). Käytä pelkästään JavaScriptiä, kaikissa tehtävissä. Lähde liikkeelle tästä HTML-tiedostosta, ja lisää jokaiselle tehtävälle oma *div*:insä "teht"-*div*:n sisälle.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Harjoitukset 3</title>
</head>
    <body>
        <h1>Harjoitukset 3</h1>
        <div id="teht"></div>
        <script type="module" src="harj3.js"></script>
    </body>
</html>
```

### Tehtävä 1a. Värin vaihtoa

Lisää edelliseen _html_-dokumenttiin uusi harjoitusosio (*div*, jossa on *h1*-otsikko tekstillä "Tehtävä 1"). Luo *div*:in sisälle lista (ul, li) funktioista, joita olet käyttänyt DOM:in muokkaamiseen tässä kurssissa (esim. querySelector, getElementById jne). Lisää jokaiselle listan alkiolle tapahtumakäsittelijä ("click") sekä callback-funktio, joka vaihtaa tekstin värin sitä klikattaessa. Ensimmäisellä klikkauksella väri vaihtuu vihreäksi, toisella punaiseksi, kolmannella taas vihreäksi jne.

*Vinkki* Funktioiden nimet kannattaa sijoittaa merkkijonoina taulukkoon.

### Tehtävä 1b. Lisätieto

Jatka edellistä tehtävää ja lisää jokaisen funktion nimen perään "lisätietoja"-niminen linkki, josta pääsee ko. funktiota käsittelevälle sivulle esim. *w3school.com* -sivustolla (jokaisella funktiolla on eri linkki).

*Vinkki* Muuta taulukossa olevat funktioiden nimet olioiksi. Olioilla voisi esim. olla ominaisuudet: "nimi" sekä "linkki".

### Tehtävä 2. Kuvan valinta

Lisää edelliseen _html_-dokumenttiin uusi harjoitusosio (*div*, jossa on *h1*-otsikko tekstillä "Tehtävä 2"). Lisää *div*:iin valikko, josta voi valita haluamansa kuvan hiirellä (esim. lista, jossa on "kissa", "koira" ja "kani"). Kun käyttäjä klikkaa "kissa":aa sivulle ilmestyy kissan kuva jne.

### Lisätehtävä 1: Animaatio

Laita edellisen tehtävän kuva katoamaan (siirtymään hitaasti kuvaruudun ulkopuolelle), kun sitä klikataan hiirellä.

Vinkki: Tee animaatio käyttämällä CSS:ää. Liitä CSS-animaatio johonkin luokkaan esim. *animate*. Saat animaation käyntiin, kun lisäät JavaScriptin avulla animoitavalle kuvalle tämän luokan. Katso vinkkiä [täältä](https://css-tricks.com/controlling-css-animations-transitions-javascript/).

### Lisätehtävä 2: Piilokuva

Valitse jokin kuva ja jaa se neljään osaan. "Piilota" osat saman kokoisten *div*:ien "alle". Kun *div*:iä klikkaa ko. kuvan osa ilmestyy ruudulle.

Vinkki: Voit jakaa kuvan neljään osaan käyttämällä PhotoShoppia, ja asetella osat ruudulle käyttämällä CSS:n *position: absolute;*. Toinen vaihtoehto on käyttää *canvas*-elementtiä ja piirtää sen avulla osia kuvasta (katso vinkkiä [täältä](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage)).

### Lisätehtävä 3: Pelilogiikkaa

Tutustu oheisen [pelin koodiin](https://github.com/otredu/js-games/tree/master/game-demo). Kokeile muuttaa koodia niin, että esineet liikkuvat eri tavalla (esim. eri erineet eri nopeuksilla) ja/tai pelaaja liikkuu eri tavalla. Lisää peliin pisteenlasku niin, että ruudulla näkyyvät pisteet (saat itse päättää paljonko pisteitä kustakin esineestä saa, tuleeko jostain miinuspisteitä jne). Lisää *game over*-ilmoitus kun pisteet menevät alle nollan tai pelaajan "elämät" loppuvat. Voit myös halutessasi tehdä täysin oman pelin.
