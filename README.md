# Simple REST API using express.js

This project is an example of how to create a simple REST API using express

## Installation of Docker

Prerequisites for installing in Ubuntu

    - Ubuntu 18.04 64-bit operating system
    - A user account with sudo privileges
    - Command line / terminal (CTRL-ALT-T or Applications menu > Accessories > Terminal)

Update local database of software to ensure access to latest revisions.

```bash
sudo apt-get update 
```

Once the operation is complete, use the command:

```bash
sudo apt install docker.io
```

The Docker service needs to be setup to run at startup.
To do so, type in each command to the terminal:

```bash
sudo systemctl start docker
```
```bash
sudo systemctl enable docker 
```

Once Docker is set up, an image needs to be built from the Dockerfile. Type in the command to the terminal:

```bash
docker build -t <your docker username>/node-web-app
```

After the whole process is done, a docker image will be made from the rest-api application written in the 'index.js' file.
To build a container out of the image, type in the following command to the terminal:

```bash
docker run -p 8080:8080 -d <your docker username>/node-web-app
```
-d runs the container in detached mode. The -p flag redirects a public port to a private port inside the container.



