EntityEvents.drops('block_factorys_bosses:yeti', event => {
    

    event.drops.clear()
        let frostCatalyst = event.addDrop('kubejs:frost_catalyst')
        frostCatalyst.setGlowing(true)
})

EntityEvents.drops('block_factorys_bosses:infernal_dragon', event => {
    

    event.drops.clear()
        let frostCatalyst = event.addDrop('block_factorys_bosses:dragon_skull')
        frostCatalyst.setGlowing(true)
})

EntityEvents.drops('block_factorys_bosses:sandworm', event => {
    

    event.drops.clear()
        let sandCatalyst = event.addDrop('kubejs:snad_catalyst')
        sandCatalyst.setGlowing(true)
        // event.removeDrop('block_factorys_bosses:ice_gauntlet')
})
// // Update "powered" state when redstone signal changes on chunk_pulser
BlockEvents.detectorChanged('kubejs:chunk_pulser', event => {
    let powered = event.powered;
    // Set block with powered property
    event.block.set(`kubejs:chunk_pulser[powered=${powered}]`);
});

// BlockEvents.detectorPowered('chunk_pulser', event => {






let commandQueue = [];
let pulserCooldown = {}; // Track cooldown per player

EntityEvents.spawned('whirl_wind:whirl_wind', event => {
    commandQueue.push({
        command: `effect give @e[type=whirl_wind:whirl_wind] minecraft:resistance infinite 2 true`,
        executeAt: event.level.time + 5 
    });
});

BlockEvents.rightClicked('kubejs:chunk_pulser', event => {
    let playerName = event.player.getName().getString();
    let currentTime = event.level.time;
    let lastActivation = pulserCooldown[playerName] || 0;

    let pos = event.block.getPos();
    let x = pos.getX();
    let y = pos.getY()+0.35;
    let z = pos.getZ();

    // Only allow activation if more than 5 ticks have passed since last activation
    if (currentTime - lastActivation < 5) {
        // event.player.tell("please wait at least 1 minute before activating another pulser.");
        return;
    }
    
    // Check if player is holding amethyst shard in mainhand
    let mainHandItem = event.player.mainHandItem;

    
    
    let blockString = event.block.toString();
    let isPowered = blockString.includes('powered=true')
    if (isPowered) {



    if (!mainHandItem || mainHandItem.id !== 'minecraft:amethyst_shard') {
        return;
    }

        commandQueue.push({
            command: "particle create:wifi "+x+" "+y+" "+z,
            executeAt: event.level.time + 5 
        });
        commandQueue.push({
            command: "clear "+playerName+" minecraft:amethyst_shard 1",
            executeAt: event.level.time + 5 
        });
        commandQueue.push({
            command: "say Attempting Chunk Loading...",
            executeAt: event.level.time + 5 
        });
        commandQueue.push({
            command: "execute as " + playerName + " at " + playerName + " run chunky center",
            executeAt: event.level.time + 5 
        });
        commandQueue.push({
            command: "execute as " + playerName + " at " + playerName + " run chunky radius 50c",
            executeAt: event.level.time + 5 
        });
        commandQueue.push({
            command: "chunky continue",
            executeAt: event.level.time + 5 
        });
        commandQueue.push({
            command: "execute as " + playerName + " at " + playerName + " run chunky start",
            executeAt: event.level.time + 5 
        });
    }
        pulserCooldown[playerName] = currentTime;

});




EntityEvents.drops('endermanoverhaul:end_islands_enderman', event => {
    

    event.drops.clear()
    let chance = Math.random()
        if (chance >0.5){
            event.addDrop('minecraft:dragon_breath')
        }
})


EntityEvents.drops('rottencreatures:immortal', event => {
    


let chance = Math.random()
if (chance <0.5){
event.addDrop('minecraft:trident[enchantments={levels:{"minecraft:channeling":1}},custom_name=Immortallis]') 
// event.drops.clear();
}


        // event.removeDrop('block_factorys_bosses:ice_gauntlet')
})
EntityEvents.drops('naturalist:snail', event => {
    

        event.drops.clear()

        let chance = Math.random()
        if (chance <0.25){
            event.addDrop('minecraft:lime_dye')
        }
        if (chance >0.9){
            event.addDrop('naturalist:snail_shell')
        }   
        
        // event.removeDrop('block_factorys_bosses:ice_gauntlet')
})


const Beasts = [
'luminous_beasts:arid_yeti',
'luminous_beasts:baby_phoenix',
'luminous_beasts:baby_wind_phoenix',
'luminous_beasts:bogged_bone_stalker',
'luminous_beasts:bogged_shadow',
'luminous_beasts:bone_stalker',
'luminous_beasts:coral_sea_viper',
'luminous_beasts:frigid_gator',
'luminous_beasts:golden_hermit_king',
'luminous_beasts:hermit_king',
'luminous_beasts:horseless_headsman',
'luminous_beasts:mummy',
'luminous_beasts:phoenix',
'luminous_beasts:red_mummy',
'luminous_beasts:sand_crab',
'luminous_beasts:scarecrow_minion',
'luminous_beasts:sea_viper',
'luminous_beasts:shadow',
'luminous_beasts:soul_furnace',
'luminous_beasts:the_furnace',
'luminous_beasts:the_scarecrow',
'luminous_beasts:tree_ent',
'luminous_beasts:vile_gator',
'luminous_beasts:wind_phoenix',
'luminous_beasts:witch_doctor',
'luminous_beasts:woodland_witch_doctor',
'luminous_beasts:yeti'
]

const trophy = [
'luminous_beasts:rare_yeti_trophy',
'luminous_beasts:rare_witch_doctor_trophy',
 'luminous_beasts:furnace_trophy',
  'luminous_beasts:witch_doctor_trophy',
   'luminous_beasts:bone_stalker_trophy',
    'luminous_beasts:phoenix_trophy',
     'luminous_beasts:vile_gator_trophy',
       'luminous_beasts:mummy_trophy',
        'luminous_beasts:hermit_king_trophy',
         'luminous_beasts:viper_trophy',
          'luminous_beasts:rare_bone_stalker_trophy',
           'luminous_beasts:rare_phoenix_trophy',
            'luminous_beasts:rare_vile_gator_trophy',
              'luminous_beasts:rare_viper_trophy',
               'luminous_beasts:rare_mummy_trophy',
                'luminous_beasts:rare_hermit_king_trophy',
                 'luminous_beasts:horseless_headsman_trophy',
                  'luminous_beasts:scarecrow_trophy',
                   'luminous_beasts:rare_executioner_trophy',
                    'luminous_beasts:rare_spitter_trophy',
     'luminous_beasts:soul_furnace_trophy',
'luminous_beasts:yeti_trophy'
]

const trinkets = ['luminous_beasts:pumpkin_helmet_helmet', 'luminous_beasts:mummy_wraps_helmet', 'luminous_beasts:molten_coal', 'luminous_beasts:jungle_pendant', 'luminous_beasts:bone_rattle', 'luminous_beasts:phoenix_feather', 'luminous_beasts:gator_tooth', 'luminous_beasts:yeti_horn', 'luminous_beasts:viper_tooth', 'luminous_beasts:shellmet_helmet']
// LootJS.modifiers(event => {
//   // Target the specific array of entities
//   event.addEntityModifier(Beasts)
//     // Replace 'minecraft:bone' with the item ID you want to remove
//     .removeLoot(trophy) 
// })
const disks = ['luminous_beasts:hermit_king_disc', 'luminous_beasts:mummy_disc', 'luminous_beasts:sea_viper_disc', 'luminous_beasts:yeti_disc', 'luminous_beasts:vile_gator_disc', 'luminous_beasts:phoenix_disc', 'luminous_beasts:bone_stalker_disc', 'luminous_beasts:furnace_disc', 'luminous_beasts:headsman_disc']



EntityEvents.drops('minecraft:ravager', event => {
    

        event.drops.clear()

        let chance = Math.random()
        if (chance <0.15){
            event.addDrop('takesapillage:ravager_horn')
        }

        
        // event.removeDrop('block_factorys_bosses:ice_gauntlet')
})



EntityEvents.drops('luminous_beasts:hermit_king', event => {
            event.drops.clear()

    let chance = Math.random()
    if (chance < 0.4) {
        event.addDrop('luminous_beasts:shellmet_helmet')
    }
    if (chance > 0.9) {
        event.addDrop('luminous_beasts:hermit_king_disc')
    }
})

EntityEvents.drops('luminous_beasts:golden_hermit_king', event => {
            event.drops.clear()

    let chance = Math.random()
    if (chance < 0.6) {
        event.addDrop('luminous_beasts:shellmet_helmet')
    }
    if (chance > 0.4) {
        event.addDrop('luminous_beasts:hermit_king_disc')
    }
})

EntityEvents.drops('friendsandfoes:crab', event => {
    

    event.drops.clear()

        let chance = Math.random()
        if (chance > 0.5) {
            let sandCatalyst = event.addDrop('friendsandfoes:crab_claw')
        }
      
        // sandCatalyst = event.addDrop('kubejs:snad_catalyst')
        // event.removeDrop('block_factorys_bosses:ice_gauntlet')
})

EntityEvents.drops('block_factorys_bosses:underworld_knight', event => {
    

    event.drops.clear()
        let withercar = event.addDrop('kubejs:wither_knight_catalyst')
        withercar.setGlowing(true)
        // event.removeDrop('block_factorys_bosses:ice_gauntlet')
})

EntityEvents.drops('luminous_beasts:yeti', event => {
            event.drops.clear()

    let chance = Math.random()
    if (chance < 0.4) {
        event.addDrop('luminous_beasts:yeti_horn')
    }
    if (chance > 0.9) {
        event.addDrop('luminous_beasts:yeti_disc')
    }
})

EntityEvents.drops('luminous_beasts:arid_yeti', event => {
            event.drops.clear()

    let chance = Math.random()
    if (chance < 0.6) {
        event.addDrop('luminous_beasts:yeti_horn')
    }
    if (chance > 0.4) {
        event.addDrop('luminous_beasts:yeti_disc')
    }
})

EntityEvents.drops('luminous_beasts:mummy', event => {
            event.drops.clear()

    let chance = Math.random()
    if (chance < 0.4) {
        event.addDrop('luminous_beasts:mummy_wraps_helmet')
    }
    if (chance > 0.9) {
        event.addDrop('luminous_beasts:mummy_disc')
    }
})

EntityEvents.drops('luminous_beasts:red_mummy', event => {
            event.drops.clear()

    let chance = Math.random()
    if (chance < 0.6) {
        event.addDrop('luminous_beasts:mummy_wraps_helmet')
    }
    if (chance > 0.4) {
        event.addDrop('luminous_beasts:mummy_disc')
    }
})

EntityEvents.drops('luminous_beasts:the_furnace', event => {
            event.drops.clear()

    let chance = Math.random()
    if (chance < 0.4) {
        event.addDrop('luminous_beasts:molten_coal')
    }
    if (chance > 0.9) {
        event.addDrop('luminous_beasts:furnace_disc')
    }
})

EntityEvents.drops('luminous_beasts:soul_furnace', event => {
            event.drops.clear()

    let chance = Math.random()
    if (chance < 0.6) {
        event.addDrop('luminous_beasts:molten_coal')
    }
    if (chance > 0.4) {
        event.addDrop('luminous_beasts:furnace_disc')
    }
})

EntityEvents.drops('luminous_beasts:sea_viper', event => {
            event.drops.clear()

    let chance = Math.random()
    if (chance < 0.4) {
        event.addDrop('luminous_beasts:viper_tooth')
    }
    if (chance > 0.9) {
        event.addDrop('luminous_beasts:sea_viper_disc')
    }
})

EntityEvents.drops('luminous_beasts:coral_sea_viper', event => {
            event.drops.clear()

    let chance = Math.random()
    if (chance < 0.6) {
        event.addDrop('luminous_beasts:viper_tooth')
    }
    if (chance > 0.4) {
        event.addDrop('luminous_beasts:sea_viper_disc')
    }
})

EntityEvents.drops('luminous_beasts:baby_phoenix', event => {
            event.drops.clear()

    let chance = Math.random()
    if (chance < 0.4) {
        event.addDrop('luminous_beasts:phoenix_feather')
    }
    if (chance > 0.9) {
        event.addDrop('luminous_beasts:phoenix_disc')
    }
})

EntityEvents.drops('luminous_beasts:baby_wind_phoenix', event => {
            event.drops.clear()

    let chance = Math.random()
    if (chance < 0.6) {
        event.addDrop('luminous_beasts:phoenix_feather')
    }
    if (chance > 0.4) {
        event.addDrop('luminous_beasts:phoenix_disc')
    }
})

EntityEvents.drops('luminous_beasts:witch_doctor', event => {
            event.drops.clear()

    let chance = Math.random()
    if (chance < 0.4) {
        event.addDrop('luminous_beasts:jungle_pendant')
    }
    if (chance > 0.9) {
        event.addDrop('luminous_beasts:firebugs_disc')
    }
})
EntityEvents.drops('luminous_beasts:woodland_witch_doctor', event => {
            event.drops.clear()

    let chance = Math.random()
    if (chance < 0.6) {
        event.addDrop('luminous_beasts:jungle_pendant')
    }
    if (chance > 0.4) {
        event.addDrop('luminous_beasts:firebugs_disc')
    }
})

EntityEvents.drops('luminous_beasts:bone_stalker', event => {
            event.drops.clear()

    let chance = Math.random()
    if (chance < 0.4) {
        event.addDrop('luminous_beasts:bone_rattle')
    }
    if (chance > 0.9) {
        event.addDrop('luminous_beasts:bone_stalker_disc')
    }
})

EntityEvents.drops('luminous_beasts:bogged_bone_stalker', event => {
            event.drops.clear()

    let chance = Math.random()
    if (chance < 0.6) {
        event.addDrop('luminous_beasts:bone_rattle')
    }
    if (chance > 0.4) {
        event.addDrop('luminous_beasts:bone_stalker_disc')
    }
})

EntityEvents.drops('luminous_beasts:luminous_moth', event => {
            event.drops.clear()

    let chance = Math.random()
    if (chance < 0.4) {
        event.addDrop('luminous_beasts:luminous_antennae')
    }
    if (chance > 0.9) {
        event.addDrop('luminous_beasts:luminous_moth_disc')
    }
})


EntityEvents.drops('whirl_wind:whirl_wind', event => {
            event.drops.clear()

    let chance = Math.random()
            event.addDrop('3x kubejs:whirlwind_helmet_fragment')

    if (chance > 0.65) {
            event.addDrop('2x kubejs:whirlwind_helmet_fragment')
    }
    if (chance < 0.35) {
            event.addDrop('kubejs:whirlwind_helmet_fragment')
    }
})


EntityEvents.spawned('whirl_wind:whirl_wind', event => {
    commandQueue.push({
        command: `effect give @e[type=whirl_wind:whirl_wind] minecraft:resistance infinite 2 true`,
        executeAt: event.level.time + 5 
    });
});

ServerEvents.tick(event => {
    if (commandQueue.length === 0) return;

    let currentTime = event.server.overworld().time;

    commandQueue = commandQueue.filter(task => {
        if (currentTime >= task.executeAt) {
            event.server.runCommandSilent(task.command);
            return false; 
        }
        return true; 
    });
});


EntityEvents.drops('luminous_beasts:albino_moth', event => {
            event.cancel()


    let chance = Math.random()
    if (chance < 0.6) {
        event.addDrop('luminous_beasts:luminous_antennae')
    }
    if (chance > 0.4) {
        event.addDrop('luminous_beasts:luminous_moth_disc')
    }
})
EntityEvents.drops('luminous_beasts:horseless_headsman', event => {
            event.drops.clear()

    let chance = Math.random()
    if (chance < 0.4) {
        event.addDrop('luminous_beasts:pumpkin_helmet_helmet')
    }
    if (chance > 0.9) {
        event.addDrop('luminous_beasts:headsman_disc')
    }
})
EntityEvents.drops('luminous_beasts:the_scarecrow', event => {
            event.drops.clear()

    let chance = Math.random()
    if (chance < 0.6) {
        event.addDrop('luminous_beasts:pumpkin_helmet_helmet')
    }
    if (chance > 0.4) {
        event.addDrop('luminous_beasts:headsman_disc')
    }
})

EntityEvents.drops('luminous_beasts:vile_gator', event => {
            event.drops.clear()

    let chance = Math.random()
    if (chance < 0.4) {
        event.addDrop('luminous_beasts:gator_tooth')
    }
    if (chance > 0.9) {
        event.addDrop('luminous_beasts:vile_gator_disc')
    }
})

EntityEvents.drops('luminous_beasts:frigid_gator', event => {
            event.drops.clear()

    let chance = Math.random()
    if (chance < 0.6) {
        event.addDrop('luminous_beasts:gator_tooth')
    }
    if (chance > 0.4) {
        event.addDrop('luminous_beasts:vile_gator_disc')
    }
})

const platinum = [ 'createpropulsion:coral_generator',
     'createpropulsion:cable',
      'createpropulsion:coral_bucket']
RecipeViewerEvents.addEntries('item', event => {
	event.add('minecraft:bundle')

    // event.remove(platinum)
    // platinum.forEach((plat, index) => {
    //     event.remove(plat)
    // });
})

RecipeViewerEvents.removeEntriesCompletely('item', event => {
    event.remove('kubejs:incomplete_totem')

    event.remove(platinum)
    platinum.forEach((plat, index) => {
        event.remove(plat)
    });
})
CreateHeatJS.registerHeatEvent(event => {

    event.registerHeat("DRACONIC", builder => builder
            .color(0xFA512D)
            .addHeatSource('block_factorys_bosses:dragon_skull') //Block
            .satisfies("HEATED")
    )

    event.registerHeat("WITHERED", builder => builder
            .color(0x2C6862)
            .addHeatSource('kubejs:wither_knight_catalyst') //Block
            .satisfies("SUPERHEATED")
    )

    // addHeatSource('block_factorys_bosses:dragon_skull', "HEATED")
})

ItemEvents.foodEaten(event => {
    // Check if the eaten item matches the prickly peach id
    if (event.item.id === 'yungscavebiomes:prickly_peach') {
        const player = event.player;
        
        // Give the player the Leaping (Jump Boost) effect
        // Parameters: 'minecraft:effect_id', duration_in_ticks, amplifier (0 = level 1), ambient, visible
        player.potionEffects.add('minecraft:jump_boost', 100, 1, false, true);
    }
});

PlayerEvents.loggedIn(event => {
    // Check if the player has already received the book
    if (!event.player.stages.has('starting_items')) {
        // Add the stage so they don't get it every time they log in
        event.player.stages.add('starting_items')
        
        // Give the FTB Quest Book
        event.player.give('ftbquests:book')
        
        // Optional: Send a nice welcome message to the chat
        event.player.tell('Access the Cog-PDA for quests and rewards!')
    }
})


// EntityEvents.drops('block_factorys_bosses:yeti', event => {
    
//     // event.cancel() is used to completely prevent the default loot table 
//     // from being processed.
//     // Result: When a Zombie is killed, it will drop absolutely nothing 
//     // (no Rotten Flesh, no occasional Carrot/Potato, etc.).
//         event.cancel()
//         // event.removeDrop('block_factorys_bosses:ice_gauntlet')
// })