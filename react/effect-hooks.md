## Effect hooks

Effect hookejä käyttämällä voidaan toteuttaa toimintoja, jotka käynnistyvät tiettyihin tapahtumiin liittyen.

Esim. tietokannasta voidaan hakea tietoa, kun ohjelma (frontend) käynnistyy:

```js
 const [notes, setNotes] = useState([]);

  const hook = () => {
    console.log('effect')
    axios
      .get(serviceURI)
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }
  
  useEffect(hook, [])
```

Käyttäjälle voidaan näyttää myös ajastettuja viestejä effect-hookien avulla.

```js
const TimerDemo = () => {
    const [infoText, setInfoText] = useState("");

    const timerHook = () => {
        if(infoText === "") return;
        const id = setInterval(() => setInfoText(""), 1500);
        return () => clearInterval(id);
    }
    useEffect(timerHook,[infoText]);

return (
    <div>
        <button onClick={e => setInfoText("Tässä on viesti, ja se poistuu kohta")}>paina</button>
        <h3>{infoText}</h3>
    </div>​
    )
}
```