

FROM --platform=linux/amd64 node:18-slim

WORKDIR /app

RUN npm init -y && npm install --no-cache -g @remix-run/serve

COPY ./build /app/build

CMD ["remix-serve", "./build/server/index.js"]