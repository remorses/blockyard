

FROM --platform=linux/amd64 node:18-slim

WORKDIR /app

# install prisma
ARG PRISMA_FILE=./build/schema.prisma
ARG PRISMA_VERSION=5.13.0
RUN apt update && apt install openssl ca-certificates -y \
    && npm i --no-cache -g prisma@$PRISMA_VERSION \
    && npm init -y && npm install --no-cache @prisma/client@$PRISMA_VERSION \
    && rm -rf  ~/.cache/prisma /usr/local/lib/node_modules

COPY $PRISMA_FILE ./schema.prisma
RUN prisma generate --schema ./schema.prisma

RUN echo "{\"type\":\"module\"}" > package.json && npm install --no-cache -g @remix-run/serve

COPY ./build /app/build

CMD ["remix-serve", "./build/server/index.js"]