# base_Dockerfile
base_Dockerfile for me

## List
- centos7.5
  - git
  - pyenv
  - nvm

## Command
```
#Move Dockerfile Folder
cd folderName

#image build from Dockerfile
docker build -t imageName:tagName .

##if you use ARG USER/PASSWD
##Delete USER/PASSWD
##AND WIRTE ONLY
##ARG USER   //  ARG PASSWD
docker build -t imageName:tagName . --build-arg USER=userName --build-arg PASSWD=passWord

#Run image
docker run --privileged -d --name hogehoge imageName:tagName /sbin/init

#In to the Container
docker exec -it containerID su - userName
```