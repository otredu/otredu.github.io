## Heroku ja Postgres

Herokussa ei ole MySQL-tietokantaa automaattisesti, siksi siirrymme käyttämään Postgres-tietokantaa. Voit tehdä sen vaihtamalla .env tiedoston muotoon:

```cmd
#######################################
# Configuration for Heroku hosting    #
#######################################

DB_DBTYPE = "Postgre"

# Other db configurations are extracted from the system environment
# variable, DATABASE_URL
```

Muuta myös tietokantayhteyden ottamiseen tarkoitettu koodi haarautumaan:
```php
if(getenv("DATABASE_URL")){
            // The connection parameters are extracted from the DATABASE_URL environment variable
             $db = parse_url(getenv("DATABASE_URL"));
             $host = $db["host"];
             $port = $db["port"];
             $dbname = ltrim($db["path"], "/");
             $user = $db["user"];
             $password = $db["pass"];
             $connectionString = "pgsql:host=$host;dbname=$dbname;port=$port";
          } else {
              $host = getenv('DB_HOST');
              $port = getenv('DB_PORT'); 
              $dbname = getenv('DB_NAME'); 
              $user = getenv('DB_USERNAME'); 
              $password = getenv('DB_PASSWORD'); 
              $connectionString = "mysql:host=$host;dbname=$dbname;port=$port;charset=utf8";
          }
```

Testaa koodisi dockerin ja Postgres:in kanssa.

