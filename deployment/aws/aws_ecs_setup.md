## ECS Runner setup 

0. Luo uusi _cluster_ ECS:ssä (tai käytä vanhaa)
1. Valitse "Launch instance" EC2:ssa
2. Valitse "Amazon ECS-Optimized Amazon Linux 2 (AL2) x86_64 AMI"
3. Valitse "t3.medium"
4. Valitse vanha _key pair_ (tai luo uusi)
5. Valitse vanha _security group_ (tai luo uusi)
6. Valitse _storage_ 50 GIB
7. Avaa _Advanced details_ ja lisää kohtaan _User data_:
    ```bash
    #!/bin/bash
    echo "ECS_CLUSTER=nodeapp" >> /etc/ecs/ecs.config
    ```
8. Käynnistä
9. Avaa _Actions_ --> _Security_ --> _Modify IAM role_ ja lisää EC"-instanssille IAM oikeudet: "AmazonEC2ContainerServiceforEC2Role"   
10. Tarkista _security groups_
11. Liitä _elastic IP_ 


