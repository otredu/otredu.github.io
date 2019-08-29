## PDO-rajapinta

### Johdanto

PDO-rajapinta (*PHP Data Ohjects*) on PHP:hen sisäänrakennettu oliorajapinta tietokannan käyttämistä varten. Se korvaa aikaisemmin käytetyn *MySQLi*:n, jota ei suositella käytettäväksi tietoturvaongelmien vuoksi (*SQL-injection*).

PDO huolehtii vain tietokantayhteyden muodostamisesta sekä SQL-kyselyjen välittämisestä tietokannalle. Se ei piilota eri tietokantojen eroja mikä pitää ottaa huomioon SQL-lauseiden teossa.

[PDO-manuaali](https://www.php.net/manual/en/book.pdo.php)

### Yhteyden muodostaminen MySQL-tietokantaan

*Alkutoimet: Käynnistä MySQL Dockerin avulla [ohje](../docker/index.html)*
 
#### Muodostetaan tietokantayhteys

