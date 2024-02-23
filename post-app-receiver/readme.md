# A Sample Architecture with 2 Apps making and receiving POST request

+-------------------------------------------------------+
| K8s Job ----> API Gateway ----> Lambda ----> DynamoDB |
+-------------------------------------------------------+

## About the Applications

- Client Posting app: Javascript stack on Kubernetes Job
- Backend App: Python deployed to Lambda

**Sample POST**

```bash
curl -k \
    --request POST \
    --data '{
        "vehicle": {
          "id": "3",
          "available": "true",
          "type": "tram"
        }
      }' \
    https://hw728w1340.execute-api.eu-west-1.amazonaws.com/prod/vehicles

```

## Building the image for k8s job

```bash
docker build . -t berry2012/post-request-app:v1
```

## Run the image

```bash
docker run -e ENDPOINT="<API GATEWAY ENDPOINT URL>" --name mycontainer berry2012/post-request-app:v1 

# e.g.
docker run -e ENDPOINT="https://hw728w1340.execute-api.eu-west-1.amazonaws.com/prod/vehicles" --name mycontainer berry2012/post-request-app:v1 

# sample output
Post Request succeeded on: Fri, 23 Feb 2024 14:24:14 GMT. Status Code: 200. Total Phase Timings:  1011. RetryCount:  0
Phases Timings: wait: 4 dns: 47 tcp: 13 tls: 33 request: 1 firstByte: 907 download: 6 total: 1011
```

## Troubleshoot the image

```bash
docker run -e ENDPOINT="https://hw728w1340.execute-api.eu-west-1.amazonaws.com/prod/vehicles" --name mycontainer -d -i -t berry2012/post-request-app:v1 /bin/sh
docker exec -it mycontainer /bin/bash
```

### Get container ID

```bash
docker ps
```

### Print app output

```bash
docker logs mycontainer
```

## Kill our running container

```bash
docker kill mycontainer
docker stop mycontainer && docker rm mycontainer  
```
