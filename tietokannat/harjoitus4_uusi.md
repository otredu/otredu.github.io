## Verkkokaupan tietokanta

Tehtävänäsi on suunnitella verkkokauppaa varten relaatiotietokanta, joka toteutetaan MySQL:llä tai PostgreSQL:llä. 

Tehtävästä syntyy pikkuhiljaa Wordilla tehty tietokantadokumentti (siis vain 1 tiedosto). Työ palautetaan github-classroomiin: tietokannat-repoon.

### Tietokannan suunnittelun vaiheet

#### ER-kaavio ja tietokantakaavio

1. Mieti ensin, mitä tietoja verkkokaupassa tarvitaan (pelkät tuotteet eivät riitä). Tee ER-kaavio suunnittelemasi tietokannan käsitteistöstä.

2. Tee tietokannan rakenteen kuvaus (Visio: Software/UML Database Notation). Muista lisätä myös tietotyypit jokaiselle kentälle.

3. Esittele suunnitelmasi opelle ja korjaa tarvittaessa ennen seuraavaan vaiheeseen siirtymistä.

#### SQL-toteutus

1. Luo taulut, niiden väliset relaatiot sekä määrittele viite-eheyssäännöt.

2. Syötä riittävä määärä dataa tietokantaan.

#### Testitapaukset ja tietokannan testaaminen

Laaditaan yksinkertainen testauslomake ja siihen tietokantakyselyitä, joilla testataan tietokannan toiminta. Pyri miettimään tyypillisiä käyttötapoja tietokannallesi. Tarkoitus on, että mukana on vähintään yksi SELECT, DELETE jne. -kysely per taulu.

![Testit](img/tietokantatesti.PNG)

- Insert
- Delete Huom.! Viite-eheyden testaus
- Update
- Select
- Select useampaan taulukkoon (inner join)

Suorita suunnittelemasi testit tietokannallesi, korjaa virheet tietokannan rakenteessa.

## Verkkokaupan toiminnalliset vaatimukset

### Asiakas:

- voi lukea tiedotteita
- voi selailla kaupan tuotteita ja tuoteryhmiä
- voi rekisteröityä
- voi tilata ja valita maksutavan
- voi seurata ostoskoriaan
- voi seurata teknisiä vaiheita ostoprosessissa (teknisillä vaiheilla tarkoitetaan rekisteröitymistä, tuotteiden keräämistä ostoskoriin ja tilauksen hyväksymistä)
- saa vahvistuksen kaupasta yhteystietoineen, peruuttamis- ja palauttamisohjeineen
- voi peruuttaa missä vaiheessa tahansa tilauksen
- voi antaa palautetta palautelomakkeella

### Lisäksi asiakas:

- voi lukea kuluttajansuojalain mukaiset yrityksen yhteystiedot (kuvitellussa yrityksessäkin on oltava merkittynä paikka, jossa rekisteritunnukset ovat)
- voi varmistaa, että henkilötietojen käsittely on tietosuojavaltuutetun ohjeiden mukaista – esimerkki lain vaatimat rekisteriselosteet
- voi lukea sopimusehdot ennen tilauksen hyväksymistä
- voi lukea kaupan peruuttamisohjeet

### Kaupan ylläpitäjä:

- voi lisätä, päivittää ja poistaa tuoteryhmiä ja tuotteita tuotetietoineen ja kuvineen (muista myös linkit valmistajan kotisivustolle)
- päivittää tiedotteita sivustolla
- hallinnoida (seurata, päivittää ja poistaa) tilauksia
- hallinnoida (seurata, päivittää ja poistaa) rekisteröityneitä asiakkaita
- lukea seurantaraportteja (esim. toteutuneista kaupoista jne.)
- lukea ja antaa vastauksia asiakaspalautteisiin