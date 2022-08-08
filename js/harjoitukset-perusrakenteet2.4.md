## JavaScript Harjoitukset 2.4

Tee Visual Studio Code:lla uusi tiedosto, nimeä se harjoitukset2_4.js. Avaa VS:n terminaali ja aja koodi kirjoittamalla konsoliin: node harjoitukset2_4.js. Tee kaikki tehtävät samaan tiedostoon. Testaa funktioiden toiminta usealla eri syötteellä, jätä kaikki testit näkyville tiedostoon.

### Tehtävä 1: Parillisuus

Tee funktio, joka tarkistaa, onko sen syötteenä saama luku parillinen vai pariton. Funktio palauttaa joko sanan "parillinen"" tai "pariton". Luku on parillinen, jos jaettaessa se kahdella, jakojäännös on 0. Kutsu funktiota eri luvuilla ja tulosta vastaus konsoliin.

### Tehtävä 2: Iso alkukirjain

Tee funktio, joka muuntaa annetun tekstin ensimmäisen merkin isoksi. Testaa ja tulosta tulos konsolille.

### Tehtävä 3: Katkaise nimi

Tee funktio, joka jättää merkkijonoon annetun määrän merkkejä. Tulosta lopputulos konsolille. Käytä slice-metodia. Tarkista ensin, että kyseessä on merkkijono:

```js
if(typeof myVar === 'string' || myVar instanceof String) 
```

Tarkista myös, että ja merkkijonon pituus on enemmän kuin 0.

*Esimerkki:*
console.log(katkaise_nimi("Leevi Syrjakyla",4))
Tulostaa: "Leev"

### Tehtävä 4: Palindromi

Tee funktio, joka kysyy käyttäjältä palindromin, ja tarkistaa, onko sille annettu sana palindromi ja tulostaa vastauksen kuvaruudulle. Huomioi välilyönnit!

### Tehtävä 5: Käyttäjätunnus

Tee funktio, joka kysyy käyttäjän etu- ja sukunimen. Tee toinen funktio, joka luo käyttäjän nimen avulla käyttäjätunnuksen seuraavasti: alkuosa on tredu ja lisäksi siinä on etu- ja sukunimen kolme ensimmäistä kirjainta, isot kirjaimet muutetaan pieniksi ja ääkköset korvataan ä -> a, ö -> o, å -> o

Tulosta nimi sekä saatu käyttäjätunnus konsolille.

*Esimerkki:*
nimi: Leevi Syrjäkylä
käyttäjätunnus: treduleesyr

### Tehtävä 6: Ostoslista

Luo seuraava ostoslista JavaScript-taulukkona: ['leipä','voi','maito','kahvi','juusto']

Tulosta lista allekkain console.login avulla (käytä tulostukseen toistorakennetta). Muuta listasta maito kermaksi. Tulosta lista uudestaan. Tulosta myös taulukon pituus (length).

### Tehtävä 7: Luo taulukko

Kirjoita JavaScript-funktio, joka saa parametrin n, ja joka palauttaa taulukon, jossa on n elementtiä, elementtien arvo alkaa ykkösestä ja kasvaa yhdellä.

Kutsu ohjelmaa eri n:n arvoilla ja tulosta konsolille saatu taulukko.

### Tehtävä 8: Lyhennä sukunimi

Tee funktio, joka muuntaa etu- ja sukunimen sisältävän merkkijonon lyhyempään muotoon:

*Esimerkki:*
console.log(lyhenna_nimi("Leevi Syrjakyla"));
Tulostaa: "Leevi S."

*Vihje:*
Jaa (split) ensin merkkijono taulukkoon välilyönnin kohdalta.
Lue taulukosta etunimi kokonaan ja sukunimestä vain ensimmäinen merkki, yhdistä takaisin merkkijonoksi (join).
