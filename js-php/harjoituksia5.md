## PDO harjoituksia

Tutustu [PHP-olioihin ja -luokkiin](./php-luokat.html)

### Tehtävä 1

Tee to-do-lista, joka tulostetaan ruudulle. Jokainen tehtävä (task) on assosiatiivinen taulukko, jossa avaimina on "tehtävä", "deadline", "vastuuhenkilö", "valmis" (true/false). Tee yksi tehtävä ja tulosta se sivulle. Muuta totuusarvo merkkijonoksi ennen tulostamista. Tulostus voisi näyttää tältä:

---

- Tehtävä: Suunnittele tietokanta
- Deadline: 2.5.2019
- Vastuuhenkilö: Maija Mikkola
- Valmis: valmis

---
Tee harjoitus 2 käyttäen olioita (*class*). Katso mallia [täältä](https://otredu.github.io/js-php/php-jatko.html).

### Tehtävä 2

Luo XAMPP:in MySQL:ään ToDo-tietokanta (database), sinne taulu (table) ja tauluun tietueita (record), joko [MySQL-demon](https://otredu.github.io/js-php/mysql.html) tyylillä tai phpMyAdmin:in kautta. Kysy tietueet tietokannata php:n PDO-luokan avulla [katso ohje PDP:n käytöstä](http://www.leeniemi.net/sasp18/index.php?sivu=phpm15) ja esitä ne sivullasi (kuten tehtävässä 2).

[Leenan PDO-esimerkki tietokannan tietueiden lukemisesta](http://www.leeniemi.net/sasp18/index.php?sivu=pdemo14)

### Lisätehtävä 3

Tee lomake, jonka kautta voit tallentaa tietokantaan uusia ToDo-tehtäviä.

[Leenan PDO-esimerkki tietueiden lisäämisestä tietokantataan](http://www.leeniemi.net/sasp18/index.php?sivu=pdemo15)