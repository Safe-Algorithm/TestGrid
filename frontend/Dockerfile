FROM node:alpine3.18

WORKDIR /app

# COPY public/ /app/public

# COPY src/ app/src

# COPY package*.json /app/
COPY . /app/

RUN npm install

CMD ["npm", "run", "prod"]