FROM node:alpine as builder 

WORKDIR '/app'

COPY package*.json /app/

RUN npm install

COPY . .


RUN npm run build

#CMD ["npm", "install"]

#Prepare nginx
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html

#EXPOSE 80

#CMD ["nginx", "-g","daemon off;"]
