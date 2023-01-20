# Yksikkötestaus: JEST

## Harjoitukset 2

Tässä harjoituksessa tarkoituksena on oppia käyttämään React:issa tyypillisiä rakenteita kuten map, reduce ja filter. Opetellaan myös ns. *immutable data*-käsite.

### Immutable data

React on tehty ns. funktionaalisen ohjelmointiparadigmaa käyttäen. Siinä siis tietoa muutettaessa, ei muuteta alkuperäistä tietorakennetta vaan funktio palauttaa aina uuden kopion ko. rakenteesta.

Demo:
- taulukon käyttäminen (luominen, muuttaminen, indeksit)
- taulukkoa mutatoivat funktiot (push, pop), uuden taulukon palauttavat funktiot (concat)
- taulukon kopiointi *spread*-operaattorin avulla
- olion käyttäminen (luominen, attribuuttiin arvon muuttaminen, attribuutin lisääminen)
- olion kopiointi *spread*-operaattorin avulla, kopion mutatoiminen samalla
- taulukon iterointi map:in avulla (callback-funktiot, nimettomät funktiot, nuolifunktiot)
- olioita sisältävän taulukon iterointi map:in avulla (olion kopiointi ja muokkaaminen)
- taulukon läpikäyminen filterin avulla (callback-funktio, jolla testataan filteröitiehdot)
- reducen käyttäminen (taulukon alkioiden arvojen yhdistäminen yhdeksi esim. summa)
- map-reduce (poimitaan taulukon olioiden tiettyjen arvojen yhdistämimen esim. summa)

Harjoituksessa pyöritetään taulukoita, olioita, sekä taulukoita, jotka sisältävät olioita. Funktioiden paluuarvoina palautetaan aina uusi kopio koko muuttuvasta rakenteesta (taulukko, olio tai olioita sisältävä taulukko).

### Tehtävä 1 (DEMO)

Tee apufunktio, joka saa parametrina puhelinnumeron ja tarkistaa sen muodon ja tarvittaessa muuttaa sen oikeaan muotoon:

- puhelinnumero sisältää vain numeroita sekä - merkkejä tai välilyöntejä (alussa voi olla yksi + merkki)
- mahdolliset sulut poistetaan
- puhelinnumeron pituuden tulee olla välillä 3-20

Testaa funktion toiminta erilaisilla syötteillä. Jos numero ei ole oikeaa muotoa, heitä poikkeus, muussa tapauksessa palauta tarkistettu ja muokattu numero.

*Vinkki 1:* Käytä numeron tarkistamiseen *regex*:iä ja *match*:iä, testaa tekemäsi *regex*-lauseke jollain online-testerillä (esim. [tällä](https://www.regextester.com/)).

*Vinkki 2:* Merkkijonojen etsimiseen ja korvaamiseen (*replace*) voi käyttää myös *regexp*:iä. 

### Tehtävä 2

Tee funktio, joka saa henkilötiedot erillisinä parametreina ja palauttaa uuden yhteystieto-olion (contact) seuravilla kentillä:

- firstname
- lastname
- phonenumber

Vain etunimi ja sukunimi ovat pakollisia kenttiä (heittää virheen, jos ei ole annettu), jos puhelinnumero on annettu tarkista sen oikea muoto tehtävän 1 funktion avulla. Jos numero on väärän muotoinen sen tilalle tallennetaan tyhjä merkkijono.

Testaa funktion toiminta erilaisilla syötteillä.

*Vinkki 1:* Käytä testaukseen "toEqual" tai "toStrictEqualt" -vertailua (toBe ei toimi olion kanssa).

*Vinkki 2:* Käytä *catch-try* -rakennetta puhelinnumeron testaamiseen. 

### Tehtävä 3

Tee funktio, joka saa yhteystieto-olion ja muuttaa sen merkkijonoksi, joka sisältää HTML-lista-elementin esim. "<li>Sukunimi, Etunimi : 040-345 3450</li>".

Testaa funktion toiminta erilaisilla syötteillä.

### Tehtävä 4

Tee testidataksi vähintään kolme yhteystieto-oliota sisältävä puhelinluettelo-taulukko eli array (phonebook). Voit käyttää testidatan luomiseen tehtävässä 2 tehtyä funktiota.

Tee funktio, joka saa parametrina edellä tehdyn kontaktiolioita sisältävän puhelinluettelo-arrayn ja joka palauttaa puhelinluettelossa olevien henkilöiden nimet ja puhelinnumerot HTML-listana eli <ul></ul> - tägien sisälle luotuina <li></li> - elementteinä. Käytä apuna tehtävän 3 funktiota.

Testaa funktion toiminta erilaisilla syötteillä.

*Vinkki 1:* Käytä taulukon iterointiin *map*:ia.

*Vinkki 2:* "map is not a function" tarkoittaa sitä, ennen pistettä ei ole taulukkoa (array).

### Tehtävä 5

Tee funktio, joka etsii puhelinluettelosta nimen perusteella puhelinnumeron ja palauttaa sen. Funktion tulee toimina isoilla ja pienillä kirjaimilla (*case insensitive*).

Testaa funktion toiminta erilaisilla syötteillä.

*Vinkki 1:* find

*Vinkki 2:* toLowerCase()

### Tehtävä 6

Käytä tästä eteenpäin testipuhelinluetteloa, jonka yhteystiedoissa on uniikit *id*-kentät. Korjaa tehtävän 2 funktiota niin, että se luo myös *id*-kentän. Tee se niin, että uniikki *id*-kenttä luodaan vaikka sitä ei annetakaan parametrina.

Tee funktio, jonka avulla annetun puhelinluettelon yhteystieto voidaan päivittää annetun id:n ja uuden puhelinnumeron avulla. Uuden puhelinnumeron on oltava validi. Funktio palauttaa uuden päivitetyn puhelinluettelon tai heittää virheen, jos yhteystietoa ei löydy.

Testaa funktion toiminta erilaisilla syötteillä.

*Vinkki:* Käytä *id*:n luomiseen muuttujaa, joka kasvaa jokaisella kutsulla yhdellä.

### Tehtävä 7

Tee funktio, joka poistaa yhteystiedon puhelinluettelosta, kun yhteystiedon etunimi ja sukunimi annetaan parametreina. Funktion tulee toimina isoilla ja pienillä kirjaimilla (*case insensitive*). Funktio palauttaa uuden puhelinluettelon tai heittää virheen, jos yhteystietoa ei löydy.

Testaa funktion toiminta erilaisilla syötteillä.

*Vinkki:* filter

### Tehtävä 8

Tee funktio, joka tulostaa puhelinluettelon sukunimen mukaisesti aakkosjärjestyksessä HTML-listana (käytä apuna tehtävän 4 funktiota).

Testaa funktion toiminta erilaisilla syötteillä.

*Vinkki:* sort

### Tehtävä 9

Tee funktio, joka käy läpi puhelinluettelon, ja lisää yhteystieto-olioon kentän *missed calls* ja asettaa sen arvon nollaksi. Jos kenttä on jo olemassa, se asetetaan nollaksi. Funktio palauttaa uuden puhelinluettelon.

Testaa funktion toiminta.

*Vinkki:* map

### Tehtävä 10

Tee funktio, joka kasvattaa *missed calls* kenttää yhdellä, kun yhteystiedon id annetaan parametrina. Funktio palauttaa uuden puhelinluettelon. Alkuperäisiin olioihin ei saa tehdä muutoksia.

Testaa funktion toiminta.

*Vinkki 1:* map

*Vinkki 2:* {...contact}

### Tehtävä 11

Tee funktio, joka laskee kaikista puhelinluettelon yhteystiedoista, montako *missed calls*:ia on yhteensä.

Testaa funktion toiminta.

*Vinkki 1:* map

*Vinkki 2:* reduce

### Tehtävä 12

Tee funktio, joka laskee yhden puhelun keston (sekunteina), kun se saa parametrina *callLog*-olion, joka kuvaavaa yhden soitetun puhelun tietoja:

- yhteystiedon id johon soitettu
- puhelun alkuaika *datetime*
- puhelun loppuaika *datetime*

Testaa funktion toiminta.

### Tehtävä 13

Tee funktio, joka laskee kaikkien soitettujen puheluiden yhteiskeston sekunteina, kun se saa taulukon, jossa on useita *callLog*-olioita.

Testaa funktion toiminta.

*Vinkki 1:* map

*Vinkki 2:* reduce

### Tehtävä 14

Tee funktio, joka etsii niiden henkilöiden nimet, joiden on *missed calls* -kentässä on nollasta poikkeava lukuarvo ja tulostaa tiedot HTML-listana (esim. <li>Etunimi Sukunimi, 6</li>).

*Vinkki 1:* filter

*Vinkki 2:* map
