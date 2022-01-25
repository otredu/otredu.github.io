## PHP-alkeita osa 3

### Parametrien välittäminen osoitekentässä

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

### Parametrien tarkistaminen

PHP-ohjelman kannalta on oleellista testata lähettikö selain tietyt parametrit vai eli onko muuttujalle annettu arvo. Sen voi testata *isset()*-funktion avulla. *isset()* - palauttaa totuusarvon, jota voi testata joko perinteisellä if-else - ehtolauseella tai sitä vastaavalla lyhennettyllä muodolla, joka muodostetaan kysymysmerkin avulla (*ternary operator*).

```php
<?php
    if(isset($_GET['name'])){
        $name = htmlspecialchars($_GET['name']);
        if(isset($name))
            echo "Hello " . $name;
        else 
            echo "Hello, stranger";
    }
     ?>
```

Tämän lyhyempi versio olisi:

```php
    <?= isset($name) ? "Hello {$name}" : "Hello, stranger"; ?>
```

Myös ehtolauseen voi katkaista ja kirjoittaa väliin HTML-koodia:

```php
<?php if(isset($name))) : ?>
    <p> Hello <?= $name ?></p>
<?php else : ?>
    <p> Hello, stranger </p>
<?php endif?>
```

### Lomakkeiden käsittely

Lomakkeiden avulla saadaan käyttäjän antamat tiedot ohjelman käsiteltäväksi. Parametrit voidaan välitää joko HTTP-protokollan *GET-request*:in tai *POST-request*:in avulla. Näiden ero on siinä, että *GET*:issä välitetyt arvot näkyvät URL-osoiterivillä selaimessa joten ne voivat olla vain merkkijonoja, joilla on rajoitettu pituus. *POST*:in parametrit välittyvät HTTP-viestin sisällä, joten jos HTTP-yhteys on suojattu myös nämä parametrit on suojattu, parametrien tyyppiä tai kokoa ei ole rajoitettu ([lisää GET:in ja POST:in eroista](https://www.w3schools.in/php/get-post/)).

Yksinkertainen HTML-lomake, joka käsittelee lomakkeeseen syötetyt arvot näyttäisi tältä (tiedoston nimi *lomakedemo.php*):

```php
<?php require "header.php"; ?>

<h2>Harjoitus</h2>

<?php
    if(isset($_GET['name'], $_GET['age'])){
        $name = htmlspecialchars($_GET['name']);
        $age = htmlspecialchars($_GET['age']);
        echo "Mitä kuuluu  $name? ", "Olet $age vuotta vanha";
    }
?>

<form action="lomakedemo.php" method="get">
    Etunimi: <input type="text" name="name" maxlength=30><br>
    Ikä:     <input type="number" name="age"><br>
             <input type="submit" value="Lähetä">
</form>


<?php require "footer.php"; ?>
```

Tässä syötetyt parametrit näkyvät osoitekentässä. Jos syötetään esim. salasanoja tai jotain muuta mitä ei haluta näkyvän osoitekentässä, käytetään *POST*:ia. Silloin kaikki viittaukset *GET*:iin vaihedetaan *POST*:iin:

```php
<form action="lomakedemo.php" method="post">
...
if(isset($_POST['name'], $_POST['age'])){
...
```

Edellinen esimerkki toimii, mutta jos halutaan näyttää lomake vain, jos sitä ei vielä ole lähetetty voidaan tarkistaa onko kyseessä ensimmäinen latauskerta (eli lomaketta ei ole vielä kertaakaan lähetetty). Tätä varten lisätään erillinen piilotettu *hidden* kenttä, jonka arvoksi asetetaan 1:

```php
<?php if (isset($_GET['form_submitted'])): ?>
    <?php
        if(isset($_GET['name'], $_GET['age'])){
            $name = htmlspecialchars($_GET['name']);
            $age = htmlspecialchars($_GET['age']);
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
