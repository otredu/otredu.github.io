## Harjoitukset 2

**Ennen näitä harjoituksia tutustu materiaaliin [PHP-alkeet 3](./php-alkeet3.html).**

Käytä *submit form*:ia parametrien välittämiseen ohjelmalle (saat ne superglobaalin muuttujan *$_GET* kautta).

Tee jokainen tehtävä omaan *.php*-tiedostoon ja tee palautussivusto, jonka yläpalkista pääsee selailemaan tehtäväsivujen välillä. Sijoita navigaatiopalkki kaikille tehtäville yhteiseen *header.php* tiedostoon, tee myös *footer.php*-tiedosto ja käytä näitä kaikissa tehtävissä.

Huom! Pyöristä arvot [ohje](https://www.php.net/manual/en/function.round.php).

---

### Tehtävä 1

Laadi PHP:n avulla ohjelma, joka laskee ja tulostaa, montako litraa bensaa tietyllä rahamäärällä saa. Pyydä lomakkeen avulla käytössä oleva rahamäärä, voit olettaa bensan hinnaksi 1,97 euroa/litra. 

*Huom!* PHP käyttää desimaalipistettä pilkun sijaan.

<img src="img/t1_lomake.PNG" alt="t1" width="200"/>


Tulostus voisi näyttää esim. tältä:

<img src="img/t1.PNG" alt="t1" width="200"/>

---

### Tehtävä 2

Laadi ohjelma, joka pyytää lomakkeella syötteinä ostosten loppusumman ja asiakkaan antaman rahamäärän, ja laskee ja tulostaa, paljonko asiakas saa takaisin. Esimerkiksi jos maksat satasella alle satasen ostokset, paljonko saat takaisin. Jos rahat eivät riitäkään, ohjelma tulostaa "Anna lisää rahaa".

<img src="img/t2_lomake.PNG" alt="t2" width="200"/>

Tulostus voisi näyttää esim. tältä:

<img src="img/t2.PNG" alt="t2" width="200"/>

---
### Tehtävä 3

Laadi ohjelma, joka pyytää lomakkeella tuotteen hinnan ja arvonlisäveroprosentin, ja laskee sekä tulostaa arvonlisäveron euromäärän sekä verollisen hinnan.

<img src="img/t3_lomake.PNG" alt="t3" width="200"/>

Tulostus voisi näyttää esim. tältä:

<img src="img/t3.PNG" alt="t3" width="200"/>

---
### Tehtävä 4

Laadi ohjelma, joka pyytää lomakkeella syötteenä luvun väliltä 1 - 10.
Itse ohjelmassa arvo satunnaisluku väliltä 1 -10.
Jos luvut ovat samat, ohjelma tulostaa "onnittelut", muuten "tämä arpa ei voittanut". 

<img src="img/t4_lomake.PNG" alt="t4" width="200"/>

Tulostus voisi näyttää esim. tältä:

<img src="img/t4.PNG" alt="t4" width="200"/>

---
### Tehtävä 5

Laadi ohjelma, joka pyytää lomakkeella syötteenä viimeisen kokeen arvosanan (1 - 3).
Jos luku on 1, ohjelma tulostaa "Paranna hiukan". Jos luku on 2, ohjelma tulostaa "Ihan ok" ja jos luku on 3, ohjelma tulostaa "Hienoa". Jos luku ei ole mikään näistä, se pyytää antamaan luvun uudestaan.

<img src="img/t5_lomake.PNG" alt="t5" width="200"/>

Tulostus voisi näyttää esim. tältä:

<img src="img/t5.PNG" alt="t5" width="200"/>

---
### Tehtävä 6

Laadi ohjelma, joka pyytää lomakkeella työntekijän työtunnit, tuntipalkan sekä ennakonpidätyksen veroprosentin, ja laskee ja tulostaa bruttopalkan, veron määrän ja nettopalkan.

<img src="img/t6_lomake.PNG" alt="t6" width="200"/>

Tulostus voisi näyttää esim. tältä:

<img src="img/t6.PNG" alt="t6" width="200"/>

---
### Tehtävä 7

Laadi ohjelma, joka pyytää lomakkeella tuotteen yksikköhinnan ja tilatun määrän sekä alennusprosentin, ja laskee sekä tulostaa kokonaishinnan (ilman alennusta), alennuksen määrän sekä alennetun hinnan.

<img src="img/t7a_lomake.PNG" alt="t7" width="200"/>

Tulostus voisi näyttää esim. tältä:

<img src="img/t7a.PNG" alt="t7" width="200"/>

---
### Tehtävä 8

Laadi ohjelma, jossa käyttäjää pyydetään syöttämään kahteen lomakekenttään luvut ja radionapin avulla tiedon siitä, haluaako hän tulostettavaksi suuremman vai pienemmän luvun. Haluttu luku tulostetaan ruudulle.

<img src="img/t8_lomake.PNG" alt="t8" width="200"/>

Tulostus voisi näyttää esim. tältä:

<img src="img/t8.PNG" alt="t8" width="200"/>

*Vihje:*

Radionapit tehdään näin: 

```html
suurempi: <input type="radio" name="valinta" value="suurempi">
pienempi: <input type="radio" name="valinta" value="pienempi">
```

Valinnan lukeminen:
```php 
if($_POST["valinta"]=="pienempi")
```
Voit tehdä toisen valituksi kirjoittamalla:

```html
suurempi: <input type="radio" name="valinta" value="suurempi" checked="checked">
```

---
###  Lisätehtävä 1

Laadi ohjelma, joka pyytää käyttäjää valitsemaan jonkun kysymyksen valmiista valintaluettelosta (dropdown). Käytä ratkaisussa switch - case-rakennetta. Keksi itse kysymykset ja vastaukset (tee vähintään viisi kysymystä/vastausta).

*Vihje:*

```html
<select name="arvosana">
    <option value="0">Ollako vai eikö olla?</option>
    <option value="1">Onks Viljoo näkyny?</option>
    <option value="2">Onks pakko?</option>
    <option value="3">Mihin se meni?</option>
    <option value="4">Mikä päivä tänään on?</option>
</select>
``` 

Jos haluat tulostaa jonkin valitun arvon lomakkeelle, käytä attribuuttia "selected".

```html
<option value="4" selected="selected">Mikä päivä tänään on?</option>
```

---
### Lisätehtävä 2

Toteuta edellinen tehtävä niin, että se arpoo vastauksen.

*Vihje:*

Laita vastausvaihtoehdot taulukkoon, käytä rand:ia ja taulukon indeksejä.

---
### Lisätehtävä 3

Palauta tekstin sijaan kuva (esim. jokin meemi, emoji tai animoitu gif).