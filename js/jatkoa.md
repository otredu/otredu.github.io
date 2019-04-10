## JavaScript jatkoa

### Taulukko (array)

Taulukkoon voi tallentaa erilaista tietoa: lukuja, merkkijonoja, totuusarvoja, toisia taulukoita, olioita tai jopa funktioita. Tieto sijaitsee taulukossa järjestyksessä, eli taulukon alkioihin voi viitata niiden sijaintiin liittyvällä indeksillä (kokonaisluku, indeksointi alkaa nollasta).

```js
let myList = ["milk", 303, true, [1, 2, 3]];
```

Tämän taulukon toinen alkio (luku 303) saataisiin kirjoittamalla:

```js
myList[1];
```

Taulukon alkion voi korvata sijoittamalla ko. indeksiin jotain muuta:

```js
myList[1] = "uusi arvo";
```

Taulukon pituus voi vaihdella, siihen voi lisätä uusia alkoita *push*:in avulla (palauttaa lisätyn alkion indeksin ja lisää uuden alkion taulukon loppuun). Alkioita voi poistaa taulukosta *pop*:in avulla (palauttaa taulukon viimeisen alkion, ja poistaa sen samalla taulukosta).

```js
myList.push("butter");
myList.pop();
```

Listan pituuden saa selville *length*:in avulla.

```js
myList.length;
```

### Olio (object), assosiatiivinen taulukko (associative array)

JavaScriptin taulukko on itseasiassa JavaScript-olio. JavaScript on oliokieli, joten lähes kaikki rakenteet ovat olioita, poislukien luvut, totuusarvot, merkkijonot, *null* sekä *undefined*. Myös funktiot ovat olioita. Taulukko on JavaScript:in määrittelemä olio, mutta käyttäjä voi luoda myös omia olioita. Olio (*object*) koostuu joukosta ominaisuuksia (*properties*), joihin pääsee käsiksi niihin liitetyn nimen avulla. Ominaisuudet voivat olla tyypiltään merkkijonoja, lukuja, totuusarvoja, taulukoita, toisia olioita tai funktioita. Tällaista rakennetta, jossa nimeen liitetään arvo, kutsutaan ohjelmoinnissa myös assosiatiiviseksi taulukoksi (*associative array*).

```js
let myObject = {name: "Shopping day", buy: ["milk", "butter", "bread"], car: true, cash: 150}
```

Tämän olion *cash*-ominaisuuteen pääsee käsiksi kahdella eri tavalla. Joko viittaamalla siihen pistenotaation avulla:

```js
myObject.cash
```

tai käyttämällä ominaisuuden nimeä indeksin tyyliin:

```js
myObject["cash"]
```

Olion ominaisuuden voi muuttaa sijoittamalla uuden arvon vanhan tilalle:

```js
myObject.cash = 100;
myObject["cash"] = 10;
```

Olioon voi myös lisätä uusia ominaisuuksia. Vanhan olion ominaisuudet kopiodaan mukaan käyttämällä *spread*-operaattoria (...):

```js
myObject = {...myObject, new: 122}
```

Funktioita, jotka on liitetty johonkin olioon kutsutaan *metodeiksi*. Metodit käsittelevät yleensä juuri siihen olioon liittyviä tietoja. Niihin pääsee käsiksi *this*:in avulla. *this* viittaa siihen olioon, johon metodi on liitetty. Lisätään *myObject*:iin uusi metodi eli funktio nimeltä *debug*.

```js
myObject = {...myObject, debug: function(){
  console.log(this.name, this.cash, this.car, this.buy);
  }
};
```

Nyt uutta metodia (funktiota, joka on liitetty olioon) voidaan kutsua:

```js
myObject.debug();
```

JavaScript-oliot saavat automaattisesti joitakin metodeja *perittynä* niiden prototyypiltä. Esim. jokaisen olion voi tulostaa merkkijonoksi sen JavaScript-olion *toString()*-metodin avulla:

```js
myObject.toString();
```

### For-loop

*for*-silmukan avulla voidaan toteuttaa toistoa vaativia toimenpiteitä esim. käydä läpi taulukoita. *for*-silmukka toistaa sen sisään kirjoitettua koodia, kunnes sen ehtona oleva lauseke ei enää ole totta. *for*-lauseessa ensin alustetaan silmukka (esim. *let i=0*), sitten kirjoitetaan ehto, joka pitää silmukan toiminnassa, ja lopuksi lauseke, joka päivittää silmukan tilaa (esim. *i++*):

```js
for(let i=0; i < myList.length; i++){
    console.log(myList[i]);
}
```

### map ja foreach

*map* ja *foreach* ovat metodeja, jotka toimivat taulukoille. Niiden avulla voidaan toteuttaa toistoa vaativia operaatioita helposti (ilman *for*-looppia). Nämä funktiot ovat ns. *higher order*-funktioita, mikä tarkoittaa, että niille annetaan parametrina funktio.

Näissä esimerkeissä funktio on annettu nuolifunktiona (lyhyempi):

```js
let list = [1, 2, 3, 4];
let newList = list.map(item => 10 * item);
newList.forEach(item => console.log(item));
```

Näissä esimerkeissä funktion on annettu perinteisessä muodossa (samat kuin yllä):

```js
let newList = a.map(function(item){ return 10 * item });
newList.forEach(function(item){ console.log(item) });
```

### Boolen operaattorit: and, or ja not

Kun kirjoitetaan monimutkaisempia ehtolauseita, on usein tarve ottaa huomioon useampi ehto kerrallaan. Se onnistuu loogisten operaattoreiden && (*and*), \|\| (*or*) ja ! (*not*) avulla.

Jos molempien ehtojen vaaditaan olevan totta, käytetään &&-operaattoria, jos riittää että yksikin ehdoista toteutuu käytetään \|\|-operaattoria. Totuusarvon voi käytää toiseksi käyttämällä !-operaattoria. Kaikki seuraavat lausekkeet saavat totuusarvokseen *true*:

```js
true && true
true || false
!false
```

### Muuttujan arvon muuttaminen lyhenteillä

JavaScript tukee seuraavia lyhennemerkintöjä:

| Lyhenne:    | Merkitys:  |
| ------------- |:-------------:|
| i++  | i = i + 1 |
| i--  | i = i - 1 |
| i += 2 | i = i + 2 |
| i -= 2 | i = i - 2 |
| i *= 10 | i = i * 10 |
| i /= 10 | i = i / 10 |
| i %= 5 | i = i % 5 |
| i **= 3 | i = i ** 3 |

### Switch

*switch*-rakenteen avulla voidaan valita suoritettava koodilohko:

```js
switch(language) {
  case "swedish":
    console.log("God dag!")
    break;
  case "finnish":
    console.log("Päivää!")
    break;
  default:
    console.log("Hello!")
}
```

### Muuttajaan viittaaminen merkkijonon sisällä (Template literals)

JavaScriptissä voidaan viitata muuttujan arvoon suoraan merkkijonon sisältä, kun merkkijono muodostetaan takakenolla heittomerkillä eli *back-tick*:illä: ` . Muuttujanimen eteen pitää lisäksi lisätä dollarimerkki: $ ja muuttujanimen ympärille aaltosulut: {}.

```js
let name = "Jussi;
let question = `Hei ${name}, kävisitkö kaupassa?`;
```

Muuttuja johon viitataan voi olla myös taulukko tai olio.

```js
let shoppinglist = ["maitoa", "leipää", "juustoa"];
let message =  `Ostaisitko: ${shoppinglist[0]}, ${shoppinglist[1]} ja ${shoppinglist[2]}?`;
```
