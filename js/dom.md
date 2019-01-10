## Document Object Model (DOM)

### Mikä on DOM?

JavaScript:in avulla voidaan muokata dynaamisesti selaimessa auki olevaa HTML-sivua. Muokkaaminen tapahtuu DOM rajapinnan kautta (Document Object Model Interface). DOM esittää HTML-sivun puumaisena rakenne, jossa juuressa (root) on HTML-elementti ja sen lapsina muut elementit. Tässä esimerkkikuva Wikipediasta:

![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/428px-DOM-model.svg.png)


```js
const opiskeleJavaScript = (editori, aikaa, motivaatiota) => {
  return "Koodaaminen on kivaa";
}
```