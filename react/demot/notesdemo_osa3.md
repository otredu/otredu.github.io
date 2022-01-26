## Notes-demo osa 3

### Notifikaatioiden ja virheilmoitusten näyttäminen käyttäjälle

Kun *frontend* keskustelee *backend*:in kanssa, jotain voi mennä vikaan. Siksi on hyvä ilmoittaa siitä käyttäjälle dynaamisella viestillä, joka poistuu ruudulta tilanteen jälkeen.

Tehdään *App.js*:aan uusi tilamuuttuja *message* viesteille:

```jsx
 const [message, setMessage] = useState("");
```

Luodaan uusi funktio *messageHook()*, jota kutsutaan aina kun tilamuuttuja *message* muuttuu. Jos tilamuuttujaan on tullut uusi viesti, käynnistetään *timer* ja kun se laukeaa, tilamuuttuja alustetaan takaisin alkutilaan (tyhjennetään.) Näin saadaan ruudulta poistumaan sinne laitettu tiedote dynaamisesti.

```jsx
   const messageHook = () => {
    if(message !== ""){
      const timer = setTimeout(()=>setMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }

  useEffect(messageHook, [message]);
```

Jokaisessa paikassa, jossa halutaan lisätä jokin väliaikainen ilmoitus käyttäjälle, riittää lisätä seuraava rivikoodia:

```jsx
setMessage("Muistiinpanon poistaminen onnistui")
```

Nyt riittää lisätä tämä kenttä sivulle ja määritellä sille sopiva *css*-tyyli (lisää tarvittaessa myös ehdollinen renderöityminen):

```jsx
<div className="userSuccess">{message}</div>
```

ja vastaava .css

```css
.userSuccess {
    background-color: green
}
```

### Harjoitukset

1. Tee sivulle edellisen pohjalta uusi tilamuuttuja *errorMessage* ja sille oma *errorHook* ja virheelle soveltuva *css*.
