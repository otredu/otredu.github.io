## Code igniter

### Asennus

```cmd
composer create-project codeigniter4/appstarter news --no-dev
```

Ota käyttöön intl-lisäosa (c:\xampp\php\php.ini)

```cmd
extension=intl
```

```cmd
composer install
```

Käynnistä jossain muussa kuin default portissa (8080 on jo käytössä phpMyAdminilla):

```cmd
php spark serve --port 8888
```