### JSON server -demo (Fanikauppa)

```json
{
  "customers": [
    {
      "id": 1,
      "firstname": "Tiina",
      "lastname": "Partanen",
      "address": "Kummakatu 2, 33500 Tampere",
      "phone": "3948593485",
      "email": "mun.posti@example.com"
    },
    {
      "id": 2,
      "firstname": "Janne",
      "lastname": "Järvinen",
      "address": "Kesäkatu 33, 33100 Tampere",
      "phone": "111222333",
      "email": "toinen.posti@example.com"
    }
  ],
  "orders":[
    {
      "id": 1,
      "date": "2019-11-01",
      "ordereditems": [{
        "id": 1,
        "productId": 1,
        "quantity": 2
    }], 
    "customerId": 1
    },
    {
      "id": 2,
      "date": "2019-11-02",
      "ordereditems": [{
        "id": 2,
        "productId": 2,
        "quantity": 4
    }], 
    "customerId": 1
    },
    {
      "id": 3,
      "date": "2019-11-03",
      "ordereditems": [{
        "id": 3,
        "productsId": 1,
        "quantity": 20
      },
      {
        "id": 4,
        "productsId": 2,
        "quantity": 3
      }],
    "customerId": 2
    }],
  "products": [{
    "id": 0,
    "name": "Ilveksen lippis",
    "description": "Huippu hieno, Ilves on rautaa tekstillä.",
    "price": 15,
    "image": "http://images/jokukuva.jpg"
  },
  {
    "id": 1,
    "name": "Ilveksen paita",
    "description": "Musta, kokoa XL.",
    "price": 35,
    "image": "http://images/jokukuva2.jpg"
  }
  ]
}
```