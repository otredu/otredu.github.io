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