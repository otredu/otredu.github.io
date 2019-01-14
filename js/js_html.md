## JavaScript HTML-sivulla

### Demo 1
JavaScript:iä voi lisätä HTML-koodin sisään. Avaa seuraava HTML-sivu selaimeen ja paina Testinappia:

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript alkeita</title>
</head>
<body>
    <h2>Demo 1</h2>
    <button onClick="alert('Toimii')">Testinappi</button>
</body>
</html>
```

Tässä JavaScript:in *alert()*-funktiota on liitetty suoraan nappiin. 

### Demo 2

Edellinen tapa ei sovellu pitkille koodin pätkille, joten toinen tapa on kirjoittaa JavaScript-funktioita *script*-tagien väliin.

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript alkeita</title>
</head>
<body>
  <script>
  const kysely = function() {
    let name = prompt('Mikä on nimesi');
    alert('Hei ' + name + ', kiva nähdä!');
    }
  </script>
  <h2>Demo 2</h2>
  <button onClick="kysely()">Kyselynappi</button>
</body>
</html>
```

Kun painat kyselynappia, *kysely()*-nimistä JavaScript-funktiota kutsutaan. Tällä funktiolla ei ole parametreja eikä paluuarvoa, se avaa *prompt*-ikkunan, johon käyttäjä voi kirjoittaa vastauksen esitettyyn kysymykseen 'Mikä on nimesi'. Käyttäjän antama tieto tallennetaan muuttujaan *name* ja *alert()*-ikkunan avulla voidaan tervehtiä käyttäjää hänen omalla nimellään.

Jatka koodia niin, että se kysyy myös käyttäjän ikää, ja tervehtimisen lisäksi kertoo kuinka vanha hän on.

## Demo 3

Vielä parempi tapa olisi eriyttää JavaScript-koodi omaan tiedostoonsa. Siirrä edellisen kohdan JavaScript-koodi omaan tiedostoonsa *demo.js* ja tallenna se samaan hakemistoon html-tiedoston kanssa. Muuta html-tiedoston *script*-tagi nyt tähän muotoon:

```html
  <script src="demo.js"></script>
```