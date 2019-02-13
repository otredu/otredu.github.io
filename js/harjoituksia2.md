## Harjoituksia 2

### Ohjeet

Ennen tehtäviä käy läpi [DOM alkeita](./dom.html).

Tallenna harjoitukset omaan kansioosi magnesium-palvelimelle (tee uusi kansio javascript, jos ei ole jo tehtynä). Muista tallentaa kaikki harjoitukset tunnin lopuksi. Voit tehdä kaikki tehtävät samaan tiedostoon (suositeltavaa olisi kuitenkin käyttää kahteen erillistä tiedostoa .html ja .js).

### Tehtävä 1: Tervehtiminen input:in avulla

Tee funktio, joka lisää oheiselle HTML-sivulle tervehdyksen, joka käyttää _input_-kentässä annettua nimeä. Funktiota kutsutaan, kun GO!-nappia painetaan. Sivulle voisi ilmestyä esim. teksti: "Hei, ..., oletko valmis aloittamaan?" (... on käyttäjän antama nimi).

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Harjoitukset 2</title>
</head>
<body>
  <script></script>
  <h1>Tehtävä 1</h1>
  <p>Anna nimesi: </p>
  <input id="hello" type="text" name="firstname" value="">
  <button onclick="">GO!</button>
</body>
</html>
```

### Tehtävä 2: Iän tarkistus

Lisää edelliseen _html_-dokumenttiin uusi harjoitus osio (h1-otsikko) ja sen alle uusi _input_-kenttä, jossa kysytään käyttäjän ikää. Lisää myös uusi GO!-nappi. Tee funktio, joka tutkii onko annettu ikä alle 16, jos se on sivulle pitäisi ilmestyä teksti: "olet liian nuori pelaamaan tätä peliä". Muuten se ilmoittaa, "hyvä, jatketaan".

### Tehtävä 3. Arvaa mitä numeroa ajattelen

Lisää edelliseen _html_-dokumenttiin uusi harjoitus osio (otsikko) ja sen alle kolme _input_-kenttää, joissa kahdessa ensimmäisessä kysytään lukualueen ala- ja ylärajaa kokonaislukuina (esim. "Anna alaraja:") ja kolmannessa pyydetään arvaamaan kokonaislukua, jota ohjelma ajattelee. Lisää myös uusi GO!-nappi. Tee funktio, joka arpoo kokonaisluvun annetulta väliltä ja tutkii onko se sama, jota käyttäjä on arvannut. Jos arvaus ei mennyt oikein ilmoita sivulla: "Väärin meni. Ajattelin lukua: ... ". Jos arvaus meni oikein, ilmoita: "Oikein! Kannattaisiko lotota?".

### Lisätehtävä 1: Parempi arvauspeli

Korjaa tehtävän 3:n funktiota niin, että se ei hyväksy järjettömiä lähtöarvoja (alarajaa joka on suurempi kuin yläraja, tai arvausta joka ei edes osu lukuvälille jne.). Anna järkevä virheilmoitus. Lisää uusi ilmoitus mahdollisen vanhan tilalle (ei perään).

### Lisätehtävä 2: Parempi "arvaa mitä numeroa ajattelen"

Ohjelma antaa arvata useamman kerran sekä antaa vihjeen "lukuni on pienempi" tai "lukuni on suurempi".

### Lisätehtävä 3: Vielä parempi iän tarkistus

Tehtävä 3:n peli aukeaa sivulle vain jos ikää on tarpeeksi.
