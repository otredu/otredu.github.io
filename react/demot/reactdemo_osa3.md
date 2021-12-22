## React - demo 3

### React:in tilamuuttujat

Tavalliset muuttujat, jotka määritellään (const, let) eivät toimi täysin React:issa. Vaikka niiden arvoja muuttaisi, muutokset eivät päivity ruudulle. Tämä johtuu siitä, että React käyttää *virtual DOM*:ia, eli se säätelee itse sitä milloin sivu päivitetään ja milloin ei. Jotta muutokset saadaan myös ruudulle, muuttujista pitää tehdä ns. tilamuuttujia ja niitä pitää muuttaa niiden omalla funktiolla.

Tilamuuttuja ja sen muuttamiseen tarvittava funktio luodaan *useState*:in avulla. Se täytyy ottaa käyttöön erikseen kaikissa niissä komponenteissa, joissa tilamuuttujia käytetään:

```jsx
import {useState} from 'react';
```

Kun tilamuuttuja alustetaan sille annetaan alkuarvo, jonka pitää olla oikean tyyppinen. Tässä on alustettu tilamuuttuja *counter*, joka on luku, sitä muutetaan funktiolla *setCounter* ja sen alkuarvo on 0. Vertailun vuoksi alustetaan myös ns. tavallinen JS-muuttuja normalCounter. Molempien laskureiden arvot saadaan ruudulle samalla tavalla.

```jsx
const App = () => {
    const [counter, setCounter] = useState(0);
    let normalCounter = 0; 
    return(
        <div>
            <p>counter : {counter} </p>
            <p>normalCounter : {normalCounter} </p>
        </div>
    )
}
```

Tilamuuttujan voidaan päivittää erilaisten tapahtumien (*events*) yhteydessä. Lisätään molemmille nappi, jota painamalla laskurin arvoa kasvatetaan yhdellä. *onClick* tapahtumiin lisätään nimettömät *callBack*-funktiot (nuolifunktio, ()=>{...}).

```jsx
    return(
        <div>
            <p>counter : {counter} </p>
            <button onClick={()=>setCounter(counter+1)}>COUNTER: Paina tästä</button>
            <p>normalCounter : {normalCounter} </p>
            <button onClick={()=>normalCounter++}>NORMAL COUNTER: Paina tästä</button>;
        </div>
    )
```

Ruudulla päivittyy vain toinen laskuri. Lisää *console.log* niin nähdään päivittyvätkö muuttujat. 

HUOM! Jos nuolifunktiossa on useampi lauseke (*statement*) muodosta siitä koodiblokki aaltosulkujen avulla:

```jsx
    return(
        <div>
            <p>counter : {counter} </p>
            <button onClick={()=>{setCounter(counter+1);console.log(counter)}}>
                COUNTER: Paina tästä
            </button>
            <p>normalCounter : {normalCounter} </p>
            <button onClick={()=>{normalCounter++;console.log(normalCounter)}}>
                NORMAL COUNTER: Paina tästä
            </button>;
        </div>
    )
```

Nyt nähdään, että molemmat muuttujat päivittyvät konsolille, mutta vain tilamuuttuja päivittyy ruudulle. Tässä syy siihen, että tilamuuttujia pitää muistaa käytää! 

### Ehdollinen renderöityminen

Toiminnallisuus, jossa ruudulla saadaan jotain piiloon ja takaisin näkyviin voidaan toteuttaa ehdollisen renderöitymisen avulla. Siihen tarvitaan tilamuuttuja, jonka tyyppin on totuusarvo:

```jsx
 const [show, setShow] = useState(false);
```

*and* (&&) operaattorin avulla voidaan toteuttaa yksinkertainen "ehtolause", jossa ei ole else haaraa. Kun muuttuja *show* on _true_, sen jälkeen oleva \<div\> näkyy, jos se on _false_ elementti jätetään pois. Tämä on normaalia and:in toimintaa, siinä evaluointia jatketaan kunnes törmätään ensimmäiseen _false_:en.

```jsx
{show && <div>Nyt se näkyy</div>}
```

Lisätään nappi, josta tilamuuttujaa saadaan vaihdettua. ! eli "not" toteuttaa *toggle*-toiminnallisuuden eli jokaisella painalluksena tilamuuttujan arvo vaihdetaan päinvastaiseksi true->false, false->true):

```jsx
<button onClick={()=>setShow(!show)}>
          {show ? "Piilota" : "Näytä"} demo </button>
```

### React:in input-kentät eli two-way binding

Jotta 

```jsx
const [name, setName] = useState("");
const [friends, setFriends] = useState([]); 
```

