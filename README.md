# base_Dockerfile
base_Dockerfile for me

## List
- centos7.5-psql
  - git
  - pyenv
  - nvm
  - psql v11
- docker-frontend
  - react
- simple-nodeweb/visiter
  - redis
  - httpd

## Command
```
# Build image from Dockerfile
docker build -t imageName:tagName .
docker build -f DockerfileName -t imageName:tagName .
docker build -t imageName:tagName . --build-arg USER=username --build-arg PASSWD=password

# Run
## CentOS7
docker run --privileged -d --name hogehoge imageName:tagName /sbin/init
docker run --privileged -d -p 8080:80 --name hogehoge imageName:tagName /sbin/init
docker run --privileged -d -p 5000:8000 --name hogehoge imageName:tagName

# Exec Container
docker exec -it containerID /bin/bash
docker exec -it containerID su - userName
```