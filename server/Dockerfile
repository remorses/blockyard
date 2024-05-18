FROM --platform=linux/amd64 rust:1.78 as build



ENV CARGO_TERM_COLOR=always

RUN rustup component add rustfmt 
RUN set -x \
	&& apt-get update \
	&& apt-get install --yes \
		gcc g++ clang pkg-config bash-completion wget curl \
		python3-pip python3-yaml pkg-config zlib1g-dev \
		libgss-dev libssl-dev libxml2-dev protobuf-compiler


RUN cargo new --lib /app/server
RUN cargo new --lib /app/voxelize && mkdir -p /app/voxelize/server && touch /app/voxelize/server/lib.rs

COPY ./server/Cargo.toml ./server/Cargo.lock /app/server/
COPY ./voxelize/Cargo.toml ./server/Cargo.lock /app/voxelize/

WORKDIR /app/server
RUN cargo build --release

COPY ./server/ /app/server/
COPY ./voxelize/ /app/voxelize/

RUN cargo build --release

FROM --platform=linux/amd64 ubuntu:20.04

WORKDIR /app


COPY --from=build /app/server/target/release/server /app/server


CMD ["/app/server"]