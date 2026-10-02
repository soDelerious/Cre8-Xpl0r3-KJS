// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')
// const totem =['orevolution:bronze_totem_emerald', 'orevolution:bronze_totem_lapis_lazuli', 'orevolution:bronze_totem_diamond']

// Apply wind charged effect to nearby monsters when player with whirlwind helmet is falling
PlayerEvents.tick(event => {
  let player = event.player;


  // Check if player is falling (fallDistance indicates they've been falling)
  if (!player.onGround()) {
    // Get helmet from armor slots (head slot is index 3)
    let helmet = player.getArmorSlots()[3];
    let chest = player.getArmorSlots()[2];
    let leggings = player.getArmorSlots()[1];
    let boots = player.getArmorSlots()[0];


    // if (helmet && helmet.id === 'caverns_and_chasms:copper_helmet' || chest && chest.id === 'caverns_and_chasms:copper_chestplate' || leggings && leggings.id === 'caverns_and_chasms:copper_leggings' || boots && boots.id === 'caverns_and_chasms:copper_boots') {
    //     player.potionEffects.add('rottencreatures:channelled', 200, 1,false);
    // }
    // Check if helmet is whirlwind helmet
    if (helmet && helmet.id === 'kubejs:whirlwind_helmet') {
      // Get all entities within 20 block radius
      let entities = player.level.getEntitiesWithin(player.getBoundingBox().inflate(15));
      
      entities.forEach(entity => {
        // Only affect mobs that are not the player
        if (entity.isLiving() && entity !== player) {
          // Apply wind_charged effect
          entity.potionEffects.add('minecraft:wind_charged', 100, 3);
        }
      });
    }
  }
});


