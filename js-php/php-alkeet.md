## PHP-alkeet

### PHP-syntaksi

PHP:n syntaksi on hyvin samankaltainen JavaScriptin kanssa. Erojakin toki on:

1. Kooditiedoston pitää alkaa *<?php*-tägillä.
2. Muuttujan nimen eteen pitää aina laittaa $-merkki
3. Konsolille tulostaminen tapahtuu *echo* komennolla (vs. *console.log*)
4. Merkkijonoja yhdistetään pisteen (.) avulla, ei plusmerkin (+) avulla.

Tämä materaali seuraa [Laracast-sarjan PHP-tutoriaalia](https://laracasts.com/series/php-for-beginners), eli käytössä on PHP:n versio 7.

PHP-koodi kirjoitetaan tiedostoon, jonka liite on *.php. Kooditiedoston esimmäisenä rivinä pitää lukea:

```php
<?php
```

muuten php-tulkki ei tunnista tiedostoa PHP:ksi. Lopputägiä ei tarvitse laittaa, kun kyseessä on vain PHP-koodia sisältävä tiedosto (HTML:n sisään kirjoitettuna lopputägi on pakollinen).

PHP-tiedostot sijaitsevat yleensä web-palvelimella, mutta tiedoston voi ajaa lokaalisti myös php-tulkin kautta. Voit ajaa koodisi komentoriviltä näin:

```cmd
> php omakoodi.php
```

### Muuttujat ja niiden arvon tulostaminen

Muuttujiin voi tallentaa tietoa: lukuja, merkkijonoja, taulukoita jne. Muuttujan nimen eteen lisätään $-merkki sekä muuttujaan tallennettaessa, että siihen viitattaessa.

Merkkijonoja voi yhdistää toisiinsa pisteen avulla (.) tai käyttämällä JavaScriptistä tuttua *template literal*-merkintää.

*echo*-komento tulostaa sille annetut merkkijonot joko konsolille, tai HTML-dokumenttiin, riippuen miten tiedosto ajetaan.

```php
<?php

$greeting = "Hello Universe";
$name = "Tiina";

echo $greeting . " " . $name . "\n";
echo "How are you $name? \n";
echo "Nice to meet you";
```

Tallenna tämä koodi *index.php*-nimiseen tiedostoon ja aja se komentoriviltä:

```cmd
> php index.php.
```

Voit myös käynnistää php:n sisäänrakennetun web-palvelimen:

```cmd
> php -S localhost:8888
```

Kirjoita selaimen osoitekenttään: localhost:8888 ja kirjoittamasi koodi ilmestyy selainikkunaan.

### PHP ja HTML

PHP-kieli on suunniteltu HTML-sivujen luomiseen dynaamisesti. Sitä voidaan liittää sivulle HTML-koodin sekaan käyttäen *<?php* -tägiä. Sivulla voi olla käytössä myös *.css*-tiedosto.

```html
<!DOCTYPE html>
<html lang="fi">
<head>
<title>PHP</title>
<link rel="stylesheet" href="oma.css" type="text/css">
</head>
<body>

<h1>Hello World</h1>
<p>
    <?php  
    $name = "Tampere";
    echo "Hello $name"?><br>
    <?= "How are you $name"?>
</p>

</body>
</html>
```

Koodissa on käytetty PHP-tägiä *<?=* se on lyhenne yhdistelmästä *<?php echo*.

Laita oma.css-tiedostoon:

```css
h1 {
    background: gray;
    padding: 2em;
    text-align: center;
}
```

Kun sivu pyydetään palvelimelta, sille voidaan pyynnön mukana erilaisia parametreja. Esim. käyttäjältä voidaan kysyä hänen nimeään. Tämä tieto välitetään palvelimelle osoitekentässä kuljetettavissa muuttujissa. Esimerkiksi *name*-muuttujalle voidaan antaa arvo:

```browser
index2.php?name=Tiina
```

PHP:ssa näin saatuja arvoja kutsutaan superglobaaleiksi muuttujiksi. Ne tallentuvat taulukkoon, jonka nimi on $_GET[]. Superglobaalin muuttujan 'name' saa poimittua taulukosta sen nimen avulla:

```php
  <?php  echo "Hello, " .  $_GET['name']; ?>
```

Koska osoiteriviin voi kirjoittaa mitä tahansa, myös vahingollista koodia, joka muuttaa sivun toimintaa, näitä superglobaaleja muuttujan arvoja ei saa koskaan käyttää ilman että ne käsittelee niin, että ne eivät toimi koodina, tätä kutsutaan sanitoinniksi (*sanitation*).

Käytännössä tämä tapahtuu niin, että kaikki erikoismerkit muunnetaan HTML-entiteeteiksi *htmlspecialchars*-funktion avulla:

```php
 <?= "Hello, " .  htmlspecialchars($_GET['name']); ?>
 ```

 Kokeile kirjoittaa superglobaaliin muuttujaan ilman sanitointia:

```cmd
 index2.php?name=<a href="http://google.com">Tiina</a>
```

Annettu merkkijono tulkitaan HTML-koodina. Vielä vaarallisempaa olisi saada JavaScriptiä sivulle:

```cmd
 index2.php?name=<script>alert("hakkeri iski")</script>
```

Kokeile nyt samaa sanitoinnin kanssa. Sanitointi tekee koodista pelkkää tekstiä.

### Koodin jakaminen eri tiedostoihin

Jotta koodista tulisi selkeämpää, helpommin ymmärrettävää ja ylläpidettävää sitä kannattaa jakaa eri tiedostoihin. Yksi tapa on erotella käsiteltävä tieto (*model*), toiminnallisuus (*controller*) ja näkymä (*view*) toisistaan.

Yksi tapa erotella tieto (*model*) ja näkymä (*view*) on tehdä erillinen *HTML*-template-tiedosto, jossa vain viitataan PHP-muuttujiin ja varsinainen PHP-koodi on erillisessä tiedostossa. Tämä *HTML*-template-tiedosto nimeen lisätään *view*. Jaetaan koodi siis kahteen erilliseen tiedostoon, index.view.php:

```html
<!DOCTYPE html>
<html lang="fi">
<head>
<title>PHP</title>
<link rel="stylesheet" href="oma.css" type="text/css">
</head>
<body>
<h1>Hello World</h1>
<p>
    <?= $greeting; ?>
</p>
<ul>
     echo  "<li>$names[0]</li>";
     echo  "<li>$names[1]</li>";
     echo  "<li>$names[2]</li>";
</ul>
</body>
</html>  
```

Toinen tiedosto (index3.php) sisältää PHP-koodia ja ottaa tämän *view*:n käyttöön *require*-komennolla:

```php
<?php

$greeting = "Hello World and Tampere";

$names = ["Tiina", "Janne", "Juuso"];

require "index.view.php";
```

Muuttuja *$names* on taulukko ja sen alkioihin voidaan viitata niiden indekseillä. Kun avaat *index3.php* selaimessa molempien tiedostojen sisältö muodostaa yhdessä sivun.

### Toistorakenteet

PHP:ssa on samankaltaiset toistorakenteet kuin muissakin kielissä: for-silmukka ja foreach-rakenne.

PHP-koodi voi olla HTML-koodin koodin kanssa sekaisin, esim. foreach-rakenteen voi laittaa "poikki", kirjoittaa väliin HTML:ää ja taas jatkaa PHP:tä. Kun ohjelmointirakenne katkaistaan sen perään laitetaan kaksoispiste (:)

Tässä *foreach* ilman katkaisua:

`` php
    foreach ($names as $name){
        echo "<li> $name </li>";
    }
´´´

Tässä *foreach* katkaistuna niin, että välissä voi olla HTML-koodia:

```php
 <?php foreach ($names as $name): ?>
        <li> <?= $name ?></li>
 <?php endforeach ?>
```
