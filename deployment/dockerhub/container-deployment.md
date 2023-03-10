## Docker - kontin julkaiseminen DockerHub:issa

1. Tee tili Docker-hub:iin ja luo uusi container registry (ilmaisella tilillä vain yksi private repo):

    ![luo uusi repo](../img/dockerhubrepo.PNG)

    ![luo uusi repo](../img/dockerhubrepo2.PNG)

2. Kirjaudu sisään DockerHub-tilisi

    ```cmd
    docker login
    ```

3. Tee uusi build niin, että sillä on oikean lainen *tag* (tag on vapaaehtoinen)

    ```cmd
    docker build -t my_dockerhub_user/my_repo:my_tag
    ```

4. Push:aa tehty image DockerHub:iin

    ```cmd
     docker push my_dockerhub_user/my_repo:my_tag
    ```

5. Nyt sen voi ladata DockerHub:ista esim. Linux-serverille

    Huom! Jos *tag* jätetään pois default on *latest*

    ```cmd
    docker pull my_dockerhub_user/my_repo:my_tag
    ```

6. Containerin käynnistys 

    Tee *docker-compose.yml* - tiedosto ja lisää siihen .env - tiedostossa olevat salasanat yms.

    ```yml
    version: '3.1'

    services:
        notesdemo:
            image: my_dockerhub_user/my_repo:my_tag
            environment:
                DB_HOST: my_server
                DB_USER: my_db_user
                DB_PASS: my_pass
                DB_DATABASE: my_db
                DB_TYPE: mysql2
                DB_PORT: 3306
                PORT: 3001
                SECRET: tosisalainensalasanainen
            ports:
                - my_port:3001
    ```

    Aja nyt samassa kansiossa docker-compose.yml-tiedoston kanssa:

    ```cmd
    docker-compose up -d
    ```

    Nyt kontti pyörii portissa *my_port* eli esim. http://localhost:my_port.





