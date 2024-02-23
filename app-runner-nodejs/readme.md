# A Sample Architecture with 2 Apps making and receiving POST request

+-------------------------------------------------------+
| K8s Job ----> API Gateway ----> Lambda ----> DynamoDB |
+-------------------------------------------------------+

## About the Applications

## Building the image for k8s job

```bash
docker build . -t berry2012/app-runner-app:v1
```

## Run the image

```bash
docker run -d -p 8080:8080 --name apprunnerapp berry2012/app-runner-app:v1 

```

## Troubleshoot the image

```bash
docker run --name apprunnerapp -d -i -t berry2012/app-runner-app:v1 /bin/sh
docker exec -it apprunnerapp /bin/bash
```

### Print app output

```bash
docker logs apprunnerapp
```

## Kill our running container

```bash
docker kill apprunnerapp
docker stop apprunnerapp && docker rm apprunnerapp  
```
