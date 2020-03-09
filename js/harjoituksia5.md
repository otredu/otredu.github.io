## JS lisäharjoituksia

Tyyli vapaa, voit käyttää näissä kaikkea mitä olet tälla kurssilla oppinut.

### Tehtävä 1a. Kuvan valinta

Lisää edelliseen _html_-dokumenttiin uusi harjoitusosio (*div*, jossa on *h1*-otsikko tekstillä "Tehtävä 2"). Lisää *div*:iin valikko, josta voi valita haluamansa kuvan hiirellä (esim. lista, jossa on "kissa", "koira" ja "kani"). Kun käyttäjä klikkaa "kissa":aa sivulle ilmestyy kissan kuva jne.

### Tehtävä 1b: Animaatio

Laita edellisen tehtävän kuva katoamaan (siirtymään hitaasti kuvaruudun ulkopuolelle), kun sitä klikataan hiirellä.

Vinkki: Tee animaatio käyttämällä CSS:ää. Liitä CSS-animaatio johonkin luokkaan esim. *animate*. Saat animaation käyntiin, kun lisäät JavaScriptin avulla animoitavalle kuvalle tämän luokan. Katso vinkkiä [täältä](https://css-tricks.com/controlling-css-animations-transitions-javascript/).

### Tehtävä 2: Piilokuva

Valitse jokin kuva ja jaa se neljään osaan. "Piilota" osat saman kokoisten *div*:ien "alle". Kun *div*:iä klikkaa ko. kuvan osa ilmestyy ruudulle.

Vinkki: Voit jakaa kuvan neljään osaan käyttämällä PhotoShoppia, ja asetella osat ruudulle käyttämällä CSS:n *position: absolute;*. Toinen vaihtoehto on käyttää *canvas*-elementtiä ja piirtää sen avulla osia kuvasta (katso vinkkiä [täältä](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage)).

### Tehtävä 3: Pelilogiikkaa

Tutustu oheisen [pelin koodiin](https://github.com/otredu/js-games/tree/master/game-demo). Kokeile muuttaa koodia niin, että esineet liikkuvat eri tavalla (esim. eri erineet eri nopeuksilla) ja/tai pelaaja liikkuu eri tavalla. Lisää peliin pisteenlasku niin, että ruudulla näkyyvät pisteet (saat itse päättää paljonko pisteitä kustakin esineestä saa, tuleeko jostain miinuspisteitä jne). Lisää *game over*-ilmoitus kun pisteet menevät alle nollan tai pelaajan "elämät" loppuvat. Voit myös halutessasi tehdä täysin oman pelin.
