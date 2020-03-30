## DOM perusharjoitukset

### Ohjeet

Ennen tehtäviä käy läpi [DOM alkeita](./dom.html).
Tutustu myös [domdemo1](./domdemo1.html)-koodiin.

Tee kaikki tehtävät samoihin tiedostoihin (yksi .html ja yksi .js tiedosto).

Tee jokaiselle tehtävälle oma *div*.

HUOM! Voit tehdä HTML-elementit HTML-tiedostoon (ei tarvitse luoda niitä JavaScriptin avulla vielä).

### Tehtävä 1: Tervehtiminen input:in avulla

Tee funktio, joka lisää oheiselle HTML-sivulle tervehdyksen, joka käyttää _input_-kentässä annettua nimeä. Funktiota kutsutaan, kun GO!-nappia painetaan. Sivulle voisi ilmestyä esim. teksti: "Hei, ..., oletko valmis aloittamaan?" (... on käyttäjän antama nimi). Muista lisätä *script*-tagin *src*-attribuuttiin .js-tiedostosi nimi.

```html
<!DOCTYPE html>
<html lang="fi">
<head>
    <meta charset="UTF-8">
    <title>Harjoitukset 2</title>
</head>
<body>
  <div id="teht1">
    <h1>Tehtävä 1</h1>
    <p>Anna nimesi: </p>
    <input id="hello" type="text" name="firstname" value="">
    <button id="go1">GO!</button>
  </div>
  <script src="harj3.js"></script>
</body>
</html>
```

### Tehtävä 2: Iän tarkistus

Lisää edelliseen _html_-dokumenttiin uusi harjoitusosio (div + h1-otsikko) ja sen alle uusi _input_-kenttä, jossa kysytään käyttäjän ikää. Lisää myös uusi GO!-nappi. Tee funktio, joka tutkii onko annettu ikä alle 16, jos se on sivulle pitäisi ilmestyä teksti: "olet liian nuori pelaamaan tätä peliä". Muuten se ilmoittaa, "hyvä, jatketaan".

### Tehtävä 3. Arvaa mitä numeroa ajattelen

Lisää edelliseen _html_-dokumenttiin uusi harjoitus osio (div+otsikko) ja sen alle kolme _input_-kenttää, joissa kahdessa ensimmäisessä kysytään lukualueen ala- ja ylärajaa kokonaislukuina (esim. "Anna alaraja:") ja kolmannessa pyydetään arvaamaan kokonaislukua, jota ohjelma ajattelee. Lisää myös uusi GO!-nappi. Tee funktio, joka arpoo kokonaisluvun annetulta väliltä ja tutkii onko se sama, jota käyttäjä on arvannut. Jos arvaus ei mennyt oikein ilmoita sivulla: "Väärin meni. Ajattelin lukua: ... ". Jos arvaus meni oikein, ilmoita: "Oikein! Kannattaisiko lotota?".

### Tehtävä 4: Parempi arvauspeli

Korjaa tehtävän 3:n funktiota niin, että se ei hyväksy järjettömiä lähtöarvoja (alarajaa joka on suurempi kuin yläraja, tai arvausta joka ei edes osu lukuvälille jne.). Anna järkevä virheilmoitus.

### Lisätehtävä 1: Vielä parempi iän tarkistus

Tehtävä 3:n peli aukeaa sivulle vain jos ikää on tarpeeksi.

### Lisätehtävä 2: Parempi "arvaa mitä numeroa ajattelen"

Ohjelma antaa arvata useamman kerran sekä antaa vihjeen "lukuni on pienempi" tai "lukuni on suurempi".

### Lisätehtävä 3. Parantele koodia

Tee tämä tehtävä vain, jos teit HTML-elementit JavaScript:llä.

Nyt sivulle ilmestyy jokaisesta vastauksesta uusi elementti (uusi teksti). Koodissa on myös paljon toistoa. Korjaa (restrukturoi) koodisi:

- siirrä *createTextNode* ja *createElement* erilliseen *makeTextNode*-funktion, joka tekee uuden elementin sekä sille uuden *textNode*:n ja liittää ne yhteen (*appendChild*). Funktio saa parametrinaan tekstin ja palauttaa tehdyn elementin, aseta elementin luokaksi *answer*)

- lisää ehtolause, joka testaa onko *answer* - elementti, jo olemassa, jos ei ole kutsutaan *makeTextNode*:a, jos on, sijoitetaan uusi viesti jo olemassa olevaan elementtiin  
