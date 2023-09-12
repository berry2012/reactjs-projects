# Stage 1
FROM node:18-alpine as react-build

WORKDIR /app

COPY public/ /app/public
COPY src/ /app/src 
COPY package.json /app 
# CMD ["yarn", "start"]

RUN yarn
RUN yarn build



# Stage 2 - the production environment
FROM nginx:alpine

COPY nginx/default.conf /etc/nginx/conf.d/
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 8080

# run container with a user
COPY nginx/nginx.conf /etc/nginx/nginx.conf
RUN touch /var/run/nginx.pid && \
    chown -R 1000:1000 /var/run/nginx.pid && \
    chown -R 1000:1000 /var/cache/nginx  
    
USER 1000

CMD ["nginx", "-g", "daemon off;"]

