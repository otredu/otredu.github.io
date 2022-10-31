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

4. Push:aa tehty image DockerHub:iin

    ```cmd
     docker push my_dockerhub_user/my_repo:my_tag
     ```
5. Nyt sen voi ladata DockerHub:ista esim. Linux-serverille 

Huom! Jos *tag* jätetään pois default on *latest*)

    ```cmd
    docker pull my_dockerhub_user/my_repo:my_tag
    ```

6. Containerin käynnistys:

    ```cmd
    docker run -d -p 80:3001 --name my_container my_dockerhub_user/my_repo:my_tag
    ```

Huom! Portti 80 on HTTP.



