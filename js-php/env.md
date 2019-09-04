## Ympäristömuuttujat

### Johdanto

Kun järjestelmää kehitetään käytetään yleensä paikallista tietokantaa, johon kirjaudutaan kovakoodatuilla salasanoilla. Kun järjestelmä siirretään verkkoon, on otettava käyttöön oikeat salasanat, ja näitä salasanoja ei voi tallentaa koodiin eikä myöskään version hallintaan (github). PIdä siis huolta, että *.env* on listattu *.gitignore* - tiedostossa.

Jotta konfigurointi helpottuisi, on tavallista tallentaa tällaiset tiedot .env - tiedostoon. Tämä tiedosto on normaalisti tekstitiedosto, ja tarvitsemme sen lukemiseen kirjaston (näitä on useita, tässä käytössä PHPdotenv).

### PHPdotenv - kirjaston asentaminen

Asenna PHPdotenv - kirjasto composerin avulla ([Asenna Composer](https://getcomposer.org/)):

```cmd
> composer require vlucas/phpdotenv
```

- [PHPdotenv-dokumentaatio](https://github.com/vlucas/phpdotenv)

### Ympäristömuuttujat

Ympäristömuuttujien nimet voi itse keksiä, ne tallentuvat PHP:n superglobaaleiksi muutujiksi ja niihin voi viitata *$_ENV* tai käyttämällä *getenv([MY_ENV_VAR_NAME])* -funktiota.

### .env - tiedoston rakenne

Tee siis .env - tiedosto, esim. tällainen:

```php
##########################################
# Configuration for localhost hosting    #
##########################################

DB_DBTYPE = "MySql"
DB_HOST = "localhost"
DB_USERNAME = "root"
DB_PASSWORD = "mypass123"
DB_NAME = "todos"
DB_PORT = "3306"
```

Ota se käyttöön aivan koodisi alussa, esim. *boostrap.php* - tiedostossa:

```php
require __DIR__ . '/vendor/autoload.php';
$dotenv = Dotenv\Dotenv::create(__DIR__);
$dotenv->load();
```

### Ympäristömuutujinen käyttäminen koodissa

Nyt voit käyttää ympäristömuuttujia koodissasi esim. kun teet tietokantayhteyden:

```php
$host = getenv('DB_HOST');
$port = getenv('DB_PORT');
$dbname = getenv('DB_NAME');
$user = getenv('DB_USERNAME');
$password = getenv('DB_PASSWORD');
$connectionString = "mysql:host=$host;dbname=$dbname;port=$port;charset=utf8";

$pdo = new PDO($connectionString, $user, $password);
```
