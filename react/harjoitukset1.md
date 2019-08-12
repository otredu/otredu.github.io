## Harjoitukset 1

### Demo 1

Tee uusi React-sovellus ajamalla create-react-app:

```cmd
> cd c:/users/oma.nimi/documents/react/
> nmp create-react-app harj1
> cd harj1
> npm start
```

Tee uusi komponentti, joka tulostaa ruudulle ensimmäisellä tunnilla opitut uudet asiat ranskalaisina viivoina.

Refaktoroi koodi niin, että listaelementti tehdään apukomponentin avulla (käytä parametreja props).

### Tehtävä 1

Tee komponentti, joka tulostaa ruudulle parametreina (props) annetut tiedot. Kutsu komponenttia kaksi kertaa eri tiedoilla.

![tehtävä 1](./img/tiedot.PNG)

### Tehtävä 2

Tee komponentti, joka tulostaa ruudulle taulukon muodossa parametrina annetun listan (array) kurssiolioita.

Vinkki: tee alikomponentti, joka tekee yhden rivin.

![tehtävä 2](./img/kurssit.PNG)

### Tehtävä 3

Tee komponentti, joka tulostaa ruudulle alekkain parametrina annetut taidot (array). Sijoita ylimmäiseksi input-kenttä, jonka avulla voi lisätä uuden taidon listaan viimeiseksi.

![tehtävä 3](./img/oppinut.PNG)

### Tehtävä 4

Lisää sivulle napit, joita painamalla tehtävä osion saa piiloon/näkyville.

![tehtävä 4](./img/piilota.PNG)

### Tehtävä 5

Muokkaa .css - tiedostoa, että elementit myös näyttävät hyvältä.