FROM node:14

WORKDIR /app

COPY ./index.html .

EXPOSE 8104

RUN npm install -g http-server

CMD ["http-server", "."]
