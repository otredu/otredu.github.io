## Document Object Model (DOM)

### Mikä on DOM?

JavaScript:in avulla voidaan muokata dynaamisesti selaimessa auki olevaa HTML-sivua. Muokkaaminen tapahtuu DOM-rajapinnan kautta (Document Object Model Interface). DOM esittää HTML-dokumentin puumaisena rakenteena, jonka juuressa (root) on _HTML_-elementti.  

Tässä esimerkkikuva Wikipediasta:

![DOM-kuva](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/428px-DOM-model.svg.png)

DOM muodostuu _node_:ista. _Parent_-nodella on _child_-nodeja (_decendant_-node), ja jos lapsia on useita ne ovat toisilleen _siblings_-node:ja. _Text_-node on oma tyyppinsä ja se sisältää tekstiä. Puuta voi selata järjestyksessä _root_-nodesta eteenpäin, kyselemällä aina seuraavaa jälkeläistä, sisarusta jne. Sellaisia _node_ja, joilla on oma _HTML_taginsä kutsutaan _elementeiksi_. Elementtejä voidaan etsiä muokattavaksi niiden _CSS-selector_:eiden avulla. _querySelector_ etsii elementtejä niiden tyypin (esim. "div", "h1"), luokan (esim. ".error") tai id:n (esim. "#info") avulla.  

### DOM-demo 1 (alku)

<iframe width="640" height="360" src="https://web.microsoftstream.com/embed/video/4c18b494-daab-4d09-8101-f18e7d484f17?autoplay=false&amp;showinfo=true" allowfullscreen style="border:none;"></iframe>

#### Elementtien etsintä

Kokeillaan _querySelector_:ia selaimessa. Tallenna seuraava koodi tieodostoon *dom-demo1.html" ja avaa sivu Chrome-selaimessa:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>DOM demo 1</title>
</head>
<body>
    <h1>Harjoitellaan elementtien käyttämistä</h1>
    <button>Heippanappi</button>
    <p class="message">Muuta tämä teksti</p>
    <a id='info' href="http://is.fi">Iltasanomat</a>
</body>
</html>
```

Avaa selaimen kehittäjänäkymä painamalla **Ctrl+Shift+j** (valitse "Console"-välilehti ellei jo ole valittuna).

Kirjoita prompt:iin (> merkin jälkeen ja paina *enter*):

```js
let myButton = document.querySelector("button");
```

Nyt myButton:in pitäisi sisältää ko. elementti. Testaa se kirjoita prompt:iin:

```js
myButton
```

Tämä on ensimmäinen _button_-elementti, joka dokumentista löytyi.
![QuerySelectorin kokeilua Chrome:n kehittäjänäkymässä](./img/queryselector_button.PNG)

Kirjoita prompt:iin ja testaa:

```js
let myText = document.querySelector(".message");
```

Tämä on ensimmäinen _.message_-luokkaan kuuluvan elementti, joka dokumentista löytyi.

![QuerySelectorin kokeilua Chrome:n kehittäjänäkymässä](./img/queryselector_p.message.PNG)

Jos elementillä on _id_ sitä voidaan etsiä suoraan _getElementById_:in avulla. Kirjoita prompt:iin ja testaa:

```js
let myLink = document.getElementById("info");
```

Vinkki: Voit katsella DOM-elementtirakennetta, kun valitset *element* välilehden.
![Elementtirakenne](img/element_view.PNG)

Jos haluttan hakea kaikki tietyntyyppiset elementit, voidaan käyttää *querySelectorAll*:ia, joka palauttaa kaikki löydetyt elementit taulukon muodossa:

```js
let myDivs = document.querySelectorAll("div");
```

#### Elementtien muuttaminen

Nyt käytetään hyväksi yllä tallennettuja elementtejä, ja muutetaan niiden attribuutteja.

Vaihdetaan napin tekstiksi "Paina tästä". Tekstikenttään voidaan viitata attribuutilla *innerText* tai *textContent*:

```js
myButton.innerText = "Paina tästä";
myButton.textContent = "Paina tästä";
```

Vaihdetaan linkki osoittamaan osoitteeseen "https://hs.fi/". Uusi URL pitää tallentaa sekä attribuuttiin *href*, että *textContent*:iin. Miksi?

```js
myLink.href = "https://hs.fi/";
```

Vaihda myös myMessage-elementin teksti.

Voit myös muuttaa elementtien CSS-tyylejä. Tekstin värin vaihtaminen onnistuu näin:

```js
myText.style.color = "red";
```

Koko dokumentin CSS-tyyliin pääsee käsiksi näin:

```js
document.body.style.backgroundColor = "pink";
```

### Dom-demo1 (loppu)

<iframe width="640" height="360" src="https://web.microsoftstream.com/embed/video/c3387fd4-8ffa-486f-bf9c-c1c0cdb4fec2?autoplay=false&amp;showinfo=true" allowfullscreen style="border:none;"></iframe>

#### script-tagi

Koodia on nyt ajettu kehittäjänäkymän kautta. Koodi voidaan tietysti liittää script-tagien avulla suoraan HTML-sivulle.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>DOM demo</title>
</head>
<body>
  <script>
      let myButton = document.querySelector("button");
      myButton.innerText = "Paina tästä";
      let myText = document.querySelector(".message");
      myText.style.color = "red";
  </script>
  <h1 style="display: none">Harjoitus 1</h1>
  <button>Heippanappi</button>
  <p class="message">Muuta tämä teksti</p>
  <a id='info' href="http://is.fi">Iltasanomat</a>
</body>
</html>
```

#### Erillinen .js-tiedosto

Koska *script*-tagin sisältö paisuu isoksi, on parempi sijoittaa JavaScript-koodi omaan tiedostoonsa. Siirrä edellisen kohdan JavaScript omaan tiedostoonsa, ja nimeä se _domdemo1.js_. Muuta script-tagi viittaamaan tähän tiedostoon:

```js
<script src="domdemo1.js"></script>
```

Tästä eteenpäin teemme kaiken JavaScriptin erillisiin tiedostoihin, ei HTML:n sekaan!

HUOM! Script-tagi kannattaa sijoittaa aivan bodyn loppuun. Näin sivu latautuu nopeammin ja sivun DOM-rakenne on ehtinyt valmiiksi, ennen kuin JavaScript ajetaan.

#### JavaScriptin kutsuminen nappia painamalla (event)

Jotta saadaan toimintoja käynnistymään käyttöliittymästä esim. nappia painamalla, liitämme HTML-elementin johonkin *event*:iin sekä JavaScript-funktioon.

Paketoidaan kutsuttava koodi funktioksi:

```js
function changeColor() {
    myText.style.color="red";
}
```

Lisätään button:ille HTML-dokumenttiin *onclick*-attribuutti, jossa on JavaScript-funktiokutsu:

```html
<button onclick="changeColor()">
```

#### Eventlistener ja callback

 _button_:iin ja *changeColor*-funktion voi liittää toisiinsa myös *addEventListener*:in avulla suoraan .js-tiedostossakin (poista "onclick" button-tagistä):

```js
myButton.addEventListener("click", changeColor);
```

Tässä siis kerrotaan selaimelle, että kun kyseinen tapahtuma tapahtuu ("click"), haluamme, että tämä JavaScript-funktio ("changeColor") suoritetaan.

Tässä *klikkaus*-funktio on nimeltään *callback*-funktio, koska sitä kutsutaan vasta kun tapahtuma (*event*) on tapahtunut.

Valitse jompi kumpi tapa liittää funktiot ja eventit toisiinsa ja pysy siinä.

#### input-kentän lukeminen

Käyttäjän syötteitä voidaan saada JavaScriptiin _input_-elementin kautta. Lisätään edelliseen harjoitukseen _input_-kenttä nimelle:

```html
<input id="hello" type="text" name="firstname" value="">
```

Input kenttään annettu teksti voidaan lukea muuttujaan _myName_:

```js
let nameElem = document.getElementById("hello");
let myName = nameElem.value;
```

Tämä voidaan kirjoittaa myös putkeen:

```js
let myName = document.getElementById("hello").value;
```

Lisää nyt nappi (id="go1"), joka tervehtii käyttäjää nimeltä (lisää _body_:n uusi _p_-elementti, ja kirjoita siihen tervehdys JavaScriptin avulla).

## Linkkejä

- elementin etsiminen [QuerySelector](https://www.w3schools.com/jsref/met_document_queryselector.asp)
- elementin tyylin muuttaminen [Style Object](https://www.w3schools.com/jsref/dom_obj_style.asp)
- elementin luominen [CreateElement](https://www.w3schools.com/jsref/met_document_createelement.asp)
