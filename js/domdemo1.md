## Dom demo1 - kodit

### domdemo1.html

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>DOM demo 1 ja 2</title>
</head>
<body>
    <h1>Harjoitellaan elementtien käyttämistä</h1>
    <button>Heippanappi</button>
    <p class="message">Muuta tämä teksti</p>
    <a id='info' href="http://is.fi">Iltasanomat</a><br>
    <input id='name'  type="text" value=""/>
    <button id="go1">GO!</button>
    <h2 id='greeting'>anna nimesi</h2>
    <script src="domdemo1.js"></script>
</body>
</html>
```

### domdemo1.js

```js
// nämä ajetaan kun tiedosto latautuu:
let myButton = document.querySelector("button");
myButton.innerText = "Paina tästä";
let myText = document.querySelector(".message");

// tapahtumakuuntelijat:
myButton.addEventListener("click", changeColor);
myText.addEventListener("click", changeColor);

// callback-funktio (ajetaan vasta kun tapahtuma tapahtuu):
function changeColor() {
    myText.style.color="red";
}

// tervehtiminen input:in avulla
let myGreeting = document.getElementById("greeting");
let myName = document.getElementById("name");
let myGo1 = document.getElementById("go1");

function greetings(){
    let name = myName.value;
    myGreeting.innerText = "Hei, " + name + "!";
}

myGo1.addEventListener("click", greetings);
```