FROM --platform=linux/amd64 ubuntu:20.04

WORKDIR /app

COPY ./world /app/world
COPY ./target ./target

CMD ["./target/release/server"]