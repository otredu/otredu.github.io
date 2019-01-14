## JEST

JEST:in avulla voidaan automatisoida yksikkötestit JavaScript-komponenteille (funktiot, React-komponentit jne.). Tarkista, että [node.js](https://nodejs.org/en/) on asennettu ennen kuin jatkat.

### JEST:in asentaminen

1. Avaa CMD, tee uusi projektikansio (mkdir), siirry siihen (cd) ja alusta uusi node.js projekti ajamalla:
​
    ```bash
    npm init
    ```

2. Asenna JEST ajamalla:

    ```bash
    npm install --save-dev jest ​
    ```

### Ensimmäinen testi

1. Käynnistä Visual Studio Code, tee uusi tiedosto *sum.js*, joka sisältää testattavan funktion **sum**:​

    ```js
    function sum(a, b) { ​
    return a + b; ​
    } ​
    module.exports = sum;
    ```
2. Tee uusi tiedosto *sum.test.js*, joka sisältää yhden testin:

    ```js
    const sum = require('./sum'); ​

    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    }​);​
    ```
3. Lisää seuraava koodi package.json-tiedostoon (tiedosto sisältää kaikki projektin *dependency*:t sekä skriptit):​

    ```js
    { "scripts": { "test": "jest" } }​
    ```
4. Käynnistä testit CMD:n kautta:​

    ```bash
    npm run test​
    ```
Nyt JEST ajaa kaikki testit, joita se löytää hakemistosta (testit sisältävän tiedoston nimessä tulee olla *.test.*).
