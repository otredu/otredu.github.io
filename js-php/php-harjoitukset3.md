## Harjoitukset 3

**Ennen näitä harjoituksia tutustu materiaaliin [PHP-alkeet 4](./php-alkeet4.html).**

### Tehtävä 1

Tee to-do-lista, joka tulostetaan ruudulle. Jokainen tehtävä (task) on assosiatiivinen taulukko, jossa avaimina on "tehtävä", "deadline", "vastuuhenkilö", "valmis" (true/false). Tee yksi tehtävä ja tulosta se sivulle. Muuta totuusarvo merkkijonoksi ennen tulostamista. Tulostus voisi näyttää tältä:

---

- Tehtävä: Suunnittele tietokanta
- Deadline: 2.5.2019
- Vastuuhenkilö: Maija Mikkola
- Valmis: valmis

---

### Tehtävä 2

Jatka edellistä harjoitusta ja tee taulukko, jossa on monta tehtävää ja tulosta ne sivulle silmukassa (*foreach* tai *for*). Muuta valmis/kesken tekstin tilalle ikoni [katso esimerkki](https://www.w3schools.com/charsets/ref_utf_dingbats.asp). Tulostus voisi näytää tältä:

---

### Tehtävät:

Tehtävä: Suunnittele tietokanta
- Deadline: 2.5.2019
- Vastuuhenkilö: Maija Mikkola
- Valmis: ![valmis](./img/ok.PNG)

Tehtävä: Tee käyttöliittymäsuunnitelma
- Deadline: 12.7.2019
- Vastuuhenkilö: Seija Järvinen
- Valmis: ![valmis](./img/NOK.PNG)

---

### Tehtävä 3

Tee PHP-ohjelma, joka saa osoiterivillä (*submit form*:in kautta) parametrinaan, joko puhelinnumeron tai nimen. Sivulle palautetaan haetun henkilön nimi ja puhelinnumero. Tallenna nimet ja numerot assosiatiiviseen taulukkoon. Käytä ehtolausetta kun tarkistat kumpi parametri on annettu  (*$_GET*). Voit etsiä parametrin arvoa *array_search*-funktion avulla.
Tulostus voisi näyttää tältä:

---

Nimi: Janne Juvonen <br>
Puhelinnumero: 010-10101010

---

### Tehtävä 4

Tee PHP-ohjelma, joka kysyy lomakkeen avulla alennusprosentin ja laskee assosiatiiviseen taulukoon tallennetuille tuotteille uudet alennetut hinnat. Ohjelma tulostaa tiedot taulukon muodossa. Tulostus voisi näyttää tältä:

---

Alennus: -25%

| Tuote  | Alkuperäinen hinta | Alennettu hinta |
| --- | --- | --- |
| Takki  | 100€  | 75€ |
| Kengät  | 80€  | 60€ |

---

### Lisätehtävä 1

Tee harjoitus 2 käyttäen olioita (*class*). Katso mallia [täältä](./php-luokat.html).
