## PHP-alkeita osa 2
### Sivun jakaminen tiedostoihin

Kun tehdään sivustoa, yleensä kaikilla sivulla on yhtenäiset *header*- ja *footer*-osat. PHP:n avulla näiden tekeminen on helppoa, sivujen yhteiset osuudet irrotetaan omiin tiedostoihinsa ja liitetään sivuille *require*:n avulla. *header*-osioon voidaan sijoittaa sivun otsikko, navigointipalkki sekä *.css*-tiedosto. Nyt riittää, että uudet sivut lisätään *head.php*:n ja kaikkien sivujen navigointipalkki päivittyy automaattisesti.

Tässä esimerkki yhteisestä *header.php*-tiedostosta:

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
        <li><a href="harjoitukset1.php">Harjoitukset 1</a></li>
    </ul>
</nav>
```

Tässä esimerkki yhteisestä *footer-php*-tiedostosta:

```php
<footer>Tredun datanomit ovat parhaita</footer>
</body>
</html>
```

Nämä otetaan mukaan jokaiselle sivuston sivulle, esim. *harjoitukset1.php* tiedosto:

```php
<?php require "header.php"; ?>

<h2>Harjoitus 1</h2>

<?php require "footer.php"; ?>
```