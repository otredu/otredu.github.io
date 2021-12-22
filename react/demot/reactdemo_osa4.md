## Notes-demo osa 4

Muutetaan *friends*-tilamuuttuja käyttämään olioita, jotta saadaan ystävien esim. jossain lautapelissä saamat pisteet talteen. Kun tilamuuttujaan tallennetaan uusi ystävä, pisteet asetetaan nollaksi samalla luodaan uniikki id (riittävän iso satunnaisluku), jota tarvitaan pisteiden lisäämiseen. Muuta edellisen demon *submitHandler* luomaan olioita:

```jsx
const submitHandler = (e, friend) => {
    e.preventDefault();
    setFriends(friends.concat({name: friend, points: 0, id: Math.floor(Math.random()*1000000)}));
}
```

Muuta 