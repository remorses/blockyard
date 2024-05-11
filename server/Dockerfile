FROM --platform=linux/amd64 ubuntu:20.04

WORKDIR /app

COPY ./world /app/world
COPY ./target/x86_64-unknown-linux-gnu/release/server /app/server


CMD ["/app/server"]