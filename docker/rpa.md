## Robotframework in docker

Tee image, joka sisältää conda-ympäristön, node.js:n sekä robot framework:in. Tallenna Dockerfile - nimiseen tiedostoon:

```yml
FROM continuumio/miniconda3

WORKDIR /app

# Make RUN commands use `bash --login`:
SHELL ["/bin/bash", "--login", "-c"]

## Install npm
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash
RUN apt install -y nodejs
RUN apt install -y xvfb

# Create the environment:
COPY qauto_rpa_conda.yml .
RUN conda env create -n qautorpa --file qauto_rpa_conda.yml

# Initialize conda in bash config files:
RUN conda init bash

# Activate the environment, and make sure it's activated:
RUN echo "conda activate qautorpa" > ~/.bashrc
RUN npx playwright install-deps
RUN python -m Browser.entry init

# The code to run when container is started:
CMD xvfb-run --auto-servernum --server-num=1 --server-args='-screen 0, 1920x1080x24' python -m robot.run -d test_reports --variable BROWSER:gc "robots/"
```

Tee docker-compose.yml - tiedosto, jossa kerrot mikä image (myapp) testataan:

```yml
 version: '3.1'

 services:
   myapp:
    image: my_dockerhub_user/my_app_repo:my_tag
    environment:
      DB_HOST: my_db_host
      DB_USER: my_db_user
      DB_PASS: my_db_password
      DB_DATABASE: my_db_name
      DB_TYPE: mysql2
      DB_PORT: 3306
      PORT: 3001
      SECRET: tosisalainensaiyvutfytdtretdrlasanainen
    ports:
       - 3001:3001
   rpa:
    image: my_robotframework_image
    init: true
    volumes:
      - ./test_reports:/app/test_reports:Z
      - ./robots:/app/robots:Z
      - ./resources:/app/resources:Z
      - ./results:/app/results:Z
```

Huom! Vaihda testitiedostoissa url:ksi http://myapp:3001, jotta docker - kontissa pyörivä robot framework saa yhteyden testattavaan applikaatioon toisessa docker - kontissa (docker-compose tekee automaattisesti networkin konttien välille). 