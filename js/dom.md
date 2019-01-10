## Document Object Model (DOM)

### Mikä on DOM?

JavaScript:in avulla voidaan muokata dynaamisesti selaimessa auki olevaa HTML-sivua. Muokkaaminen tapahtuu DOM rajapinnan kautta (Document Object Model Interface). DOM esittää HTML-dokumentin puumaisena rakenne, jossa juuressa (root) on HTML-elementti ja sen lapsina muut elementit. 

Tässä esimerkkikuva Wikipediasta:

![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/428px-DOM-model.svg.png)

Kuvassa olevia elementtejä kutsutaa _node_:ksi. Ne kaikki ovat _element node_:ja. _Parent_-nodella on _child_-nodeja (_decendant_-node), ja jos lapsia on useita ne ovat toisilleen _siblings_-node:ja. _Text_-node on oma tyyppinsä ja se sisältää tekstiä. Puuta voi selata järjestyksessä _root_-nodesta eteenpäin, kyselemällä aina seuraavaa jälkeläistä, sisarusta jne. Tähän voi tutustua itsenäisesti. Toinen suorempi tapa on etsinä muokattavia elementtejä käyttämällä niiden _CSS-selector_:in avulla eli tyypin (esim. "div", "h1"), luokan (esim. .body) tai attibuuttien (esim. style:none) avulla.  

Kokeillaan _querySelector_:ia selaimessa. Avaa seuraava HTML-sivu selaimeen: 
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>DOM demo</title>
</head>
<body>
    <h1>Harjoitus 1</h1>
    <button>Heippanappi</button>
    <p class="message">Muuta tämä teksti</p>
    <a id='info' href="http:is.fi">Iltasanomat</a>
</body>
</html>
```
Avaa selaimen kehittäjänäkymä painamalla **Ctrl+Shift+j** (valitse "Console"-välilehti ellei ole jo valittuna). 

Kirjoita prompt:iin (> merkin jälkeen): 
```js
let myButton = document.querySelector("button");
```
Nyt myButton:in pitäisi sisältää ko. elementti. Testaa se kirjoita prompt:iin:
```js
myButton
```
Tämä on ensimmäinen _button_:-elementti, joka dokumentista löytyi.

Kirjoita prompt:iin (> merkin jälkeen) ja testaa: 
```js
let myMessage = document.querySelector("p.message");
```
Tämä on ensimmäinen _.message_:luokkaan kuuluvan <p>-elementti, joka dokumentista löytyi.

Kirjoita prompt:iin (> merkin jälkeen) ja testaa: 
```js
let myLink = document.getElementById("info");
```
Tämä on dokumentissa oleva elementti, jonka id:n arvo on _info_.


 
