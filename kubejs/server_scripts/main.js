// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

// Apply wind charged effect to nearby monsters when player with whirlwind helmet is falling
PlayerEvents.tick(event => {
  let player = event.player;
  
  // Check if player is falling (fallDistance indicates they've been falling)
  if (!player.onGround()) {
    // Get helmet from armor slots (head slot is index 3)
    let helmet = player.getArmorSlots()[3];
    
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


