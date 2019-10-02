## Projektissa työskentely

### Repon luominen, jakaminen ja suojaaminen

Yksi projektiryhmän jäsenistä tekee tyhjän github-repon, antaa muille yhteistyöoikeudet (*collaboration*) sekä muuttaa asetukset (*settings -> branches*) muotoon *Protect matching branches/Require pull request reviews before merging*, kirjoita *Branch matching rule*-kohtaan *master* ja valitse *Include administrators*.

Tämä pakottaa sen, että koodi katselmoidaan ennen sen lisäämistä *master*-haaraan.

Kukin projektiryhmän jäsen kloonaa tehtdyn repon itselleen:

```bash
git clone <your_github_repo.git>
```

### Haaran luominen (*branch*)

Joka kerta kun koodaat uutta ominaisuutta, tee uusi github-branch. Aloita tekemällä *checkout* *master*-haaralle ja *pull* siihen, että saat uusimmat muutokset *master*-koodista omalle koneellesi.

```bash
git checkout master
git pull
git checkout -b <your_name>/<your_feature>
```

Kun toiminnallisuus on valmis, päivitä muutokset *github*:iin (add/commit/push). Jotta *push* toimii tee uusi *upstream*-haara *github*:iin:

```bash
git push --set-upstream <your_name>/<your_feature>
```

Voit tehdä *commit*:in myös suoraan *VSCode*-ohjelmassa. Silloin ei tarvitse tehdä *add*-vaihetta käsin (lisäys hoituu automaattisesti). Samoin *upstream*-syntyy automaattisesti.

    1. Aloita valitsemalla vasemmalta versionhallinta (kolmas ylhäältä). 

    2. Kirjoita *commit*-viesti kenttään ja valitse *ok* tai *Ctrl+Enter*. Vastaa *yes* kun kysytään lisätäänkö kaikki muutokset.

![Git commit VSCode](./img/commit_vs_code.PNG)

    3. Tee vielä *Push* (avaa valikko kolmesta pisteestä):

![Push menu](./img/push_menu.png)

    4. Vastaa *yes* kun kysytään tehdäänkö *upstream*.
    
### Pull request:in tekeminen

Mene *github*:iin kohtaa *Pull requests* ja tee uusi sellainen. Jonkun toisen täytyy katselmoida koodi, sekä hyväksyä se (*Accept*). Käy vielä tekemässä *Merge*. Kun katselmoit toisen koodia, muutokset näkyvät ruudulla (vihreät ovat lisäyksi, punaiset positoja).

### Merge conflict

Jos kaksi henkilöä muuttaa samaan aikaan saman tiedoston samaa riviä, syntyy *merge*-vaiheessa *merge conflict*. Huomaat tämän jo siinä vaiheessa kun tee *Pull request*:ia* *github*:ssa punaisena tekstinä (*Can't automatically merge*).

![can't merge](./img/open_pull_conflict.PNG)

Voit silti tehdä *Pull request*:in. Tässä vaihessa joko sinä itse tai joku muu samassa projektissa ratkaisee miten tiedoston muutokset käsitellään (*resolve conflicts*).

![resolve conflicts](./img/resolve_conflicts.PNG)

Tämä tehdään käsin poistamalla turhat koodirivit, sekä editorin lisäämät merkit <<<<< ===== >>>>>, jotka auttavat näkemään missä muutokset ovat. Tee vielä *commit*. Jos teit tämän itse, toisen projektihenkilön pitää se hyväksyä.

![edit conflicts](./img/edit_conflicts.PNG)

Jos konflikteja on liikaa, github ilmoittaa, että *merge* pitää tehdä komentoriviltä. Mene siis omaan haaraasi, ja hae muiden tekemät muutokset github:ista:

```cmd
git merge origin/master
```

Avaa sitten VSCode, valitse *incoming change* tai *current change*. Lisää muutokset painamalla + merkkiä VS Codessa (tai "git add \*" bash:issä). Tee *commit* ja testaa koodisi toiminta. Jos kaikki toimii tee *push*.

Huom! Jotta git:iä voi käyttää *merge conflict*:ien ratkaisussa, se pitää löytyä PATH:ista. Lisää siis PATH:iin "C:\Program Files\Git\cmd".

Voit katsoa koodihaaroja ja niiden etenemistä github:in *Insights* välilehden *Network*-osasta. Tässä esimerkkikuvassa alimman haaran *merge* ei onnistu, koska sen haarautumisen jälkeen on muutettu samoja tiedostoja.

![Merge conflict](./img/merge_conflict_SNOIK.PNG)