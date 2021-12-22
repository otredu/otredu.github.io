## React - demo 4

### Olioiden käsittely taulukossa id:n avulla

Muutetaan *friends*-tilamuuttuja käyttämään olioita, jotta saadaan ystävien kivi-paperi-sakset -pelissä saamat pisteet talteen. Kun tilamuuttujaan tallennetaan uusi ystävä, pisteet asetetaan nollaksi ja samalla luodaan uniikki id (riittävän iso satunnaisluku), jota tarvitaan pisteiden lisäämiseen. Muuta edellisen demon *submitHandler* luomaan yksittäisen nimen sijaan olioita:

```jsx
const submitHandler = (e, friend) => {
    e.preventDefault();
    setFriends(friends.concat({name: friend, points: 0, id: Math.floor(Math.random()*1000000)}));
}
```

Muutetaan listan renderöinti käyttämään olioita ja näyttämään pisteet:

```jsx
    {friends.map((f,i) => <li key={i}>nimi: {f.name} pisteet: {f.points}</li>)}
```

Tehdään pisteiden lisäys - nappi, jokaiselle ystävälle (edellisen kohdan li-elementtien sisälle):

```jsx
    <button onClick={e=>addPoint(id)}>lisää piste</button>
```

### Olion kopiointi spread-operaattorin ... avulla

Määritellään *addPoint()*-funktio (*Friends*-komponentin sisällä). Funktio käy *map*:in avulla läpi *friends*-taulukon. Kun se löytää *f.id*:n joka täsmää valittuun *id*:n kanssa, se kopioi olion `{...f}` ja kasvattaa sen points-kenttää yhdellä `points: f.points + 1`. `map` palauttaa aina uuden taulukon, joten se pitää tallentaa muuttujaan (tässä tempFriends) ja lopuksi päivittää tilamuuttujaan `setFriends(tempFriends)`.

Huom! oliota ei saa React:issa muuttaa suoraan esim. `f.points++`, koska se muuttaisi kohteena olevaa oliota suoraan (mutable). Olio pitää kopioida aina ennen sen muuttamista. Spread-operaattori `{...f}` kopioi olion.

```jsx
const addPoint = id => {
    const tempFriends = friends.map(f => {
        if(id === f.id)
            f = {...f, points: f.points + 1}
        return f
    })
    setFriends(tempFriends)
}
```

Em. funktion voi kirjoittaa myös näin lyhyesti (käytä vain jos ymmärrät mitä se tekee):

```jsx
const addPoint = id => {
    setFriends(friends.map(f => (id === f.id) ? {...f, points: f.points + 1} : f}))
}
```

Välitä funktio vielä propsina *FriendsList*-komponentille (lisää uusi propsi):

```jsx
<Friends friends={friends} addPoint={addPoint} />
```

ja ottaa se vastaavasti vastaan komponentin *props*:eissa:

```jsx
const FriendsList = ({friends, addPoint}) => {
        ...
}
```

### Kertaus: map-reduce

*map-reduce*-rakenteen avulla voidaan esim. poimia kaikkien ystävien pisteet taulukkoon (*points*) ja sitten laskea ne yhteen. *reduce* palauttaa aina yhden arvon, *map* palauttaa aina uuden taulukon.

```jsx
const poinsts = friends.map(f => f.points)
const totalPoints = points.reduce((a, b) => a + b, 0)
```

### Tehtävät:

1. Tee funktio *setToZero()*, joka nollaa kaikkien ystävien pisteet, tee sille myös nappi
2. Paketoi yllä oleva *map-reduce* koodi funktioksi, jota kutsutaan aina kun sivu renderöidään niin että ruudulla näkyvät kaikkien ystävien yhteispisteet
