## CSS-asettelu

### Flexbox

*Flexbox*:in avulla voidaan asetella elementtejä sivulle tai toisen elementin sisällä. Elementtiä, joka sisältää toisia elementtejä, kutsutaan *flex container*:iksi. Sen sisällä on *flex item*:eja.

![sivuston rakenne](./img/demo1_rakenne_nuolet.PNG)

Periaatteessa riittää, että *flex container*:lle määritellään:

```css
#main {
    display: flex;
}
```

[Lue lisää flex-box:ista](https://css-tricks.com/snippets/css/a-guide-to-flexbox/))