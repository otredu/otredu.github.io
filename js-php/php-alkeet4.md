## PHP-alkeet osa 4

### Taulukko

Talvallinen taulukko PHP:ssa on samanlainen kuin JavaScriptissakin. Sen voi alustaa kahdella eri tavalla:

```php
$names = ["Tiina", "Janne", "Juuso"];
$cities = array("Tampere", "Helsinki", "Jyväskylä");
```

Taulukon arvoihin voidaan viitata sen *indeksin* avulla (indeksointi alkaa nollasta):

```php
<ul>
    <?php
        echo  "<li>$names[0]</li>";
        echo  "<li>$names[1]</li>";
        echo  "<li>$names[2]</li>";
    ?>
</ul>
```

Edellinen esimerkki toimii vain kun taulukossa on tasan kolme alkiota. Parempi on käyttää toistorakennetta.

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

Tässä sama *for* - silmukan  avulla:

```php
<ul>
<?php for ($i = 0; $i < count($names); $i++): ?>
    <li><?= $names[$i] ?></li>
<?php endfor ?> 
</ul>
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

### Funktioita merkkijonojen muokkaamiseen

| Funktio  | Esimerkki  | Toiminta |
| -------- | ---------| ---------|
| ucwords  |  ucwords('ossi osborne') | Merkkijonossa olevien sanojen ensimmäiset kirjaimen muuttetaan isoiksi |