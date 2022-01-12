## Harjoitukset 1

Voit tehdä kaikki vastaukset samaan tiedostoon (demon alapuolelle), erota ne kuitenkin h3-tasoisilla otsikoilla.

### Tehtävä 1

Luo seuraavat muuttujat, anna niille järkevät arvot:

$aidinika, esim. 30
$isanika, esim. 34
$lapsenika, esim 4

Laske seuraavat laskutoimitukset ja tulosta selityksineen vastaukset ruudulle (luo vastausta varten uusi muuttuja):

Laske kaikkien kolmen iät yhteen
Laske, minkä ikäinen äiti on ollut, kun on saanut lapsen
Laske isän syntymävuosi (tarkkuus 1 vuosi, oletuksena $isanika pätee tänä vuonna)

### Tehtävä 2

Ratkaise funktion avulla:

Aseta arvonlisäveron laskentaa varten vakio ALV ja anna sen arvoksi 0.24.
Laske arvonlisäveron määrä seuraavista hinnoista: 10 €, 20 €, 35,5 € ja 1.80 €
Tulosta vastaukset ymmärrettävällä tavalla ruudulle (vastaus kertoo mitä on laskettu ja mistä arvosta).

### Tehtävä 3

Katso, että syntynyt sivu on validia HTML:ää (alku ja loppu!)

### Tehtävä 4

Tee funktio, joka vertailee kolmea lukua a, b ja c:

- jos luvut ovat yhtäsuuria, tulosta "kaikki ovat yhtäsuuria"
- jos 2 lukua ovat keskenään yhtäsuuria (a ja b ovat yhtäsuuria, a ja c ovat yhtäsuuria tai b ja c ovat yhtäsuuria) tulosta: "kaksi lukua on yhtäsuuria"
- jos a < b < c, tulosta "luvut ovat nousevassa suuruusjärjestyksessä"
- jos a > b > c, tulosta "luvut ovat laskevassa suuruusjärjesteyksessä"
- muuten tulosta "luvuissa ei ole mitään tolkkua"

Tulosta näkyville myös annetut luvut, esimerkkitulostus:

a=1, b=2, c=3
luvut ovat nousevassa suuruusjärjestyksessä

### Tehtävä 5

Tutustu rand-funktion toimintaan [w3schools](https://www.w3schools.com/php/php_math.asp).

Toteuta sitten seuraava tehtävä PHP:n avulla:

Arpajaiset:olet järjestämässä arpajaisia. Arvat on numeroitu numeroin 1 - 1000. Arvo voittajanumero ja tulosta se selityksineen ruudulle.

### Tehtävä 6

Tutki seuraavien funktioiden toiminta [w3schools](https://www.w3schools.com/php/php_math.asp):

round
ceil
floor

Pyöristä luvut:

1.5 alaspäin kokonaisluvuksi
1.456 ylöpäin kahden desimaalin tarkkuudella
68995 kymmenien tarkkuudella
124.558 satojen tarkkudella
3.14 ylöspäin kokonaisluvuksi

Tulosta tulokset selityksineen.

### Tehtävä 7

Arvo satunnaisluku väliltä 1 - 20 muuttujaan.

Tarkista, onko se parillinen vai pariton ja tulosta kumpi on kyseessä. Parillisuuden testaamisessa kannattaa käyttää jakojäännöstä (mitä jää yli, kun luku jaetaan kahdella). PHP:n jakojäännös lasketaan samalla tavalla kuin JavaScriptissä: $luku % $jakaja.

### Tehtävä 8

Arvo satunnaisluku väliltä 1 - 100 muuttujaan.

Jos luku on välillä 30 - 50, tulosta arvottu luku ja "Pienehkö"
Jos luku on pienempi kuin 10 tai suurempi kuin 90, tulosta luku sekä teksti "ääriarvo"
Jos luku on pienempi kuin 50 ja parillinen, tulosta sekä arvottu luku että teksti "Pieni ja parillinen".
Jos luku ei ole 35, tulosta luku ja teksti "Ei 35"

### Tehtävä 9

Tee seuraavat muunnokset ja vertailut. Tulosta vastauksen arvo ruudulle selitystekstin kera.

kumpi on suurempi: neliöjuuri 146:sta vai 3 potenssiin 3
kumpi on suurempi: 165 / 8 laskun jakojäännös vai hexadesimaaliluvun 03 arvo desimaalilukuna
mikä on suurin: hexadesimaaliluvun AF arvo desimaalilukuna, 5 potenssiin 3 vai luku 155