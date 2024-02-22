## Building the image

```bash
docker build . -t berry2012/poster-app:dev
docker build . -t berry2012/poster-app:got1
```

## Run the image

```bash
docker run -d berry2012/poster-app:dev
```

```bash
docker run -p 49160:4000 -d berry2012/poster-app:dev 
```

## Print the output of your app:

### Get container ID

```bash
docker ps
```

### Print app output

```bash
docker logs <container id>
```

### Example

```bash
Running on http://localhost:4000 
```

## Kill our running container

```bash
docker kill <container id>
```