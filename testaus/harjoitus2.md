# Yksikkötestaus: JEST

## Harjoitukset 2

Tässä harjoituksessa tarkoituksena on oppia käyttämään React:issa tyypillisiä rakenteita kuten map, reduce ja filter. Opetellaan myös ns. *immutable data*-käsite.

### Immutable data

React on tehty ns. funktionaalisen ohjelmointiparadigmaa käyttäen. Siinä siis tietoa muutettaessa, ei muuteta alkuperäistä tietorakennetta vaan funktio palauttaa aina uuden kopion ko. rakenteesta.

Demo!

Harjoituksessa pyöritetään taulukoita, olioita, sekä taulukoita, jotka sisältävät olioita. Funktioiden paluuarvoina palautetaan aina uusi kopio koko muuttuvasta rakenteesta (taulukko, olio tai olioita sisältävä taulukko).

### Tehtävä 1

Tee apufunktio, joka saa parametrina puhelinnumeron ja tarkistaa sen muodon ja tarvittaessa muuttaa sen oikeaan muotoon:

- puhelinnumero sisältää vain numeroita sekä - merkkejä tai välilyöntejä (alussa voi olla yksi + merkki)
- sulut muutetaan miinusmerkeiksi
- puhelinnumero ei saa olla tyhjä

Testaa funktion toiminta erilaisilla syötteillä.

### Tehtävä 2

Tee funktio, joka palauttaa uuden yhteystieto-olion (contact), jossa on seuraavat kentät:

- firstname
- lastname
- phonenumber
- id

Vain etunimi ja sukunimi ovat pakollisia kenttiä (heittää virheen, jos ei ole annettu), jos puhelinnumero on annettu tarkista sen oikea muoto tehtävän 1 funktion avulla. Arvo id:ksi jokin kokonaisluku (*Math.random*).

Testaa funktion toiminta erilaisilla syötteillä.

Käytä testaukseen "equal" tai "strictequalt" -vertailua (toBe ei toimi olion kanssa).

### Tehtävä 3

Tee funktio, joka lisää uuden yhteystiedon (contact) puhelinluetteloon (phonebook). Funktiolle annetaan uusi yhteystieto-olio sekä yhteystieto-olioita sisältävä puhelinluettelo-taulukko (phonebook). Käytä pakollisten kenttien tarkistamiseen tehtävän 2 funktiota. Palauttaa puhelinluettelon, johon on lisätty uusi yhteystieto. Jos yhteystietoa ei anneta, heittää virheen.

Testaa funktion toiminta erilaisilla syötteillä.

### Tehtävä 4

Tee funktio, joka palauttaa puhelinluettelossa olevien henkilöiden nimet ja puhelinnumerot HTML-listana eli <ul></ul> - tägien sisälle luotuina <li>Sukunimi, Etunimi : 040-345 3450</li> -elementteinä.

Testaa funktion toiminta vähintään kolmella kolme yhteystietoa sisältävällä taulukolla.

### Tehtävä 5

Tee funktio, joka etsii puhelinluettelosta nimen perusteella puhelinnumeron ja palauttaa sen.

Testaa funktion toiminta erilaisilla syötteillä.

### Tehtävä 6

Tee funktio, joka lisää uuden puhelinnumerokentän parametrina annettuun yhteystieto-olioon. Lisäämisen ei pitäisi onnistua, jos puhelinnumero on täysin sama.

Testaa funktion toiminta.

### Tehtävä 7

Tee funktio, joka poistaa yhteystiedon puhelinluettelosta, kun yhteistiedon id annetaan parametrina.

Testaa funktion toiminta.

### Tehtävä 8

Tee funktio, joka tulostaa puhelinluettelon sukunimen mukaisesti aakkosjärjestyksessä HTML-listana (käytä apuna tehtävän 4 funktiota).

Testaa funktion toiminta.

### Tehtävä 9

Tee funktio, joka käy läpi puhelinluettelon, ja lisää yhteystieto-olioon kentän *missed calls* ja asettaa sen arvon nollaksi. Jos kenttä on jo olemassa, se asetetaan nollaksi.

Testaa funktion toiminta.

### Tehtävä 10

Tee funktio, joka kasvattaa *missed calls* kenttää yhdellä, kun yhteystieto-id annetaan parametrina.

Testaa funktion toiminta.

### Tehtävä 11

Tee funktio, joka laskee kaikista puhelinluettelon yhteystiedoista, montako *missed calls*:ia on yhteensä.

Testaa funktion toiminta.

### Tehtävä 12

Tee funktio, joka laskee yhden puhelun keston, kun se saa parametrina *callLog*-olion, joka kuvaavaa soitetun puhelun tietoja:

- kontakti-id johon soitettu
- puhelun alkuaika *datetime*
- puhelun loppuaika *datetime*

Testaa funktion toiminta.

### Tehtävä 13

Tee funktio, joka laskee kaikkien soitettujen puheluiden yhteiskeston sekunteina.

Testaa funktion toiminta.

### Tehtävä 14

Tee funktio, joka etsii niiden henkilöiden nimet, joiden on *missed calls* -kentässä on nollasta poikkeava lukuarvo ja tulostaa tiedot HTML-listana (esim. <li>Etunimi Sukunimi, 6</li>).