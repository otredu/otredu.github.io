## PDO harjoituksia

**Ennen näitä harjoituksia tutustu materiaaliin [PDP-rajapinta](./pdo-rajapinta.html) ja [PHP-oliot ja -luokat](./php-luokat.html).**

### Tehtävä 1

Tee to-do-lista, joka tulostetaan ruudulle. Jokainen tehtävä (task) on olio, jossa attribuutteina ovat "tehtävä", "deadline", "vastuuhenkilö", "valmis" (true/false). Määrittele *task*-luokka (*class*) ja tee sen avulla yksi tehtävä (*new*) ja tulosta se sivulle. Muuta totuusarvo merkkijonoksi ennen tulostamista. Tulostus voisi näyttää tältä:

---

- Tehtävä: Suunnittele tietokanta
- Deadline: 2.5.2019
- Vastuuhenkilö: Maija Mikkola
- Valmis: valmis

### Tehtävä 2

Luo MySQL:ään ToDo-tietokanta (database), sinne taulu (table) ja tauluun tietueita (record), käyttäen phpMyAdmin:iä. Pyydä tietueet tietokannasta PDO-luokan avulla tehtävässä 1 määrittelemäsi luokan muodossa.

### Lisätehtävä 3

Tee lomake, jonka kautta voit tallentaa tietokantaan uusia ToDo-tehtäviä.
