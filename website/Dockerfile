

FROM --platform=linux/amd64 node:18-slim

WORKDIR /app

RUN echo "{\"type\":\"module\"}" > package.json && npm install --no-cache -g @remix-run/serve

COPY ./build /app/build

CMD ["remix-serve", "./build/server/index.js"]