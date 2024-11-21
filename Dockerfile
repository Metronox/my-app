FROM node:20
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 8104
CMD ["npm", "start"]
