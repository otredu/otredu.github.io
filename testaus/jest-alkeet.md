## JEST alkeet

### Expect

*expect*-lausekkeiden avulla tutkitaan onko testattavan funktion paluuarvo halutunlainen. Sitä käytetään erilaisten vertailujen (*matcher*) kanssa.

#### Yhtäsuuruus-vertailu

*toBe* toimii lukujen, merkkijonojen, totuusarvojen sekä arvojen *null* ja *undefined* kanssa, mutta se ei tarkista esim. objektin tai taulukon kenttiä rekursiivisesti.

```js
test('yhteenlasku kokonaisluvuilla', () => {
    const tulos = yhteenlasku(2, 3);
    expect(tulos).toBe(5);
  });
```

*toEqual* testaa myös objektin tai taulukon kentien sisällöt rekursiivisesti.

```js
test('ovatko kaksi objektia identtiset', () => {
    const tulos = etunimiSukunimi(["Janne", "Kinnunen"]);
    expect(tulos).toEqual({etunimi: "Janne", sukunimi: "Kinnunen"});
  });
```

Myös erisuuruutta voi testata lisäämällä *.not.*.

```js
expect(tulos).not.toEqual({});
```

#### Totuusarvo-vertailu

JavaScript tulkitsee esim. if-lauseissa epätodeksi muitakin kuin varsinaisia totuusarvoja, siis varsinaisen *false*:n lisäksi epätodeksi tulkitaan *undefined*, *null* ja 0. Sama pätee tutuusarvoon *true*, jollaiseksi tulkitaan kaikki muu.

Joskus on siis tarpeen tutkia onko funktion paluuarvo,joten *false*:n tyyppinen eli *toBeFalsy*. Vstaavasti *toBeTruthy*.

```js
test('paluuarvo kuin false', () => {
    const tulos = alleKymmenen(22);
    expect(tulos).toBeFalsy();
  });
```

#### Suurempi kuin, pienempi kuin - vertailut

Joskus riittää, että tulos ei ole täsmälleen jokin tietty vaan jonkin alueen sisällä.

```js
expect(tulos).toBeGreaterThan(3);
expect(tulos).toBeGreaterThanOrEqual(3.5);
expect(tulos).toBeLessThan(5);
expect(tulos).toBeLessThanOrEqual(4.5);
```

#### Floating point - vertailu

Kun lasketaan *floating point*-luvuilla, laskuihin saattaa tulla pyöristysvirhettä. Silloin voi olla tarpeen verrata ovatko luvut melkein samat.

```js
 expect(tulos).toBeCloseTo(0.3);
```

#### Merkkijonojen - vertailu

Merkkijonoa voidaan testata käyttäen *regular expression*:ia:

```js
expect(tulos).not.toMatch(/ei/);
expect(tulos).toMatch(/maanantai/);
```

#### Taulukoiden - vertailu

Testi voi testata onko taulukossa mukana tietty alkio:

```js
expect(tulos).toContain('hiiri');
```

#### Throwing exceptions (poikkeusten heittäminen)

Virhetilanteissa funktion tulisi heittää poikkeus ja tätä voidaan testata (poikkeus yleisesti, poikkeus tietyllä virheilmoituksella jne):

```js
expect(testattavaFunktio).toThrow();
expect(testattavaFunktio).toThrow('nollalla jakaminen');
```

**Huom** Testattavassa funktiossa poikkeus heitetään näin:

```js
function testattavaFunktio() {
  throw new Error('nollalla jakaminen');
}
```