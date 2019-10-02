## Asunnonvuokraus

### Tietokannan suunnittelu

Tehtävänäsi on suunnitella asunnonvuorkasujärjestelmää varten relaatiotietokanta, joka toteutetaan MySQL:llä tai PostgreSQL:llä.

Tehtävästä syntyy pikkuhiljaa Wordilla tehty tietokantadokumentti (siis vain 1 tiedosto). Työ palautetaan github-classroomiin: tietokannat-repoon.

### Tietokannan suunnittelun vaiheet

#### ER-kaavio ja tietokantakaavio

1. Mieti ensin, mitä tietoja vuokrausjärjestelmässä tarvitaan. Tee ER-kaavio suunnittelemasi tietokannan käsitteistöstä.

2. Tee tietokannan rakenteen kuvaus (Visio: Software/UML Database Notation). Muista lisätä myös tietotyypit jokaiselle kentälle. 

*Huom* Vision UML notaatioon ei voi lisätä tietotyyppejä suoraan, joten käytä erillistä taulukkoa, johon kirjaat tietotyypit.
 
3. Esittele suunnitelmasi opelle ja korjaa tarvittaessa ennen seuraavaan vaiheeseen siirtymistä.

#### SQL-toteutus

1. Luo taulukot SQL-tietokantaan. Tee luontilausekkeet (SHOW CREATE TABLE taulukon_nimi).

*Huom! Taulukot kannattaa nimetä niin, että jokaisen edessä on jokin sama tunniste, joka kertoo, että ne kuuluvat juuri tähän tietokantaan. (esimerkiksi "as_asunnot")*
 
2. Luo yhteydet ja viite-eheydet (kun jokin tietue poistetaan, poistetaan samalla siihen kuuluvat tietueet toisesta taulusta). Tulosta (*export*) tietokannastasi luontilauseet vasta viite-eheyden lisäämisen jälkeen.

3. Syötä jonkin verran dataa tietokantaan.

#### Testitapaukset ja tietokannan testaaminen

Laaditaan yksinkertainen testauslomake ja siihen SQL-kyselyitä, joilla kokeillaan tietokannan käyttämistä. Pyri miettimään tyypillisiä käyttötapoja tietokannallesi. Tarkoitus on, että mukana on vähintään yksi SELECT, DELETE yms. -kysely. Kaikissa tauluissa ei tarvitse olla kaikkia tyyppejä mutta kaikkia tauluja tulisi testata jotenkin.

![Testit](img/tietokantatesti.PNG)

- Insert
- Delete Huom.! Viite-eheyden testaus
- Update
- Select
- Select useampaan taulukkoon

Suorita suunnittelemasi testit tietokannallesi, korjaa virheet.

#### Esimerkkikyselyjä 

- Näytä kaikki tällä hetkellä olevat avoimet vuokrattavat kohteet, järjestä postinumeron ja sitten lähiosoitteen mukaiseen järjestykseen.
- Näytä kaikki tietyn kohteen seuraavalle näytölle ilmoittautuneet henkilöt, järjestä ilmoittautumisajan mukaiseen järjestykseen.
- Näytä kaikki asunnon hakuilmoitukset järjestettynä päivämäärän mukaiseen järjestykseen (vanhin ilmoitus ensimmäisenä).
- Näytä kaikki tehdyt sopimukset vuokranantajan nimen mukaan järjestettynä.

### Palautus

Työstä kootaan MS Word-asiakirja jossa on mukana. Tämä osuus tulee liittymään Systeemityön kurssiin ja palautat ne osana toiminnallista määrittelyä.

Suunnittelu:
- ER-kaavio
- tietokannan rakenne

Toteutus:
- CREATE TABLE-lauseet
- testidata
- testikyselyt

Testaus: 
- testauslomake