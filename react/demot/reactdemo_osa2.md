## React demo 2

### Olion välittäminen props:ina

Jos komponentti tarvitsee monta erillistä tietoa, jotka liittyvät toisiinsa, ne kannattaa paketoida olioksi. Lisää kurssi tiedot *App.js*-tiedoston alkuun:

```jsx
const course1 = { 
            teacher = "Tiina Partanen",
            course = "React",
            classroom = "S2041",
            material = "http://otredu.github.io"
}
```

Tee *components*-kansioon uusi tiedosto *Courses.js* ja siihen uusi *CourseObject*-komponentti, joka ottaa tietoa oliomuodossa:

```jsx
const CourseObject = ({course}) => {
    return (
        <div>
            <h1>{course.course}</h1>
            <p>Teacher: {course.teacher}</p>
            <a href={course.material}>Linkki materiaaliin</a>
        </div>
    )
}

export default CourseObject;
```

Kutsu komponenttia näin (muista tehdä ensin *import*):

```jsx
  <CourseObject course={course1} />
```

### Silmukan tekeminen React:issa

React:issa *return*:n sisällä ei voi käyttää *foreach*, *for* tai *while* - silmukkarakenteita, joska ne eivät palauta mitään. Siksi reaktissa käytetään *map*-rakennetta, joka käy automaattisesti läpi annetun taulukon (*array*), tekee sille parametrina annetun funktion toiminnat jokaiselle taulukon alkoille ja palauttaa uuden taulukon.

Tee *App.js* tiedoston alukuun taulukko, jossa on muutama kurssiolio:

```jsx
const courses =  [course1, course2, course3];
```

Tee uusi komponentti *Courses*, joka saa *props*:ina *courses*-taulukon ja kutsuu silmukassa *CourseObject*-komponettia jokaiselle siinä olevalle kurssille vuorollaan. Voit tehdä tämän samaan tiedostoon CourseObject-komponentin kanssa:

```jsx
const Courses = ({courses}) => {
    return(
        courses.map(c => <CourseObject course={c} />)
    )
}
```

Jotta voit *export*:ata usemman komponentin samasta tiedostosta, muuta *export* ja *import* käyttämään "räjäytystä" eli *object destructuring*:

Courses.js:

```jsx
export {CourseObject, Courses};
```

App.js:

```jsx
import {CourseObject, Courses} from './components/Courses';
```

### React:in key-props

Jotta React voi optimoida rendeöintiä (kuvan muodotaminen ruudulle HTML:n ja CSS:n avulla), sille antaa JSX:lla silmukassa map:in avulla generoiduille elementeille ns. *key*-props. Tämä on helpointa toteutaa niin, että olioille lisätään uniikki *id*-kenttä, joka annetaan *key*-props:issa:

```jsx
const course1 = { 
            id = 1,
            teacher = "Tiina Partanen",
            course = "React",
            classroom = "S2041",
            material = "http://otredu.github.io"
}
```

```jsx
 courses.map(c => <CourseObject key={c.id} course={c} />)
```

Jos tätä ei tee, selaimen konsolille ilmestyy seuraavanlaisia virheilmoituksia:

```cmd
Warning: Each child in a list should have a unique "key" prop
```

Jos *id*-kenttää ei ole, virheilmoituksen saa pois käyttämällä taulukon indeksiä, mikä _ei_ _ole_ _suositeltavaa_, koska indeksi muuttuu, jos esim. taulukon järjestää:

```jsx
 courses.map((c, i) => <CourseObject key={i} course={c} />)
```

### Jatka loppuun itse:

1. Tee oliomuotoisille kursseille oma CSS niin erotat paremmin mikä osa sivusta on demo1 ja mikä demo2.

2. Jotta *App.js* ei kasva liian suureksi, siirrä käyttämäsi *courses*-data (array), omaan tiedostoonsa ja importtaa se sieltä. Tee uusi tiedosto *courseData.js* ja siirrä sinne *course*-oliot sekä *courses*-taulukko. Tee export ja import kuten tavalliselle komponentillekin.

---

---> [React demo 3](./demot/reactdemo_osa3.html)