## Tilamuuttujien käsittely

Tilamuuttujaa ei saa suoraan muuttaa React:issa. Muuttaminen tehdään tilaan liittyvän funktion avulla. Jos monimutkaisempaa tilamuuttujaa täytyy muokata, siitä tehdään yleensä kopio, jota muokataan ja tämä kopio välitetään tilaa muuttavalle funktiolle. 

### Oliot ja taulukot

Jos tilamuuttuja on taulukko tai olio, se pitää kopioita käyttäen *spread*-operaattoria, muuttaa kopiota ja sitten välittää kopio varsinaiselle tilaa muuttavalle funktiolle:

Taulukkoesimerkki, jossa taulukossa jo olevaa arvoa muutetaan:

```js
const [myFrameworks, setMyFrameworks] = useState(["React", "Vue", "Angular"]);

const tempFrameworks = [...myFrameworks];
tempFrameworks[2] = "Angular 2";
setMyFramework(tempFrameworks);
```

Taulukkoesimerkki, jossa taulukkoon lisätään uusi tieto (*concat* palauttaa taulukosta valmiiksi uuden kopion):

```js
setMyFramework(myFrameworks.concat("Next JS Framework"));
```

Olioesimerkki, kun päivitettävä tieto saadaan *event*:ssä. Huomaa myös, että tässä olion päivitettävä kenttä saadaan muuttujassa *field*. Olion kopiointi tehdään myös *spread*-operaattorin avulla:

```js
const [newInfo, setNewInfo] = useState({name: "", adress:""});

const infoChangeHandler = (event, field) => {
    const tempInfo = {...newInfo};
    tempInfo[field] = event.target.value;
    setNewInfo(tempInfo);
};
```

Tätä yllä olevaa *callback:iä kutsutaan komponentista näin:

```js
Anna nimi:
<input type="text"
    value={newInfo.name}
    className="info"
    onChange={e=>infoChangeHandler(e, 'name')} />

Anna osoite:
<input
    type="text"
    value={newInfo.adress}
    className="info"
    onChange={e=>infoChangeHandler(e, 'address')} />
```

### Olioita sisältävä taulukko

Kun käsitellään taulukkoa, joka sisältää olioita, *spread*-operaattorilla tehty kopiointi ei riitä, koska se kopioi taulukon mutta ei olioita sen sisällä. Tämän takia joudutaan tekemään hieman lisätyötä.

Määritellään tilamuuttujataulukko, jossa on sisällä olioita:

```js
const images = [
    {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
        title: "React",
        description: "React on JavaScript framework",
        id: 0,
        price: 1,
        amount: 0,
        alt: "reach logo"
    },
    {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png",
        title: "Angular",
        description: "Angular on JavaScript framework",
        id: 1,
        price: 1.5,
        amount: 0,
        alt: "angular logo"
    },
    {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1024px-Vue.js_Logo_2.svg.png",
        imgTitle: "Angular",
        title: "Vue", 
        description: "Vue on JavaScript framework",
        id: 2,
        price: 2,
        amount: 0,
        alt: "vue logo"
    }];

const [myImages, setMyImages] = useState(images);
 ```

Uuden olion lisääminen on helppoa (*newImage* sisältää olion, jossa on uuden kuvan tiedot):

```js
setMyImages(myImages.concat(newImage));
```

Yhden olion, jonka *id* tiedetään, poistaminen on myös helppoa. *filter* palauttaa uuden kopion taulukosta:

```js
const removeImg = id => {
    tempImages = myImages.filter(img => img.id != id);
    setMyImages(tempImages);
}
```

Yhden olion, jonka *id*-tiedetään, yhden kentän muuttaminen on hieman monimutkaisempaa.

Esim. jos yhden olion *amount*-kenttää kasvatetaan yhdellä, tehdä siitä ensin kopio, ja muutetaan kopion *amount*:ia. Ne oliot jotka eivät muutu voidaan jättää kopioimatta. Tämä saadaan aikaiseksi ajamalla taulukko *map*:in läpi. Map palauttaa automaattisesti taulukosta uuden kopion. Tässäkin käytetään *spread*-operaattoria kopioimaan olio. Lopuksi kutsutaan tilaa muuttavaa funktiota:

```js
const addLike = id => {
    const tempImages = images.map(img => {
        if(img.id === id){
            const tempImg = {...img, amount: (img.amount + 1)};
            return tempImg;
        } else {
            return img;
        }
    })
    updateImages(tempImages);
}
```

Vastaavasti kaikkien *amount*-kenttien nollaaminen tapahtuu näin:

```js
const setToZeros = () => {
    const tempImages = images.map(img => {
        const tempImg = {...img, amount: 0};
        return tempImg;
    });
    setMyImages(tempImages);
}
```

Olioita sisältävän taulukon tietoja voi poimia *map*:in avulla uuteen taulukkoon, jonka arvot voi esim. laskea yhteen *reduce*:n avulla:

```js
const amounts = myImages.map(img => img.amount * img.price);
const total = amounts.reduce((a, b) => a + b, 0);
```
