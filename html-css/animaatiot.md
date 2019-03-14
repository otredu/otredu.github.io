## CSS-animaatiot

### Yleistä

Nettisivulle voidaan tehdä animointia ilman JavaScript:iä pelkän CSS:n avulla. CSS:n avulla elementtien CSS-ominaisuuksia voidaan muuttaa vaiheittain alkutilasta *from* lopputilaan *to* *@keyframes*-määrittelyn avulla. Animaation alku- ja lopputiloja voidaan määritellä myös muunnosten avulla (*transformations*). Muunnosten avulla voidaan säätää elementin kokoa, sijaintia, asentoa (x-, y- tai z-akselin mukaisesti) jne. Animaatio voi koostua myös *@keyframes*-määrittelysta, joka sisältää *transformation*-määrittelyjä. Animaatio voi käynnistyä heti kun sivu on latautunut tai sen sen voi sitoa johonkin luokkaan kuten *:hover*. JavaScript:in avulla luokkia voidaan lisätä ja poistaa ohjelmallisesti erilaisten tapahtumien johdosta eli animaation voi käynnistää/lopettaa monipuolisemmin kuin pelkän CSS:n avulla. *@keyframes*:in avulla määritetty animaation kulku sidotaan kohde luokkaan *animation*-parametrien avulla. Niiden avulla määritellään mm. kuinka montako kertaa animaatio suoritetaan, millä nopeudella jne.

### transformations

#### translateX, translateY

Jotta elementin sijaintia voidaan muuttaa muunnosten avulla, sen *display*-ominaisuuden on olata *absolute*. Elementin sijainti määritellään *off-set*:inä* vasemmasta yläkulmasta. Elementti siirtyy *translateX*:n avulla x-akselin suunnassa annetun määrän. *translateY* tekee saman mutta y-akselin suunnassa.

```css
.rider {
  position: absolute;
  top: -100px;
  left: 0px;
  width: 100px;
}

.rider:hover {
    transform: translateX(600px);
}
```

#### scale

Elementin koko saadaan muuttumaan kun sille määritellään muunnos: *scale*. Yli 1 olevat kertoimet kasvattavat kokoa, alle 1 elevat kertoimet pienentävät kokoa.

```css
.tree:hover {
  transform: scale(1.1);
}
```

#### rotate

Elementti saadaan kiertymään *rotate* muunnoksen avulla annetun asteluvun verran.

```css
.trash:hover{
  transform: rotate(-360deg);
}
```

#### transition

Edellämainitut muunnokset tapahtuvat välittömästi. Niiden nopeuteen voi vaikuttaa määrittelemällä alkuperäiselle luokalle *transition*-ominaisuuden, joka säätää muunnoksen nopeuden. Ensimmäinen aika-parametri kertoo muutokseen kuluvan ajan, toinen viiveen ennen muunnoksen alkua. Viimeinen parametri vaikuttaa nopeuteen alussa tai lopusa (*ease-in* hidastaa alkua, *ease-out* hidastaa loppua, *linear* muuntaa vakionopeudella).

```css
.trash {
  width: 100px;
  position: absolute;
  left: 200px;
  top: 50px;
  cursor: pointer;
  transition: transform 1s 1s ease-in;
}

.trash:hover{
  transform: rotate(-360deg);
}
```

Transition-parametrit voi antaa myös yksi kerrallaan:

```css
.trash {
   transition-property: transform;
   transition-duration: 1s;
   transition-timing-function: ease-in;
   transition-delay: 1s;
}
```

### @keyframes

*@keyframes*-määrittelyjen avulla määritellään animaation alku- ja lopputilanne, ottamatta kantaan nopeuteen, toistomäärään tms. Tässä animaatiossa nimeltä *drive* elementti siirretään ruudun vasemmasta reunasta sen oikeaan.

```css
@keyframes drive {
  from {
    transform: translateX(-100px);
  }
  to {
    transform: translateX(1200px);
  }
}
```

Muutos voi koostua myös useammasta osasta, joihin viitataan prosenteilla koko animaation kestosta.

```css
@keyframes jump {
  0% {
    top: -100px;
  }
  50% {
    top: -200px;
    }
  100% {
    top: -100px;
  }
}
```

### animation

Varsinaation animaatio saadaan aikaan kun *@keyframes*-määrittely liitetään johonkin luokkaan *animation*:n avulla. Tässä vaiheessa määritellään animaation kesto (*duration*), toistomäärä (*animation-iteration-count*),suorittamissuunta (*animation-direction*), nopeuden vaihtelut (*animation-timing-function*),säilyvätkö animaation loputtua elementin CSS-määrittelyt vai palataan takaisin alkutilanteeseen (*animation-fill-mode*) jne.

```css
.rider {
  position: absolute;
  top: -100px;
  left: 0px;
  width: 100px;
  animation: drive 3s 2s both infinite linear reverse;
}
```

Animation-parametrit voidaan antaa myös erikseen:

```css
.rider {
  animation-name: drive;
  animation-duration: 3s;
  animation-delay: 2s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: reverse;
}
```

Lisätietoa:

- Animaation tutoriaaleja [CSS animation tutorials, netninja](https://www.youtube.com/watch?v=jgw82b5Y2MU)
- 3WSchool:transforms [Transforms](https://www.w3schools.com/css/css3_2dtransforms.asp)
- 3WSchool: transitions [Transitions](https://www.w3schools.com/css/css3_transitions.asp)
- 3WSchool:@keyframes[Keyframes-rule](https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp)
- 3WSchool:animation [Animation](https://www.w3schools.com/csSref/css3_pr_animation.asp)