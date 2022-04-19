## Reititys

### Johdanto

Sivuston rakenteesta saadaa selkeämpi ja ylläpidettävämpi, kun HTTP-request:eja (GET, POST) ei lähetetä suoraan tiedostoille, vaan ne ohjataan omalle käsittelijälleen (*request handler*). Tämän ohjauksen tekee reitittäjä eli *router*. 

Routerin avulla on helpompi tehdä tietoturvallisempi ohjelmisto, koska router on selkeä keskitetty piste, jossa voidaan tarkistaa onko käyttäjä kirjautuneena, ja tarvittaessa pakottaa hänet kirjautumissivulle. Myös *session_start()* tulee varmemmin kutsuttua, kun se on vain yhdessä kohtaa koodia.

Tässä erittäin yksinkertainen reititin (*news-demo*):

```php
<?php
session_start();

$route = explode("?", $_SERVER["REQUEST_URI"])[0];
$method = strtolower($_SERVER["REQUEST_METHOD"]);

require_once "./utils/helpers.php";

switch($route){
    case "/":
        require_once "./views/index_view.php";
    break;
    case "/newarticle":
        if(isLoggedIn()){
            if($method == "post" ){
                require_once "./news/insertController.php";
            } else { 
                require_once "./news/newArticle.php";
            }
        } else { 
            header("location: /login");
        }
    break;
    case "/readnews":
        require_once "./news/index.php";
    break;
    case "/register":
        if($method == "post" ){
            require_once "./news/registerController.php";
        } else {
            require_once "./news/register.php";
        }
    break;
    case "/login":
        if($method == "post" ){
            require_once "./news/loginController.php";
        } else {
            require_once "./news/login.php";
        }
    break;
    case "/logout":
        require_once "./news/logoutController.php";
    break;
    case "/delete":
        if(isLoggedIn()){
            require_once "./news/deleteController.php";
        } else {
            header("location: /login");
        }
    break;
    case "/updatearticle":
        if(isLoggedIn()){
            if($method == "post" ){
                require_once "./news/updatePostController.php";
            } else { 
                require_once "./news/updateArticle.php";
            }
        } else { 
            header("location: /login");
        }
    break;
    default:
        echo "404 page not found here";
        
}
```

### Muutokset koodiin

Reitittimen lisäksi kaikki osoitteet koodissa pitää muuttaa käyttämään em. routeja (ei siis viitata enää *.php* - tiedostoihin.

1. header(location "login.php") ---> header(location /login)
2. href="login.php" ---> href="/login"
3. action="login.php" ---> action="/login"
4. *session_start()* poistetaan kaikista muista tiedostoista

### .htaccess

Edellä mainitut toimet eivät vielä estä tiedostoihin käsiksipääsyä suoraan, joten lisätään vielä tiedosto *.htaccess*, jonka avulla webserveri ohjaa kaikki pyynnöt *routerille*.

```yaml
# This file configures the Apache web server such that:
#  - index.php is served
#  - any other request is rerouted to index.php. 
#AddType application/x-httpd-php5 .php
AddType application/x-httpd-php .php
RewriteEngine On
RewriteRule ^/index\.php$ - [L,NC]

RewriteRule . index.php [L]
```


