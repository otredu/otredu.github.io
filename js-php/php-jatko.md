## PHP-jatko

### Sivun jakaminen tiedostoihin

Kun tehdään sivustoa, yleensä kaikilla sivulla on yhtenäiset *header*- ja *footer*-osat. PHP:n avulla näiden tekeminen on helppoa, sivujen yhteiset osuudet irrotetaan omiin tiedostoihinsa ja liitetään sivuille *require*:n avulla. *header*-osioon voidaan sijoittaa sivun otsikko, navigointipalkki sekä *.css*-tiedosto. Nyt riittää, että uudet sivut lisätään *head.php*:n ja kaikkien sivujen navigointipalkki päivittyy automaattisesti.

Tässä esimerkki yhteisestä *head.php*-tiedostosta:

```php
<!DOCTYPE html>
<html lang="fi">
<head>
    <title>PHP</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="oma.css" type="text/css">
</head>
<body>
    <header>
        <h1>Tiinan palautussivu</h1>
    </header>
<nav>
    <ul>
        <li><a href="index.php">Pääsivu</a></li>
        <li><a href="h1.php">Harjoitus 1</a></li>
    </ul>
</nav>
```

Tässä esimerkki yhteisestä *footer-php*-tiedostosta:

```php
<footer>Tredun datanomit ovat parhaita</footer>
</body>
</html>
```

Nämä otetaan mukaan jokaiselle sivuston sivulle, esim. *h1.php* tiedosto:

```php
<?php require "head.php"; ?>

<h2>Harjoitus 1</h2>

<?php require "footer.php"; ?>
```

### Lomakkeiden käsittely

Lomakkeiden avulla saadaan käyttäjän antamat tiedot ohjelman käsiteltäväksi. Parametrit voidaan välitää joko HTTP-protokollan *GET-request*:in tai *POST-request*:in avulla. Näiden ero on siinä, että *GET*:issä välitetyt arvot näkyvät URL-osoiterivillä selaimessa joten ne voivat olla vain merkkijonoja, joilla on rajoitettu pituus. *POST*:in parametrit välittyvät HTTP-viestin sisällä, joten jos HTTP-yhteys on suojattu myös nämä parametrit on suojattu, parametrien tyyppiä tai kokoa ei ole rajoitettu ([lisää GET:in ja POST:in eroista](https://www.w3schools.in/php/get-post/)).

Yksinkertainen HTML-lomake, joka käsittelee lomakkeeseen syötetyt arvot näyttäisi tältä (tiedoston nimi *h1.php*):

```php
<?php require "head.php"; ?>

<h2>Harjoitus 1</h2>

<form action="h1.php" method="get">
    Etunimi: <input type="text" name="name" maxlength=30><br>
    Ikä:     <input type="number" name="age"><br>
             <input type="submit" value="Lähetä">
</form>

<?php
    if(isset($_GET['name'], $_GET['age'])){
        $name = $_GET['name'];
        $age = $_GET['age'];
        echo "Mitä kuuluu  $name? ", "Olet $age vuotta vanha";
    }
?>

<?php require "footer.php"; ?>
```

Tässä syötetyt parametrit näkyvät osoitekentässä. Jos syötetään esim. salasanoja tai jotain muuta mitä ei haluta näkyvän osoitekentässä, käytetään *POST*:ia. Silloin kaikki viittaukset *GET*:iin vaihedetaan *POST*:iin:

```php
<form action="h1.php" method="post">
...
if(isset($_POST['name'], $_POST['age'])){
...
```

Edellinen esimerkki toimii, mutta jos halutaan näyttää lomake vain, jos sitä ei vielä ole lähetetty voidaan tarkistaa onko kyseessä ensimmäinen latauskerta (eli lomaketta ei ole vielä kertaakaan lähetetty). Tätä varten lisätään erillinen piilotettu *hidden* kenttä, jonka arvoksi asetetaan 1:

```php
<?php if (isset($_GET['form_submitted'])): ?>
    <?php
        if(isset($_GET['name'], $_GET['age'])){
            $name = $_GET['name'];
            $age = $_GET['age'];
            echo "Mitä kuuluu  $name? ", "Olet $age vuotta vanha";
        } else {
            echo "Et voi jätttää kenttiä tyhjäksi";
        }
    ?>
<?php else: ?>
    <h3>Anna tietosi</h3>
    <form action="h1.php" method="get">
        Etunimi: <input type="text" name="name" maxlength=30><br>
        Ikä:     <input type="number" name="age"><br>
        <input type="submit" value="Lähetä">
        <input type="hidden" name="form_submitted" value="1" />
    </form>
<?php endif; ?>
```

### Oliot ja luokat

Ohjelmoinnissa olioiden avulla varastoidaan tietoa, ja tarjotaan määritelty rajapinta tämän tiedon käsittelemiseen. Olion tarkoitus on piilottaa tiedon esitysmuoto, ja estää sen käyttäminen suoraan. Nämä olion sisäiset muuttujat ovatkin yleensä tyyppiä *protected* eli ne eivät näy olion ulkopuolelle ([lisää public, protected ja private eroista](https://www.php.net/manual/en/language.oop5.visibility.php)). Olion sisältämää tietoa käsitellään sen metodien avulla, jotka ovat *public* tyyppisiä. Metodit ovat funktioita, jotka pääsevät käsittelemään olion sisälle talletettuja muuttujan arvoja *this*:in kautta. Olion rakenne ja toiminta määritellän luokan (*class*) avulla. Luokasta tehdään olio eli uusi instanssi *new*:n avulla.

Kun luokka määritellän, ensimmäiseksi tehdään sen rakentaja eli *construct*:ori. Tässä *task*-nimisen luokan määrittely:

```php
<?php

class Task {
    protected $description;
    protected $completed = false;

    public function __construct($desc)
    {
        $this->description = $desc;
    }
    public function getDescription(){
        return $this->description;
    }
    public function isComplete(){
        return $this->completed;
    }
    public function complete(){
        $this->completed = true;
    }
}
```

Luokka sisältää muuttujat *$description* sekä *$completed*, jonka alkuarvo on *false*. Luokan rakentaja (*__construct*) on funktio, joka saa parametrin *desc*, joka tallennetaan sisäiseen muuttujaan *this->$description*.

```php
    public function __construct($desc)
    {
        $this->description = $desc;
    }
```

Luokalla on myös funktiot, tehtävän kuvauksen ja tilan kysymiseen (ns. *getter*):

```php
public function getDescription(){
        return $this->description;
}
public function isComplete(){
        return $this->completed;
}
```

Sekä yksi funktio, jonka avulla tehtävän voi kuitata tehdyksi (ns. *setter*):

```php
    public function complete(){
        $this->completed = true;
    }
```

Tästä luokasta voi tehdä uusia instansseja eli olioita rakentajan avulla:

```php
$task = new Task('Go to the store');
```

Olion metodeja voi kutsua olion nimen avulla:

```php
$task->getDescription();
$task->isComplete();
$task->complete();
```