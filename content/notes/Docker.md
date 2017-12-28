===== image =====

Q : search image
A : docker search $REPOSITORY
    docker search mysql

Q : pull image
A : docker pull $REPOSITORY:$TAG
    docker pull ubuntu:14.04
    docker pull ubuntu (default tag latest)

Q : show image
A : docker images

Q : remove image
A : docker rmi $$REPOSITORY:$TAG
A : docker rmi $IMAGE_ID

Q : login docker hub
A : docker login
	
Q : build image from Dockerfile
A : docker build -t $USERNAME/$REPOSITORY:$TAG .

Q : build image from specific Dockerfile
A : docker build -f $FILE_NAME -t $USERNAME/$REPOSITORY:$TAG $PATH

Q : commit image from current image
A : docker commit -m="$COMMENT" $NAME/$CONTAINER_ID $USERNAME/$REPOSITORY:$TAG 
    docker commit -m="add htop" ubuntu ubuntu:14.04.1

Q : tag image 2 from 1
A : docker tag $USERNAME/$REPOSITORY1:$TAG1 $USERNAME/$REPOSITORY2:$TAG2
    docker tag ubuntu:latest ubuntu:16.04

Q : push image
A : docker push $USERNAME/$REPOSITORY:$TAG

Q : run image (-i = stdin, 
               -t = tty, 
			   --rm = remove when stop, 
			   -d = daemon, 
			   -p = port, 
			   -v = volume, 
			   -e = environment variable, 
			   --name = specific container name
			   --link = linked container name)(--rm and -d can't use same time)
A : docker run $REPOSITORY:$TAG $COMMAND
    docker run --rm ubuntu:14.04 /bin/date
    docker run -it ubuntu:14.04 /bin/bash
    docker run -it --rm ubuntu:14.04 /bin/bash
	docker run -d -p 3306:3306 -v /opt/data1:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root --name=mysql mysql:5.7.16
	docker run -d -p 8080:8080 -v ~/Desktop/log:/opt/ibeengo-chat/log --name=chat --link mysql ibeengo-chat:1.4.0

Q : take all image id
A : $(docker images -aq)
    docker rmi $(docker images -aq)
	docker rmi -f $(docker images -aq)
	
===== container =====

Q : show containers
A : docker ps -a

Q : show ids of container
A : docker ps -a -q

Q : interact with a running container
A : docker exec -it $NAME /bin/bash
A : docker exec -it $CONTAINER_ID /bin/bash

Q : stop container
A : docker stop $NAME
A : docker stop $CONTAINER_ID

Q : start a exited container
A : docker start $NAME
A : docker start $CONTAINER_ID

Q : remove container (-f = force)
A : docker rm $NAME
A : docker rm $CONTAINER_ID

Q : take all container id
A : $(docker ps -a -q)
	docker stop $(docker ps -aq)
    docker rm $(docker ps -aq)
	docker rm -f $(docker ps -aq)


===== Hint =====
how to exit teminal of container ?
input exit or Ctrl + D, and container will close

exit tty of container ?
Ctrl + P and then Ctrl + Q

ERROR : denied: requested access to the resource is denied
please docker login first

--link use /etc/hosts and environment variable to communicate each container
=====
docker save
docker load

docker export
docker import

docker image prune
docker image prune -a

docker login 192.168.250.35:9528 -u admin -p admin123
docker run -d -p 8081:8081 -p 8082:8082 -p 8083:8083 --name my-nexus sonatype/nexus3:latest
docker tag 
docker push 127.0.0.1:8082/sport-api