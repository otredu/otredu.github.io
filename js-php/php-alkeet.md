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
> php index.php
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
        echo "Hello $name"
    ?>
    <br>
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
<?php  
    echo "Hello, " .  $_GET['name'];
?>
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

```php
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
    <?php
        echo  "<li>$names[0]</li>";
        echo  "<li>$names[1]</li>";
        echo  "<li>$names[2]</li>";
    ?>
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

```php
<?php
    foreach ($names as $name){
        echo "<li> $name </li>";
    }
?>
```

Tässä *foreach* katkaistuna niin, että välissä voi olla HTML-koodia:

```php
 <?php foreach ($names as $name): ?>
        <li> <?= $name ?></li>
 <?php endforeach ?>
```

### Ehtolause

PHP:ssa on kaksi tapaa tehdä ehtolause, perinteinen if-else sekä sitä vastaava lyhennetty muoto (*ternary operator*), joka muodostetaan kysymysmerkin avulla. *isset*-funktion avulla voit testata onko muuttujalle annettu arvo.

```php
<?php
    if(isset($_GET['name'])){
        echo "Hello " . $_GET['name'];
    } else {
        echo "Hello, stranger";
    } ?>
```

Tämän lyhyempi versio olisi:

```php
    <?= isset($_GET['name']) ? "Hello {$_GET['name']}" : "Hello, stranger"; ?>
```

Myös ehtolauseen voi katkaista ja kirjoittaa väliin HTML-koodia:

```php
<?php if(isset($_GET['name'])) : ?>
    <p> Hello <?= $_GET['name'] ?></p>
<?php else : ?>
    <p> Hello, stranger </p>
<?php endif?>
```

### Assosiatiivinen taulukko

Perustaulukon lisäksi PHP:ssä on ns. assosiatiivinen taulukko (*associative array*), johon voi tallentaa avain-arvo-pareja (*key-value-pairs*). Tämän taulukon alkioihin viitataan avaimen avulla eli siinä ei indeksejä kuten tavallisessa taulukossa. Taulukon alkioiden avaimet ovat merkkijonoja ja niihin liittyvä arvo tulee nuolen jälkeen.

```php
<?php
    $person = [
        'name' => 'Erkki'
        'age' => 45,
        'hair' => 'brown',
    ]; 
?>
```

Arvo saadaan ulos siihen liittyvän avaimen avulla:

```php
    <?= $person['name'] ?>
```

Assosiatiiviseen taulukkoon voi lisätä uuden avain-arvo-parin:

```php
<?php
    $person['profession'] = 'programmer';
?>
```

Ja arvon voi poistaa *unset*-funktion avulla:

```php
<?php
    unset($person['hair']);
?>
```

Assiosiatiivisesta taulukosta voi hakea arvoa *array_search*-funktion avulla. Sille annetaan parametrina haettuava arvo sekä taulukko, josta arvoa haetaan. Jos arvo löytyy taulukosta sen avain palautetaan, muuten palautetaan *false*.

```php
<?php
    $key = array_search(45, $person);
    if($key != false){
        echo $person[$key];
    } else {
        echo "Ei löydy";
    }
?>
```

Debuggaustarkoituksessa taulukon sisällön voi tulostaa sivulle *var_dump*-funktion avulla:

```php
<?php
    var_dump($person);
?>
```

Jos haluaa vain katsoa taulukon sisällön eikä halua koodin jatkavan, voi käyttää *die*-funktiota, joka tässä lopettaa ohjelman suorittamisen heti *var_dump*:in jälkeen:

```php
<?php
    die(var_dump($person));
?>
```

### Funktiot

Kuten muissakin ohjelmointikielissä PHP:ssäkin voi tehdä funktion, joka saa sisäänsä parametreja ja joka palauttaa (*return*) palauuarvon. Tässä esimerkissä lisätään hintaan alv, joka määrä annetaan desimaalilukuna.

```php
<?php
function add_alv($price, $alv){
    return $price * (1 + $alv);
}
```

Tämän funktion kannattaa tallentaa omaan tiedostoonsa (esim. functions.php) ja liittää mukaan sivulle käyttäen *require*-lausetta.

```php
<?php
require 'functions.php';

echo "Hinta + alv: " . add_alv(40, 0.24);
```

Funktion ei ole aina pakko palauttaa mitään, se voi myös tulostaa jotakin suoraan:

```php
<?php
function add_alv2($price, $alv){
    echo $price * (1 + $alv);
}
```

Tätä kutsuttaisiin näin:

```php
<?php
require 'functions.php';

echo "Hinta + alv: ";
add_alv2(40, 0.24);
```

### Funktioita merkkijonojen muokkaamiseen

| Funktio  | Esimerkki  | Toiminta |
| -------- | ---------| ---------|
| ucwords  |  ucwords('ossi osborne') | Merkkijonossa olevien sanojen ensimmäiset kirjaimen muuttetaan isoiksi |