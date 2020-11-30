#### Express-joi-validataion

NOTE: Tarkista toimiiko enää!

Kirjaston avulla voidaan tarkistaa myös request-parametrit, sekä query-parametrit.

Jotta tarkistaminen voidaan tehdä pitää JSON-schemat määritellä. Tee uusi kansio *models* ja sinne seuraavat tiedosto:

registerSchema.js ja loginSchema.js (ilman *name*:a)

```js
const Joi = require('@hapi/joi');

const schema = Joi.object().keys({
    username: Joi.string().required().min(6),
    password: Joi.string().required().min(8),
    name: Joi.string().required()
});

module.exports = schema;
```

notesSchema.js

```js
const schema = Joi.object().keys({
    content: Joi.string().required(),
    date: Joi.date(),
    important: Joi.boolean().required() 
});
```

Lisää seuraava *app.js*-tiedostoon:

```js
const Joi = require('@hapi/joi')
const validator = require('express-joi-validation').createValidator({})

const loginSchema = require('./models/loginSchema');
const notesSchema = require('./models/notesSchema');
const registerSchema = require('./models/registerSchema');
```

Lisää middleware kunkin *router*:in listaan:

```js
app.use('/login', validator.body(loginSchema), loginRouter)
...
```