## News-demo

Kun lähdet pohtimaan toteutusta valitse koodillesi jokin pohja (framework). Tämä demo toimii eräänlaisena yksinkertaina framework:ina projektityöllesi.

### Demon asennus

Valmis mallikoodi ja MySQL-tietokantadump löytyvät täältä (lataa ZIP ja pura):

- [News-demo-koodi](https://github.com/otredu/news2020)

Tässä ohjeet asentamiseen ja käynnistämiseen:

- [Asennus-ohjeet](https://github.com/otredu/news2020/blob/master/readme.md)

### XAMPP:in konffaus (vain Linux)

Jos käytät Linux:ia aktivoi MySQL-driver näiden ohjeiden mukaisesti (Windows-käyttäjillä MySQL on default:ina jo käytössä):

1. etsi php-config-tiedosto, kirjoita terminaaliin

    ```cmd
    php -i | grep "Loaded Configuration File"
    ```

2. avaa php-config-tiedosto editoriin (esim. nano, reitin pitää olla viime komennon antama)

    ```cmd
    sudo nano /etc/php/php.ini
    ```

3. Etsi tiedostosta "Dynamic extensions" kohta ja poista puolipilkku niiden extension:eiden edestä joita tarvitset eli

    ```cmd
    extension=pdo_mysql
    extension=pdo_odbc
    ```

4. Tallenna tiedosto, jos käytit nanoa niin ctrl+x

5. Vaihda *.env*-tiedostoon localhostin tilalle 127.0.0.1

### Demon toiminnallisuudet

Demossa on ASPA-perustoiminnallisuudet:

- rekisteröityminen
- kirjautuminen
- kaikkien käyttäjien uutisten lukeminen (kirjautumatta)
- kirjautuneena: uutisen lisääminen, muokkaaminen ja poistaminen (vain omaa uutista voi muokata tai poistaa)
- uloskirjautuminen

Tästä koodista voit ottaa mallia ja muokata siitä oman projektityösi toteutuksen.

### Koodin rakenne

- public/index.php ---> reititys (kaikki HTTP-pyynnöt tulevat aina tämän kautta)
- database/models ---> SQL-rajapinta tietokantaan
- controllers ---> reititin ohjaa pyynnön näille funktioille, jotka tekevät sivun logiikan (hakevat tietoa tietokannasta tai kirjoittavat tietokantaan), kutsuvat view:tä
- views ---> sivun ulkonäkö (HTML)
- partials ---> head (nav-bar) ja footer
- public/css ---> tyylit
- public/img ---> kuvat
- .env ---> tiedot, jotka tarvitaan tietokannan käyttämiseen (käyttäjätunnus ja salasana)

### Skeleton (koodipohja)

Oma koodi kannattaa aloittaa hieman tyhjemmältä pohjalta. Tässä on repo, jonka voit ottaa oman koodisi pohjaksi.

- [Skeleton](https://github.com/otredu/aspa2020_skeleton)

#### Yhteys omaan tietokantaasi

1. Muuta *.env*-tiedostossa oleva tietokannan nimi vastaamaan omaasi (muuta *.env-localhost*-tiedosto ensin *.env*-tiedostoksi)

2. Hae tiedot yhdestä tietokantasi taulusta muuttamalla tietokantataulun nimi vastaamaan omaasi SQL SELECT-lauseessa (*database/models/demomodel.php*)

3. Ota käyttöön oma tyyli kopioimalla *.css*-tiedostosi kansioon *pubic/css*. Muuta *partials/head.php* vastaamaan omaan sivustosi *head*-osiota (ml. nav-bar).

    Nyt sinulla pitäisi olla omannäköinen sivusto, joka hakee yhden taulun sisällön selaimeen dumppina (ei vielä muotoiltuna)

4. Muokkaa *demo.view.php* niin, että tiedot näyttävät hyvältä

    ```php
    <?phprequire"partials/head.php"; ?>

    <h2class="centered">Testisivu</h2>

    <divclass = "news">
    <?php
    echo"Hello World", "<br>";
    echo"Kuvaus: ", $allinfo[0]["description"], "<br>";
    echo"Aika: ", $allinfo[0]["date"], "<br>";
    echo"Puhelin: ", $allinfo[0]["phonenumber"], "<br>";
    ?>
    </div>

    <?phprequire"partials/footer.php"; ?>
    ```

5. Jatka koodaamista...

    - tee uusi controller (*controllers/mycontroller.php*)
    - tee uusi model (*database/models/mymodel.php*)
    - tee uusi view (*views/myview.php*)
    - lisää reitti (route) *index.php*:hen

Happy hacking!