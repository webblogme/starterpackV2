# starterpack V2

Start build your website from scratch with this files pack. driven by Docker.

### Package include
* [Bootstrap3](http://bootstrapdocs.com/v3.0.3/docs/getting-started/) - CSS Framework
* [Gulp](https://gulpjs.com/) - Javascript task runner that lets you automate tasks
* [Less](http://lesscss.org/) - Dynamic preprocessor style sheet language

### Built With DOCKER
* PHP 5.6
* PHP MyAdmin
* MySql

### Requirement
You should have these install on your machine
* Docker version 18.03
* node v9.3.0
* Git

### Tested on 
* Windows 7
* Docker runs with Oracle VM

### How to use
Run docker machine.
In case of first time use: you need to run command in MINGW64
```
docker-compose build
```
then you can just type in cmd 
```
docker-compose up -d
```

### To use Gulp
First time use: you need to cmd 
```
npm install
```
then you can just type in cmd 
```
gulp
```

### To access PHP MyAdmin
```
http://localhost:8888
```
Username: root / Password: root


### Enjoy coding!