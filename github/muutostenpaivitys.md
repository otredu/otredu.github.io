## Muutosten päivittäminen Github:iin

### Muutokset Git Bash:illä

Jos *local*- ja *remote*-repo ovat olemassa (tehty uusi [repo]("./uusirepo.html") tai [kloonattu vanha]("./kloonaus.html")), tiedostoja päivitetään Github:iin ajamalla:

    git add *
    git commit -m "Second update"
    git push

## Epäsynkka *local*:in ja *remote*:n välillä

Joskus muutoksia tulee useammalta *local*-repository:ltä. Silloin *remote* ja koneesi *local*-repo ovat ns. epäsynkassa. Näin voi käydä jos vaikka teet töitä kahdella eri koneella, joissa on omat *local*-reponsa. Jos teet vaikka kotona töitä, ja teet *push*-operaation *remote*-repoon, seuraavan kerran kun aloitat työt koulun koneella lataa tekmäsi päitykset seuraavasti, ennen kuin jatkat hommia:

    git pull

Jos unohdat tehdä *pull*:in ja aloitat koodaamisen, teet *commit*:eja, *local*-repoosi, *push*-operaatio ei enää onnistukaan, koska *local* ja *remote* ovat nyt epäsynkassa.

!["Push failed"](img/git_fail_fetch.PNG)

Hae ensin muutokset *remote*-reposta:

    git fetch
    git status

!["Git status"](img/git_pull_to_merge.PNG)

Tässä vaiheessa git *status* ilmoittaa, että *remote*-repo on sinua edellä *ahead* ja sinun tulee yhdistää ne tekemällä *pull*:in.

    git pull

*auto-merge* ei aina onnistu, varsinkaan jos muutokset ovat samassa tiedostostossa. Jos gitbash ilmoittaa kohdanneensa *merge conflict*:in, sinun pitää ne korjata konfliktit itse. 

!["Merge conflicts"](img/automerge_fail.PNG)

Avaa ko. tiedosto VSCode:lla. Valitse vertailu, niin muutosten editointi on helpompaa.

!["Merge + CSCode"](img/merge_conflict_vscode.PNG)

Lopuksi muutokset pitää *push*:ata *remote*-repoon (add-commit-push).