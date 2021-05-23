# base_Dockerfile
base_Dockerfile for me

## List
- docker-frontend
  - react
- simple-nodeweb/visiter
  - redis
  - httpd
- node-react-nginix
  - node
  - react + nginx
## Command
```
# Build image from Dockerfile
docker build -t imageName:tagName .
docker build -f DockerfileName -t imageName:tagName .

# Exec Container
docker exec -it containerID /bin/bash
docker exec -it containerID su - userName
```