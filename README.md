# Corona Vue pro

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


docker build -t corona-vue .
docker run -p 8080:8080 

docker run --rm -e CHOKIDAR_USEPOLLING=true --publish 8080:8080  corona-vue