## Asunnonvuokraus

### Tietokannan suunnittelu

Tehtävänäsi on suunnitella asunnonvuorkasujärjestelmää varten relaatiotietokanta, joka toteutetaan MySQL:llä (tai PostgreSQL:llä).

Tehtävästä syntyy pikkuhiljaa Wordilla tehty tietokantadokumentti (siis vain 1 tiedosto). Työ palautetaan github-classroomiin: tietokannat-repoon.

### Tietokannan suunnittelun vaiheet

#### ER-kaavio ja tietokantakaavio

1. Mieti ensin, mitä tietoja vuokrausjärjestelmässä tarvitaan. Tee ER-kaavio suunnittelemasi tietokannan käsitteistöstä.

2. Tee tietokannan rakenteen kuvaus (Visio: Software/UML Database Notation tai Crow's Foot Notation). Muista lisätä myös tietotyypit jokaiselle kentälle.

*Huom* Vision UML notaatioon ei voi lisätä tietotyyppejä suoraan, joten käytä erillistä taulukkoa, johon kirjaat tietotyypit.

3. Esittele suunnitelmasi opelle ja korjaa tarvittaessa ennen seuraavaan vaiheeseen siirtymistä.

#### SQL-toteutus

1. Luo taulukot SQL-tietokantaan. Tee luontilausekkeet mieluiten käyttäen jotain migrations-kirjastoa (esim. knex). Toinen vaihtoehto on luoda taulut SQL:llä (SHOW CREATE TABLE table_name).

*Huom! Taulut kannattaa nimetä niin, että jokaisen edessä on jokin sama tunniste, joka kertoo, että ne kuuluvat juuri tähän tietokantaan. (esimerkiksi "stap_apartments")*
 
2. Luo yhteydet ja viite-eheyssäännöt. Muista että taulu pitää olla luotuna ennen kuin siihen voidaan viitata viiteavaimella (foreign key). Mieti mitkä tietueet liittyvät toisiinsa niin, että kun ne poistetaan, samalla tulee poistaa tietueita jotain muusta taulusta (ON DELETE CASCADE).

3. Syötä riittävä määrä testidataa kaikkiin tietokannan tauluihin (seeds). Tietojen syöttö pitää tehdä ottaen huomioon viite-eheydet, eli vie testidata ensin tauluihin joihin viitataan viiteavaimella.

#### Testitapaukset ja tietokannan testaaminen

Laaditaan yksinkertainen testauslomake ja siihen tietokantakyselyitä, joilla testataan tietokannan toiminta. Pyri miettimään tyypillisiä käyttötapoja tietokannallesi. Tarkoitus on, että mukana on vähintään yksi SELECT, DELETE jne. -kysely per taulu.

![Testit](img/tietokantatesti.PNG)

- Insert
- Delete Huom.! Viite-eheyden testaus
- Update
- Select
- Select useampaan taulukkoon (inner join)

Suorita suunnittelemasi testit tietokannallesi, korjaa virheet tietokannan rakenteessa.

#### Esimerkkikyselyjä

- Näytä kaikki tällä hetkellä olevat avoimet vuokrattavat kohteet, järjestä postinumeron ja sitten lähiosoitteen mukaiseen järjestykseen.
- Näytä kaikki tietyn kohteen seuraavalle näytölle ilmoittautuneet henkilöt, järjestä ilmoittautumisajan mukaiseen järjestykseen.
- Näytä kaikki asunnon hakuilmoitukset järjestettynä päivämäärän mukaiseen järjestykseen (vanhin ilmoitus ensimmäisenä).
- Näytä kaikki tehdyt sopimukset vuokranantajan nimen mukaan järjestettynä.

### Palautus

Työstä kootaan Word-dokumetti, johon kootaan tietokannan suunnitteluosuus (kuvat) sekä testausraportti. Työstä palautetaan myös migrations-, seeds- ja testaus-koodit (SQL tai JS). Tämä osuus tulee liittymään Systeemityön kurssiin ja palautat ne osana toiminnallista määrittelyä.

Suunnittelu:
- ER-kaavio
- tietokannan rakenne (UML/Crow's foot)

Toteutus:
- taulujen luominen (SQL CREATE TABLE tai JS migrations)
- testidata (SQL INSERT tai JS seeds)
- testikyselyt (SQL tai JS testikoodi)

Testaus: 
- testausraportti (mitä testattu, miten testattu)