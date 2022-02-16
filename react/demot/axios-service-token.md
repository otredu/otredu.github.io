## Axios - service 

Tehdään uusi kirjasto *axios-service*. Tämän kirjaston tarkoitus on piilottaa muulta koodilta yksityskohta kuten serviceURL, axios-kirjasto, sekä tallentaa authtoken.

```js
import axios from 'axios';

const baseUrl = '/notes'

let token = null;

const setToken = newToken => {
  token = newToken
}

const makeHeader = () => {
        let header =  {headers: {Authorization: `bearer ${token}`}}
        return header;
}

const getAll = () => {
    const request = axios.get(baseUrl, makeHeader())
    return request.then(response => response.data)
}

const add = (newNote) => {
    const request = axios.post(baseUrl, newNote, makeHeader())
    return request.then(response => response.data)
}

const update = (id, updatedNote) => {
    const request = axios.put(`${baseUrl}/${id}`, updatedNote, makeHeader())
    return request.then(response => response.data)
}

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`, makeHeader())
}

export default {
    getAll: getAll,
    add: add,
    update: update,
    remove: remove,
    setToken: setToken
}
```

Otetaan kirjasto käyttöön *App.js*:ssä:

```js
import notesService from './services/notes';
```

Poista service URL, ja korvaa kaikki korvaa kaikki *axios*-kutsut sitä vastaavalla *notesService*-funktiolla, esim.

Vanha:

```js
   axios
   .get(serviceURI)
```

Uusi:

```js
    notesService
    .getAll()
```

Korjaa myös *response.data* -> *response* (service palauttaa suoraan data-osan).