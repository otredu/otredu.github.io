## Harjoitukset 2

**Ennen näitä harjoituksia tutustu materiaaliin [JavaScript-jatkoa](../js/jatkoa.html).**

Tee Visual Studio Code:lla uusi tiedosto, nimeä se *harjoitukset2.js*. Avaa VS:n terminaali ja aja koodi kirjoittamalla konsoliin: *node harjoitukset2.js*.

### Tehtävä 1

Tee taulukko (array), johon tallennat viisi muistettavaa asiaa (muistilista). Tallenna taulukko muuttujaan. Tulosta taulukon alkiot consolille kolmella eri tavalla:

- taulukon alkiot yksi kerrallaan viittaamalla sen indeksiin (muotoile tulostus käyttämällä takakenoa heittomerkkiä)
- foreach()-metodin tai for-loopin avulla
- toString()-metodin avulla

### Tehtävä 2

Lisää edelliseen taulukkoon uusia muistettavia asioita (käytä *push()*-metodia) ja poista siitä ensimmäinen muistettava asia (käytä *pop()*-metodia). Tulosta muutettu taulukko jollakin harjoituksen 1 tyylillä.

### Tehtävä 3

Tee olio, johon tallennat keksityn henkilön henkilötiedot: nimi, osoite, ikä, puhelinnumero ja sähköposti (esim. Aku Ankka). Tee funktio, joka ottaa parametrina henkilötieto-olion ja tulostaa konsolille sen sisältämät tiedot. Tulosta konsolille funktiosi avulla keksityn henkilön tiedot.

### Tehtävä 4

Tee taulukko, jossa on useita henkilötieto-olioita (Hessu Hopo, Iines Ankka, Roope Ankka jne). Tulosta kaikkien tiedot konsolille käyttämällä harjoituksessa 3 tekemääsi funktiota. Tulosta tiedot kolmella eri tavalla:

- yksikerrallaan viittaamalla sen indeksiin
- for-loopin avulla
- foreach()-metodin avulla

### Lisätehtävä 1

Kokeile lisätä henkilötieto-oliolle metodi, joka tekee tulostuksen. Metodi on funktio, joka liitetään olion ominaisuudeksi. Tulosta yksi olio konsolille metodin avulla. Vinkki: muista käyttää *this*.

### Lisätehtävä 2

Tee luokka (class) henkilötieto-olioiden hallintaa (oliolla samat ominaisuudet kuin harjoituksessa 3 + metodi tietojen tulostukseen). Tee sen avulla harjoitus 4 uudelleen.