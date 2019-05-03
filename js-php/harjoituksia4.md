## Harjoitukset 4

Tutustu materiaalin PHP-alkeet osioon ja tee nämä tehtävät.

### Harjoitus 1

Tee PHP-ohjelma, joka saa osoiterivillä (*submit form*:in kautta) parametrinaan hinnan (*$_GET*) sekä alennusprosentin. Käytä näitä tietoja ja ilmoita sivulla uusi alennettu hinta. Tee funktio, joka laskee alennetun hinnan. Tulostus voisi näyttää tältä:

---

Hinta: 100€ <br>
Alennusprosentti: 25 <br>
Uusi alennettu hinta: 75€ <br>

---

### Harjoitus 2

Tee to-do-lista, joka tulostetaan ruudulle. Jokainen tehtävä (task) on assosiatiivinen taulukko, jossa avaimina on "tehtävä", "deadline", "vastuuhenkilö", "valmis" (true/false). Tee yksi tehtävä ja tulosta se sivulle. Muuta totuusarvo merkkijonoksi ennen tulostamista. Tulostus voisi näyttää tältä:

---
<em>

- Tehtävä: Suunnittele tietokanta
- Deadline: 2.5.2019
- Vastuuhenkilö: Maija Mikkola
- Valmis: valmis
</em>

---

### Harjoitus 3

Jatka edellistä harjoitusta ja tee taulukko, jossa on monta tehtävää ja tulosta ne sivulle silmukassa (*foreach* tai *for*). Muuta valmis/kesken tekstin tilalle ikoni [katso esimerkki](https://www.w3schools.com/charsets/ref_utf_dingbats.asp). Tulostus voisi näytää tältä:

---
<em>

### Tehtävät:

Tehtävä: Suunnittele tietokanta
- Deadline: 2.5.2019
- Vastuuhenkilö: Maija Mikkola
- Valmis: ![valmis](./img/ok.PNG)

Tehtävä: Tee käyttöliittymäsuunnitelma
- Deadline: 12.7.2019
- Vastuuhenkilö: Seija Järvinen
- Valmis: ![valmis](./img/NOK.PNG)
</em>
---

### Harjoitus 4

Tee PHP-ohjelma, joka saa osoiterivillä (*submit form*:in kautta) parametrinaan, joko puhelinnumeron tai nimen. Sivulle palautetaan haetun henkilön nimi ja puhelinnumero. Tallenna nimet ja numerot assosiatiiviseen taulukkoon. Käytä ehtolausetta kun tarkistat kumpi parametri on annettu  (*$_GET*).
Tulostus voisi näyttää tältä:

---
<em>

Nimi: Janne Juvonen <br>
Puhelinnumero: 010-10101010
</em>

---