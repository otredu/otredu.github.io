## Harjoitukset 3

**Ennen näitä harjoituksia tutustu materiaaliin [PHP-alkeet 4](./php-alkeet4.html).**

### Tehtävä 1

Laadi ohjelma, joka tulostaa nimesi 10 kertaa, käytä for-silmukkaa.

### Tehtävä 2

Laadi ohjelma, joka tulostaa seuraavat viisi vuotta kuvaruudulle. Nykyisen vuoden saat selville funktiolla date('Y');

### Tehtävä 3

Tee while-silmukan avulla vuorovaikutteinen ohjelma, joka pyytää lomakkeen avulla suorakaiteen korkeuden ja leveyden sekä tulostaa "*"-merkeistä muodostuvan suorakaiteen. Jos syötteet ovat vaikka korkeus 3 ja leveys 8, ohjelma tulostaa:

```cmd
********
********
********
```

### Tehtävä 4

Esittele kaksi taulukkoa joista toisessa on etunimiä (vähintään viisi) ja toisessa sukunimiä (saman verran). Tulosta taulukoiden sisällöt li-elementtien sisälle php:n avulla.

$etunimet = array("Timo", "Tero", "Tauno");
$sukunimet = array("Virtanen", "Salonen", "Nieminen");

Esimerkki:

Virtanen, Timo
Salonen, Tero
Nieminen, Tauno

### Tehtävä 5

Käytä edellisen harjoituksen taulukoita myös tässä harjoituksessa. Arvo luku väliltä nolla - (taulukon koko - 1) ja tulosta satunnainen sukunimi ja satunnainen etunimi. Suorita arpominen nappia painamalla.

Jotta voit tarkistaa php:ssa onko nappia painettu sinun täytyy määritellä myös submit-painikkeelle nimi:

```php
<?php
if (isset($_POST["arvoNimi"])) {
  echo "nappia painettu";
}
?>

<form method="post">
<input type="submit" value="Arvo nimi" name="arvoNimi" />
</form>
```

### Tehtävä 6

Määrittele koodissasi moniulotteinen taulukko joka sisältää vähintään viisi maata, kyseisten maiden pääkaupunkia ja maiden väkiluvut. Käytä maiden määrittelyyn assiatiivista taulukkoa. Tulosta kaupunkien tiedot taulukkoon.

Esimerkki


| Index	| Country	 | Capital |	Population |
| -------- | ------- | ------ | ------- |
| 0	| Finland |	Helsinki |	5528737 |
| 1	 | Sweden |	Stockholm |	10377781 |
| 2	| Norway  |	Oslo |	5372191 |
| 3	| Denmark |	Copenhagen |	5809502 |
| 4	| Iceland |	Reykjavik |	343518 |

