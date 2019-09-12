## Rekisteröityminen, kirjautuminen, uloskirjautuminen ja sessiot

### Rekisteröityminen (registering)

Rekisteröitymisen yhteydessä tietokantaan (esim. users-taulu) lisätään kirjautumistiedot käyttäjästä (vähintään käyttäjänimi ja salasana).

Huomioi seuraavat asiat:

- käyttäjänimen (username) tulee tietokannassa olla uniikki, lisäksi on hyvä olla userid (primary key)
- salasana (password) tulee tallentaa salattuna (hashed) muodossa, jotta sitä ei voi kukaan lukea. Varaa salasanalle vähintään 255 merkkiä (varchar).
- tarkista, että käyttäjänimi ja salasana eivät jää tyhjiksi
- pyydä käyttäjää syöttämään salasana kaksi kertaa, tarkista, että ne täsmäävät
- puista piilotta salasana ruudulta (****)
- oikeassa järjestelmässä tulisi olla käytössä HTTPS-yhteys, muuten käyttäjänimi ja salasana voivat joutua vääriin käsiin (ei-salattuyhteys)

Salasanan salauksen voit tehdä näin:

```php
 $hashedpswrd = password_hash($password,PASSWORD_DEFAULT);
 ```

### Kirjautuminen (login)

Kun käyttäjä kirjautuu järjestelmään, hän syöttää käyttäjänimen ja salasanan. Myös tässä pitäisi käyttää HTTPS-protokollaa.

Tietokannasta haetaan käyttäjän (hashed) salasana, jota voidaan verrata annettuun salasanaan näin:

```php
$result = password_verify($given_password, $hashed_password);
```

### Istunto (session)

PHP:ssä on valmiina toiminnallisuudet session hallintaan. PHP-palvelin muistaa, että käyttäjä on kirjautuneena käyttämällä evästeitä (session cookies). Eväste tallentuu selaimeen sekä palvelimelle, ja se liitetään automaattisesti jokaiseen HTTP-kyselyyn (request).

Istunto aloitetaan ensimmäisenä asiana palvelinpuolen koodia:

```php
session_start();
```

Tämä alustaa superglobaalin istuntomuuttujataulukon *$_SESSION[]*. Tähän voidaan tallentaa istuntoon liittyviä tietoja.

Kirjautumisen yhteydessä voidaan tallentaa esim. kirjautuneen käyttäjän tiedot (esim. username) sekä istunnon tunniste (session_id):

```php
 $result = login($pdo, 'users', ["username" => $username, "password" => $password]);

if($result){
    $_SESSION["username"] = $username;
    $_SESSION["session_id"] = session_id();

    header("Location: /"); // forward eli uudelleenohjaus
} else {
    require "views/login.view.php";
}
```

Jos kirjautuminen onnistuu, uudelleenohjataan käyttäjä *header*-funktion avulla pääsivulle, muussa tapauksessa pysytään kirjautumisnäkymässä.

Näiden tietojen avulla voidaan tarkistaa onko kirjautuminen edelleen voimassa esim. tällaisen apufunktion avulla (tämä voi sijaita esim. "libraries/Helpers.php"-tiedostossa):

```php
function isLoggedIn(){
    if(isset($_SESSION['username']) && ($_SESSION['session_id'] == session_id())){
        return true;
    } else {
        return false;
    }
}
```

Nyt voidaan reititys ohjata toimimaan eritavalla kirjautuneelle ja ei-kirjautuneelle käyttäjälle:

```php
 if(isLoggedIn()){
    require_once 'controllers/uusi_uutinen.php';
  } else {
    require_once 'controllers/login.php';
  }
```

Samoin voidaan toteuttaa erilaisia näkymiä *.view.*:hin (poistaminen ja päivittäminen vain kirjautuneena):

```php
if(isLoggedIn()){
    $id = $newsitem['uutinenID'];
    echo "<a href=/poista_uutinen/$id>Poista</a>". " ";
    echo "<a href=/paivita_uutinen/$id>Päivitä</a>";
}
```

Samoin navigointipalkki voi muuttua:

```php
    <?php if(!isLoggedIn()): ?>
       <li class="navbutton"><a href="/login">Login</a></li> 
       <li class="navbutton"><a href="/register">Rekisteröidy</a></li>
    <?php else: ?>
       <li class="navbutton"><a href="/uusi_uutinen">Uusi uutinen</a></li>
       <li class="navbutton"><a href="/logout">Logout</a></li>
    <?php endif ?>
```

### Uloskirjautuminen (logout)

Uloskirjautuessa poistetaan istunto sekä palvelimelta, että selaimesta:

```php
    session_unset(); //poistaa kaikki muuttujat
    session_destroy();
    setcookie(session_name(),'',0,'/'); //poistaa evästeen selaimesta
    session_regenerate_id(true);
    header("Location: /login"); // forward eli uudelleenohjaus
    die();
```