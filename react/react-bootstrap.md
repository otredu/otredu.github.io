## React bootstrap

Voit käyttää React:in kanssa Bootstrap-kirjastoa, mutta sen on oltava React:ille suunniteltu versio siitä.

Asenna react-bootstrap projektisi juureen:

```cmd
npm install react-bootstrap bootstrap
```

Ota käyttöön bootsrap:in vaatimat *css*-tiedostot, tallenna tämä projektisi *public/index.html* tiedostoon:

```html
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>
```

### Ota käyttöön bootstrapin navbar-komponentti

Tee itsellesi uusi *MyNavBar*-komponentti, *import*:aa tarvittavat komponentit *react-boostrap*-kirjastosta, kopioi *react-bootstrap* - sivustolta valmis koodipohja, lisää siihen *map* kohtaan, jossa haluat renderöidä useamman navigointilinkin:

```js
import React from 'react';
import {Navbar, NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap'

const MyNavBar = ({links}) => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                {links.map((item, i) =>
                    <NavDropdown.Item key={i} href={item}>{item}</NavDropdown.Item>)}
              <NavDropdown.Divider />
              <NavDropdown.Item href={links[0]}>Ja tämäkin on oma</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      )
}

export default MyNavBar;
```

### Ota käyttöön bootstrapin - komponentti

Tee itsellesi uusi *Carousel* - komponentti, *import*:aa tarvittavat komponentit *react-boostrap*-kirjastosta, kopioi *react-bootstrap* - sivustolta valmis koodipohja, lisää siihen *map* kohtaan, jossa haluat renderöidä useamman karuselli-item:in:

```js
import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

const MyCarousel = ({images}) => {
  return (
    <Carousel >
        {images.map(item =>
                <Carousel.Item key={item.id}>
                <img
                  className="d-block w-100"
                  src={item.url}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{item.title}</h3>
                  <p>{item.decription}</p>
                </Carousel.Caption>
                </Carousel.Item>)}
    </Carousel>
  );
}

export default MyCarousel;
```

### Ota käyttöön uudet komponentit App:ssa

Ota käyttöön tekemäsi uudet komponentit, lataa *images*-tiedot aikaisemmasta kuvientykkäys [demosta](./immutable-state.html).

```js
import React from 'react';

import './App.css';
import MyNavBar from './components/MyNavBar';
import MyCarousel from './components/MyCarousel';
import images from './components/imageData';

const App = () => {
  const links = ["http://is.fi", "hs.fi"];
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bootsrap demo</h1>
      </header>
      <nav>
        <MyNavBar links={links}/>
      </nav>
      <section>
        <MyCarousel className="carousel" images={images} />
      </section>
    </div>
  );
}

export default App;
```
