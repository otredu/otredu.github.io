## Pull from fork

Tehtävärepot ovat *fork*:eja alkuperäisestä reposta. Jos tehtäviin tulee korjauksia, saat *pull*:attua ne omaan repoosi näin:

1. Lisää alkuperäinen tehtävärepo *upstream*:iksi

    ```cmd
     git remote add upstream https://github.com/tredu/tredu-ryhmaxyz-kurssixyz_template.git
    ```

2. Hae tehtävärepon muutokset lokaaliksi

    ```cmd
    git fetch upstream
    ```

3. Yhdistä ne omaan repoosi

    ```cmd
    git merge upstream/main
    ```

4. Tämä voi aiheuttaa *merge*-konflikteja jos olet muokannut samoja tiedostoja. Korjaa ne, tee *commit* ja jatka koodaamista.
