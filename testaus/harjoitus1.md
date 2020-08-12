# Yksikkötestaus: JEST

## Harjoitukset 1

Ennen harjoitusten tekemistä, asenna [JEST](jest.html), tutustu siihen miten erityyppistä tietoa testataan [expect](./jest-alkeet.html):in avulla. Katso mallia tunnilla käydystä [demo 1](./demo.html):stä.

### 1. Täysi-ikäisyys

Tee funktio, joka testaa onko henkilö täysi-ikäinen (*input*: ikä, *output*: totuusarvo). Tee yksikkötestit kaikille mahdollisille syötteille (funktion tulee toipua vääränlaisesta syötteestä eli merkkijonoista). Syötteestä josta ei voi toimia, heitä poikkeus. Muista testata kaikki ehtolauseen haarat.

### 2. Osamäärä

Tee funktio, joka palauttaa kahden luvun (a ja b) osamäärän. Laadi funktiolle testitapaukset, joissa testaat onnistuuko jakaminen. Funktion tulee toipua vääränlaisesta syötteestä (merkkijono, ei anneta jakajaa) ja heittää virhe, jos yritetään jakaa nollalla. Testaa kaikkien ehtolauseiden haarat.

### 3. Bussilipun hinta

Tee funktio, joka palauttaa oikean bussilipun hinnan (lukuarvona, ei merkkijonona), kun funktio saa paramatrinaan henkilön iän. Bussilippujen hinnat:

| Ikä/lippukategoria:    | Hinta (€):  |
| ------------- |:-------------:|
| alle 7v     | 0 |
| alle 16v koululaislippu     |  1  |
| 16-25 nuorisolippu | 1.5 |
| yli 25 aikuinen | 3 |
| yli 65 seniori |  1.5 |

Tee yksikkötestit kaikille mahdollisille syötteille (funktion tulee toipua vääränlaisesta syötteestä eli merkkijonoista). Testaa kaikki ehtolauseiden reuna-alueet.

*Vinkki:* käytä else if rakennetta.

### 4. Ympyrän pinta-ala

Tee funktio, joka laskee ympyrän pinta-alan (A=pi*r^2) ja pyöristää sen kahden desimaalin tarkkuuteen (esim. Math.round). Tee yksikkötestit kaikille mahdollisille syötteille (funktion tulee toipua vääränlaisesta syötteestä eli merkkijonoista, negatiivisesta säteen (r) pituudesta jne). Testaa kaikkien ehtolauseiden haarat.

*Vinkki 1:* kerro pyöristettävä luku ensin sadalla, pyöristä se ja jaa se sitten sadalla (näin saat pyöristysen 2 desimaalin tarkkuuteen).

*Vinkki 2:* Math.PI

### 5. Tuotteen hinta

Tee funktio, joka laskee tuotteen kokonaishinnan, kun sen parametrit ovat hinta, kanta-asiakkuus (totuusarvo) ja alv-prosentti (esim. 24%, 14%).

Jos asiakas on kanta-asiakas, ennen ALV:in lisäämistä hinnasta vähennetään alennus seuraavien ehtojen mukaisesti:

- hinta on 50 - 150€ alennus 2.5%
- hinta 150 - 250€ alennus 5%
- yli on 250€ alennus 10%

Testaa kaikkien ehtolauseiden haarat.

*Vinkki*:
Alennuksen prosenttikertoimet laskeminen:
- alennus on 10% --> prosenttikerroin on 0.9
- alennus on 20% --> prosenttikerroin on 0.8
jne

Hinnan korotuksen (alv nostaa hintaa) prosenttikertoimen laskeminen:
- jos alv on 24% --> prosenttikerroin on 1.24
- jos alv on 14% --> prosenttikerroin on 1.14
jne

Lopullinen hinta lasketaan:
hinta x alennuksen prosenttikerroin x alv:in prosenttikerroin

### Lisätehtävä. Taulukon (array) muuttaminen merkkijonoksi

Laadi funktio, joka muuttaa taulukon alkiot yhdeksi merkkijonoksi, jossa alkioiden välissä on : -merkki. Sallittuja taulukon alkioita ovat: merkkijonot, luvut ja totuusarvot (taulukossa ei saa olla alkiona toista taulukkoa, oliota, undefined eikä null). Testaa kaikki mahdolliset syötteet.

Tallenna koodi GitHub:iin. Palauta repon osoite opettajan tunnilla antamien ohjeiden mukaisesti.