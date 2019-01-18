## Yksikkötestaus: JEST

## Harjoitukset

### Demo: Sum-funktion parantelu
Korjataan sum-funktiota niin että se toipuu vääränlaisesta syötteestä (käsittelee merkkijonot oikein) ja lisätään testitapauksia.

### 1. Täysi-ikäisyys
Tee funktio, joka testaa onko henkilö täysi-ikäinen. Tee yksikkötestit kaikille mahdollisille syötteille (funktion tulee toipua vääränlaisesta syötteestä eli merkkojonoista). Testaa kaikki ehtolauseen haarat.

### 2. Osamäärä 
Tee funktio, joka palauttaa kahden luvun (a ja b) osamäärän. Laadi luokalle testitapaukset, joissa testaat onnistuuko jakaminen. Funktion tulee toipua vääränlaisesta syötteestä (merkkijono, nollalla jakaminen) ja antaa järkevä paluuarvo. Testaa kaikki ehtolauseiden haarat.

### 3. Bussilipun hinta
Tee funktio, joka palauttaa oikean bussilipun hinnan kun funktio saa paramatrinaan henkilön iän. Bussilippujen hinnat (alle 7v ilmainen, 7-16v koululaislippu, 16-25 nuorisolippu, yli 25 aikuinen, yli 65 seniori). Tee yksikkötestit kaikille mahdollisille syötteille (funktion tulee toipua vääränlaisesta syötteestä eli merkkojonoista). Testaa kaikki ehtolauseiden reuna-alueet.

### 4. Kolmion pinta-ala 
Tee funktio, joka laskee kolmion pinta-alan ja pyöristää sen kahden desimaalin tarkkuuteen (Math.floor). Tee yksikkötestit kaikille mahdollisille syötteille (funktion tulee toipua vääränlaisesta syötteestä eli merkkijonoista, negatiivisesta sivun pituudesta jne). Testaa kaikkien ehtolauseiden haarat.

### 5. Tuotteen hinta 
Tee funktio, joka laskee tuotteen kokonaishinnan, kun sen parametrit ovat hinta ja ALV-prosentti (desimaalilukuna). Ennen ALV:in lisäämistä hinnasta vähennetään alennus seuraavien ehtojen mukaisesti:
- hinta on 100 - 200 alennus 5%
- hinta 201 - 500 alennus 10%
- hinta on 500 alennus 15%
Testaa kaikkien ehtolauseiden haarat.

### Lisätehtävä. Taulukon muuttaminen merkkijonoksi
Laadi funktio, joka muuttaa taulukon alkiot yhdeksi merkkijonoksi, jossa alkioiden välissä on : -merkki. Sallittuja taulukon alkoita ovat: merkkijonot, luvut ja totuusarvot (taulukossa ei saa olla alkiona toista taulukkoa, oliota, undefined eikä null). Testaa kaikki mahdolliset syötteet.