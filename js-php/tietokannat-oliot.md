## Tietokannat ja oliot

### Luokat tietokannan datalle

PDO-rajapinta voi palauttaa tietokannan antamat tiedot monessa eri muodossa. Jos et määrittele missä muodossa tiedot haluat, ne palautuvat assoisiatiivisena taulukkona. Voit myös määritellä oman luokan ja pyytää rajapintaa antamaan tiedot tämän luokan olioina.

```php
class Task {
    public $description;
    public $completed = false;

    public function isComplete(){
         return $this->completed;
    }
    public function complete()
    {
        $this->completed = true;
    }
    public function getDescription()
    {
         return $this->description;
    }
}
```

Tietokanta kysely muotoillaan nyt näin:

```php
$statement->fetchAll(PDO::FETCH_CLASS, 'Task');
```

Tietokannan palauttamat tietoja käytetään luokan metodien kautta:

```php

<h1>Todos</h1>
<?php foreach ($tasks as $task): ?>
<li>
    <?php if($task->isComplete()) : ?>
        <strike>
    <?php endif ?>
    <?= $task->getDescription() ?>
    <?php if($task->isComplete()) : ?>
        </strike>
    <?php endif ?>
</li>
<?php endforeach ?>
```

### Luokat tietokannan käyttämiseen

Tietokantayhteys on myös kätevää piilottaa oman *Connection*-luokan sisälle:

```php
class Connection {
    public static function make()
    {
        try {
            $pdo = new PDO('mysql:host=127.0.0.1;dbname=todos','root','mypass123');
            echo "Database connection ok";
            return $pdo;
            } catch (PDOException $e) {
                echo "Database error:", $e->message();
                die();
            }
    }
}
```

Samalla tavalla kannattaa tehdä oma *QueryBuilder* - luokka:

```php
class QueryBuilder
{
    protected $pdo;
    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    public function selectAll($table, $myclass)
    {
        $statement = $this->pdo->prepare("select * from $table");
        $statement->setFetchMode(PDO::FETCH_CLASS, $myclass);
        $all = $statement->fetchAll();
        return $all;
    }
}

```

Nyt *index.php*:ssa tiedot voidaan hakea näin suoraan itse määrittämäämme luokkaan 'Task':

```php
$pdo = Connection::make();
$queryB = new QueryBuilder($pdo);
$alltasks = $queryB->selectAll('tasks', 'Task');
cleanDump($alltasks);
```

### Tiedostojen sijainnit

Koodi kannattaa sijoittaa omiin kansioihinsa, jotta sitä on helpompi hallita.

Tietokantaan liittyvät tiedostot kansioon *database*, *css*-tiedostot kansioon *public*, *.view.*-tiedostot kansioon *views*, yleishyödylliset kirjastot ja luokat kansioon *libraries* ja sivun osia sisältävät tiedostot kansioon *partials*.

```php
require "./libraries/Task.php";
require "./database/Connection.php";
require "./database/QueryBuilder.php";
```
