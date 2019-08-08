## Heroku ja Github

Herokuun voi *deploy*:ata node.js tai PHP-projekteja suoraan github-reposta.

### Procfile

Tee projektisi juureen tiedosto, jonka nimi on *Procfile*. Kirjoita siihen ohje, miten sovelluksesi käynnistetään, esim. *node.js*-projektille se voisi olla:

```cmd
web: node index.js
```

PHP-projektille esim:

```cmd
web: vendor/bin/heroku-php-apache2
```

### Github

Lisää koodiin *.gitignore* tiedosto. Tee uusi github-repo, ja päivitä koodi siihen aivan normaalisti. Esim. *node.js* projektin *.gitignore* sisältäisi ainakin:

```cmd
# dependencies
/node_modules

# testing
/coverage

# env
.env.local
.env.development.local
.env.test.local
.env.production.local
```

### Heroku

Tee itsellesi käyttäjätili [Heroku.com](http://heroku.com):iin.

Asenna konelle [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli). Tee sen avulla uusi projekti Herokuun, kirjoita komentoriville (pyytää kirjautumista Herokuun):

```cmd
> heroku create my_project_name
```

Huom! Jos koneella ei ole Heroku CLI -ohjelmaa, voit alustaa projektin myös kokonaan Heroku.com:in kautta (*Create new app*).

Avaa projekti Heroku.com:in kautta, valitse *Deploy*-välilehdeltä *Deployment method: Github*. Kirjaudu Github-tilillesi (ellet jo ole kirjautuneena) ja anna Herokulle lupa Github:in käyttöön. Kirjoita repon nimi ja valitse *search* ja sitten *Manual deploy*-kohdan alta *Deploy branch*. Nyt sovelluksesi on verkossa ja voit avata sen linkin kautta. Voit halutessasi aktivoida automaattiset päivitykset (*Enable automatic deploys*).

### Relaatiotietokanta

Jos ohjelmasi käyttää relaatiotietokantaa, voit ottaa käyttöön Herokun PostGRE-tietokannan (valitse *Data*. Koodi löytää tietokannan ympäristömuutujien avulla. Jotta koodisi toimisi myös kehitysympäristössä, käytä joko *.env* tai *env.example.php*-tiedostoa johon tallennat kehitysaikaiset ympäristömuuttujat. Koska nämä tiedot sisältävät salasanoja, näitä tietostoja ei saa tallentaa github:iin vaan ne pitää muistaa jättää pois käyttämällä *.gitignore*-tiedostoa.

Lisää tietoa PHP:n ympäristömuuttujista: [How to create an environment variable file...](https://medium.com/@hfally/how-to-create-an-environment-variable-file-like-laravel-symphonys-env-37c20fc23e72).
