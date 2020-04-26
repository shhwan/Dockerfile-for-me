# base_Dockerfile
base_Dockerfile for me

## List
- centos7.5
  - git
  - pyenv
  - nvm
  - psql v11
- centos7.5ChangeUser
  - same base, But This Dockerfile
    - Can Change User
- centos7.5httpd
  - git
  - httpd 

## Command
```
#image build from Dockerfile
docker build -t imageName:tagName .

#if you want to change the USER -> You can use ARG USER/PASSWD
docker build -t imageName:tagName . --build-arg USER=username --build-arg PASSWD=password

#Run image
#You can skip /sbin/init for CMD
docker run --privileged -d --name hogehoge imageName:tagName /sbin/init

#Run image open port
docker run --privileged -d -p 8080:80 --name hogehoge imageName:tagName /sbin/init
docker run --privileged -d -p 5000:8000 --name hogehoge imageName:tagName

#In to the Container
docker exec -it containerID /bin/bash

#In to the Container change user
docker exec -it containerID su - userName
```