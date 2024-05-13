use voxelize::{Block, Event, FlatlandStage, Registry, Server, Voxelize, World, WorldConfig};
mod worlds;

use worlds::terrain::{setup_terrain_world};
mod registry;
use registry::setup_registry;

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

    Voxelize::run(server).await
}
