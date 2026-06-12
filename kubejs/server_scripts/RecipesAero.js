



ServerEvents.recipes(event => {
// PRECISION ASSEMBELY**************************************************
// event.custom({
//   "type": "create:sequenced_assembly",
//   "ingredient": { "tag": "c:plates/gold" },
//   "transitional_item": { "id": "create:incomplete_precision_mechanism" },
//   "results": [
//     { "id": "create:precision_mechanism", "chance": 120.0 },
//     { "id": "create:golden_sheet", "chance": 8.0 },
//     { "id": "create:andesite_alloy", "chance": 8.0 },
//     { "id": "create:cogwheel", "chance": 5.0 },
//     { "id": "minecraft:gold_nugget", "chance": 3.0 },
//     { "id": "create:shaft", "chance": 2.0 },
//     { "id": "create:crushed_raw_gold", "chance": 2.0 },
//     { "id": "minecraft:iron_ingot" },
//     { "id": "minecraft:clock" }
//   ],
//   "sequence": [
//     {
//       "type": "create:pressing",
//       "ingredients": [
//         {
//           "item": "create:golden_sheet"
//         }
//       ],
//       "results": [
//         {
//           "id": "create:incomplete_precision_mechanism"
//         }
//       ]
//     },
//     {
//       "type": "get_creative:arm_assembly",
//       "ingredients": [
//         { "item": "create:incomplete_precision_mechanism" }
//       ],
//       "results": [ { "id": "create:incomplete_precision_mechanism" } ]
//     }
//   ]
// })


  // MANUAL APPLICATION**************************************************

  
// event.custom({
//   "type": "create:item_application",
//   "ingredients": [
//     {
//       "item": "simulated:torsion_spring"
//     },
//     {
//       "item": "create:brass_casing"
//     }
//   ],
//   "results": [
//     {
//       "item": "get_creative:clockwork_motor"
//     }
//   ]
// })

event.custom({
  "type": "create:item_application",
  "ingredients": [
    {
      "item": "simulated:torsion_spring"
    },
    {
      "tag": "c:ingots/brass"
    }
  ],
  "results": [
    {
      "id": "get_creative:clockwork_motor"
    }
  ]
})
event.remove('get_creative:clockwork_motor')

// SEQUENCED **************************************************
const transitionalBE = 'minecraft:reinforced_deepslate' // Making a constant to store the transitional item makes the code more readable
  event.recipes.create.sequenced_assembly(
      // Outputs:
      [
        CreateItem.of('luminous_beasts:beast_pit_off', 0.06), // Main output, will appear in JEI as the result
        CreateItem.of('minecraft:polished_deepslate', 0.02),
        CreateItem.of('minecraft:deepslate', 0.01),
        CreateItem.of('minecraft:cobbled_deepslate', 0.01),
        CreateItem.of('minecraft:smooth_basalt', 0.01)

      ],
      // Input:
      'minecraft:reinforced_deepslate',
      // Sequence:
      [
        // The transitional item is a constant, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly.
        // Like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item.
        // event.recipes.create.pressing(transitionalRE, transitionalRE),
        event.recipes.create.cutting(transitionalBE, transitionalBE),
        event.recipes.create.deploying(transitionalBE, [transitionalBE, 'blazinghot:soul_dust']),
        event.recipes.create.pressing(transitionalBE, transitionalBE),
        event.recipes.create.pressing(transitionalBE, transitionalBE),
        event.recipes.create.deploying(transitionalBE, [transitionalBE, 'blazinghot:soul_dust'])



      ]
    )
    .transitionalItem(transitionalBE).loops(3) // Set the transitional item
event.remove('luminous_beasts:beast_pit_recipe')


const transitionalRE = 'minecraft:cracked_deepslate_tiles' // Making a constant to store the transitional item makes the code more readable
  event.recipes.create.sequenced_assembly(
      // Outputs:
      [
        CreateItem.of('minecraft:reinforced_deepslate', 0.06), // Main output, will appear in JEI as the result
        CreateItem.of('minecraft:polished_deepslate', 0.02),
        CreateItem.of('minecraft:deepslate', 0.01),
        CreateItem.of('minecraft:cobbled_deepslate', 0.01),
        CreateItem.of('minecraft:smooth_basalt', 0.01)

      ],
      // Input:
      'minecraft:polished_deepslate',
      // Sequence:
      [
        // The transitional item is a constant, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly.
        // Like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item.
        // event.recipes.create.pressing(transitionalRE, transitionalRE),
        event.recipes.create.deploying(transitionalRE, [transitionalRE, 'create:brass_sheet']),
        event.recipes.create.pressing(transitionalRE, transitionalRE),
        event.recipes.create.deploying(transitionalRE, [transitionalRE, 'powergrid:zinc_sheet']),
        event.recipes.create.pressing(transitionalRE, transitionalRE),
        event.recipes.create.deploying(transitionalRE, [transitionalRE, 'minecraft:sculk_catalyst'])


      ]
    )
    .transitionalItem(transitionalRE) // Set the transitional item


const transitionalCOP = 'create_sa:incomplete_hydraulic_engine' // Making a constant to store the transitional item makes the code more readable
  event.recipes.create.sequenced_assembly(
      // Outputs:
      [
        CreateItem.of('kubejs:copper_map', 0.16), // Main output, will appear in JEI as the result
        CreateItem.of('ftbquests:book', 0.02),
        CreateItem.of('create:copper_nugget', 0.01),
        CreateItem.of('minecraft:copper_ingot', 0.01),
        CreateItem.of('create:copper_sheet', 0.01),
        CreateItem.of('create:polished_rose_quartz', 0.01),
        CreateItem.of('minecraft:compass', 0.01),
        CreateItem.of('create_sa:heat_engine', 0.01)
      ],
      // Input:
      'create:transmitter',
      // Sequence:
      [
        // The transitional item is a constant, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly.
        // Like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item.
        event.recipes.create.deploying(transitionalCOP, [transitionalCOP, Ingredient.of('#powergrid:circuit_component')]),
        event.recipes.create.filling(transitionalCOP, [transitionalCOP, Fluid.of('create_enchantment_industry:experience', 150)]),
        // event.recipes.create.pressing(transitionalCOP, transitionalCOP),
        event.recipes.create.deploying(transitionalCOP, [transitionalCOP, 'ftbquests:book']),
        // event.recipes.create.pressing(transitionalCOP, transitionalCOP),
        event.recipes.create.deploying(transitionalCOP, [transitionalCOP, 'create_sa:hydraulic_engine']),
        event.recipes.create.pressing(transitionalCOP, transitionalCOP),
        event.recipes.create.deploying(transitionalCOP, [transitionalCOP, 'powergrid:copper_coil'])


      ]
    )
    .transitionalItem(transitionalCOP) // Set the transitional item





const transitionalToT = 'kubejs:incomplete_totem' // Making a constant to store the transitional item makes the code more readable
  event.recipes.create.sequenced_assembly(
      // Outputs:
      [
        CreateItem.of('minecraft:totem_of_undying', 0.10), // Main output, will appear in JEI as the result
        CreateItem.of('create:golden_sheet', 0.02),
        CreateItem.of('minecraft:gold_nugget', 0.01),
        CreateItem.of('minecraft:emerald', 0.01),
        CreateItem.of('minecraft:gold_ingot', 0.01),
        CreateItem.of('minecraft:lime_dye', 0.01)
      ],
      // Input:
      'minecraft:golden_apple',
      // Sequence:
      [
        // The transitional item is a constant, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly.
        // Like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item.
        event.recipes.create.deploying(transitionalToT, [transitionalToT, 'create:golden_sheet']),
        event.recipes.create.filling(transitionalToT, [transitionalToT, Fluid.of('create_enchantment_industry:experience', 250)]),
        event.recipes.create.deploying(transitionalToT, [transitionalToT, 'minecraft:emerald']),

        // event.recipes.create.pressing(transitionalToT, transitionalToT),
        event.recipes.create.filling(transitionalToT, [transitionalToT, Fluid.of('blazinghot:molten_gold', 150)])]
    )
    .transitionalItem(transitionalToT).loops(2) // Set the transitional item

  const transitional = 'create:incomplete_precision_mechanism' // Making a constant to store the transitional item makes the code more readable
  event.recipes.create.sequenced_assembly(
      // Outputs:
      [
        CreateItem.of('naturescompass:naturescompass', 0.16), // Main output, will appear in JEI as the result
        CreateItem.of('ftbquests:book', 0.02),
        CreateItem.of('create:brass_nugget', 0.01),
        CreateItem.of('minecraft:gold_ingot', 0.01),
        CreateItem.of('create:brass_sheet', 0.01),
        CreateItem.of('minecraft:gold_nugget', 0.01),
        CreateItem.of('piglinproliferation:travelers_compass', 0.01),
        CreateItem.of('create_sa:heat_engine', 0.01)
      ],
      // Input:
      'piglinproliferation:travelers_compass',
      // Sequence:
      [
        // The transitional item is a constant, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly.
        // Like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item.
        event.recipes.create.deploying(transitional, [transitional, 'ftbquests:book']),
        event.recipes.create.deploying(transitional, [transitional, 'simulated:gyroscopic_mechanism']),
        event.recipes.create.filling(transitional, [transitional, Fluid.of('blazinghot:molten_blaze_gold', 500)]),
        // event.recipes.create.pressing(transitional, transitional),
        event.recipes.create.deploying(transitional, [transitional, Ingredient.of('#powergrid:circuit_component')]),
        // event.recipes.create.pressing(transitional, transitional),
        event.recipes.create.deploying(transitional, [transitional, 'create_sa:steam_engine']),
        event.recipes.create.deploying(transitional, [transitional, 'create:brass_sheet'])


      ]
    )
    .transitionalItem(transitional) // Set the transitional item

    event.remove('naturescompass:natures_compass')
    event.remove('naturescompass:repair_natures_compass')


  event.recipes.create.sequenced_assembly(
      // Outputs:
      [
        CreateItem.of('aeronautics_utility_objects:universal_joint_rod', 1), // Main output, will appear in JEI as the result

      ],
      // Input:
      'create:shaft',
      // Sequence:
      [
        // The transitional item is a constant, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly.
        // Like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item.
        event.recipes.create.pressing(transitional, transitional),
        event.recipes.create.deploying(transitional, [transitional, 'create:brass_sheet']),
        event.recipes.create.deploying(transitional, [transitional, 'simulated:spring']),
        event.recipes.create.filling(transitional, [transitional, Fluid.of('blazinghot:molten_brass', 500)]),



      ]
    )
    .transitionalItem(transitional) // Set the transitional item
    event.remove('aeronautics_utility_objects:universal_joint_rod')
const transH = 'create_sa:incomplete_heat_engine'
  event.recipes.create.sequenced_assembly(
      // Outputs:
      [
        CreateItem.of('aeronautics_utility_objects:universal_joint_rod2', 1), // Main output, will appear in JEI as the result

      ],
      // Input:
      'create:shaft',
      // Sequence:
      [
        // The transitional item is a constant, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly.
        // Like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item.
        event.recipes.create.pressing(transH, transH),
        event.recipes.create.deploying(transH, [transH, 'create:andesite_alloy']),
        event.recipes.create.deploying(transH, [transH, 'simulated:spring']),
        event.recipes.create.filling(transH, [transH, Fluid.of('blazinghot:molten_andesite', 500)]),


      ]
    )
    .transitionalItem(transH) // Set the transitional item
    event.remove('aeronautics_utility_objects:universal_joint_rod2')


event.recipes.create.mechanical_crafting('aeronautics_utility_objects:brass_universal_joint', [
        'PMP',
        'SCS',

    ], {
        S: 'simulated:spring',
        M: 'create:precision_mechanism',
        P:'create:brass_sheet', 
        C:'create:copper_nugget'
    }) 
    event.remove('aeronautics_utility_objects:brass_universal_joint')



  const transitionalG = 'simulated:honey_glue' // Making a constant to store the transitional item makes the code more readable

  event.recipes.create.sequenced_assembly(
      // Outputs:
      [
        CreateItem.of('createpropulsion:auto_glue', 1), // Main output, will appear in JEI as the result

      ],
      // Input:
      'simulated:honey_glue',
      // Sequence:
      [
        // The transitional item is a constant, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly.
        // Like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item.
        event.recipes.create.filling(transitionalG, [transitionalG, Fluid.of('create:honey', 1000)]),
        event.recipes.create.filling(transitionalG, [transitionalG, Fluid.of('create:honey', 1000)]),
        event.recipes.create.filling(transitionalG, [transitionalG, Fluid.of('create:honey', 1000)]),
        event.recipes.create.filling(transitionalG, [transitionalG, Fluid.of('create:honey', 1000)]),
        event.recipes.create.filling(transitionalG, [transitionalG, Fluid.of('create:honey', 1000)]),
        event.recipes.create.filling(transitionalG, [transitionalG, Fluid.of('create:honey', 1000)]),
        event.recipes.create.filling(transitionalG, [transitionalG, Fluid.of('create:honey', 1000)]),
        event.recipes.create.filling(transitionalG, [transitionalG, Fluid.of('create:honey', 1000)]),
        event.recipes.create.filling(transitionalG, [transitionalG, Fluid.of('create:honey', 1000)]),
        event.recipes.create.filling(transitionalG, [transitionalG, Fluid.of('create:honey', 1000)]),
        event.recipes.create.filling(transitionalG, [transitionalG, Fluid.of('create:honey', 1000)]),
        event.recipes.create.filling(transitionalG, [transitionalG, Fluid.of('create:honey', 1000)]),
        event.recipes.create.filling(transitionalG, [transitionalG, Fluid.of('create:honey', 1000)]),
        event.recipes.create.filling(transitionalG, [transitionalG, Fluid.of('create:honey', 1000)]),
        event.recipes.create.filling(transitionalG, [transitionalG, Fluid.of('create:honey', 1000)]),
        event.recipes.create.filling(transitionalG, [transitionalG, Fluid.of('create:honey', 1000)]),
        event.recipes.create.filling(transitionalG, [transitionalG, Fluid.of('create:honey', 1000)]),
        event.recipes.create.filling(transitionalG, [transitionalG, Fluid.of('create:honey', 1000)]),
        event.recipes.create.filling(transitionalG, [transitionalG, Fluid.of('create:honey', 1000)]),
        event.recipes.create.filling(transitionalG, [transitionalG, Fluid.of('create:honey', 1000)]),
        event.recipes.create.filling(transitionalG, [transitionalG, Fluid.of('create:honey', 1000)]),
        event.recipes.create.filling(transitionalG, [transitionalG, Fluid.of('create:honey', 1000)]),
        event.recipes.create.filling(transitionalG, [transitionalG, Fluid.of('create_enchantment_industry:experience', 500)]),
      ]
    )
    .transitionalItem(transitionalG) // Set the transitional item

// QB ******************************************************

    // event.shaped(Item.of('create_linear_motion_simulated:pneumatic_cylinder',3), [
    //     ' S ',
    //     'RTR',
    //     ' C '
    // ], {
    //     C: 'create:copper_casing',
    //     S: 'create:shaft',
    //     R:'minecraft:redstone',
    //     T:'create:copper_backtank'
        
    //     // P:'create:piston_extension_pole'
    // });

    event.shaped('kubejs:chunk_pulser', [
        'OSO',
        'BZB',
        'ECR'
    ], {  
        E: 'create:electron_tube',
        Z: 'powergrid:zinc_sheet',
        C:'powergrid:empty_circuit',
        R:'powergrid:regulator_tube',
        B:'powergrid:barretter_tube',
        O:'create:sturdy_sheet',
        S:'minecraft:spyglass'

        // P:'create:piston_extension_pole'
    });
event.remove('ftbquests:book')
event.remove('get_creative:empty_breeze_whirler')

    event.shaped('get_creative:empty_breeze_whirler', [
        'OZX',
        'IBI',
        'XZO'
    ], {  
        Z: 'powergrid:zinc_sheet',
        X: 'create:zinc_nugget',
        I:'create:iron_sheet',
        O:'minecraft:iron_nugget',
        B:'kubejs:whirlwind_helmet_fragment'
        // P:'create:piston_extension_pole'
    });
    event.remove('ftbquests:book')

event.remove('create_linear_motion_simulated:crafting/pneumatic_cylinder')
    event.shaped('ftbquests:book', [
        'S  ',
        'CDP',
        ' G '
    ], {
        C: 'create:copper_sheet',
        S: 'create:cogwheel',
        D:'create:andesite_casing',
        P:'create:sand_paper',
        G:'create:golden_sheet'
        // P:'create:piston_extension_pole'
    });
event.recipes.create.mechanical_crafting('overpacked:giant_backpack', [
        ' RHR ',
        ' BLB ',
        'RLTLR',
        ' BHB '
    ], {
        H: 'minecraft:rabbit_hide',
        L: 'minecraft:leather',
        B:'minecraft:bundle', 
        T:'create:brown_toolbox',
        R:'simulated:rope_coupling'
    }) 

    // [, 'simulated:rope_coupling', 'minecraft:rabbit_hide', 'minecraft:leather', 'minecraft:bundle', 'create:brown_toolbox']
// WHISK ***************************************************
// ['create_sa:heat_engine', 'create:minecart_coupling', 'create:whisk', 'create:cogwheel', 'createpropulsion:platinum_ingot', '[custom_data={tagCooldown:0.0d,tagFuel:200.0d,tagHooked:0b,xPostion:16079.0d,yPostion:74.0d,zPostion:7220.0d}]']

event.recipes.create.mechanical_crafting('create_sa:grapplin_whisk', [
        ' P ',
        'CHC',
        'UUU',
        'UUU',
        ' W '   
    ], {
        P: 'createpropulsion:platinum_ingot',
        H: 'create_sa:heat_engine',
        C:'create:cogwheel', 
        U:'create:minecart_coupling',
        W:'create:whisk'
    }) 

event.remove('create_sa:grapplin_whisk_recipe');

//BULK ENDING***************************************************
event.custom({
  "type": "create_dragons_plus:ending",
  "ingredients": [
    {
      "item": "minecraft:totem_of_undying"
    }
  ],
  "results": [
    {
      "id": "artifacts:chorus_totem"
    }
  ]
})
event.custom({
  "type": "create_dragons_plus:ending",
  "ingredients": [
    {
      "item": "blazinghot:stone_dust"
    }
  ],
  "results": [
    {
      "id": "aeronautics:end_stone_powder"
    }
  ]
})
// BULK SANDING ***************************************************
event.custom({
  "type": "create_dragons_plus:sanding",
  "ingredients": [
    {
      "item": 'minecraft:sand'
    }
  ],
  "results": [
    {
      "id": 'yungscavebiomes:ancient_sand'
    }
  ]
})

event.custom({
  "type": "create_dragons_plus:sanding",
  "ingredients": [
    {
      "item": 'minecraft:totem_of_undying'
    }
  ],
  "results": [
    {
      "id": 'friendsandfoes:totem_of_illusion'
    }
  ]
})
event.custom({
  "type": "create_dragons_plus:sanding",
  "ingredients": [
    {
      "item": 'minecraft:prismarine_shard'
    }
  ],
  "results": [
    {
      "id": 'minecraft:prismarine_crystals'
    }
  ]
})
event.custom({
  "type": "create_dragons_plus:sanding",
  "ingredients": [
    {
      "item": 'minecraft:sandstone'
    }
  ],
  "results": [
    {
      "id": 'minecraft:suspicious_sand'
    }
  ]
})
event.custom({
  "type": "create_dragons_plus:sanding",
  "ingredients": [
    {
      "item": 'yungscavebiomes:ancient_sandstone'
    }
  ],
  "results": [
    {
      "id": 'yungscavebiomes:suspicious_ancient_sand'
    }
  ]
})
event.custom({
  "type": "create_dragons_plus:sanding",
  "ingredients": [
    {
      "item": 'minecraft:gravel'
    }
  ],
  "results": [
    {
      "id": 'minecraft:suspicious_gravel'
    }
  ]
})
// FREEZING RECIPES **************************************************
event.custom({
  "type": "create_dragons_plus:freezing",
  "ingredients": [
    {
      "item": "minecraft:totem_of_undying"
    }
  ],
  "results": [
    {
      "id": "friendsandfoes:totem_of_freezing"
    }
  ]
})
event.custom({
  "type": "create_dragons_plus:freezing",
  "ingredients": [
    {
      "item": "minecraft:melon_slice"
    }
  ],
  "results": [
    {
      "id": "farmersdelight:melon_popsicle"
    }
  ]
})
event.custom({
  "type": "create_dragons_plus:freezing",
  "ingredients": [
    {
      "item": "friendsandfoes:wildfire_crown_fragment"
    }
  ],
  "results": [
    {
      "id": "kubejs:whirlwind_helmet_fragment"
    }
  ]
})
event.custom({
  "type": "create_dragons_plus:freezing",
  "ingredients": [
    {
      "item": "minecraft:rotten_flesh"
    }
  ],
  "results": [
    {
      "id": "rottencreatures:frozen_rotten_flesh"
    }
  ]
})
event.custom({
  "type": "create_dragons_plus:freezing",
  "ingredients": [
    {
      "item": "minecraft:blaze_powder"
    }
  ],
  "results": [
    {
      "id": "minecraft:gunpowder"
    }
  ]
}
)
event.custom({
  "type": "create_dragons_plus:freezing",
  "ingredients": [
    {
      "tag": "minecraft:flowers"
    }
  ],
  "results": [
    {
      "id": 'yungscavebiomes:frost_lily'
    }
  ]
})
event.custom({
  "type": "create_dragons_plus:freezing",
  "ingredients": [
    {
      "item": 'minecraft:pointed_dripstone'
    }
  ],
  "results": [
    {
      "id": 'yungscavebiomes:icicle'
    }
  ]
})

event.recipes.create.mixing('yungscavebiomes:rare_ice', ['minecraft:blue_ice', 'yungscavebiomes:suspicious_ancient_sand']).processingTime(5000);

const egg = ['minecraft:blue_egg', 'minecraft:brown_egg','naturalist:alligator_egg', 'naturalist:duck_egg', 'naturalist:tortoise_egg', 'minecraft:turtle_egg', 'naturalist:snail_eggs', 'friendsandfoes:crab_egg']

egg.forEach(egg => {
  event.smelting( 'farmersdelight:fried_egg', egg).cookingTime(200)
  event.smoking('farmersdelight:fried_egg', egg).xp(0.35).cookingTime(200)
  event.campfireCooking('farmersdelight:fried_egg',egg, 0.35, 600)
})





event.custom({
  "type": "create_dragons_plus:freezing",
  "ingredients": [
    {
      "item": 'minecraft:clay_ball'
    }
  ],
  "results": [
    {
      "id": 'minecraft:snowball'
    }
  ]
})

    // WITHERING RECIPES **************************************************
    event.recipes.create.mixing('minecraft:netherite_upgrade_smithing_template', ['friendsandfoes:wildfire_crown_fragment', Item.of('blazinghot:nether_essence', 2), 'minecraft:netherite_scrap', Item.of('minecraft:nether_brick', 9)]).heatLevel("WITHERED").processingTime(2000);
    event.recipes.create.mixing('create:crushed_raw_platinum',['create:crushed_raw_zinc', 'minecraft:diamond', 'create:crushed_raw_iron']).heatLevel("WITHERED").processingTime(2000);
    event.recipes.create.mixing('minecraft:wither_skeleton_skull',['minecraft:skeleton_skull', Item.of('minecraft:coal', 3), 'minecraft:ender_eye']).heatLevel("WITHERED").processingTime(2000);
    event.recipes.create.mixing('create:powdered_obsidian',[ 'blazinghot:soul_dust', 'blazinghot:stone_dust', Fluid.of('minecraft:lava',250)]).heatLevel("WITHERED").processingTime(2000);
    event.recipes.create.compacting('minecraft:ghast_tear', Item.of('createpropulsion:platinum_nugget',3)).heatLevel("WITHERED").processingTime(2000);
    event.recipes.create.compacting('minecraft:recovery_compass',['minecraft:compass', Item.of('createpropulsion:platinum_sheet',4)]).heatLevel("WITHERED").processingTime(2000);
    event.recipes.create.mixing('minecraft:ender_eye', ['minecraft:ender_pearl', Fluid.of('create_enchantment_industry:experience', 250)]).heatLevel("WITHERED").processingTime(2000);
    event.recipes.create.mixing('block_factorys_bosses:ancient_trial_key', 'minecraft:trial_key').heatLevel("WITHERED").processingTime(2000);
    event.recipes.create.mixing('minecraft:glowstone_dust', 'minecraft:sugar').heatLevel("WITHERED").processingTime(2000);

    // MOLTEN VENT BALANCING *`************************************************



    event.remove('create:crushing/asurine_recycling')
    event.remove('create_copper_and_zinc:crushing_asurine')
    event.remove('create:crushing/asurine')
    event.remove('create_copper_and_zinc:milling_asurine')

    event.recipes.create.crushing([CreateItem.of('create:crushed_raw_zinc',0.05),CreateItem.of('create:zinc_nugget',0.05)], 'create:asurine').processingTime(1000);

        event.remove('create:crushing/veridium_recycling')
    event.remove('create_copper_and_zinc:crushing_veridium')
    event.remove('create:crushing/veridium')
    event.remove('create_copper_and_zinc:milling_veridium')

        event.recipes.create.crushing([CreateItem.of('create:crushed_raw_copper',0.05),CreateItem.of('create:copper_nugget',0.05)], 'create:veridium').processingTime(1000);

        event.remove('create:crushing/ochrum')
        event.remove('create:crushing/ochrum_recycling')
        event.recipes.create.crushing([CreateItem.of('create:crushed_raw_gold',0.075),CreateItem.of('minecraft:gold_nugget',0.075)], 'create:ochrum').processingTime(1000);


        event.remove('create:crushing/crimsite')
        event.remove('create:crushing/crimsite_recycling')
        event.recipes.create.crushing([CreateItem.of('create:crushed_raw_iron',0.12),CreateItem.of('minecraft:iron_nugget',0.12)], 'create:crimsite').processingTime(1000);
//RESIN ALTERNATIVE**************************************************

    event.shaped('create:belt_connector', [
        '   ',
        'RRR',
        'RRR'
    ], {
        R: 'minecraft:resin_clump'
        // P:'create:piston_extension_pole'
    });
event.shaped('create:andesite_tunnel', [
        ' AA',
        ' RR',
        '   '
    ], {
        R: 'minecraft:resin_clump',
        A: 'create:andesite_alloy'

        // P:'create:piston_extension_pole'
    });
event.shaped('create:brass_tunnel', [
        ' T ',
        ' AA',
        ' RR'
    ], {
        R: 'minecraft:resin_clump',
        A: 'create:brass_ingot',
        T: 'create:electron_tube'

        // P:'create:piston_extension_pole'
    });
event.shaped('create:andesite_funnel', [
        ' A ',
        ' R ',
        '   '
    ], {
        R: 'minecraft:resin_clump',
        A: 'create:andesite_alloy'

        // P:'create:piston_extension_pole'
    });
event.shaped('create:brass_funnel', [
        ' T ',
        ' A ',
        ' R '
    ], {
        R: 'minecraft:resin_clump',
        A: 'create:brass_ingot',
        T: 'create:electron_tube'

        // P:'create:piston_extension_pole'
    });
// DRACONIC HEAT RECIPES ***************************************************




  event.recipes.create.mixing("create_dragons_plus:blaze_upgrade_smithing_template", ['blazinghot:nether_essence', 'minecraft:netherrack', 'create:blaze_burner']).heatLevel("DRACONIC");
  // event.recipes.create.mixing('block_factorys_bosses:dragon_bone', 'minecraft:bone').heatLevel("DRACONIC").processingTime(2000);
  // event.recipes.create.compacting(Item.of('blazinghot:nether_essence',3), 'block_factorys_bosses:dragon_bone').heatLevel("DRACONIC");
  event.recipes.create.mixing(Item.of('create:blaze_cake',2), 'minecraft:cake').heatLevel("DRACONIC").processingTime(2000);
  event.recipes.create.compacting('minecraft:fire_charge',  'minecraft:clay_ball').heatLevel("DRACONIC").processingTime(2000);
  event.recipes.create.compacting('rottencreatures:magma_rotten_flesh', 'minecraft:rotten_flesh').heatLevel("DRACONIC").processingTime(2000);
  event.recipes.create.mixing('minecraft:blaze_rod', 'minecraft:breeze_rod').heatLevel("DRACONIC").processingTime(2000);
  event.recipes.create.compacting('friendsandfoes:wildfire_crown_fragment', 'blazinghot:blaze_gold_block').heatLevel("DRACONIC").processingTime(2000);
  event.recipes.create.mixing('rottencreatures:corrupted_wart', 'minecraft:nether_wart').heatLevel("DRACONIC").processingTime(2000);
  event.recipes.create.mixing('minecraft:redstone', Item.of('blazinghot:netherrack_dust', 3)).heatLevel("DRACONIC").processingTime(2000);
//   event.recipes.create.mixing('minecraft:netherite_upgrade_smithing_template', ['friendsandfoes:wildfire_crown_fragment', Item.of('blazinghot:nether_essence', 2), 'minecraft:netherite_scrap', Item.of('minecraft:nether_brick', 9)]).heatLevel("DRACONIC").processingTime(2000);
  event.recipes.create.mixing( 'minecraft:slime_block',['minecraft:green_dye', 'minecraft:honey_block']).heatLevel("DRACONIC").processingTime(2000);



// []
// BOSS CATALYSTS **************************************************
// ['kubejs:frost_catalyst', 'kubejs:snad_catalyst', 
// 'block_factorys_bosses:ice_gauntlet', 'block_factorys_bosses:sandworm_gauntlet', 'minecraft:sand']
event.recipes.create.mixing([Fluid.of('minecraft:water',300), 'block_factorys_bosses:ice_gauntlet'],'kubejs:frost_catalyst').heated().processingTime(2000);
event.recipes.create.mixing( ['block_factorys_bosses:sandworm_gauntlet', Item.of('minecraft:sand',3)],['kubejs:snad_catalyst',Fluid.of('minecraft:water',300)]).processingTime(2000);
  event.recipes.create.deploying(['block_factorys_bosses:knight_sword','minecraft:wither_skeleton_skull'], ['kubejs:wither_knight_catalyst', 'minecraft:shears'])
  event.recipes.create.crushing([Item.of('block_factorys_bosses:dragon_bone',6), CreateItem.of('minecraft:fire_charge', 0.5)], 'block_factorys_bosses:dragon_skull')

// OXIDIZING RECIPES **************************************************
// ['friendsandfoes:copper_button', 'friendsandfoes:exposed_copper_button', 'friendsandfoes:weathered_copper_button', 'friendsandfoes:oxidized_copper_button',
//      'minecraft:lightning_rod', 'friendsandfoes:exposed_lightning_rod', 'friendsandfoes:weathered_lightning_rod', 'friendsandfoes:oxidized_lightning_rod']
const Button = ['friendsandfoes:copper_button', 'friendsandfoes:exposed_copper_button', 'friendsandfoes:weathered_copper_button'];
const ButtonALL = ['friendsandfoes:copper_button', 'friendsandfoes:exposed_copper_button', 'friendsandfoes:weathered_copper_button', 'friendsandfoes:oxidized_copper_button'];
const Lightning = [ 'minecraft:lightning_rod', 'friendsandfoes:exposed_lightning_rod', 'friendsandfoes:weathered_lightning_rod'];
const LightningALL = [ 'minecraft:lightning_rod', 'friendsandfoes:exposed_lightning_rod', 'friendsandfoes:weathered_lightning_rod', 'friendsandfoes:oxidized_lightning_rod'];

const WaxedButton = ['friendsandfoes:waxed_copper_button', 'friendsandfoes:waxed_exposed_copper_button', 'friendsandfoes:waxed_weathered_copper_button', 'friendsandfoes:waxed_oxidized_copper_button'];
const WaxedLightning = ['friendsandfoes:waxed_lightning_rod', 'friendsandfoes:waxed_exposed_lightning_rod', 'friendsandfoes:waxed_weathered_lightning_rod', 'friendsandfoes:waxed_oxidized_lightning_rod'];

ButtonALL.forEach((butt, index) => {
    event.recipes.create.deploying([WaxedButton[index]], [butt, 'minecraft:honeycomb_block']).keepHeldItem()

});


LightningALL.forEach((butt, index) => {
    event.recipes.create.deploying([WaxedLightning[index]], [butt, 'minecraft:honeycomb_block']).keepHeldItem()

});

Button.forEach((butt, index) => {
    event.recipes.create.filling(ButtonALL[index+1],[Fluid.of('minecraft:water', 500), butt]);
});

    
Lightning.forEach((light, index) => {
    event.recipes.create.filling(LightningALL[index+1],[Fluid.of('minecraft:water', 500), light]);
});

Button.forEach((butt, index) => {
    event.recipes.create.sandpaper_polishing(butt, ButtonALL[index+1]);
});

Lightning.forEach((light, index) => {
    event.recipes.create.sandpaper_polishing(light, LightningALL[index+1]);
});


// MAGNETIZING RECIPES ************************NVM**************************
    // event.custom({
    //     type: "powergrid:magnetizing",
    //     ingredients: [
    //         { item: 'minecraft:iron_ingot' } // The item to be magnetized
    //     ],
    //     results: [
    //         { item: 'minecraft:stick' } // The output item
    //     ],
    //     processingTime: 100 // Time in ticks (20 ticks = 1 second)
    // })


    //GRYO**********************************************************

    // ['gyro:gyroscope', 'minecraft:netherite_ingot', 'simulated:redstone_inductor', 'simulated:redstone_accumulator', 'simulated:gimbal_sensor',
    //      'simulated:gyroscopic_mechanism', 'create:flywheel', 'create:brass_sheet', 'create:brass_block']
        event.recipes.create.mechanical_crafting('gyro:gyroscope', [
        'BBRBB',
        'NIGAN',
        ' PYP '   
    ], {
        R: 'create:flywheel',
        N: 'minecraft:netherite_ingot',
        P:'createpropulsion:platinum_sheet', 
        G:'simulated:gyroscopic_mechanism',
        I:'simulated:redstone_inductor',
        A:'simulated:redstone_accumulator',
        Y:'simulated:gimbal_sensor',
        B:'create:brass_block'
    }) 
event.remove('gyro:joystick');
event.remove('gyro:gyroscope');




// BLAZING RECIPES **************************************************
// [, , 'friendsandfoes:wildfire_crown_fragment']

const Blazing = ['create_sa:blazing_pickaxe', 'create_sa:blazing_shovel', 'create_sa:blazing_axe', 'create_sa:blazing_cleaver'];
const Gold = ['minecraft:golden_pickaxe', 'minecraft:golden_shovel', 'minecraft:golden_axe', 'minecraft:golden_sword'];
        event.remove("create_sa:blazing_pickaxe_recipe");
        event.remove("create_sa:blazing_axe_recipe");
            event.remove("create_sa:blazing_shovel_recipe");
        event.remove("create_sa:blazing_sword_recipe");

Gold.forEach((gold, index) => {
    event.recipes.create.mixing(Blazing[index], [gold,'friendsandfoes:wildfire_crown_fragment','create:powdered_obsidian']).heated().processingTime(2000);
});

// NO BRASS ALTERNATIVES **************************************************
// ['friendsandfoes:crab_claw', 'create:andesite_casing', 'create:electron_tube',
//  'minecraft:stick', 'create:precision_mechanism', 'create:brass_ingot']
//['create:deployer', 'friendsandfoes:crab_claw', 'create:piston_extension_pole', 'create:andesite_casing',
//  'create:mechanical_crafter', 'create:electron_tube', 'create:golden_sheet', 'minecraft:crafter']
// ['create:deployer', 'create:extendo_grip']

    event.shaped('kubejs:whirlwind_helmet', [
        '   ',
        'WWW',
        'W W'
    ], {
        W: "kubejs:whirlwind_helmet_fragment"
        // P:'create:piston_extension_pole'
    });

    event.shaped('create:empty_blaze_burner', [
        ' P ',
        'PDP',
        ' P '
    ], {
        P: 'create:iron_sheet',
        D: 'friendsandfoes:wildfire_crown_fragment'
        // P:'create:piston_extension_pole'
    });
event.remove('create:crafting/kinetics/empty_blaze_burner');

    event.shaped('create:deployer', [
        ' E ',
        ' D ',
        'GCG'
    ], {
        E: 'create:electron_tube',
        C: 'friendsandfoes:crab_claw',
        D:'create:andesite_casing',
        G:'create:golden_sheet'
        // P:'create:piston_extension_pole'
    });
        event.shaped(Item.of('create:mechanical_crafter',3), [
        ' E ',
        ' G ',
        ' C ' ], {
        E: 'create:electron_tube',
        G:'create:golden_sheet',
        C:'minecraft:crafter'
    });

    event.recipes.create.mechanical_crafting('create:extendo_grip', [
        ' P ',
        'SSS',
        'SSS',
        'BCB'   
    ], {
        P: 'create:precision_mechanism',
        C: 'friendsandfoes:crab_claw',
        S:'minecraft:stick',
        B:'create:golden_sheet'
    }) 


// CASTING RECIPES **************************************************
event.recipes.create.filling('createdieselgenerators:mold[createdieselgenerators:mold_type="createdieselgenerators:bar"]', [Fluid.of('blazinghot:molten_sturdy_alloy',180), `minecraft:iron_ingot`])
        event.recipes.create.filling('createdieselgenerators:mold[createdieselgenerators:mold_type="createdieselgenerators:bar"]', [Fluid.of('blazinghot:molten_sturdy_alloy',180), 'create:andesite_alloy'])
        event.recipes.create.filling('createdieselgenerators:mold[createdieselgenerators:mold_type="createdieselgenerators:bar"]', [Fluid.of('blazinghot:molten_sturdy_alloy',180), 'minecraft:nether_brick'])
        event.recipes.create.filling('createdieselgenerators:mold[createdieselgenerators:mold_type="createdieselgenerators:bar"]', [Fluid.of('blazinghot:molten_sturdy_alloy',180), 'minecraft:brick'])
        event.recipes.create.filling('createdieselgenerators:mold[createdieselgenerators:mold_type="createdieselgenerators:bar"]', [Fluid.of('blazinghot:molten_sturdy_alloy',180), 'blazinghot:blaze_gold_ingot'])
        event.recipes.create.filling('createdieselgenerators:mold[createdieselgenerators:mold_type="createdieselgenerators:bar"]', [Fluid.of('blazinghot:molten_sturdy_alloy',180), 'create:brass_ingot'])
        event.recipes.create.filling('createdieselgenerators:mold[createdieselgenerators:mold_type="createdieselgenerators:bar"]', [Fluid.of('blazinghot:molten_sturdy_alloy',180), 'create:zinc_ingot'])
        event.recipes.create.filling('createdieselgenerators:mold[createdieselgenerators:mold_type="createdieselgenerators:bar"]', [Fluid.of('blazinghot:molten_sturdy_alloy',180), 'minecraft:netherite_ingot'])
        event.recipes.create.filling('createdieselgenerators:mold[createdieselgenerators:mold_type="createdieselgenerators:bar"]', [Fluid.of('blazinghot:molten_sturdy_alloy',180), 'minecraft:gold_ingot'])
        event.recipes.create.filling('createdieselgenerators:mold[createdieselgenerators:mold_type="createdieselgenerators:bar"]', [Fluid.of('blazinghot:molten_sturdy_alloy'), 'minecraft:copper_ingot'])
        event.remove("createdieselgenerators:cutting/bar_mold");
        event.remove("createdieselgenerators:cutting/chain_mold");
        event.remove("createdieselgenerators:cutting/lines_mold");
        event.remove("createdieselgenerators:cutting/bowl_mold");

const rawMetals = ['minecraft:raw_iron', 'minecraft:raw_copper', 'minecraft:raw_gold', 'create:raw_zinc', 'create:crushed_raw_iron', 'create:crushed_raw_gold', 'create:crushed_raw_copper', 'create:crushed_raw_zinc'];
const moltenMetals = ['blazinghot:molten_iron', 'blazinghot:molten_copper', 'blazinghot:molten_gold', 'blazinghot:molten_zinc', 'blazinghot:molten_iron', 'blazinghot:molten_gold', 'blazinghot:molten_copper', 'blazinghot:molten_zinc'];
rawMetals.forEach((metal, index) => {
    event.recipes.create.mixing(Fluid.of(moltenMetals[index], 120), metal).superheated().processingTime(2000);
});





    const wavyItems = [
        'minecraft:blaze_rod',
        'minecraft:breeze_rod',
        'blazinghot:blaze_gold_rod',
        'minecraft:lightning_rod',
        'minecraft:end_rod',
        'minecraft:stick', 'create_sa:zinc_handle', 'createdieselgenerators:kelp_handle'
    ];

    wavyItems.forEach(item => {
        event.recipes.create.filling('createdieselgenerators:mold[createdieselgenerators:mold_type="createdieselgenerators:lines"]', [Fluid.of('blazinghot:molten_sturdy_alloy', 180), item]);
    });



        const bowlItems = ['minecraft:bucket',
             'minecraft:bowl',
              'minecraft:turtle_helmet',
               'minecraft:iron_helmet',
                'create_sa:brass_helmet',
                 'create_sa:zinc_helmet', 
                 'create_sa:copper_helmet',
             'minecraft:diamond_helmet'];

    bowlItems.forEach(item => {
        event.recipes.create.filling('createdieselgenerators:mold[createdieselgenerators:mold_type="createdieselgenerators:bowl"]', [Fluid.of('blazinghot:molten_sturdy_alloy', 180), item]);
    });



        const chainItems = ['minecraft:chain', 'block_factorys_bosses:big_chain', 'create:minecart_coupling']

    chainItems.forEach(item => {
        event.recipes.create.filling('createdieselgenerators:mold[createdieselgenerators:mold_type="createdieselgenerators:chain"]', [Fluid.of('blazinghot:molten_sturdy_alloy', 180), item]);
    });



  event.recipes.createdieselgenerators.casting("blazinghot:blaze_gold_rod", "createdieselgenerators:lines", Fluid.of("blazinghot:molten_blaze_gold", 45));
  event.recipes.createdieselgenerators.casting("create:minecart_coupling", "createdieselgenerators:chain", Fluid.of("blazinghot:molten_andesite", 35));
  event.recipes.createdieselgenerators.casting("minecraft:chain", "createdieselgenerators:chain", Fluid.of("blazinghot:molten_iron", 35));


    //MISC RECIPES **************************************************

    event.recipes.create.mixing(Item.of('minecraft:string',2), 'naturalist:fur');

                            event.shapeless('bits_n_bobs:large_flanged_cogwheel',[
                                "create:large_cogwheel", "create:zinc_nugget"
                            ])

                            event.shapeless('bits_n_bobs:small_flanged_cogwheel',[
                                "create:cogwheel", "create:zinc_nugget"
                            ])
    // event.shaped('minecraft:bundle', [
    //     ' R ',
    //     'LSR',
    //     ' L '
    // ], {
    //     L: 'minecraft:leather',
    //     S:'minecraft:string',
    //     R:'farmersdelight:rope'
    //     // P:'create:piston_extension_pole'
    // });




    // ['create:sturdy_sheet', 'block_factorys_bosses:dragon_bone', 'createbigcannons:steel_ingot', 'create:andesite_casing',
    //  Item.of('block_factorys_bosses:dragon_guard_shield', '{Damage:0}'), Item.of('block_factorys_bosses:enhanced_shield', '{Damage:0}'),
    //  'create:zinc_ingot', Item.of('minecraft:shield', '{Damage:0}')]

                                            event.shaped('block_factorys_bosses:enhanced_shield', [
                                                'DZD',
                                                'STS',
                                                'DZD'
                                            ], {
                                                T: 'minecraft:shield',
                                                Z: 'create:zinc_ingot',
                                                S:'create:andesite_alloy',
                                                D:'create:andesite_casing'
                                            });
                                            event.shaped('block_factorys_bosses:dragon_guard_shield', [
                                                'DSD',
                                                'STS',
                                                'DSD'
                                            ], {
                                                T: 'minecraft:shield',
                                                S:'block_factorys_bosses:dragon_bone',
                                                D:'create:sturdy_sheet'
                                            });


// ['simulated:rope_coupling', 'farmersdelight:rope']

                            event.shapeless('simulated:rope_coupling',[
                                'farmersdelight:rope','farmersdelight:rope','farmersdelight:rope','farmersdelight:rope','farmersdelight:rope','farmersdelight:rope','farmersdelight:rope','farmersdelight:rope','farmersdelight:rope'
                            ])


 // ['bits_n_bobs:chain_pulley', Item.of('vstuff:rope', '{style:{namespace:"vstuff",path:"chain"}}'), 'create:andesite_casing', 'create:iron_sheet', 
 // 'bits_n_bobs:lightbulb', 'bits_n_bobs:headlamp', 'bits_n_bobs:brass_lamp']
                                            //  event.shaped('bits_n_bobs:chain_pulley', [
                                            //     ' A ',
                                            //     ' C ',
                                            //     ' S '
                                            // ], {
                                            //     A: 'create:andesite_casing',
                                            //     C:Item.of('vstuff:rope', '{style:{namespace:"vstuff",path:"chain"}}'),
                                            //     S:'create:iron_sheet'
                                            // });

               //             ['overpacked:giant_backpack', 'minecraft:bundle', 'minecraft:amethyst_shard', 'simulated:rope_coupling', 'minecraft:iron_nugget']
//['create_questing:blueprint', 'minecraft:blue_dye', 'minecraft:paper']


// CREATIVE RECIPES **************************************************
//  'powergrid:creative_voltage_source', 'create:creative_blaze_cake',
//      'create_sa:creative_filling_tank', 'create:creative_motor', 'createpropulsion:creative_thruster']

// ['createbigcannons:nethersteel_ingot', 'cosmos:steel_plate', 'witherstormmod:withered_nether_star', 'create:brass_ingot', 
// 'create:fluid_pipe', 'create:mechanical_pump', 'create:brass_hand']


                                        // event.recipes.create.mechanical_crafting('vs_clockwork:creative_gravitron', [
                                        //     'S S',
                                        //     'HTH',
                                        //     'PMP',
                                        //     'PNP',
                                        //     ' B '

                                        // ], {
                                        //     N:'createbigcannons:nethersteel_ingot',
                                        //     P: 'create:fluid_pipe',
                                        //     H:'create:brass_hand',
                                        //     T:'witherstormmod:withered_nether_star',
                                        //     S:'cosmos:steel_plate',
                                        //     M:'create:mechanical_pump',
                                        //     B:'create:brass_ingot'
                                        // }) 

                                        // event.recipes.create.mechanical_crafting('create:creative_motor', [
                                        //     ' SDS ',
                                        //     'DMTMD',
                                        //     ' SDS ',
                                        //     '  N  '
                                            
                                        // ], {
                                        //     N:'witherstormmod:tainted_stone',
                                        //     M: 'powergrid:magnet',

                                        //     T:'witherstormmod:withered_nether_star',
                                        //     S:'cosmos:steel_plate',
                                        //     D:'witherstormmod:tainted_dust'
                                        
                                        // }) 
//['witherstormmod:tainted_dust', 'witherstormmod:withered_nether_star', 'cosmos:steel_plate', 'powergrid:magnet', 'witherstormmod:tainted_stone', 'create:creative_motor']
                                            // event.shaped('create_sa:creative_filling_tank', [
                                            //     'DDD',
                                            //     'FTW',
                                            //     'DDD'
                                            // ], {
                                            //     T: 'witherstormmod:withered_nether_star',
                                            //     D: 'witherstormmod:tainted_dust',
                                            //     F:'create_sa:large_filling_tank',
                                            //     W:'create_sa:large_fueling_tank'
                                            // });
//['6x witherstormmod:tainted_dust', 'create_sa:creative_filling_tank', 'create_sa:large_filling_tank', 'witherstormmod:withered_nether_star', 'create_sa:large_fueling_tank']



                                            // event.shaped('create:creative_blaze_cake', [
                                            //     'DCD',
                                            //     'CTC',
                                            //     'DCD'
                                            // ], {
                                            //     T: 'witherstormmod:withered_nether_star',
                                            //     D: 'witherstormmod:tainted_dust',
                                            //     C:'create:blaze_cake_base'
                                                
                                            // });
// ['create:blaze_cake_base', 'witherstormmod:tainted_dust', 'witherstormmod:withered_nether_star']


                                        // event.recipes.create.mechanical_crafting('createpropulsion:creative_thruster', [
                                        //     ' SNS ',
                                        //     'SDTDS',
                                        //     ' BMB ',
                                        //     ' N N '
                                            
                                        // ], {
                                        //     N:'createbigcannons:nethersteel_ingot',
                                        //     M: 'createpropulsion:thruster',
                                        //     B:'minecraft:dragon_breath',
                                        //     T:'witherstormmod:withered_nether_star',
                                        //     S:'cosmos:titanium_plate',
                                        //     D:'witherstormmod:tainted_dust'
                                        
                                        // }) 
// ['createpropulsion:creative_thruster', 'cosmos:titanium_plate', 'witherstormmod:tainted_dust', 'minecraft:dragon_breath', 
// 'createpropulsion:thruster', 'createbigcannons:nethersteel_ingot', 'createbigcannons:nethersteel_ingot']


                                        // event.recipes.create.mechanical_crafting(Item.of('powergrid:creative_voltage_source').withCount(2), [
                                        //     'R R',
                                        //     'DTD',
                                        //     'CBC'
                                            
                                        // ], {
                                        //     R: 'witherstormmod:tainted_torch',
                                        //     B:'powergrid:battery',
                                        //     T:'witherstormmod:withered_nether_star',
                                        //     C:'witherstormmod:tainted_cobblestone',
                                        //     D:'witherstormmod:tainted_dust'
                                        
                                        // }) 

// ['2x powergrid:creative_voltage_source', '62x witherstormmod:tainted_torch', '62x witherstormmod:tainted_dust',
//      '63x witherstormmod:withered_nether_star', 'witherstormmod:tainted_cobblestone']

//STEEL RECIPES **************************************************
// [Item.of('cosmos:titaniumarmour_helmet', '{Damage:0}'), Item.of('cosmos:titaniumarmour_boots', '{Damage:0}'), Item.of('cosmos:titanium_sword', '{Damage:0}'), 
//     Item.of('cosmos:steelarmour_helmet', '{Damage:0}'), Item.of('cosmos:steelarmour_boots', '{Damage:0}'), 
//     Item.of('cosmos:steel_sword', '{Damage:0}'), 'cosmos:largesolarpanel', 'cosmos:raw_titanium', 'cosmos:titanium_ingot',
//      Item.of('cosmos:titaniumarmour_chestplate', '{Damage:0}'), Item.of('cosmos:titanium_hoe', '{Damage:0}'), Item.of('cosmos:titanium_axe', '{Damage:0}'),
//       Item.of('cosmos:steelarmour_chestplate', '{Damage:0}'), Item.of('cosmos:steel_axe', '{Damage:0}'), Item.of('cosmos:steel_shovel', '{Damage:0}'),
//        'cosmos:smallsolarpanel', 'createbigcannons:steel_ingot', 'cosmos:titanium_plate', Item.of('cosmos:titaniumarmour_leggings', '{Damage:0}'),
//         Item.of('cosmos:titanium_showel', '{Damage:0}'), Item.of('cosmos:titaniumpickaxe', '{Damage:0}'), Item.of('cosmos:steelarmour_leggings', '{Damage:0}'), 
//         Item.of('cosmos:steel_pickaxe', '{Damage:0}'), Item.of('cosmos:steel_hoe', '{Damage:0}'), 'cosmos:steel_block', 'cosmos:titaniumspaker', 'cosmos:steel_plate']
//'create_sa:zinc_handle'
                              
//                                             event.shaped('cosmos:steelarmour_chestplate', [
//                                                 'B B',
//                                                 'ABA',
//                                                 'ABA'
//                                             ], {
//                                                 A: 'createbigcannons:steel_ingot',
//                                                 B: 'cosmos:steel_plate'
//                                             });
//                                             event.shaped('cosmos:steelarmour_leggings', [
//                                                 'AAA',
//                                                 'A A',
//                                                 'B B'
//                                             ], {
//                                                 A: 'createbigcannons:steel_ingot',
//                                                 B: 'cosmos:steel_plate'
//                                             });

//                                             event.shaped('cosmos:steelarmour_boots', [
//                                                 '   ',
//                                                 'A A',
//                                                 'B B'
//                                             ], {
//                                                 A: 'createbigcannons:steel_ingot',
//                                                 B: 'cosmos:steel_plate'
//                                             });
                                            
//                                             event.shaped('cosmos:steelarmour_helmet', [
//                                                 'BAB',
//                                                 'A A',
//                                                 '   '
//                                             ], {
//                                                 A: 'createbigcannons:steel_ingot',
//                                                 B: 'cosmos:steel_plate'
//                                             });
//                                 //tools

//                                             event.shaped('cosmos:steel_sword', [
//                                                 ' B ',
//                                                 ' B ',
//                                                 ' C '
//                                             ], {
                                                
//                                                 B: 'cosmos:steel_plate',
//                                                 C:'create_sa:zinc_handle'
//                                             });
//                                             event.shaped('cosmos:steel_pickaxe', [
//                                                 'ABA',
//                                                 ' C ',
//                                                 ' C '
//                                             ], {
//                                                 A: 'createbigcannons:steel_ingot',
//                                                 B: 'cosmos:steel_plate',
//                                                 C:'create_sa:zinc_handle'
//                                             });
//                                             event.shaped('cosmos:steel_axe  ', [
//                                                 'AB ',
//                                                 'BC ',
//                                                 ' C '
//                                             ], {
//                                                 A: 'createbigcannons:steel_ingot',
//                                                 B: 'cosmos:steel_plate',
//                                                 C:'create_sa:zinc_handle'
//                                             });
//                                             event.shaped('cosmos:steel_shovel', [
//                                                 ' B ',
//                                                 ' C ',
//                                                 ' C '
//                                             ], {
                                            
//                                                 B: 'cosmos:steel_plate',
//                                                 C:'create_sa:zinc_handle'
//                                             });
//                                             event.shaped('cosmos:steel_hoe', [
//                                                 'BB ',
//                                                 ' C ',
//                                                 ' C '
//                                             ], {
                                            
//                                                 B: 'cosmos:steel_plate',
//                                                 C:'create_sa:zinc_handle'
//                                             });
//                                             event.shapeless('cosmos:steel_block',[
//                                                 'createbigcannons:steel_ingot', 'createbigcannons:steel_ingot', 'createbigcannons:steel_ingot',
//                                                 'createbigcannons:steel_ingot', 'createbigcannons:steel_ingot', 'createbigcannons:steel_ingot',
//                                                 'createbigcannons:steel_ingot', 'createbigcannons:steel_ingot', 'createbigcannons:steel_ingot'
//                                             ])
//                     event.recipes.create.pressing(Item.of('cosmos:steel_plate').withChance(0.85), 'createbigcannons:steel_ingot')
//                     event.remove({id:'cosmos:steel_plated'});                   
//                     event.remove({id:'cosmos:steel_plated_2'});                   
//                     event.remove({id:'cosmos:steel_plated_3'});                   
// //TITANIUM RECIPES **************************************************

//                                             event.shaped('cosmos:titaniumarmour_chestplate', [
//                                                 'B B',
//                                                 'ABA',
//                                                 'ABA'
//                                             ], {
//                                                 A: 'cosmos:titanium_ingot',
//                                                 B: 'cosmos:titanium_plate'
//                                             });
//                                             event.shaped('cosmos:titaniumarmour_leggings', [
//                                                 'AAA',
//                                                 'A A',
//                                                 'B B'
//                                             ], {
//                                                 A: 'cosmos:titanium_ingot',
//                                                 B: 'cosmos:titanium_plate'
//                                             });

//                                             event.shaped('cosmos:titaniumarmour_boots', [
//                                                 '   ',
//                                                 'A A',
//                                                 'B B'
//                                             ], {
//                                                 A: 'cosmos:titanium_ingot',
//                                                 B: 'cosmos:titanium_plate'
//                                             });
                                            
//                                             event.shaped('cosmos:titaniumarmour_helmet', [
//                                                 'BAB',
//                                                 'A A',
//                                                 '   '
//                                             ], {
//                                                 A: 'cosmos:titanium_ingot',
//                                                 B: 'cosmos:titanium_plate'
//                                             });
//                                 //tools

//                                             event.shaped('cosmos:titanium_sword', [
//                                                 ' B ',
//                                                 ' B ',
//                                                 ' C '
//                                             ], {
                                                
//                                                 B: 'cosmos:titanium_plate',
//                                                 C:'create_sa:zinc_handle'
//                                             });
//                                             event.shaped('cosmos:titaniumpickaxe', [
//                                                 'ABA',
//                                                 ' C ',
//                                                 ' C '
//                                             ], {
//                                                 A: 'cosmos:titanium_ingot',
//                                                 B: 'cosmos:titanium_plate',
//                                                 C:'create_sa:zinc_handle'
//                                             });
//                                             event.shaped('cosmos:titanium_axe  ', [
//                                                 'AB ',
//                                                 'BC ',
//                                                 ' C '
//                                             ], {
//                                                 A: 'cosmos:titanium_ingot',
//                                                 B: 'cosmos:titanium_plate',
//                                                 C:'create_sa:zinc_handle'
//                                             });
//                                             event.shaped('cosmos:titanium_showel', [
//                                                 ' B ',
//                                                 ' C ',
//                                                 ' C '
//                                             ], {
                                            
//                                                 B: 'cosmos:titanium_plate',
//                                                 C:'create_sa:zinc_handle'
//                                             });
//                                             event.shaped('cosmos:titanium_hoe', [
//                                                 'BB ',
//                                                 ' C ',
//                                                 ' C '
//                                             ], {
                                            
//                                                 B: 'cosmos:titanium_plate',
//                                                 C:'create_sa:zinc_handle'
//                                             });

                    // event.recipes.create.pressing(Item.of('cosmos:titanium_plate').withChance(0.85), 'cosmos:titanium_ingot')
                    // event.remove({id:'cosmos:titaniumplated'});                   
                    // event.remove({id:'cosmos:titaniumplated_2'});                   
                    // event.remove({id:'cosmos:titaniumplated_3'}); 
                    // event.remove({id:'cosmos:titaniumswordr'}); 
                    // event.remove({id:'cosmos:titaniumaxer'}); 
                    // event.remove({id:'cosmos:titaniumaxel'}); 
                    // event.remove({id:'cosmos:titaniumspader'}); 
                    // event.remove({id:'cosmos:titaniumsledgepick_r'}); 
                    // event.remove({id:'cosmos:titaniumhoel'}); 
                    // event.remove({id:'cosmos:titaniumhoer'}); 

// SULFERIC RECIPES **************************************************
//['cosmos:ashed_sulpher_stone', 'cosmos:sulphuric_sand', 'cosmos:sulphuric_acid_bucket', 'cosmos:sulpher_dust', 'cosmos:ashed_sulpher_dust', 'cosmos:sulpher_stone']
                // event.recipes.create.crushing(Item.of('cosmos:sulpher_dust').withChance(0.05), 'cosmos:sulphuric_sand').processingTime(250)
                // event.recipes.create.crushing(Item.of('cosmos:sulpher_dust').withChance(0.025), 'cosmos:sulpher_stone').processingTime(350)
                // event.recipes.create.milling(Item.of('cosmos:sulpher_dust').withChance(0.015), 'cosmos:sulpher_stone').processingTime(600)
                // event.recipes.create.milling(Item.of('cosmos:sulpher_dust').withChance(0.025), 'cosmos:sulphuric_sand').processingTime(400)

                // event.recipes.create.mixing(Item.of('cosmos:ashed_sulpher_dust'), ['cosmos:sulpher_dust', Item.of('createdieselgenerators:wood_chip').withCount(4)]).heated().processingTime(250)
                // event.recipes.create.milling(Item.of('cosmos:ashed_sulpher_dust').withChance(0.5), 'cosmos:ashed_sulpher_stone').processingTime(200)
                // event.recipes.create.mixing(Fluid.of('cosmos:sulphuric_acid').withAmount(100), ['cosmos:ashed_sulpher_dust',Fluid.of('powergrid:acid').withAmount(250)]).heated()
                // event.recipes.create.emptying([Fluid.of('cosmos:sulphuric_acid'), 'minecraft:bucket'], 'cosmos:sulphuric_acid_bucket')
// SOLAR PANEL RECIPES **************************************************
// ['cosmos:largesolarpanel', 'cosmos:smallsolarpanel', '62x powergrid:integrated_circuit', '62x powergrid:golden_wire', 
// 'powergrid:electrical_gizmo', 'cosmos:titanium_plate', 'create:wrench']
                                        // event.recipes.create.mechanical_crafting(Item.of('cosmos:largesolarpanel').withCount(2), [
                                        //     'AAAAA',
                                        //     ' EGE ',
                                        //     ' WSW ',

                                        // ], {
                                        //     A: 'cosmos:titanium_plate',
                                        //     E:'powergrid:integrated_circuit',
                                        //     G:'powergrid:electrical_gizmo',
                                        //     W:'powergrid:golden_wire',
                                        //     S:'cosmos:steel_plate'
                                        // })    
                                        
                                        // event.recipes.create.mechanical_crafting('cosmos:smallsolarpanel', [
                                        //     'AAA',
                                        //     ' E ',
                                        //     'WSW',

                                        // ], {
                                        //     A: 'cosmos:titanium_plate',
                                        //     E:'powergrid:integrated_circuit',
                                        //     W:'powergrid:golden_wire',
                                        //     S:'cosmos:steel_plate'
                                        // })     

// BOMBS RECIPES **************************************************

// ['60x cosmos:ashed_sulpher_dust', '62x minecraft:blaze_powder', '60x create:powdered_obsidian', '62x create:sturdy_sheet',
//      '62x powergrid:zinc_sheet', '64x create:zinc_ingot', 'cosmos:sulphuric_acid_bucket', 'witherstormmod:super_tnt']
//'#forge:dusts/obsidian'
//['cosmos:sulpher_tnt', '60x minecraft:tnt', '62x minecraft:glowstone_dust', '62x minecraft:redstone', 'minecraft:sugar', 'witherstormmod:super_tnt']
                                        // event.remove({id:'cosmos:ashed_tnt'});
                                        // event.remove({id:'cosmos:sulpher_tnt'});
                                        // event.remove({id:'witherstormmod:formidibomb'});

                                        //    event.shaped('cosmos:ashedsulphuric_tnt', [
                                        //         'ZDZ',
                                        //         'DSD',
                                        //         'ZDZ'
                                        //     ], {
                                        //         // A: 'create:sturdy_sheet',
                                        //         D: 'createbigcannons:gunpowder_pinch',
                                        //         Z: 'create:brass_ingot',
                                        //         S: 'cosmos:sulphuric_acid_bucket'
                                        //     });
                                        //     event.shaped('witherstormmod:super_tnt', [
                                        //         'GZR',
                                        //         'ZTZ',
                                        //         'RZG'
                                        //     ], {
                                        //         R: 'minecraft:redstone',
                                        //         G: 'minecraft:glowstone_dust',
                                        //         Z: 'minecraft:tnt',
                                        //         T: 'cosmos:ashedsulphuric_tnt'
                                        //     });
                                        //     event.shapeless('minecraft:gunpowder',['cosmos:sulpher_dust','minecraft:sugar'])
                                        //     event.recipes.create.compacting('createbigcannons:congealed_nitro','cosmos:sulpher_dust').heated()

                                        //     event.shaped('witherstormmod:formidibomb', [
                                        //         'SSS',
                                        //         'NTN',
                                        //         'SSS'
                                        //     ], {
                                        //         S: 'create:sturdy_sheet',
                                        //         N: 'createbigcannons:congealed_nitro',
                                        //         T: 'witherstormmod:super_tnt'
                                        //     });

                                        //     event.shaped('cosmos:sulpher_tnt', [
                                        //         'BPB',
                                        //         'PSP',
                                        //         'BPB'
                                        //     ], {
                                        //         S: 'cosmos:sulpher_dust',
                                        //         B: 'create:brass_ingot',
                                        //         P: 'createbigcannons:gunpowder_pinch'
                                        //     });

//['60x create:brass_ingot', '63x cosmos:sulpher_dust', 'cosmos:sulpher_tnt', '64x minecraft:gunpowder', '60x createbigcannons:gunpowder_pinch']
// NETHERED RECIPES **************************************************
                // event.remove({id:'hk_create_ores:rose_quartz_recipe'});
                // event.remove({id:'hk_create_ores:brass_ingot_nether_recipe'});
                // event.remove({id:'create:crafting/materials/rose_quartz'});
                // event.remove({id:'createoplenty:mixing/rose_quartz_from_chunk'});

            // event.recipes.create.mixing('hk_create_ores:rose_quartz_piece', ['biomesoplenty:rose_quartz_chunk','biomesoplenty:rose_quartz_chunk','biomesoplenty:rose_quartz_chunk','biomesoplenty:rose_quartz_chunk']).heated()
            // event.recipes.create.mixing('create:rose_quartz', ['hk_create_ores:rose_quartz_piece','hk_create_ores:rose_quartz_piece','hk_create_ores:rose_quartz_piece','hk_create_ores:rose_quartz_piece'])
            // event.shapeless('hk_create_ores:rose_quartz_piece',[
            //     'minecraft:redstone', 'minecraft:quartz'
            // ])

            // event.recipes.create.compacting(Item.of('hk_create_ores:netherred_brass_ingot').withChance(0.65), ['hk_create_ores:netherred_zinc_ingot', 'hk_create_ores:netherred_copper_ingot'])
            // event.recipes.create.compacting(Item.of('hk_create_ores:netherred_brass_ingot').withChance(0.1), 'hk_create_ores:netherred_raw_brass').heated()
            
            // event.recipes.create.haunting('hk_create_ores:netherred_raw_copper', 'minecraft:raw_copper');
            // event.recipes.create.haunting('hk_create_ores:netherred_raw_zinc', 'create:raw_zinc');
            // event.recipes.create.haunting('hk_create_ores:netherred_copper_ingot', 'minecraft:copper_ingot');
            // event.recipes.create.haunting('hk_create_ores:netherred_zinc_ingot', 'create:zinc_ingot');  

//['hk_create_ores:netherred_zinc_ingot', 'hk_create_ores:netherred_copper_ingot', 'hk_create_ores:netherred_brass_ingot', 'hk_create_ores:netherred_raw_copper', 'hk_create_ores:netherred_raw_zinc', 'hk_create_ores:rose_quartz_piece']
//['create:brass_ingot', 'minecraft:raw_copper', 'minecraft:copper_ingot', 'create:raw_zinc', 'create:zinc_ingot']
//"hk_create_ores:netherred_raw_brass",
//"hk_create_ores:netherrack_andesite",


      //ROPE RECIPES **************************************************
    //   ['vstuff:rope', Item.of('vstuff:rope', '{style:{namespace:"vstuff",path:"chain"}}'), 'vstuff:levituff', 'vstuff:reaction_wheel', 'vstuff:mechanical_thruster', 'vs_tournament:thruster', 'vs_clockwork:reactionwheel']
                                            // event.shapeless('simulated:rope_coupling',[
                                            //     'farmersdelight:straw',
                                            //     'farmersdelight:straw',
                                            //     'farmersdelight:straw',
                                            //     'farmersdelight:straw',
                                            //     'farmersdelight:straw',
                                            //     'farmersdelight:straw'
                                            // ])

                                            event.shaped('create:rope_pulley', [
                                                ' A ',
                                                ' R ',
                                                ' S '
                                            ], {
                                                A: 'create:andesite_casing',
                                                R: 'simulated:rope_coupling',
                                                S: 'create:iron_sheet'
                                            });
                                            
                                            // event.shapeless('reinsmod:reins',[
                                            //     'simulated:rope_coupling',
                                            //     'farmersdelight:straw',
                                            //     'minecraft:iron_nugget'
                                            //  ])
                                            // event.shapeless('reinsmod:whip',[
                                            //     'vstuff:rope',
                                            //     'farmersdelight:straw',
                                            //     'minecraft:gold_nugget'
                                            //  ])
                    // event.remove({id:'vstuff:rope'});
                    // event.remove({id:'reinsmod:reins'});
                    event.remove({id:'simulated:rope_coupling'});
                    event.remove({id:'create:crafting/kinetics/rope_pulley'});

                    //['create:rope_pulley', 'create:andesite_casing', 'create:iron_sheet']
                    //['reinsmod:whip', 'reinsmod:reins', 'minecraft:iron_nugget', 'minecraft:gold_nugget']

// WANDERLITE RECIPES **************************************************
// ['createpropulsion:thruster', 'createpropulsion:redstone_magnet', 'createpropulsion:hot_air_burner', 'createpropulsion:propeller', 'vs_clockwork:smart_flap_bearing', 
//     , 'vs_clockwork:wanderlite_crystal', 'vs_clockwork:wanderlite_matrix', 'vs_clockwork:universal_shaft_item'
//['create:fluid_pipe', 'create:chute', 'create:iron_sheet', 'create:spout']
                                            //  event.remove({id:'vs_clockwork:crafting/kinetics/brass_propeller_bearing'});
                                            //  event.remove({id:'vs_clockwork:crafting/kinetics/andesite_flap_bearing'});
                                            //  event.remove({id:'createpropulsion:crafting/propeller'});
                                            //  event.remove({id:'createpropulsion:crafting/thruster'});
                                            //  event.remove({id:'vstuff:reaction_wheel'});
                                            //  event.remove({id:'vstuff:mechanical_thruster'});
                                            //  event.remove({id:'vs_clockwork:crafting/wanderlite/wanderlite_matrix'});
                                            //  event.remove({id:'vs_clockwork:crafting/wanderlite/wanderlite_cube_using_deployer'});
                                            //  event.remove({id:'vs_clockwork:crafting/wanderlite/wanderlite_cube'});
                                            //  event.remove({id:'vs_clockwork:crafting/wanderlite/wanderlite_block'});
                                            //  event.remove({id:'vs_clockwork:crafting/wanderlite/wanderlite_crystal'});


// ['create:brass_block', 'create:industrial_iron_block', 'vstuff:reaction_wheel', 'vs_clockwork:reactionwheel']
                                            //  event.shaped('vstuff:reaction_wheel', 
                                            //     ['AAA',
                                            //      'IBI',
                                            //      'AAA'],
                                            //  {  A:'create:industrial_iron_block',
                                            //     B:'vs_clockwork:reactionwheel',
                                            //     I:'create:brass_block'
                                            //  })
                                            



// ['vstuff:mechanical_thruster', 'minecraft:chain', 'create:industrial_iron_block', 'vs_clockwork:wanderlite_crystal', 'create:encased_fan']
                                            //  event.shaped('vstuff:mechanical_thruster', 
                                            //     ['CEC',
                                            //      'CWC',
                                            //      'CIC'],
                                            //  {  C:'minecraft:chain',
                                            //     W:'vs_clockwork:wanderlite_crystal',
                                            //     I:'create:industrial_iron_block',
                                            //     E:'create:encased_fan'
                                            //  })



                                            //  ['vstuff:levituff', 'minecraft:tuff', 'vs_clockwork:wanderlite_crystal']

//                                         event.recipes.create.crushing([Item.of('vs_clockwork:wanderlite_crystal').withChance(0.1),'minecraft:tuff'], 'vstuff:levituff').processingTime(500)
//                                         event.recipes.create.mixing(Item.of('vstuff:levituff'), ['vs_clockwork:wanderlite_crystal', 'minecraft:tuff']).processingTime(250)

//                                              event.shaped('vs_clockwork:brass_propeller_bearing', 
//                                                 [' A ',
//                                                  ' B ',
//                                                  ' C '],
//                                              {  A:'create:propeller',
//                                                 B:'vs_clockwork:wanderlite_matrix',
//                                                 C:'create:brass_casing'
//                                              })

// //  ['vs_clockwork:wanderlite_crystal', 'vs_clockwork:wanderlite_cube', 'vs_clockwork:wanderlite_block', 'vstuff:levituff', 'vs_clockwork:wanderlite_matrix']
//                 // event.recipes.create.compacting('minecraft:diamond', 'minecraft:coal_block')
//                                              event.shaped('vs_clockwork:wanderlite_block', 
//                                                 ['AA ',
//                                                  'AA ',
//                                                  '   '],
//                                                 {  A:'vs_clockwork:wanderlite_crystal'

//                                                 })
//                                              event.shapeless(Item.of('vs_clockwork:wanderlite_crystal').withCount(4), 
//                                                 'vs_clockwork:wanderlite_block')
//                                             event.recipes.create.pressing(Item.of('vs_clockwork:wanderlite_cube').withChance(0.5), 'vs_clockwork:wanderlite_block')
//                                             event.recipes.create.deploying('vs_clockwork:wanderlite_matrix', ['vs_clockwork:wanderlite_cube','vstuff:levituff'])



//                                              event.shaped('createpropulsion:thruster', 
//                                                 ['ABA',
//                                                  'ACA',
//                                                  ' D '],
//                                                 {  A:'create:iron_sheet',
//                                                 B:'create:fluid_pipe',
//                                                 C:'create:spout',
//                                                 D:'vs_clockwork:wanderlite_matrix'
//                                                 })

//                                             event.shaped('createpropulsion:propeller', 
//                                                 ['ADA',
//                                                  ' B ',
//                                                  ' C '],
//                                              {  A:'create:iron_sheet',
//                                                 B:'create:andesite_casing',
//                                                 C:'create:shaft',
//                                                 D:'vs_clockwork:wanderlite_crystal'
//                                              })
//                                             event.shaped('vs_clockwork:andesite_flap_bearing',
//                                                  [' A ', ' B ', ' C '],{
//                                                      A:'create:copper_valve_handle',
//                                                       B:'create:andesite_casing',
//                                                        C:'vs_clockwork:wanderlite_crystal'
//                                              })


//['createpropulsion:thruster', 'createpropulsion:redstone_magnet', 'createpropulsion:hot_air_burner', 'createpropulsion:propeller', 'vs_clockwork:andesite_flap_bearing',
//  'create:copper_valve_handle', 'create:andesite_casing', 'vs_clockwork:wanderlite_matrix', 'vs_clockwork:universal_shaft_item']
      // MAGNETIC RECIPES **************************************************

      event.remove({id:'create_sa:copper_magnet_recipe'});
      event.remove({id:'simulated:redstone_magnet'});
                                            event.shaped('create_sa:copper_magnet',
                                                ['AAA', 'ABA', 'AAA'],
                                            {   
                                                A:'minecraft:copper_ingot',
                                                B:'powergrid:magnet'
                                            })

                                            // event.shaped('vsch:magnet_boot',
                                            //     ['   ', 'A A', 'B B'],
                                            // {   
                                            //     A:'minecraft:copper_ingot',
                                            //     B:'create_sa:copper_magnet'
                                            // })


                                        
                                        event.recipes.create.mechanical_crafting('simulated:redstone_magnet', [
                                            'AAA',
                                            'BBB',
                                            'CDC',
                                            'BBB',
                                            'AAA'
                                        ], {
                                            A: 'powergrid:magnet',
                                            B:'powergrid:wire',
                                            C:'minecraft:redstone',
                                            D:'powergrid:zinc_sheet'
                                        })
                                        
                                        



        //**************************************************
                                            // event.recipes.create.compacting('minecraft:diamond', ['minecraft:coal','minecraft:coal','minecraft:coal','minecraft:coal','minecraft:coal','minecraft:coal','minecraft:coal','minecraft:coal','minecraft:coal']);

   

    // [   'create_sa:copper_magnet_recipe',
    //     'simulated:rope_coupling'



    // ].forEach((recipeID) => event.remove({id: recipeID}));
    

  
    

 // ['createpropulsion:redstone_magnet', 'create_sa:copper_magnet', 'powergrid:magnet', Item.of('vsch:magnet_boot', '{Damage:0}')]
 //['vs_clockwork:cobbled_nyx', 'minecraft:blackstone']
 //['create:copper_sheet', 'minecraft:redstone']







// ZINC TOOLS UPGRADES **************************************************
// [Item.of('create_sa:zinc_sword', '{Damage:20}'), Item.of('minecraft:iron_sword', '{Damage:0}'), '61x create_sa:zinc_handle', '59x powergrid:zinc_sheet', 
//     '60x create:zinc_ingot', Item.of('minecraft:iron_shovel', '{Damage:0}'), Item.of('minecraft:iron_hoe', '{Damage:0}'), 'minecraft:barrel']

// [Item.of('create_sa:zinc_axe', '{Damage:0}'), Item.of('minecraft:iron_axe', '{Damage:0}'), Item.of('minecraft:iron_pickaxe', '{Damage:0}'), Item.of('create_sa:zinc_pickaxe', 
// '{Damage:0}'), Item.of('create_sa:zinc_shovel', '{Damage:0}'), Item.of('create_sa:zinc_hoe', '{Damage:0}')]
event.remove({id:'create_sa:zinc_sword_recipe'});
event.remove({id:'create_sa:zinc_axe_recipe'});
event.remove({id:'create_sa:zinc_hoe_recipe'});
event.remove({id:'create_sa:zinc_shovel_recipe'});
event.remove({id:'create_sa:zinc_pickaxe_recipe'});
event.remove({id:'create_sa:zinc_leggings_recipe'});
event.remove({id:'create_sa:zinc_boots_recipe'});
event.remove({id:'create_sa:zinc_chestplate_recipe'});
event.remove({id:'create_sa:zinc_helmet_recipe'});


//tools
                                            event.shaped('create_sa:zinc_sword',
                                                [' Z ',
                                                 'PTP',
                                                 ' H '],
                                            {   
                                                T:'minecraft:iron_sword',
                                                Z:'create:zinc_ingot',
                                                P:'powergrid:zinc_sheet',
                                                H:'create_sa:zinc_handle'
                                            })

                                            event.shaped('create_sa:zinc_shovel',
                                                [' P ',
                                                 ' T ',
                                                 ' H '],
                                            {   
                                                T:'minecraft:iron_shovel',
                                                P:'powergrid:zinc_sheet',
                                                H:'create_sa:zinc_handle'
                                            })
                                            event.shaped('create_sa:zinc_hoe',
                                                ['PZ ',
                                                 ' T ',
                                                 ' H '],
                                            {   
                                                T:'minecraft:iron_hoe',
                                                Z:'create:zinc_ingot',
                                                P:'powergrid:zinc_sheet',
                                                H:'create_sa:zinc_handle'
                                            })
                                            event.shaped('create_sa:zinc_axe',
                                                ['PZ ',
                                                 ' T ',
                                                 ' H '],
                                            {   
                                                T:'minecraft:iron_axe',
                                                Z:'create:zinc_ingot',
                                                P:'powergrid:zinc_sheet',
                                                H:'create_sa:zinc_handle'
                                            })

                                            event.shaped('create_sa:zinc_pickaxe',
                                                ['ZPZ',
                                                 ' T ',
                                                 ' H '],
                                            {   
                                                T:'minecraft:iron_pickaxe',
                                                Z:'create:zinc_ingot',
                                                P:'powergrid:zinc_sheet',
                                                H:'create_sa:zinc_handle'
                                            })

//armor
// [Item.of('minecraft:iron_chestplate', '{Damage:0}'), Item.of('minecraft:iron_helmet', '{Damage:0}'), Item.of('create_sa:zinc_chestplate', '{Damage:0}'), 
//     Item.of('create_sa:zinc_helmet', '{Damage:0}'), '58x create:zinc_ingot', '58x powergrid:zinc_sheet']


                                            event.shaped('create_sa:zinc_chestplate',
                                                ['Z Z',
                                                 'PTP',
                                                 'ZPZ'],
                                            {   
                                                T:'minecraft:iron_chestplate',
                                                Z:'create:zinc_ingot',
                                                P:'powergrid:zinc_sheet'
                                            })

                                            event.shaped('create_sa:zinc_helmet',
                                                ['ZPZ',
                                                 'PTP',
                                                 '   '],
                                            {   
                                                T:'minecraft:iron_helmet',
                                                Z:'create:zinc_ingot',
                                                P:'powergrid:zinc_sheet'
                                            })

                                            event.shaped('create_sa:zinc_boots',
                                                ['   ',
                                                 'PTP',
                                                 'Z Z'],
                                            {   
                                                T:'minecraft:iron_boots',
                                                Z:'create:zinc_ingot',
                                                P:'powergrid:zinc_sheet'
                                            })
                                            event.shaped('create_sa:zinc_leggings',
                                                ['ZTZ',
                                                 'P P',
                                                 'Z Z'],
                                            {   
                                                T:'minecraft:iron_leggings',
                                                Z:'create:zinc_ingot',
                                                P:'powergrid:zinc_sheet'
                                            })

// EXPERIENCE TOOLS UPGRADES **************************************************
// [Item.of('create_sa:experience_pickaxe', '{Damage:5}'), Item.of('create_sa:zinc_pickaxe', '{Damage:2}'), Item.of('create_sa:zinc_axe', '
// {Damage:0}'), Item.of('create_sa:zinc_sword', '{Damage:0}'), Item.of('create_sa:zinc_shovel', '{Damage:0}'), Item.of('create_sa:zinc_hoe', '{Damage:0}')
// , Item.of('create_sa:experience_shovel', '{Damage:0}'), 
//     Item.of('create_sa:experience_axe', '{Damage:0}'), Item.of('create_sa:experience_sword', '{Damage:0}')]
event.remove({id:'create_sa:experience_sword_recipe'});
event.remove({id:'create_sa:experience_pickaxe_recipe'});
event.remove({id:'create_sa:experience_axe_recipe'});
event.remove({id:'create_sa:experience_shovel_recipe'});
// event.remove({ type: 'blazinghot:spout_casting' })
     event.recipes.create.filling('create_sa:experience_pickaxe', [Fluid.of('create_enchantment_industry:experience',100), 'create_sa:zinc_pickaxe'])
    event.recipes.create.filling('create_sa:experience_axe', [Fluid.of('create_enchantment_industry:experience',100), 'create_sa:zinc_axe'])
    event.recipes.create.filling('create_sa:experience_shovel', [Fluid.of('create_enchantment_industry:experience',100), 'create_sa:zinc_shovel'])
    event.recipes.create.filling('create_sa:experience_sword', [Fluid.of('create_enchantment_industry:experience',100), 'create_sa:zinc_sword'])
    // event.recipes.createdieselgenerators.compression_molding('create_enchantment_industry:experience', 'create_sa:zinc_pickaxe',"createdieselgenerators:bar")


    //METALS AND CASTING RECIPES **************************************************
    event.recipes.createdieselgenerators.casting('minecraft:iron_ingot','createdieselgenerators:bar', Fluid.of('blazinghot:molten_iron',90))
    event.recipes.createdieselgenerators.casting('create:zinc_ingot','createdieselgenerators:bar', Fluid.of('blazinghot:molten_zinc',90))
    event.recipes.createdieselgenerators.casting('minecraft:gold_ingot','createdieselgenerators:bar', Fluid.of('blazinghot:molten_gold',90))
    event.recipes.createdieselgenerators.casting('minecraft:copper_ingot','createdieselgenerators:bar', Fluid.of('blazinghot:molten_copper',90))
    event.recipes.createdieselgenerators.casting('minecraft:netherite_ingot','createdieselgenerators:bar', Fluid.of('blazinghot:molten_netherite',90))
    event.recipes.createdieselgenerators.casting('create:brass_ingot','createdieselgenerators:bar', Fluid.of('blazinghot:molten_brass',90))
        event.recipes.createdieselgenerators.casting('minecraft:netherite_scrap','createdieselgenerators:bar', Fluid.of('blazinghot:molten_ancient_debris',90))
    event.recipes.createdieselgenerators.casting('blazinghot:blaze_gold_ingot','createdieselgenerators:bar', Fluid.of('blazinghot:molten_blaze_gold',90))






// DIESEL ENGINE RECIPES **************************************************
        // ['minecraft:flint', 'create_sa:heat_engine', 'blazinghot:blaze_gold_sheet', 'blazinghot:blaze_gold_block', '2x create:brass_sheet'
        // , 'createdieselgenerators:huge_diesel_engine', '64x ', '62x blazinghot:sturdy_alloy', 'createdieselgenerators:large_diesel_engine']
// 'minecraft:blaze_rod'
// 'simulated:engine_assembly'
event.remove({id:'createdieselgenerators:crafting/large_diesel_engine'});
event.remove({id:'createdieselgenerators:crafting/huge_diesel_engine'});

                                            event.shaped('createdieselgenerators:large_diesel_engine',
                                                ['RFR',
                                                 'BTB',
                                                 'SPS'],
                                            {   
                                                T:'simulated:engine_assembly',
                                                B:'create:brass_sheet',
                                                S:'blazinghot:sturdy_alloy',
                                                P:'create:sturdy_sheet',
                                                F:'minecraft:flint',
                                                R:'minecraft:blaze_rod'
                                            })
                                            
                                            
                                            event.shaped('createdieselgenerators:huge_diesel_engine',
                                                ['RFR',
                                                 'BTB',
                                                 'SPS'],
                                            {   
                                                T:'create_sa:heat_engine',
                                                B:'blazinghot:blaze_gold_sheet',
                                                S:'blazinghot:sturdy_alloy',
                                                P:'create:brass_block',
                                                F:'minecraft:flint',
                                                R:'blazinghot:blaze_gold_rod'
                                            })


        
    // event.recipes.createdieselgenerators.casting('createbigcannons:cast_iron_ingot', Fluid.of('createbigcannons:molten_cast_iron').withAmount(144),'createdieselgenerators:bar')
    // event.recipes.createdieselgenerators.casting('createbigcannons:steel_ingot', Fluid.of('createbigcannons:molten_steel').withAmount(144),'createdieselgenerators:bar')
    // event.recipes.createdieselgenerators.casting('createbigcannons:bronze_ingot', Fluid.of('createbigcannons:molten_bronze').withAmount(144),'createdieselgenerators:bar')
    // event.recipes.createdieselgenerators.casting('createbigcannons:nethersteel_ingot', Fluid.of('createbigcannons:molten_nethersteel').withAmount(144),'createdieselgenerators:bar')
// event.remove({id:'createbigcannons:melting/melt_cast_iron_ingot'});
// event.remove({id:'createbigcannons:melting/melt_cast_iron_block'});
// event.remove({id:'createbigcannons:melting/melt_cast_iron_nugget'});
// event.remove({id:'createbigcannons:compacting/forge_cast_iron_nugget'});
// event.remove({id:'createbigcannons:compacting/forge_cast_iron_block'});
// event.remove({id:'createbigcannons:compacting/forge_cast_iron_ingot'});
//     event.recipes.create.mixing(Fluid.of('createbigcannons:molten_cast_iron').withAmount(144), ['createbigcannons:cast_iron_ingot']).heated()
//     event.recipes.create.mixing(Fluid.of('createbigcannons:molten_cast_iron').withAmount(1296), ['createbigcannons:cast_iron_block']).heated()
//     event.recipes.create.mixing(Fluid.of('createbigcannons:molten_cast_iron').withAmount(16), ['createbigcannons:cast_iron_nugget']).heated()


// event.remove({id:'createbigcannons:melting/melt_bronze_ingot'});
// event.remove({id:'createbigcannons:melting/melt_bronze_block'});
// event.remove({id:'createbigcannons:melting/melt_bronze_nugget'});
// event.remove({id:'createbigcannons:compacting/forge_bronze_nugget'});
// event.remove({id:'createbigcannons:compacting/forge_bronze_block'});
// event.remove({id:'createbigcannons:compacting/forge_bronze_ingot'});
//     event.recipes.create.mixing(Fluid.of('createbigcannons:molten_bronze').withAmount(144), ['createbigcannons:bronze_ingot']).heated()
//     event.recipes.create.mixing(Fluid.of('createbigcannons:molten_bronze').withAmount(1296), ['createbigcannons:bronze_block']).heated()
//     event.recipes.create.mixing(Fluid.of('createbigcannons:molten_bronze').withAmount(16), ['createbigcannons:bronze_scrap']).heated()

// event.remove({id:'createbigcannons:melting/melt_steel_ingot'});
// event.remove({id:'createbigcannons:melting/melt_steel_block'});
// event.remove({id:'createbigcannons:melting/melt_steel_nugget'});
// event.remove({id:'createbigcannons:compacting/forge_steel_nugget'});
// event.remove({id:'createbigcannons:compacting/forge_steel_block'});
// event.remove({id:'createbigcannons:compacting/forge_steel_ingot'});
//     event.recipes.create.mixing(Fluid.of('createbigcannons:molten_steel').withAmount(144), ['createbigcannons:steel_ingot']).heated()
//     event.recipes.create.mixing(Fluid.of('createbigcannons:molten_steel').withAmount(1296), ['createbigcannons:steel_block']).heated()
//     event.recipes.create.mixing(Fluid.of('createbigcannons:molten_steel').withAmount(16), ['createbigcannons:steel_scrap']).heated()


// event.remove({id:'createbigcannons:melting/melt_nethersteel_ingot'});
// event.remove({id:'createbigcannons:melting/melt_nethersteel_block'});
// event.remove({id:'createbigcannons:melting/melt_nethersteel_nugget'});
// event.remove({id:'createbigcannons:compacting/forge_nethersteel_nugget'});
// event.remove({id:'createbigcannons:compacting/forge_nethersteel_block'});
// event.remove({id:'createbigcannons:compacting/forge_nethersteel_ingot'});
//     event.recipes.create.mixing(Fluid.of('createbigcannons:molten_nethersteel').withAmount(144), ['createbigcannons:nethersteel_ingot']).heated()
//     event.recipes.create.mixing(Fluid.of('createbigcannons:molten_nethersteel').withAmount(1296), ['createbigcannons:nethersteel_block']).heated()
//     event.recipes.create.mixing(Fluid.of('createbigcannons:molten_nethersteel').withAmount(16), ['createbigcannons:nethersteel_nugget']).heated()
// ['createbigcannons:cast_iron_ingot', 'createbigcannons:steel_ingot', 'createbigcannons:bronze_ingot', 'createbigcannons:nethersteel_ingot']

//MISC MOLDING AND CASTING RECIPES **************************************************
// ['minecraft:lightning_rod', 'create_sa:zinc_handle', 'minecraft:dried_kelp', 'createdieselgenerators:kelp_handle']

    event.recipes.createdieselgenerators.casting('minecraft:lightning_rod','createdieselgenerators:lines', Fluid.of('blazinghot:molten_copper', 270))
    event.recipes.createdieselgenerators.casting('create_sa:zinc_handle','createdieselgenerators:lines', Fluid.of('blazinghot:molten_zinc', 180))
    event.recipes.createdieselgenerators.compression_molding('createdieselgenerators:kelp_handle',"createdieselgenerators:lines", 'minecraft:dried_kelp')



    // List of recipe IDs
// blazinghot:casting/porcelain/nugget/gold
// blazinghot:casting/sturdy/ingot/copper
// blazinghot:casting/porcelain/ingot/iron
// blazinghot:casting/porcelain/nugget/brass
// blazinghot:casting/sturdy/nugget/gold
// blazinghot:casting/sturdy/ingot/netherite
// blazinghot:casting/sturdy/sturdy_sheet
// blazinghot:casting/sturdy/ingot/iron
// blazinghot:casting/sturdy/nugget/iron
// blazinghot:casting/porcelain/nugget/iron
// blazinghot:casting/sturdy/ingot/gold
// blazinghot:casting/sturdy/nugget/blaze_gold
// blazinghot:casting/porcelain/ingot/copper
// blazinghot:casting/porcelain/sturdy_alloy
// blazinghot:casting/porcelain/nugget/copper
// blazinghot:casting/porcelain/ingot/zinc
// blazinghot:casting/sturdy_blank_mold
// blazinghot:casting/porcelain/ingot/blaze_gold
// blazinghot:casting/sturdy/ingot/brass
// blazinghot:casting/sturdy/rod/blaze_gold
// blazinghot:casting/porcelain/sheet/blaze_gold
// blazinghot:casting/sturdy/sheet/brass
// blazinghot:casting/sturdy_sheet_mold
// blazinghot:casting/sturdy/nugget/copper
// blazinghot:casting/sturdy/andesite_alloy
// blazinghot:casting/porcelain/sheet/iron
// blazinghot:casting/sturdy/nugget/zinc
// blazinghot:casting/porcelain/netherite_scrap
// blazinghot:casting/porcelain/nugget/zinc
// blazinghot:casting/porcelain/sturdy_sheet
// blazinghot:casting/porcelain/sheet/copper
// blazinghot:casting/porcelain/andesite_alloy
// blazinghot:casting/sturdy/nugget/brass
// blazinghot:casting/sturdy_ingot_mold
// blazinghot:casting/sturdy_nugget_mold
// blazinghot:casting/sturdy/netherite_scrap
// blazinghot:casting/sturdy/ingot/blaze_gold
// blazinghot:casting/porcelain/ingot/gold
// blazinghot:casting/sturdy/golden_sheet
// blazinghot:casting/porcelain/rod/blaze_gold
// blazinghot:casting/porcelain/ingot/brass
// blazinghot:casting/sturdy/sheet/blaze_gold
// blazinghot:casting/sturdy/sheet/copper
// blazinghot:casting/porcelain/golden_sheet
// blazinghot:casting/sturdy/sheet/iron
// blazinghot:casting/porcelain/sheet/brass
// blazinghot:casting/porcelain/ingot/netherite
// blazinghot:casting/sturdy/ingot/zinc
// blazinghot:casting/porcelain/nugget/blaze_gold
// blazinghot:casting/sturdy_rod_mold
// blazinghot:casting/sturdy/sturdy_alloy

// Recipe removals
event.remove({id:'blazinghot:casting/porcelain/nugget/gold'});
event.remove({id:'blazinghot:casting/sturdy/ingot/copper'});
event.remove({id:'blazinghot:casting/porcelain/ingot/iron'});
event.remove({id:'blazinghot:casting/porcelain/nugget/brass'});
event.remove({id:'blazinghot:casting/sturdy/nugget/gold'});
event.remove({id:'blazinghot:casting/sturdy/ingot/netherite'});
event.remove({id:'blazinghot:casting/sturdy/sturdy_sheet'});
event.remove({id:'blazinghot:casting/sturdy/ingot/iron'});
event.remove({id:'blazinghot:casting/sturdy/nugget/iron'});
event.remove({id:'blazinghot:casting/porcelain/nugget/iron'});
event.remove({id:'blazinghot:casting/sturdy/ingot/gold'});
event.remove({id:'blazinghot:casting/sturdy/nugget/blaze_gold'});
event.remove({id:'blazinghot:casting/porcelain/ingot/copper'});
event.remove({id:'blazinghot:casting/porcelain/sturdy_alloy'});
event.remove({id:'blazinghot:casting/porcelain/nugget/copper'});
event.remove({id:'blazinghot:casting/porcelain/ingot/zinc'});
event.remove({id:'blazinghot:casting/sturdy_blank_mold'});
event.remove({id:'blazinghot:casting/porcelain/ingot/blaze_gold'});
event.remove({id:'blazinghot:casting/sturdy/ingot/brass'});
event.remove({id:'blazinghot:casting/sturdy/rod/blaze_gold'});
event.remove({id:'blazinghot:casting/porcelain/sheet/blaze_gold'});
event.remove({id:'blazinghot:casting/sturdy/sheet/brass'});
event.remove({id:'blazinghot:casting/sturdy_sheet_mold'});
event.remove({id:'blazinghot:casting/sturdy/nugget/copper'});
event.remove({id:'blazinghot:casting/sturdy/andesite_alloy'});
event.remove({id:'blazinghot:casting/porcelain/sheet/iron'});
event.remove({id:'blazinghot:casting/sturdy/nugget/zinc'});
event.remove({id:'blazinghot:casting/porcelain/netherite_scrap'});
event.remove({id:'blazinghot:casting/porcelain/nugget/zinc'});
event.remove({id:'blazinghot:casting/porcelain/sturdy_sheet'});
event.remove({id:'blazinghot:casting/porcelain/sheet/copper'});
event.remove({id:'blazinghot:casting/porcelain/andesite_alloy'});
event.remove({id:'blazinghot:casting/sturdy/nugget/brass'});
event.remove({id:'blazinghot:casting/sturdy_ingot_mold'});
event.remove({id:'blazinghot:casting/sturdy_nugget_mold'});
event.remove({id:'blazinghot:casting/sturdy/netherite_scrap'});
event.remove({id:'blazinghot:casting/sturdy/ingot/blaze_gold'});
event.remove({id:'blazinghot:casting/porcelain/ingot/gold'});
event.remove({id:'blazinghot:casting/sturdy/golden_sheet'});
event.remove({id:'blazinghot:casting/porcelain/rod/blaze_gold'});
event.remove({id:'blazinghot:casting/porcelain/ingot/brass'});
event.remove({id:'blazinghot:casting/sturdy/sheet/blaze_gold'});
event.remove({id:'blazinghot:casting/sturdy/sheet/copper'});
event.remove({id:'blazinghot:casting/porcelain/golden_sheet'});
event.remove({id:'blazinghot:casting/sturdy/sheet/iron'});
event.remove({id:'blazinghot:casting/porcelain/sheet/brass'});
event.remove({id:'blazinghot:casting/porcelain/ingot/netherite'});
event.remove({id:'blazinghot:casting/sturdy/ingot/zinc'});
event.remove({id:'blazinghot:casting/porcelain/nugget/blaze_gold'});
event.remove({id:'blazinghot:casting/sturdy_rod_mold'});
event.remove({id:'blazinghot:casting/sturdy/sturdy_alloy'});


event.remove({id:"blazinghot:crafting/iron_carrot"});
event.remove({id:"blazinghot:crafting/iron_apple"});
event.remove({id:"blazinghot:crafting/blaze_carrot"});
event.remove({id:"blazinghot:crafting/blaze_apple"});
event.remove({id:"blazinghot:crafting/copper_carrot"});
event.remove({id:"blazinghot:crafting/copper_apple"});
event.remove({id:"blazinghot:crafting/zinc_carrot"});
event.remove({id:"blazinghot:crafting/zinc_apple"});
event.remove({id:"blazinghot:crafting/brass_carrot"});
event.remove({id:"blazinghot:crafting/brass_apple"});















    // ['mace_port:heavy_core', 'createbigcannons:nethersteel_block', 'vs_clockwork:wanderlite_matrix', 
    //     'create_sa:zinc_handle', 'mace_port:wind_charge', 'vs_clockwork:wanderlite_crystal', 'minecraft:quartz']
    //[Item.of('mace_port:mace', '{Damage:0}'), 'create_sa:zinc_handle']
    // event.recipes.create.mixing('mace_port:heavy_core', [Fluid.of('createbigcannons:molten_nethersteel').withAmount(1152), 'vs_clockwork:wanderlite_matrix']).superheated()
// event.remove({id:'mace_port:heavy_core'});
// event.remove({id:'mace_port:wind_charge'});
// event.remove({id:'mace_port:mace'});

//         event.shaped('mace_port:mace', [
//             ' H ',
//             ' R ',
//             '   '
//         ], {
//             H: 'mace_port:heavy_core',
//             R: 'create_sa:zinc_handle'
//         });

//         event.recipes.create.mechanical_crafting('mace_port:heavy_core', [
//             'PSP',
//             'SMS',
//             'PSP'
//         ], {
//             P: 'create:sturdy_sheet',
//             M: 'vs_clockwork:wanderlite_matrix',
//             S: 'createbigcannons:nethersteel_ingot'
//         });
//         event.recipes.create.mixing('mace_port:wind_charge', ['minecraft:quartz', 'vs_clockwork:wanderlite_crystal'])




})