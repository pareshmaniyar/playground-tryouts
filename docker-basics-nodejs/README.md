
### NOTES
- build creates image
- images are build over other images to reduce size when transferred to others over network
- Image creates containers
- An image can have many containers running

### cmd
docker ps
docker images

docker build -t username/image-name:version .
docker build -t paresh/first-image:1.0 .

docker run -p local:container image-id
docker run -p 3000:8080 4b4a666962dd

Volumes - to persist files and shared between containers
docker volume create shared-persistent-stuff

TODOs:
1. Volumes
2. docker-compose


