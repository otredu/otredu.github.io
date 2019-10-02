### Github-ohjeita

## Uusi github repo

1. Avaa [Git Bash](https://gitforwindows.org/). Tee projektillesi uusi kansio (mkdir), siirry sinne (cd) ja alusta git-versionhallinta ajamalla komento (tekee uuden paikallisen repon, *local repository*):

    ```bash
    git init
    ```

2. Luo uusi tiedosto *.gitignore*, johon määrittelet mitä tiedostoja ei siirretä Github:iin. Esim. node.js projektissa sen sisältö voisi olla [tällainen](https://github.com/otredu/jstesting/blob/master/.gitignore).

3. Tee uusi tiedosto *read.me*, joka kertoo muille mitä repo:ssasi on. Tiedoston formaatti on markdown:ia:

    ```md
    # Projektin nimi
    Projektin kuvaus
    ```
4. Lisää hakemistossa olevat tiedostot paikallisen repon versionhallintaan ajamalla:

    ```bash
    git add ./*
    git commit -m "First update"  
    ```
    *First update* on kuvaus päivityksen sisällöstä.
5. Mene selaimen kautta Github:iin, ja luo itsellesi uusi GitHub-repo (*remote repository*), ja anna sille kuvaava nimi. Kopioi repon osoite:

    ![Repon osoitteen kopiointi](img/new_repo_1.png)
6. Liitä paikallinen *local* repo Github:iin tekemääsi *remote* repoon ajamalla (käytä hiiren oikeaa painiketta repon osoiteen liittämiseen):

    ```bash
    git remote add origin <liitä tähän kopioimasi github-repon osoite>
    ```
7. Siirrä tiedostot Githubiin komennolla:

    ```bash
    git push -u origin master
    ```

## Muutosten päivittäminen Github:iin

Jos *local*- ja *remote*-repo ovat olemassa, tiedostoja päivitetään Github:iin ajamalla:

    git add ./*
    git commit -m "Second update"
    git push

## Repon poistaminen

Joskus asiat menevät pieleen, ja on tarpeen poistaa lokaalirepo. Sen voi tehdä poistamalla CMD:n kautta kansion jonka nimi on *.git* (piilotettu kansio):

```cmd
rm -rf .git
```

Remote repon voi poistaa *github.com*-sivuston kautta.

## Linkkejä

- Uusi repo
    [Start a new git repository](https://kbroman.org/github_tutorial/pages/init.html)
- .gitignore
    [Github Help: Ignoring files](https://help.github.com/articles/ignoring-files/)
- Markdown
    [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)