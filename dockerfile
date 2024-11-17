FROM node:alpine
# RUN apk add --update tini
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm","run", "start"]