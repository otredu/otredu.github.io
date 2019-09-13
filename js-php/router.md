## Reititys

### Johdanto

Sivuston rakenteesta saadaa selkeämpi ja ylläpidettävämpi, kun HTTP-request:eja (GET, POST) ei lähetetä suoraan tiedostoille, vaan ne ohjataan omalle käsittelijälleen (*request handler*). Tämän ohjauksen tekee reitittäjä eli *router*.

Tässä erittäin yksinkertainen reititin:

- [How to build a basic server side routing system in PHP](https://medium.com/the-andela-way/how-to-build-a-basic-server-side-routing-system-in-php-e52e613cf241)

Em. kirjastossa reiti määritellään näin (index.php-tiedostossa):

```php
require_once 'router/Request.php';
require_once 'router/Router.php';

$router = new Router(new Request);

$router->get('/', function() {
  require_once 'controllers/uutiset.php';
});

$router->get('/uutiset', function() {
  require_once 'controllers/uutiset.php';
});

$router->get('/login', function($request) {
  require_once 'controllers/login.php';
});

$router->post('/login', function($request) {
  require_once 'controllers/login.php';
});
```

### Reititys id:n avulla

Kun halutaan esimerkiksi poistaa tai muokata tietokannan tietuetta, reitti sisältää usein ko. tietokantatietueen id:n.

Esim. jos halutaan poistaa uutinen, reitti sisältää uutisen id:n "/poista_uutinen/2". Nämä linkit reititetään reitin alkuosan mukaan ja poimitaan reitin polusta id, jota käytetään edelleen tietokantapyynnöössä:

```php
$router->get('/poista_uutinen', function($request) {
  $parts = explode("/", $request->requestUri);
  
  if(count($parts) === 3){
    $id = $parts[2];
    require_once 'controllers/poista_uutinen.php';
  } else {
    require_once 'controllers/uutiset.php';
  }
});
```

Koska käyttämämme yksinkertainen reititin ei tue tätä, muutetaan *Router*-luokan *formatRoute* tukemaan url:in alun perusteella:

```php
private function formatRoute($route)
  {
    $pieces = explode("/", $route);
    if (count($pieces) == 0)
    {
      return '/';
    }
    return $pieces[1];
  }
```

Kontrollerissa käytetään em. id:tä:

```php
<?php

require "database/database.php";
$pdo = connectDB();

try {
    deleteFrom($pdo, 'uutinen', ["id_name" => "uutinenID", "id_value" => $id]);
    echo "Uutinen poistettu";
} catch (PDOException $e){
    echo "Virhe uutista poistettaessa: " . $e->getMessage();
}

$allnews = getAllNews($pdo);

header("location: /uutiset");
exit;
```