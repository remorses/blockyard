use serde::{Deserialize, Serialize};
use voxelize::{
    Block, Event, FlatlandStage, Info, Registry, Server, Voxelize, World, WorldConfig, WsSession,
};
mod worlds;

use worlds::terrain::setup_terrain_world;
mod registry;
use registry::setup_registry;

use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};

use actix::{Actor, Addr, Handler, Message, MessageResponse};
use actix_cors::Cors;
use actix_files::{Files, NamedFile};
use actix_web::{web::Query, Error, HttpRequest, Result};
use actix_web_actors::ws;
use hashbrown::HashMap;
use log::{info, warn};

struct Config {
    serve: String,
}

/// Entry point for our websocket route
async fn ws_route(
    req: HttpRequest,
    stream: web::Payload,
    srv: web::Data<Addr<Server>>,
    secret: web::Data<Option<String>>,
    options: Query<HashMap<String, String>>,
) -> Result<HttpResponse, Error> {
    if !secret.is_none() {
        let error = std::io::Error::new(std::io::ErrorKind::PermissionDenied, "wrong secret!");

        if let Some(client_secret) = options.get("secret") {
            if *client_secret != secret.as_deref().unwrap() {
                warn!(
                    "An attempt to join with a wrong secret was made: {}",
                    client_secret
                );
                return Err(error.into());
            }
        } else {
            warn!("An attempt to join with no secret key was made.");
            return Err(error.into());
        }
    }

    let id = if let Some(id) = options.get("client_id") {
        id.to_owned()
    } else {
        "".to_owned()
    };

    let is_transport = options.contains_key("is_transport");

    if is_transport {
        info!("A new transport server has connected.");
    }

    ws::start(
        WsSession {
            id,
            name: None,
            is_transport,
            addr: srv.get_ref().clone(),
        },
        &req,
        stream,
    )
}

/// Main website path, serving statically built index.html
async fn index(path: web::Data<Config>) -> Result<NamedFile> {
    let path = path.serve.to_owned();
    Ok(NamedFile::open(if path.ends_with("/") {
        path + "index.html"
    } else {
        path + "/index.html"
    })?)
}

async fn info(server: web::Data<Addr<Server>>) -> Result<HttpResponse> {
    let info = server.send(Info).await.unwrap();
    Ok(HttpResponse::Ok().json(info))
}

/// Send message to specific world
#[derive(Message, Deserialize, Serialize, Debug, Clone)]
#[rtype(result = "InstantiateResponse")]
pub struct Instantiate {
    /// Id of the client session
    pub world_id: String,
}
#[derive(MessageResponse, Serialize, Deserialize, Debug, Clone)]
pub struct InstantiateResponse {
    success: bool,
    world_id: String,
}

impl Handler<Instantiate> for Server {
    type Result = InstantiateResponse;

    fn handle(&mut self, msg: Instantiate, _ctx: &mut Self::Context) -> Self::Result {
        let res = self
            .create_world(&msg.world_id, &WorldConfig::default())
            .expect("cannot create world");
        let world_id = res.id.clone();
        return InstantiateResponse {
            success: true,
            world_id,
        };
    }
}

async fn instantiate(
    voxelize_server: web::Data<Addr<Server>>,
    payload: web::Json<Instantiate>,
) -> impl Responder {
    println!("Received instantiate request: {:?}", payload.clone());
    // send response back with same world_id

    let response = voxelize_server
        .send(payload.into_inner())
        .await
        .expect("Failed to create world");

    // Return the InstantiateResponse
    HttpResponse::Ok().json(response)
}

pub struct MyApp;

impl MyApp {
    /// Run a voxelize server instance. This blocks the main thread, as the game loop is essentially a while loop
    /// running indefinitely. Keep in mind that the server instance passed in isn't a borrow, so `Voxelize::run`
    /// takes ownership of the server.
    pub async fn run(mut voxel_server: Server) -> std::io::Result<()> {
        voxel_server.prepare();
        voxel_server.started = true;

        let addr = voxel_server.addr.to_owned();
        let port = voxel_server.port.to_owned();
        let serve = voxel_server.serve.to_owned();
        let secret = voxel_server.secret.to_owned();

        let server_addr = voxel_server.start();

        if serve.is_empty() {
            info!("Attempting to serve static folder: {}", serve);
        }

        let srv = HttpServer::new(move || {
            let serve = serve.to_owned();
            let secret = secret.to_owned();
            let cors = Cors::permissive();

            let app = App::new()
                .wrap(cors)
                .app_data(web::Data::new(secret))
                .app_data(web::Data::new(server_addr.clone()))
                .app_data(web::Data::new(Config {
                    serve: serve.to_owned(),
                }))
                .route("/", web::get().to(index))
                .route("/ws/", web::get().to(ws_route))
                .route("/instantiate", web::post().to(instantiate))
                .route("/info", web::get().to(info));

            if serve.is_empty() {
                app
            } else {
                app.service(Files::new("/", serve).show_files_listing())
            }
        })
        .bind((addr.to_owned(), port.to_owned()))?;

        info!("🍄  Voxelize backend running on http://{}:{}", addr, port);

        srv.run().await
    }
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let dirt = Block::new("Dirt").id(1).build();
    let stone = Block::new("Stone").id(2).build();
    let grass_block = Block::new("Grass Block").id(3).build();

    let config = WorldConfig::new().build();

    let mut world = World::new("tutorial", &config);

    {
        let mut pipeline = world.pipeline_mut();
        pipeline.add_stage(
            FlatlandStage::new()
                .add_soiling(stone.id, 10)
                .add_soiling(dirt.id, 2)
                .add_soiling(grass_block.id, 1),
        )
    }

    let registry = setup_registry();

    let mut server = Server::new().port(4000).registry(&registry).build();

    server
        .add_world(setup_terrain_world())
        .expect("Failed to add world to server");

    server.set_action_handle("test", |event, _server| {
        println!("Received event: {:?}", event);
    });
    MyApp::run(server).await
}
