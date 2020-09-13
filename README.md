# stock-market-application

### Step1: Create network named company-network
* docker create network company-network

### Step2: Go to each microservice folder type this two commands: [For ex gateway ms]
* docker image build -t gateway-ms .
* docker container run --network company-network --name gateway-ms-container -p 8989:8989 -d gateway-ms
