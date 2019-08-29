## MySQL

Tässä tutoriaalissa luodaan yksi tietokanta, sinne yksi taulu ja tauluun yksi tietue käyttäen SQL:ää suoraan komentoriviltä.

Käynnistä MySQL-serveri (esim. *XAMPP-control panel*:sta). Avaa CMD, siirry hakemistoon johon mysql.exe on asennettu (esim. c:\xampp\mysql\bin) ellei tämä ole määritelty polussasi valmiina.

Käynnistä mysql komentoriviltä ja kirjaudu "root" käyttäjänä sisään (XAMPP:ssa root:illa ei ole salasanaa, jos salasana tarvitaan lisää se *-password*):

```cmd
> mysql -u root
```

### Tietokannan luominen

Voit kysyä olemassaolevia tietokantoja:

```sql
show databases;
```

Uuden tietokannan luominen tapahtuu näin:

```sql
create database MyTodo;
```

Ota uusi tietokanta käyttöön:

```sql
use mytodo;
```

### Tietokannan taulujen luominen

Tietokannan tauluja voi kysellä:

```sql
show tables;
```

Uuden taulun luominen tapahtuu *create*-komennolla. Jokainen sarake ja sen tietotyyppi annetaan pilkulla eroteltuina:

```sql
create table todos (description text, completed boolean);
```

Voit katsoa miltä taulu näyttää:

```sql
describe todos;
```

Jos taulun luonnissa tuli virhe taulun voi poistaa *drop*-kommennolla (tee se):

```sql
drop table todos;
```

Tehdään uusi taulu, jossa on uniikki id (*autonum*), joka on samalla *primary key*. Asetetaan kentät myös pakollisiksi (*NOT NULL*):

```sql
create table todos (id integer PRIMARY KEY AUTO_INCREMENT, description text NOT NULL, completed boolean NOT NULL);
```

### Tietueen lisääminen tauluun

Voit nyt lisätä uuden tietueen luotuun tauluun:

```sql
insert into todos (description, completed) values('Go to gym', false);
```

### Tietojen hakeminen taulusta

Voit katsella kaikkia tietueita tekemällä *query*:n:

```sql
select * from todos;
```

Jos olet kiinnostunut vain yhdestä tietueesta lisää *sql*-lauseeseen *where*-osa:

```sql
 select * from todos where id = 1;
```