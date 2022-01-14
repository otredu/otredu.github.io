## PHP-alkeet osa 4

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

### Koodin jakaminen model- ja view-tiedostoihin

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
### Funktioita merkkijonojen muokkaamiseen

| Funktio  | Esimerkki  | Toiminta |
| -------- | ---------| ---------|
| ucwords  |  ucwords('ossi osborne') | Merkkijonossa olevien sanojen ensimmäiset kirjaimen muuttetaan isoiksi |