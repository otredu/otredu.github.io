# Yksikkötestaus: JEST

## Harjoitukset

Ennen harjoitusten tekemistä, asenna [JEST](jest.html), tutustu siihen miten erityyppistä tietoa testataan [expect](./jest-alkeet.html):in avulla. Katso mallia tunnilla käydystä [demo 1](./demo.html):stä.

### 1. Täysi-ikäisyys

Tee funktio, joka testaa onko henkilö täysi-ikäinen (*input*: ikä, *output*: totuusarvo). Tee yksikkötestit kaikille mahdollisille syötteille (funktion tulee toipua vääränlaisesta syötteestä eli merkkojonoista). Syötteestä josta ei voi toimia, heitä poikkeus. Muista testata kaikki ehtolauseen haarat.

### 2. Osamäärä

Tee funktio, joka palauttaa kahden luvun (a ja b) osamäärän. Laadi funktiolle testitapaukset, joissa testaat onnistuuko jakaminen. Funktion tulee toipua vääränlaisesta syötteestä (merkkijono, nollalla jakaminen) ja antaa järkevä paluuarvo. Testaa kaikkien ehtolauseiden haarat.

### 3. Bussilipun hinta

Tee funktio, joka palauttaa oikean bussilipun hinnan, kun funktio saa paramatrinaan henkilön iän. Bussilippujen hinnat:

| Ikä/lippukategoria:    | Hinta:  |
| ------------- |:-------------:|
| alle 7v     | ilmainen |
| alle 16v koululaislippu     |  1€  |  
| 16-25 nuorisolippu | 1.50€ |
| yli 25 aikuinen | 3€ |
| yli 65 seniori |  1.5€ |

Tee yksikkötestit kaikille mahdollisille syötteille (funktion tulee toipua vääränlaisesta syötteestä eli merkkijonoista). Testaa kaikki ehtolauseiden reuna-alueet. *Vinkki:* käytä else if rakennetta.

### 4. Kolmion pinta-ala

Tee funktio, joka laskee kolmion pinta-alan ja pyöristää sen kahden desimaalin tarkkuuteen (Math.floor). Tee yksikkötestit kaikille mahdollisille syötteille (funktion tulee toipua vääränlaisesta syötteestä eli merkkijonoista, negatiivisesta sivun pituudesta jne). Testaa kaikkien ehtolauseiden haarat.

### 5. Tuotteen hinta

Tee funktio, joka laskee tuotteen kokonaishinnan, kun sen parametrit ovat hinta ja ALV-prosentti (desimaalilukuna). Ennen ALV:in lisäämistä hinnasta vähennetään alennus seuraavien ehtojen mukaisesti:

- hinta on 100 - 200 alennus 5%
- hinta 201 - 500 alennus 10%
- hinta on 500 alennus 15%

Testaa kaikkien ehtolauseiden haarat.

### Lisätehtävä. Taulukon muuttaminen merkkijonoksi

Laadi funktio, joka muuttaa taulukon alkiot yhdeksi merkkijonoksi, jossa alkioiden välissä on : -merkki. Sallittuja taulukon alkioita ovat: merkkijonot, luvut ja totuusarvot (taulukossa ei saa olla alkiona toista taulukkoa, oliota, undefined eikä null). Testaa kaikki mahdolliset syötteet.

Tallenna koodi GitHub:iin. Palauta repon osoite opettajan tunnilla antamien ohjeiden mukaisesti.