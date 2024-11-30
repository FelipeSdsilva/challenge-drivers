FROM node:18-alpine

WORKDIR /app

COPY package.json .

COPY prisma ./prisma

RUN npm install

RUN npm i -g serve

RUN npx prisma generate

COPY . .

COPY .env .env

EXPOSE 8080

CMD ["sh", "-c", "npx prisma migrate deploy && npx prisma db seed && npm start"]
