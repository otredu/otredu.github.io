## Uutiset

**Ennen näitä harjoituksia tutustu materiaaliin [PDP-rajapinta](./pdo-rajapinta.html).**

### Tehtävä 1: Sivuston rakenne ja HTML-lomake

Tee kolmen sivun sivusto: pääsivu (index.php),lue uutiset (uutiset.php) sekä lisää uutinen (uusi_uutinen.php) -sivut. Jaa koodi niin, että *head.php* sisältää sivuston otsikon sekä navikointipalkin ja *footer.php* kaikille sivuille yhteisen sivun alareunan. Katso mallia [täältä](./php-jatko.html).

Muotoile sivu käyttämällä *.css*:ää, katso mallia [täältä](../html-css/css-demo1.html).

Tee lomake, jonka avulla voi lisätä uuden uutisen. Tee lomakkeen käsittelijä, joka tulostaa tiedot selaimen ikkunaan.

![uutiset sivusto](./img/uutiset_kuva.PNG)

### Tehtävä 2: Tietokantayhteyden muodostaminen ja kaikkien uutisten hakeminen

Liitä sivustosi käyttämään tietokantaa. Hae kaikki uutiset tietokannasta ja tulosta ne "lue uutiset"-sivulle.

Jaa koodisi kahteen osaan: *uutinen.php* sisältää tietokantaan liittyvät toiminnot ja *uutinen.view.php* muotoilee sivun ulkonäön.

### Tehtävä 3: Lisää uusi uutinen

Liitä lomakkeesi tietokantaan niin, että sen avulla voi lisätä uuden uutisen tietokantaan. Muista sanitoida syötteet.

### Tehtävä 4: Uutisen poistaminen sekä muokkaminen

Lisää uutisen yhteyteen linkki, jonka avulla sen voi poistaa ja toinen linkki, jonka avulla sitä saa muokattua (aukeaa lomakkeeseen).

### Tehtävä 5: Lisää kirjautuminen

Lisää sivustolle rekisteröityminen sekä kirjautuminen. Päästä vain kirjautuneet käyttäjät lisäämään, poistamaan sekä muokkamaan uutisia.