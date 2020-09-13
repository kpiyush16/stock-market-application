pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'docker', url: 'https://github.com/kpiyush16/stock-market-application.git'
            }
        }
        stage('Build Microservices'){
            steps {
                dir('eureka-server'){
                    bat "mvn clean install"
                    bat "docker image build -t eureka-ms ."
                }
                dir('gateway'){
                    bat "mvn clean install"
                    bat "docker image build -t gateway-ms ."
                }
                dir('user-service'){
                    bat "mvn clean install"
                    bat "docker image build -t user-ms ."
                }
                dir('stock-exchange'){
                    bat "mvn clean install"
                    bat "docker image build -t stock-ms ."
                }
                dir('company'){
                    bat "mvn clean install"
                    bat "docker image build -t company-ms ."
                }
            }
        }
        stage('Deploy Microservices'){
            steps {
                bat "docker network create company-network"
                bat "docker pull mysql/mysql-server:8.0.21"
                bat "docker container run --name mysqldb --network company-network -e MYSQL_HOST_ROOT=%% -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=stockmarket -d mysql/mysql-server:8.0.21"
                bat "docker container run --network company-network --name eureka-ms-container -p 8761:8761 -d eureka-ms"
                bat "docker container run --network company-network --name gateway-ms-container -p 8989:8989 -d gateway-ms"
                bat "docker container run --network company-network --name user-ms-container -p 8081:8081 -d user-ms"
                bat "docker container run --network company-network --name stock-ms-container -p 8083:8083 -d stock-ms"
                bat "docker container run --network company-network --name company-ms-container -p 8082:8082 -d company-ms"
            }
        }
    }
}
