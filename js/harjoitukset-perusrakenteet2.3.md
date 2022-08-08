### JavaScript Harjoitukset 2.3

Tee Visual Studio Code:lla uusi tiedosto, nimeä se harjoitukset2_3.js. Avaa VS:n terminaali ja aja koodi kirjoittamalla konsoliin: node harjoitukset2_3.js. Tee tehtävät 1-6 samaan tiedostoon. Testaa funktioiden toiminta usealla eri syötteellä, jätä kaikki testit näkyville tiedostoon.

Ratkaise seuraavat tehtävät käyttäen silmukkarakenteita.

### Tehtävä 1: Potenssit

Tee funktio, joka tulostaa lukujen 1-10 toiset potenssit (käytä for-silmukkaa).

Ohjelman pitää tulostaa:
1, 4, 9, 16, ...

### Tehtävä 2: Vuosiluvut

Tee funktio, joka tulostaa viisi seuraavaa vuotta (käytä for-silmukkaa). Tämän vuoden saat seuraavasti:

```js
var d = new Date(); var n = d.getFullYear();
```

### Tehtävä 3: Joka kolmas

Tee funktio, joka tulostaa for-silmukkaa käyttäen joka kolmannen luvun välillä 1-100.

Ohjelman pitää tulostaa: 0, 3, 6, 9, 12, ...

### Tehtävä 4: Kutosen kertotaulu

Tee funktio, joka tulostaa luvun 6 kertotaulun 20 asti (käytä for-silmukkaa)

Ohjelman pitää tulostaa:

6 * 1 =6
6 * 2 =12
6 * 3 = 18
...

### Tehtävä 5: Kertotaulut

Päivitä edellisen tehtävän funktiota niin, että se tulostaa parametrina annetun luvun kertotaulun. Tee sen avulla funktio, joka tulostaa lukujen 1-10 kertotaulut.

*Vihje*: tarvitset kaksi for-lausetta sisäkkäin

### Tehtävä 6: Lottogeneraattori

Tee funktio, joka palauttaa satunnaisluvun välillä 1 - 38. Käytä Math.random()-metodia.

Tee sen jälkeen lottogeneraattori, joka arpoo 7 lukua ja tulostaa ne ruudulle (kahta samaa numeroa ei tarvitse ottaa huomioon tehtävässä). Käytä while-silmukkaa.

---

Tee Visual Studio Code:lla uusi tiedosto, nimeä se harjoitukset2_3.html. Tee tehtävät 6-15 samaan tiedostoon. Tehtävät testataan selaimessa avaamalla ko. tiedosto. Voit kirjoittaa funktiot suoraan HTML-tiedostoon \<script>\</script> tägien sisään tai tehdä ne omaan *.js tiedostoon ja liittää sen HTML-tiedostoon:

```html
<script src="harj2.3.js"></script>
```

### Tehtävä 7: Arvaa luku

Sovella edellistä tehtävää. Arvo luku väliltä 1 - 10, pyydä käyttäjältä lukuja ja lopeta pyytäminen, kun hän kirjoittaa arvotun luvun. Tee kaksi vaihtoehtoista toteutusta *while*- ja *do-while* -silmukalla. Kerro käyttäjälle Alertin avulla, kun hän arvasi oikein.

### Tehtävä 8: Mihin asti

Pyydä käyttäjältä luku promptilla (esim. "Mihin asti?"). Tee funktio, joka tulostaa konsolille kokonaisluvut 1:stä käyttäjän antamaan lukuun asti. Käytä *while*-silmukkaa.

### Tehtävä 9: Mistä mihin asti

Päivitä edellisen tehtävän funktiota niin, että se kysyy käyttäjältä myös alarajan. Eli mistä asti luvut tulostetaan.
Esimerkkitulostus:

Mihin asti? 6
Mistä lähtien? 3
3
4
5
6

### Tehtävä 10: Kertoma

Pyydä käyttäjältä luku promptilla (esim "Anna luku:"). Tee funktio, joka laskee käyttäjän syöttämän luvun kertoman.
Kertoma n! lasketaan kaavalla 1 * 2 * 3 * ... * n

Esimerkki:

- luvun 3 kertoma on 6, eli 3! = 1 * 2 * 3 = 6
- luvun 4 kertoma on 24, eli 4! = 1 * 2 * 3 * 4 = 24

Lisäksi on määritelty, että luvun 0 kertoma on 1, eli 0! = 1.

Esimerkkitulostuksia:
Anna luku: 4
Kertoma on 24

Anna luku: 10
Kertoma on 3628800

### Tehtävä 11: Lukujen lukeminen

Tee funktio, joka kysyy käyttäjältä lukuja (ohjelma tulostaa käyttäjälle aluksi "Syötä luku:"), ja tulostaa luvun konsolille. Ohjelma lopettaa ja tulostaa "Kiitos ja näkemiin!", kun käyttäjä antaa luvun -1.

### Tehtävä 12: Lukujen summa

Päivitä edellisen tehtävän funktiota niin, että se ilmoittaa lopuksi käyttäjän syöttämien lukujen summan. (Lukua -1 ei lasketa mukaan.)

Esimerkkitulostus:
2
3
4
Kiitos ja näkemiin!
Summa: 9

### Tehtävä 13: Lukujen lukumäärä

Päivitä edellisen tehtävän funktiota niin, että se ilmoittaa myös käyttäjien antamien lukujen lukumäärän. (Lukua -1 ei lasketa mukaan.)

Esimerkkitulostus:
Syötä luvut:
4
2
6
Kiitos ja näkemiin!
Summa: 12
Lukuja: 3

### Tehtävä 14: Lukujen keskiarvo

Päivitä edelleen samaa funktiota: muuta edellistä siten, että se ilmoittaa myös lukujen keskiarvon. (Lukua -1 ei lasketa mukaan.)

### Tehtävä 15: Parilliset ja parittomat

Päivitä edellisen tehtävän funktiota siten, että se ilmoittaa parillisten ja parittomien lukujen määrän. (Lukua -1 ei lasketa mukaan.)

Esimerkkitulostus
Syötä luvut:
5
2
4
Kiitos ja näkemiin!
Summa: 11
Lukuja: 3
Keskiarvo: 3.666666666666
Parillisia: 2
Parittomia: 1
