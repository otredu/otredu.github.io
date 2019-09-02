## PDO-rajapinta

### Johdanto

PDO-rajapinta (*PHP Data Ohjects*) on PHP:hen sisäänrakennettu oliorajapinta tietokannan käyttämistä varten. Se korvaa aikaisemmin käytetyn *MySQLi*:n, jota ei suositella käytettäväksi tietoturvaongelmien vuoksi (esim. *SQL-injection*).

PDO huolehtii vain tietokantayhteyden muodostamisesta sekä SQL-kyselyjen välittämisestä tietokannalle. Se ei piilota eri tietokantojen eroja mikä pitää ottaa huomioon SQL-lauseiden teossa.

### Yhteyden muodostaminen MySQL-tietokantaan

*Alkutoimet: Käynnistä MySQL Dockerin avulla [ohje](../docker/index.html)*

Tietokantayhteyttä varten tarvitaan ns. *database connection string*. Se sisältää tiedot tietokannan tyypistä (mysql, postgres), palvelimen osoitteesta, käyttäjätunnuksesta sekä salasanasta. Jos porttia ei ole annettu käytetään *default*-porttia.

Esimerkiksi MySQL-serverille, joka on käynnistetty em. ohjeiden mukaisesti dockerilla *connection string* on:

```cmd
'mysql:host=127.0.0.1;dbname=news', 'root', 'mypass123'
```

PDO-rajapintaa käytetään PDO-olion avulla. Luodaan uusi PDO-olio *database connection string*:in avulla:

```php
    $pdo = new PDO('mysql:host=127.0.0.1;dbname=news', 'root', 'mypass123');
```

Koska tietokantayhteyden muodostaminen ei aina onnistu, kannattaa tämä tehdä *try-catch* rakenteen sisällä ja aktivoidan virheilmoitukset:

```php
function connectDB(){
    try {
        $pdo = new PDO('mysql:host=127.0.0.1;dbname=news', 'root', 'mypass123');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Database connection ok";
        return $pdo;
    } catch (PDOException $e){
        echo "Database connection error: " . $e->getMessage();
        die();
    }
}
```

### Tietojen hakeminen tietokannasta

PDO-olion avulla voidaan tehdä SQL-kyselyjä tietokantaan. Yhden tietokantataulun (*news*) sisällön voi esim. hakea seuraavasti:

```php
function getAllNews($pdo){
    $sql = 'select * from news';
    $statement = $pdo->prepare($sql);
    $statement->execute();
    $allnews = $statement->fetchAll();
    return $allnews;
}
```

Laita em. tietokantafunkiot omaan tiedostoonsa *database.php* niin voit testata toimiiko tietokantasi:

```php
<?php
require "database.php";

$pdo = connectDB();
$allnews = getAllNews($pdo);

cleanDump($allnews);
```

Tässä cleanDump on funktio, joka tulostaa tietokannan antaman assosiatiivisen taulukon hieman nätimmin:

```php
function cleanDump($data){
    echo "<pre>";
    var_dump($data);
    echo "</pre>";
}
```

### Tietojen lisääminen tietokantaan

Tietojen lisäämisen kanssa pitää olla varovainen, jos tiedot saadaan käyttäjältä (*lomakkeet*). Ensin niistä pitää poistaa turhat välilyönnit alusta ja lopusta sekä muuntaa HTML-tägit merkkijoinoiksi:

```php
function cleanUp($userinput){
    $input = trim($userinput);
    $cleaninput = htmlspecialchars($input);
    return $cleaninput;
}

$cleantitle = cleanUp($title);
$cleantext = cleanUp($text);
$cleantime = cleanUp($time);
```

Tämä lisäksi *INSERT* tehdään kaksivaiheisesti, jotta estetään *SQL-injection*:

```php
$sql = "INSERT INTO new (title, newstext, newsdate) VALUES (?, ?, ?)";
$statement = $pdo->prepare($sql);
$statement->execute([$cleantitle, $cleantext, $cleantime]);

if($statement != FALSE) {
    echo "Insert ok";
} else {
    echo "Insert failed";
}
```

### Tietojen poistaminen tai päivittäminen

Tietojen poistaminen:

```php
$sql = "DELETE FROM news WHERE id = ?";
$statement = $pdo->prepare($sql);
$statement->execute([$newsid]);
```

Tietojen päivittäminen:

```php
$sql = "UPDATE news SET title = ? WHERE id = ?";
$statement = $pdo->prepare($sql);
$statement->execute([$newtitle, $newsid]);
```

### Tietokantataulujen luominen

Tämän lisäksi ohjelma voi lennossa luoda tarvitsemiaan tauluja:

```php
$sql = "CREATE TABLE IF NOT EXISTS todos (
    `todoID` int(11) NOT NULL,
    `task` varchar(50) COLLATE utf8_swedish_ci NOT NULL,
    `tododate` date NOT NULL,
    `responsible` varchar(50) COLLATE utf8_swedish_ci NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;";

$statement = $pdo->prepare($sql);
$statement->execute();
```

Lisätietoa:

- [PDO-manuaali](https://www.php.net/manual/en/book.pdo.php)
- [How to prevent SQL-injections](https://websitebeaver.com/php-pdo-prepared-statements-to-prevent-sql-injection)
