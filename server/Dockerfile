FROM --platform=linux/amd64 rust:1.78 as build


WORKDIR /app/server

COPY ./server /app/server
COPY ../voxelize /app/voxelize

RUN cargo build --release && ls target

FROM --platform=linux/amd64 ubuntu:20.04

WORKDIR /app


COPY --from=build /app/server/target/release/server /app/server


CMD ["/app/server"]