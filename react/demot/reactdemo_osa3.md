## React - demo 3

### React:in tilamuuttujat

Tavalliset muuttujat, jotka määritellään (const, let) eivät toimi täysin React:issa. Vaikka niiden arvoja muuttaisi, muutokset eivät päivity ruudulle. Tämä johtuu siitä, että React käyttää *virtual DOM*:ia, eli se säätelee itse sitä milloin sivu päivitetään ja milloin ei. Jotta muutokset saadaan myös ruudulle, muuttujista pitää tehdä ns. tilamuuttujia ja niitä pitää muuttaa niiden omalla funktiolla.

Tilamuuttuja ja sen muuttamiseen tarvittava funktio luodaan *useState*:in avulla. Se täytyy ottaa käyttöön erikseen kaikissa niissä komponenteissa, joissa tilamuuttujia käytetään:

```jsx
import {useState} from 'react';
```

Kun tilamuuttuja alustetaan sille annetaan alkuarvo, jonka pitää olla oikean tyyppinen. Tässä on alustettu tilamuuttuja *counter*, joka on luku, sitä muutetaan funktiolla *setCounter* ja sen alkuarvo on 0. Vertailun vuoksi alustetaan myös ns. tavallinen JS-muuttuja normalCounter. Molempien laskureiden arvot saadaan ruudulle samalla tavalla. Muokkaa pääkomponentti *App* - seuraavasti:

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

Tilamuuttujan voidaan päivittää erilaisten tapahtumien (*events*) yhteydessä. Lisätään molemmille nappi, jota painamalla laskurin arvoa kasvatetaan yhdellä. *onClick* tapahtumiin lisätään nimettömät *callBack*-funktiot (nuolifunktio, ()=>{...}). Muokkaa pääkomponentti *App* - seuraavasti:

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

HUOM! Jos nuolifunktiossa on useampi lauseke (*statement*) muodosta siitä koodiblokki aaltosulkujen avulla. Muokkaa pääkomponentti *App* - seuraavasti:

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

Toiminnallisuus, jossa ruudulla saadaan jotain piiloon ja takaisin näkyviin voidaan toteuttaa ehdollisen renderöitymisen avulla. Siihen tarvitaan tilamuuttuja, jonka tyyppin on totuusarvo. Muokkaa pääkomponentti *App* - seuraavasti (lisää uusi muuttuja edellisen tilamuuttujan alapuolelle):

```jsx
 const [show, setShow] = useState(false);
```

*and* (&&) operaattorin avulla voidaan toteuttaa yksinkertainen "ehtolause", jossa ei ole else haaraa. Kun muuttuja *show* on _true_, sen jälkeen oleva \<div\> näkyy, jos se on _false_ elementti jätetään pois. Tämä on normaalia and:in toimintaa, siinä evaluointia jatketaan kunnes törmätään ensimmäiseen _false_:en. Muokkaa pääkomponentti *App* - seuraavasti:

```jsx
return(
    <div>
        ...
         {show && <div>Nyt se näkyy</div>}
        ...
    </div>
)
```

Lisätään nappi, josta tilamuuttujaa saadaan vaihdettua. ! eli "not" toteuttaa *toggle*-toiminnallisuuden eli jokaisella painalluksena tilamuuttujan arvo vaihdetaan päinvastaiseksi true->false, false->true). Muokkaa pääkomponentti *App* - seuraavasti:

```jsx
return(
    <div>
        ...
        <button onClick={()=>setShow(!show)}>
          {show ? "Piilota" : "Näytä"} demo </button>
        ...
    </div>
)      
```

### React:in input-kentät eli two-way binding

React:issa *input*-kenttien arvot pitää kierrättää tilamuuttujien kautta. Tätä toiminnallisuutta kutsutaan *two-way binding*:iksi. Input-kentän arvo (*value*) pitää sekä lukea, että kirjoittaa tilamuuttujaan. Tilamuuttujan arvo kirjoitetaan *set\<Muuttujannimi\>*-funktion avulla, lukeminen tapahtuu käyttämällä muuttujan nimä (käytetään kuten normaalia muuttujaa).

Tehdään uusi komponentti lomakkeelle (components/Friends.jsx) ja alustetaan tarvitavat muuttujat:

```jsx
const Friends = () => {
    const [name, setName] = useState("");
    return (
        <div>
            Kaverit
        </div>
    )
}

export default Friends;
```

Ota tämä komponentti käyttöön *App*-pääkomponentissa:

```jsx
return(
    ...
    <Friends />
    ...
)
```

Tehdään lomake, jonka kenttä liitetään tilamuuttujaan *name* (lukeminen: *value* ja kirjoittaminen *onChange*). Muokkaa komponenttia *Friends* - seuraavasti:

```jsx
return(
    ...
    <form>
        <input onChange={e=>setName(e.target.value)} type="text" value={name}/>
        <input type="submit">
    </form>
    ...
)
```

### React:in lomakkeen käsittely

Jotta uuden ystävän nimi saadaan talteen taulukkoon, luodaan uusi tilamuuttuja *friends*, jonka alkuarvo on tyhjä taulukko. Muokkaa komponenttia *Friends* - seuraavasti (lisää edellisen tilamuuttujan alapuolelle):

```jsx
const [friends, setFriends] = useState([]); 
```

Lisätään *onSubmit*-eventille callback-funktio, jota kutsutaan kun *submit*-nappia painetaan. Muokkaa komponenttia *Friends* - seuraavasti:

```jsx
<form onSubmit={e=>submitHandler(e, name)} />
```

*submitHandler*:ia kutsutaan, kun lomake lähetetään *submit*-buttonilla. Ensimmäiseksi on estettävä PHP-tyylinen lomakkeen käsittelyn *e.preventDefault()*:in avulla. Sitten lisätään uusi ystävä listään *concat*:in avulla.

Huom! vaikka *friends* on taulukko, älä käytä *push*-metodia, koska se muuttaa taulukkoa suoraan, käytä *concat*:ia (*unmutable*) ja setFriends-funktiota. Muokkaa komponenttia *Friends* - seuraavasti (lisää tilamuuttujien alapuolelle):

```jsx
const submitHandler = (e, name) => {
    e.preventDefault();
    setFriends(friends.concat(name))
}
```

Jotta ystävät saataisiin renderöityä myös ruudulle pitää vielä tehdä siihen oma komponenttinsa. Lisää tämä samaan tiedostoon *Friends*-komponentin kanssa:

```jsx
const FriendsList = ({friends}) => {
    return (
        <div>
            {friends.map((f,i) => <li key={i}>{f}</li>)}
        </div>
    )
}
```

Kutsu uutta komponenttia *Friends*-komponentissa. Muokkaa komponenttia *Friends* - seuraavasti (lisää heti lomakkeen jälkeen):

```jsx
return(
    ...
    <FriendsList friends={friends}>
    ...
)
```

---> [React demo 4](./reactdemo_osa4.html)
