# Yksikkötestaus: JEST

## Harjoitukset 2 (BONUS)

### Tehtävä 1

Tee funktio, joka testaa että annettu merkkijono on sallittua muotoa. Funktio palauttaa true, kun muoto on ok, false kun muoto on väärä. Sallitut muodot ovat :

"040-123 1234"
"0501231234"

Puhelinnumero saa siis sisältää numeroita, välilyöntejä ja viivoja ja pituus on minimissään 10 numeroa.

Vinkki: Käytä regexp-validointia (ks. JS string [match](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)). [Regexp-testerillä](https://regex101.com/) voit testata regexp:in toiminnan.

Tee testitapaukset erilaisille numeroille (oikeaa ja väärää muotoa).  

### Tehtävä 2

Tee funktio, joka saa sisäänsä henkilön yhteystietoja ja palauttaa ne olion muodossa (contact). Oliossa on seuraavat kentät:

- firstname
- lastname
- phonenumber

Vain etunimi ja sukunimi ovat pakollisia kenttiä (heittää virheen, jos ei ole annettu), jos puhelinnumero on annettu tarkista että se on muoto on oikea tehtävän 1 funktion avulla. Jos numero on väärän muotoinen sen tilalle tallennetaan tyhjä merkkijono.

Testaa funktion toiminta erilaisilla syötteillä.

Käytä testaukseen "equal" tai "strictequalt" -vertailua (toBe ei toimi olion kanssa).

### Tehtävä 3

Tee funktio, joka saa parametrina yhteystieto-olion (contact, ks. teht 1) ja palauttaa tiedot HTML-listaelementiksi muutettuna merkkijonona esim. "<li>Sukunimi, Etunimi : 040-345 3450</li>". Funktio heittää virheen, jos yhteystieto-oliota ei anneta parametrina tai jos sen kentät (firstname, lastname, phonenumber) eivät ole merkkijonoja.

Testaa funktion toiminta erilaisilla syötteillä.