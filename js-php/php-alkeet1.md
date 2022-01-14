## PHP-alkeita osa 1

### PHP-syntaksi

PHP:n syntaksi on hyvin samankaltainen JavaScriptin kanssa. Erojakin toki on:

1. Kooditiedoston pitää alkaa *<?php*-tägillä.
2. Muuttujan nimen eteen pitää aina laittaa $-merkki
3. Konsolille tulostaminen tapahtuu *echo* komennolla (vs. *console.log*)
4. Merkkijonoja yhdistetään pisteen (.) avulla, ei plusmerkin (+) avulla.

Tämä materaali seuraa [Laracast-sarjan PHP-tutoriaalia](https://laracasts.com/series/php-for-beginners), eli käytössä on PHP:n versio 7 (tai isompi).

PHP-koodi kirjoitetaan tiedostoon, jonka liite on *.php. Kooditiedoston esimmäisenä rivinä pitää lukea:

```php
<?php
```

muuten php-tulkki ei tunnista tiedostoa PHP:ksi. Lopputägiä ei tarvitse laittaa, kun kyseessä on vain PHP-koodia sisältävä tiedosto (HTML:n sisään kirjoitettuna lopputägi on pakollinen).

PHP-tiedostot sijaitsevat yleensä web-palvelimella, mutta tiedoston voi ajaa lokaalisti myös php-tulkin kautta. Voit ajaa koodisi komentoriviltä näin:

```cmd
> php omakoodi.php
```

### Muuttujat

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
> php index.php
```

Voit myös käynnistää php:n sisäänrakennetun web-palvelimen:

```cmd
> php -S localhost:8888
```

Kirjoita selaimen osoitekenttään: localhost:8888 ja kirjoittamasi koodi ilmestyy selainikkunaan.

*Huom* Jos PHP:ta ei löydy, aseta se [polkuun näillä ohjeilla](env-path.html).

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
```
```php
    <?php  
        $name = "Tampere";
        echo "Hello $name";
    ?>
    <br>
    <?= "How are you $name"?>
```
```html
</p>

</body>
</html>
```
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

### Funktiot

Kuten muissakin ohjelmointikielissä PHP:ssäkin voi tehdä funktion, joka saa sisäänsä parametreja ja joka palauttaa (*return*) palauuarvon. Aino ero JavaScriptiin on se, että parametrin nimen eteen pitää lisätä $-merkki. Tässä esimerkissä lisätään hintaan alv, joka määrä annetaan desimaalilukuna.

```php
<?php
function add_alv($price, $alv){
    return $price * (1 + $alv);
}

echo "Hinta + alv: " . add_alv(40, 0.24);
?>
```

### Ehtolause

Funktion sisällä voilla myös ehtolause:

```php
<?php
function pants($temperature){
    if($temperature <= -10)
        return "Toppahousut jalkaan";
    else
        return "Farkuilla mennään";
} 
?>

<p>Talvella äiti sanoo: <?= pants(-15)?><p>
<p>Kesällä äiti sanoo: <?= pants(15)?><p>
```

### Matemaattiset operaattorit

PHP:ssä toimivat samat matemaattiset operaattorit kuin JavaScriptissäkin:

```php
<?php
$a = 3;
$b = 4;
echo "$a + $b=" . $a + $b;
echo "$a * $b=" . $a * $b;
echo "$a / $b=" . $a / $b;
echo "$a - $b=" . $a - $b;
echo "$a % $b=" . $a % $b;
```

### Loogiset operaattorit

PHP:ssä toimivat samat loogiset operaattorit kuin JavaScriptissäkin (and, or, not):

| merkintä | merkitys |
| ----------| --------|
| $a && $b	| tosi, kun sekä $a että $b ovat tosia |
| $a \|\| $b	| tosi, kun vähintään toinen ($a tai $b) on tosi |
| !$a |	tosi, kun $a on epätosi |

### Vertailuoperaattorit

PHP:ssä toimivat samat vertailuoperaattorit kuin JavaScriptissäkin:

| merkintä | merkitys |
| ----------| --------|
| $a == $b |	$a on yhtäsuuri kuin $b |
|$a === $b	|$a on yhtäsuuri ja samaa |tietotyyppiä kuin $b |
|$a != $b	|$a on erisuuri kuin $b|
|$a !== $b	|$a on erisuuri kuin $b tai eri tietotyyppiä|
|$a < $b	|$a on pienempi kuin $b|
|$a > $b	|$a on suurempi kuin $b|
|$a <= $b	|$a on pienempi tai yhtäsuuri kuin $b|
|$a >= $b	|$a on suurempi tai yhtäsuuri kuin $b|

### Kommenttimerkit

PHP:ssä toimivat samat kommenttimerkit kuin JavaScriptissä:

```php
<?php
// yhden rivin kommentti

/* monen rivin
kommentti */
?>
```

Jos kommentti osuu HTML-osaan (php-tagien ulkopuolelle) se on:

```html
<!-- html kommmentti -->
```


---

## Harjoitukset:

1. Tee [w3schoolin PHP-harjoitukset](https://www.w3schools.com/php/php_exercises.asp)

2. Tee [w3schoolin PHP-quiz](https://www.w3schools.com/php/php_quiz.asp)