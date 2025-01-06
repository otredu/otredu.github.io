## Systeemityö


### Sisältö

- Käytettävyys ja käytettävyystestaus
    - [materiaali](./kaytettavyys.html)

- Docker-kontit (docker build, docker-compose, docker hub):
    - [notesdemo1](https://otredu.github.io/docker/notesdemo.html)
    - [notesdemo2](https://otredu.github.io/docker/notesdemofull.html)

- Pilvipalvelut:
    - [AWS-Azure-tehtävät](./cloud_harjoitukset_azure_aws.html)

- Testausautomaatio: 
    - [E2E-testaus: Cypress](../testaus/cypress.html)
    - [Backend-testaus: Jest & superttest](../testaus/jestforrestapi.html)

- CI/CD:
    - [Github-actions](to be done)

- Tietoturva
    - [Introduction to cyber security](https://lms.netacad.com/course/view.php?id=2174201)
    - [DevSecLab-kurssi](https://www.devseclab.io/)
    - [Web Security Academy](https://portswigger.net/web-security/learning-paths)
    - [Try Hack Me](https://tryhackme.com/)
    - [Cyberlab-setup](https://medium.com/@damipedia/building-your-first-cybersecurity-lab-with-docker-a-beginners-guide-to-setting-up-a-vulnerable-5222f5563884)
    - [Safebase](https://safebase.io/)
    - [DVWA](../tietoturva/dvwa.html)

- Tietoverkot
    - [Networking essentials](https://lms.netacad.com/course/view.php?id=2171961)
    
- Microsoft Azure Fundamentals
    - [Kirjaudu MS Learn alustalle koulun @edu.tampere.fi tunnuksille ja valitse kurssi](https://learn.microsoft.com/en-us/training/student-hub/)    

--- 
### Linux

    - Linux-terminaalin avaaminen dockeriin (Bash)

    ```bash
    docker pull ubuntu
    winpty docker run -it ubuntu bash
    ```
    - Linux-terminaalin avaaminen uudelleen (kun kontti on jo käynnissä)

    ```bash
    winpty docker exec -it <container_id> bash
    ```

    - [The 60 Most Commonly Used Linux Commands](https://www.hostinger.com/tutorials/linux-commands)

---
<!-- MS Sertifikaatit:
    - Tarkista onko mahdollista sertifioitua kyberturvallisuuden osalta 

Tarkista mitä on: Azure Dev Tools for Teaching 
Azure for student
Azure for student starter (pienempi)-->

