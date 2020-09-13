# stock-market-application

### Before using Jenkinsfile, remove all the pre-existing networks and containers of the same as below.

### Step1: Create network named company-network
* docker network create company-network

### Step2: Deploy mysql on docker
* docker pull mysql/mysql-server:8.0.21
* docker container run --name mysqldb --network company-network -e MYSQL_HOST_ROOT=% -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=stockmarket -d mysql/mysql-server:8.0.21

### Step3-7: Go to each microservice folder type this two commands: [For ex gateway ms]
* docker image build -t gateway-ms .
* docker container run --network company-network --name gateway-ms-container -p 8989:8989 -d gateway-ms


Do "mvn clean install" for each microservice before Steps3-7.
