## Heroku ja Github

Herokuun voi *deploy*:ata node.js tai PHP-projekteja suoraan github-reposta.

### Procfile

Tee projektisi juureen tiedosto, jonka nimi on *Procfile*. Kirjoita siihen ohje, miten sovelluksesi käynnistetään, esim. *node.js*-projektille se voisi olla:

```cmd
web: node index.js
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

Avaa projekti Heroku.com:in kautta, valitse *Deploy*-välilehdeltä *Deployment method: Github*. Kirjaudu Github-tilillesi ja anna Herokulle lupa Github:in käyttöön. Kirjoita repon nimi ja valitse *search* ja sitten *Manual deploy*-kohdan alta *Deploy branch*. Nyt sovelluksesi on verkossa ja voit avata sen linkin kautta. Voit halutessasi aktivoida automaattiset päivitykset (*Enable automatic deploys*).
