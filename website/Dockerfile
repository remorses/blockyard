

FROM --platform=linux/amd64 node:18-slim

WORKDIR /app

RUN echo "{\"type\":\"module\"}" > package.json

ARG PRISMA_FILE=./build/schema.prisma
ARG PRISMA_VERSION=5.13.0

COPY $PRISMA_FILE ./schema.prisma

# install and generate prisma client
RUN apt update && apt install openssl ca-certificates -y \
    && npm install @prisma/client@$PRISMA_VERSION \
    && npx --yes prisma@$PRISMA_VERSION generate \
    && rm -rf ~/root/.npm/_npx \
    && rm -rf ~/root/.npm/_cacache \
    && rm -rf ~/root/.cache

RUN npm install -g @remix-run/serve

COPY ./build /app/build

env PORT=3467

EXPOSE $PORT

CMD ["remix-serve", "./build/server/index.js"]