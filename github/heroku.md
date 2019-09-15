## Heroku ja Github

Herokuun voi käynnistää (*deploy*) node.js tai PHP-projekteja suoraan github-reposta.

### Procfile

Tee projektisi juureen tiedosto, jonka nimi on *Procfile*. Kirjoita siihen ohje, miten sovelluksesi käynnistetään, esim. *node.js*-projektille se voisi olla:

```cmd
web: node index.js
```

PHP-projektille esim. jossa palvelin käynnistetään hakemistossa *public*:

```cmd
web: vendor/bin/heroku-php-apache2 public/
```

### .htaccess (PHP)

Jos olet käynnistämässä PHP-projektia Herokussa, ja käytät Apache-palvelinta, lisää projektisi *public*-kansioon *.htaccess*-tiedosto. Tämän tiedoston avulla ohjataan kaikki HTTP-protokollan pyynnöt ohjelmasi *index.php*-tiedostolle (reitittimelle).

```cmd
# This file configures the Apache web server such that:
#  - index.php is served
#  - any other request is rerouted to index.php.

RewriteEngine On
RewriteRule ^/index\.php$ - [L,NC]

RewriteRule . index.php [L]
```

Jotta myös *css*-tiedostot toimivat, tee niille oma kansio *css* *public*-kansion sisälle ja luo sinne toinen *.htaccess*-tiedosto:

```cmd
# This file configures the Apache web server so that all files in this directory are accessible

RewriteEngine Off
Allow From All
Satisfy Any
Options -Indexes
```

### Github

Lisää koodiin *.gitignore* tiedosto. Tee uusi github-repo, ja päivitä koodi siihen aivan normaalisti.

Esim. *node.js* projektin *.gitignore* sisältäisi ainakin:

```cmd
# dependencies
/node_modules

# testing
/coverage

# env
.env
```

PHP-projektissa *.gitignore* sisältäisi ehkä:

```cmd
# dependencies
/vendor

# testing
/coverage

# env
.env

# database migrations
phinx.yml
```

### Heroku

- Tee itsellesi käyttäjätili [Heroku.com](http://heroku.com):iin. 

- Luo uusi sovellus Heroku.com:in kautta (*Create new app*).

- Valitse *Deploy*-välilehdeltä *Deployment method: Github*. Kirjaudu Github-tilillesi (ellet jo ole kirjautuneena) ja anna Herokulle lupa Github:in käyttöön. Kirjoita repon nimi ja valitse *search* ja sitten *Manual deploy*-kohdan alta *Deploy branch*. Nyt sovelluksesi on verkossa ja voit avata sen linkin kautta. Voit halutessasi aktivoida automaattiset päivitykset (*Enable automatic deploys*).

*Huom* Jos koneelle on asennettu [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli). Voit tehdä Heroku-sovelluksen myös sen kautta suoraan (bash):

```cmd
> heroku create my_project_name
```

### Relaatiotietokanta ja .env

Jos ohjelmasi käyttää relaatiotietokantaa, voit ottaa käyttöön Herokun PostgreSQL-tietokannan (valitse *Data*). Koodi löytää tietokannan ympäristömuutujan *DATABASE_URL* avulla (muuttuja on siis automaattisesti asetettuna Heroku-ympäristössä).

Jotta koodisi toimisi myös kehitysympäristössä, käytä *.env*-tiedostoa, johon tallennat kehitysaikaiset ympäristömuuttujat. Koska nämä ympäristötiedot sisältävät salasanoja, näitä tietostoja ei saa tallentaa github:iin vaan ne pitää muistaa jättää pois käyttämällä *.gitignore*-tiedostoa. Github:iin olisi hyvä tallentaa .env-mallitiedostot (ilman oikeita käyttäjätunnuksia ja salasanoja).

Esim. .env-tiedosto, joka toimii lokaalisti (kirjautumistiedot paikalliseen MySQL-tietokantaan):

```cmd
###############################################
# Configuration for localhost hosting MySQL   #
###############################################

DB_DBTYPE = "MySql"
DB_HOST = "localhost"
DB_USERNAME = "root"
DB_PASSWORD = "mypass123"
DB_NAME = "news"
DB_PORT = "3306"
```

Esim. .env-tiedosto, joka toimii lokaalisti (kirjautumistiedot paikalliseen PostgreSQL-tietokantaan):

```cmd
####################################################
# Configuration for localhost hosting PostgreSQL   #
####################################################

DB_DBTYPE = "Postgre"
DB_HOST = "localhost"
DB_USERNAME = "postgre"
DB_PASSWORD = "mysecretpassword"
DB_NAME = "news"
DB_PORT = "5432"
```

### Ympäristömuuttujien toiminta PHP:ssa

Jotta .env-tiedostosta voidaan lukea muuttujia PHP:n ympäristömuuttujiin tarvitaan jokin apukirjasto (esim. PHPdotenv):
- [PHPdotenv-dokumentaatio](https://github.com/vlucas/phpdotenv)

Toinen vaihtoehto on käyttää *env.php*-tiedostoa: 
- [How to create an environment variable file...](https://medium.com/@hfally/how-to-create-an-environment-variable-file-like-laravel-symphonys-env-37c20fc23e72).
