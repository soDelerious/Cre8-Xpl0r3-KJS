 ItemEvents.modifyTooltips(event => {



 event.modify('kubejs:frost_catalyst', { shift: false }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Hold ["),
            Text.white("Shift"),
            Text.gray("] for Summary")

            // Text.gray("Hold [Shift] for Summary")
        ]))
    })
 event.modify('kubejs:frost_catalyst', { shift: true }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Place infront of an encased fan to access bulk"),
            Text.blue(" Freezing ").italic(),
            Text.gray("recipes. Alternatively,"),
            Text.blue(" Melt ").italic(),
            Text.gray( "the ice down to obtain Skor's gauntlet")

            // Text.gray("Hold [Shift] for Summary")
        ]))
    })


     event.modify('kubejs:snad_catalyst', { shift: false }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Hold ["),
            Text.white("Shift"),
            Text.gray("] for Summary")

            // Text.gray("Hold [Shift] for Summary")
        ]))
    })
 event.modify('kubejs:snad_catalyst', { shift: true }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Place infront of an encased fan to access bulk"),
            Text.yellow(" Sanding ").italic(),
            Text.gray("recipes. Alternatively,"),
            Text.yellow(" Wash ").italic(),
            Text.gray( "the sand off to obtain Sirok's gauntlet")


            // Text.gray("Hold [Shift] for Summary")
        ]))
    })




         event.modify('block_factorys_bosses:dragon_skull', { shift: false }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Hold ["),
            Text.white("Shift"),
            Text.gray("] for Summary")

            // Text.gray("Hold [Shift] for Summary")
        ]))
    })
 event.modify('block_factorys_bosses:dragon_skull', { shift: true }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("An Infinite, Fuelless Heat Source. Provides"),
            Text.gold(" Draconic/Heated ").italic(),
            Text.gray("heat level to basins. Alternatively, can be"),
            Text.gold(" Crushed ").italic(),
            Text.gray("to obtain the Dragon Guard's Shield."),
            // Text.gray("Hold [Shift] for Summary")
        ]))
    })





             event.modify('create:cart_assembler', { shift: false }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Hold ["),
            Text.white("Shift"),
            Text.gray("] for "),
            Text.gold("PACK INFO")

            // Text.gray("Hold [Shift] for Summary")
        ]))
    })
 event.modify('create:cart_assembler', { shift: true }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Cart Contraption Pickup is Disabled! Transport via physics contraptions instead!")
            // Text.gray("Hold [Shift] for Summary")
        ]))
    })




                 event.modify('create:hose_pulley', { shift: false }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Hold ["),
            Text.white("Shift"),
            Text.gray("] for "),
            Text.gold("PACK INFO")

            // Text.gray("Hold [Shift] for Summary")
        ]))
    })
 event.modify('create:hose_pulley', { shift: true }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Infinite Fluid Volumes are disabled! Access terralith's lava mantles instead!")
            // Text.gray("Hold [Shift] for Summary")
        ]))
    })

    event.modify('kubejs:wither_knight_catalyst', { shift: false }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Hold ["),
            Text.white("Shift"),
            Text.gray("] for Summary")

            // Text.gray("Hold [Shift] for Summary")
        ]))
    })
 event.modify('kubejs:wither_knight_catalyst', { shift: true }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("An Infinite, Fuelless Heat Source. Provides"),
            Text.aqua(" Withered/Super-Heated ").italic(),
            Text.gray("heat level to basins. Alternatively, can be"),
            Text.aqua(" Deployed ").italic(),
            Text.gray("to obtain Helvar's Sword."),
        ]))
    })


event.modify('overpacked:giant_backpack', { shift: false }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Hold ["),
            Text.white("Shift"),
            Text.gray("] for Summary")

            // Text.gray("Hold [Shift] for Summary")
        ]))
    })
 event.modify('overpacked:giant_backpack', { shift: true }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("A bundle's beefier cousin. Provides 108 inventory slots, yet slows the player down the more slots are filled."),

        ]))
    })



event.modify('naturescompass:naturescompass', { shift: false }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Hold ["),
            Text.white("Shift"),
            Text.gray("] for Summary")

            // Text.gray("Hold [Shift] for Summary")
        ]))
    })
 event.modify('naturescompass:naturescompass', { shift: true }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("A highly intelligent compass. Use to locate any possible biome. Compatible with the navigation table"),

        ]))
    })
    
event.modify('kubejs:copper_map', { shift: false }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Hold ["),
            Text.white("Shift"),
            Text.gray("] for Summary")

            // Text.gray("Hold [Shift] for Summary")
        ]))
    })
 event.modify('kubejs:copper_map', { shift: true }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("An intelligent navigation device. When in hotbar, allows the player access to a mini and world map by pressing [m] (default keybind)"),

        ]))
    })
// event.modify('kubejs:incomplete_totem', { shift: false }, text => {
//         // Insert a nice "hold Shift" hint at line #1
//         text.insert(1, Text.join([
//             Text.gray("Hold ["),
//             Text.white("Shift"),
//             Text.gray("] for Summary")

//             // Text.gray("Hold [Shift] for Summary")
//         ]))
//     })
//  event.modify('kubejs:incomplete_totem', { shift: true }, text => {
//         // Insert a nice "hold Shift" hint at line #1
//         text.insert(1, Text.join([
//             Text.gray("An incomplete totem of undying, missing nothing but the "),
//             Text.green("emeralds").italic(),
//             Text.gray(" in it's eyes. Some force may be preventing it's completion, until all advanced foes are slain.")
//         ]))
//     })

    event.modify('aeronautics_utility_objects:universal_joint_rod2', { shift: false }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Hold ["),
            Text.white("Shift"),
            Text.gray("] for Summary")

            // Text.gray("Hold [Shift] for Summary")
        ]))

    })
 event.modify('aeronautics_utility_objects:universal_joint_rod2', { shift: true }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Longer connections, at a reduction of flexibility."),

        ]))

    })

        event.modify('aeronautics_utility_objects:universal_joint_rod', { shift: false }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Hold ["),
            Text.white("Shift"),
            Text.gray("] for Summary")

            // Text.gray("Hold [Shift] for Summary")
        ]))

    })
 event.modify('aeronautics_utility_objects:universal_joint_rod', { shift: true }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Shorter connections, at an increase of flexibility."),

        ]))

    })

const copper=['caverns_and_chasms:copper_helmet', 'caverns_and_chasms:copper_chestplate', 'caverns_and_chasms:copper_leggings', 'caverns_and_chasms:copper_boots']

copper.forEach((item) => {
event.modify(item, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Watch out! Wearing may subject you to "),
            Text.white("lightning "),
            Text.gray("strikes!")

            // Text.gray("Hold [Shift] for Summary")
        ]))

    })

})


event.modify('kubejs:chunk_pulser', { shift: false }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Hold ["),
            Text.white("Shift"),
            Text.gray("] for Summary")

            // Text.gray("Hold [Shift] for Summary")
        ]))

    })
 event.modify('kubejs:chunk_pulser', { shift: true }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Pre-Loads chunks within a 50 chunk radius, chunky operations cannot be interrupted by other pulsers. Activate by feeding an "),
            Text.gray("§5Amethyst Shard ").italic(),
            Text.gray("while the device is Redstone powered.")
        ]))

    })


        event.modify('kubejs:whirlwind_helmet', { shift: false }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Hold ["),
            Text.white("Shift"),
            Text.gray("] for Summary")

            // Text.gray("Hold [Shift] for Summary")
        ]))

        })
    event.modify('kubejs:whirlwind_helmet', { shift: true }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Applies 'Wind Charged' to nearby mobs when falling. Additionally helps protect the player from fall damage."),

        ]))

    })

    event.modify('playertrackingcompass:player_tracking_compass',  text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Only works in the Navigation Table."),

        ]))

    })




            event.modify('friendsandfoes:wildfire_crown', { shift: false }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Hold ["),
            Text.white("Shift"),
            Text.gray("] for Summary")

            // Text.gray("Hold [Shift] for Summary")
        ]))

        })
    event.modify('friendsandfoes:wildfire_crown', { shift: true }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Applies 'Fire Resistance' to the player temporarily when taking fire damage. Additionally sets hurt entities on fire."),

        ]))

    })


    
const disabledItems = [
    "artifacts:eternal_steak",
'naturalist:cooked_egg',
'aeronautics_utility_objects:damping_stress_bearing',
'createpropulsion:liquid_burner',
"artifacts:everlasting_beef",
'blazinghot:red_modern_lamp_quad_panel',
 'blazinghot:black_modern_lamp_quad_panel',
  'blazinghot:white_modern_lamp_half_panel',
   'blazinghot:orange_modern_lamp_half_panel',
   'orevolution:steel_pillar',
 'orevolution:cut_steel_block',
  'orevolution:steel_block',
   'orevolution:basic_smithing_template',
    'orevolution:steel_ingot',
     'orevolution:steel_scythe',
      'orevolution:steel_broadaxe',
       'orevolution:steel_hammer',
        'orevolution:steel_digger',
         'orevolution:steel_door',
          'orevolution:steel_trapdoor',
 'orevolution:steel_bars',  
 'orevolution:steel_anvil',
 'orevolution:bronze_boots',
 'orevolution:radar',
 'orevolution:limestone', 'orevolution:limestone_pillar', 'orevolution:polished_limestone',
                                  'orevolution:bronze_chestplate',
                                   'orevolution:bronze_helmet',
                                    'orevolution:bronze_leggings',
                                     'orevolution:tungsten_boots',
                                      'orevolution:tungsten_leggings',
                                       'orevolution:tungsten_helmet',
                                  'orevolution:tungsten_chestplate',
                                 'createpropulsion:platinum_nugget',
                                 'createpropulsion:raw_platinum',
                                  'createpropulsion:platinum_ingot',
                                 'createpropulsion:raw_platinum_block',
                                 'createpropulsion:platinum_ore',
                                  'createpropulsion:platinum_block', 
                                 'createpropulsion:deepslate_platinum_ore',
                                 'create_dragons_plus:blaze_upgrade_smithing_template',
    'blazinghot:magenta_modern_lamp_half_panel',
     'blazinghot:light_blue_modern_lamp_half_panel',
      'blazinghot:yellow_modern_lamp_half_panel',
       'blazinghot:lime_modern_lamp_half_panel',
        'blazinghot:light_gray_modern_lamp_small_panel',
         'blazinghot:black_modern_lamp_small_panel',
          'blazinghot:red_modern_lamp_small_panel',
           'blazinghot:green_modern_lamp_small_panel',
            'blazinghot:brown_modern_lamp_small_panel',
            'create_aeronautics_toolgun:magnetic_gun',
             'blazinghot:purple_modern_lamp_small_panel',
              'blazinghot:cyan_modern_lamp_small_panel',
                'blazinghot:blue_modern_lamp_small_panel',
                'galosphere:rope_dart',
                 'blazinghot:gray_modern_lamp_small_panel',
                  'blazinghot:pink_modern_lamp_small_panel',
                   'blazinghot:yellow_modern_lamp_small_panel',
                    'blazinghot:light_blue_modern_lamp_small_panel',
                     'blazinghot:magenta_modern_lamp_small_panel',
                      'blazinghot:orange_modern_lamp_small_panel',
                       'blazinghot:white_modern_lamp_small_panel',
                        'blazinghot:lime_modern_lamp_small_panel',
                         'blazinghot:black_modern_lamp_half_panel',
                          'blazinghot:red_modern_lamp_half_panel',
                           'blazinghot:green_modern_lamp_half_panel',
                            'blazinghot:brown_modern_lamp_half_panel',
                             'blazinghot:blue_modern_lamp_half_panel',
                              'blazinghot:purple_modern_lamp_half_panel',
                               'blazinghot:cyan_modern_lamp_half_panel',
                                'blazinghot:light_gray_modern_lamp_half_panel', 
                                'blazinghot:gray_modern_lamp_half_panel',

'get_creative:structure_capsule',
// 'get_creative:fluid_barrel',
 'get_creative:hinge_bearing',
  'get_creative:industrial_fan',
   'get_creative:wind_up_key',
    'get_creative:encapsulator',
    //  'get_creative:glue_cleaner',
      'get_creative:bamboo_handle',
       'get_creative:mangrove_handle',
        'get_creative:dark_oak_handle',
         'get_creative:brass_handle',
          'get_creative:industrial_iron_handle',
           'get_creative:iron_handle',
            'get_creative:oak_handle',
             'get_creative:oxidized_copper_handle',
              'get_creative:cherry_handle',
               'get_creative:acacia_handle',
                'get_creative:weathered_copper_handle',
                 'get_creative:copper_handle',
                  'get_creative:warped_handle',
                   'get_creative:crimson_handle',
                    'get_creative:jungle_handle',
                     'get_creative:birch_handle',
                      'get_creative:spruce_handle', 
    'get_creative:exposed_copper_handle',
// 'luminous_beasts:golden_hermit_king_spawn_egg',
//  'luminous_beasts:red_mummy_spawn_egg',
//   'luminous_beasts:coral_sea_viper_spawn_egg',
//    'luminous_beasts:arid_yeti_spawn_egg',
//     'luminous_beasts:frigid_gator_spawn_egg',
//      'luminous_beasts:wind_phoenix_spawn_egg',
//       'luminous_beasts:baby_wind_phoenix_spawn_egg',
//        'luminous_beasts:bogged_bone_stalker_spawn_egg',
//         'luminous_beasts:albino_moth_cocoon',
//          'luminous_beasts:wind_phoenix_egg',
//           'luminous_beasts:rare_viper_egg',
//            'luminous_beasts:soul_ember_spawn_egg',
//             'luminous_beasts:albino_moth_spawn_egg',
//              'luminous_beasts:woodland_witch_doctor_spawn_egg',
//               'luminous_beasts:bogged_shadow_spawn_egg',
//      'luminous_beasts:soul_furnace_spawn_egg',
     'artifacts:umbrella',

// 'luminous_beasts:ultimate_bestiary', 
// 'luminous_beasts:cherry_tree_ent_spawn_egg', 
// 'luminous_beasts:tree_ent_spawn_egg',
//  'luminous_beasts:rare_spitter_trophy',
//   'luminous_beasts:spitter_trophy',
//   'luminous_beasts:tree_ent_disc', 
//     'luminous_beasts:executioner_disc',
//      'luminous_beasts:crimson_spitter_disc',
//    'luminous_beasts:executioner_cowl_helmet',
//     'luminous_beasts:rare_tree_ent_trophy',
//      'luminous_beasts:tree_ent_trophy',
//       'luminous_beasts:warped_mushlin_king_spawn_egg',
//        'luminous_beasts:spore_bundle',
//         'luminous_beasts:piglin_executioner_spawn_egg',
//          'luminous_beasts:rare_executioner_trophy',
//           'luminous_beasts:magic_root',
//            'luminous_beasts:crimson_mushlin_king_spawn_egg',
//             'luminous_beasts:basalt_executioner_spawn_egg',
//  'luminous_beasts:executioner_trophy',
'blazinghot:sturdy_ingot_mold',
 'blazinghot:porcelain_blank_mold',
  'blazinghot:clay_blank_mold',
   'blazinghot:casting_depot',
    'blazinghot:clay_nugget_mold',
     'blazinghot:porcelain_ingot_mold',
       'blazinghot:sturdy_nugget_mold',
        'blazinghot:sturdy_blank_mold',
         'blazinghot:clay_ingot_mold',
          'blazinghot:porcelain_rod_mold',
           'blazinghot:clay_rod_mold',
            'blazinghot:sturdy_rod_mold',
             'blazinghot:porcelain_sheet_mold',
              'blazinghot:clay_sheet_mold',
               'blazinghot:sturdy_sheet_mold',
                'blazinghot:porcelain_nugget_mold',
'createdieselgenerators:engine_piston',
 'createdieselgenerators:diesel_engine',

 'createpropulsion:coral_generator',
     'createpropulsion:cable',
      'createpropulsion:coral_bucket',


'blazinghot:yellow_modern_lamp_double_panel',
'blazinghot:light_blue_modern_lamp_double_panel',
'blazinghot:lime_modern_lamp_double_panel',
'blazinghot:pink_modern_lamp_double_panel',
'blazinghot:gray_modern_lamp_double_panel',
'blazinghot:light_gray_modern_lamp_double_panel',
'blazinghot:cyan_modern_lamp_double_panel',
'blazinghot:purple_modern_lamp_double_panel',
'blazinghot:blue_modern_lamp_double_panel',
'blazinghot:green_modern_lamp_quad_panel',
'blazinghot:red_modern_lamp_quad_panel',
'blazinghot:black_modern_lamp_quad_panel',
'blazinghot:white_modern_lamp_half_panel',
'blazinghot:orange_modern_lamp_half_panel',
'blazinghot:magenta_modern_lamp_half_panel',
'blazinghot:light_blue_modern_lamp_half_panel',
'blazinghot:yellow_modern_lamp_half_panel',
'blazinghot:lime_modern_lamp_half_panel',
'blazinghot:blue_modern_lamp_quad_panel',
'blazinghot:purple_modern_lamp_quad_panel',
'blazinghot:brown_modern_lamp_quad_panel',
'blazinghot:cyan_modern_lamp_quad_panel',
'blazinghot:gray_modern_lamp_quad_panel',
'blazinghot:pink_modern_lamp_quad_panel',
'blazinghot:lime_modern_lamp_quad_panel',
'blazinghot:light_gray_modern_lamp_quad_panel',
'blazinghot:yellow_modern_lamp_quad_panel',
'blazinghot:light_blue_modern_lamp_quad_panel',
'blazinghot:orange_modern_lamp_quad_panel',
'blazinghot:white_modern_lamp_quad_panel',
'blazinghot:red_modern_lamp_double_panel',
'blazinghot:green_modern_lamp_double_panel',
'blazinghot:brown_modern_lamp_double_panel',
'blazinghot:black_modern_lamp_double_panel',
'blazinghot:magenta_modern_lamp_quad_panel',
 'blazinghot:pink_modern_lamp_half_panel',



'blazinghot:white_modern_lamp',
'blazinghot:orange_modern_lamp',
'blazinghot:magenta_modern_lamp',
'blazinghot:light_blue_modern_lamp',
'blazinghot:yellow_modern_lamp',
'blazinghot:lime_modern_lamp',
'blazinghot:pink_modern_lamp',
'blazinghot:gray_modern_lamp',
'blazinghot:orange_modern_lamp_double_panel',
'blazinghot:white_modern_lamp_double_panel',
'blazinghot:black_modern_lamp_panel',
'blazinghot:green_modern_lamp_panel',
'blazinghot:brown_modern_lamp_panel',
'blazinghot:blue_modern_lamp_panel',
'blazinghot:purple_modern_lamp_panel',
'blazinghot:red_modern_lamp_panel',
'blazinghot:magenta_modern_lamp_double_panel',
'blazinghot:cyan_modern_lamp_panel',
'blazinghot:light_gray_modern_lamp_panel',
'blazinghot:gray_modern_lamp_panel',
'blazinghot:pink_modern_lamp_panel',
'blazinghot:yellow_modern_lamp_panel',
'blazinghot:light_blue_modern_lamp_panel',
'blazinghot:magenta_modern_lamp_panel',
'blazinghot:orange_modern_lamp_panel',
'blazinghot:lime_modern_lamp_panel',
'blazinghot:white_modern_lamp_panel',
'blazinghot:black_modern_lamp',
'blazinghot:red_modern_lamp',
'blazinghot:green_modern_lamp',
'blazinghot:brown_modern_lamp',
'blazinghot:blue_modern_lamp',
'blazinghot:purple_modern_lamp',
'blazinghot:cyan_modern_lamp',
'blazinghot:light_gray_modern_lamp',


"create_sa:flamethrower",


"artifacts:bunny_hoppers",


"createpropulsion:stirling_engine",

"createdieselgenerators:hammer",
"createdieselgenerators:wire_cutters",

"createpropulsion:tempered_wing",

"createpropulsion:wing",

"createpropulsion:pine_resin",
"createpropulsion:turpentine_bucket",
"createpropulsion:solid_burner",


'dndesires:gold_whisk', 'dndesires:lapis_lazuli_shard', 'dndesires:diamond_shard', 'dndesires:coal_piece', 'dndesires:industrial_fan', 'dndesires:stirling_engine', 'dndesires:gold_mixer', 'dndesires:spud_sentry', 'dndesires:hydraulic_press', 'dndesires:sanding_sail', 'dndesires:freezing_sail', 'dndesires:seething_sail', 'dndesires:blasting_sail', 'dndesires:smoking_sail', 'dndesires:haunting_sail', 'dndesires:splashing_sail', 'dndesires:dragon_breathing_sail', 'dndesires:handheld_saw', 'dndesires:creative_gear_motor', 'dndesires:handheld_drill',
'dndesires:fluid_hatch',

"create_sa:brass_drone_item",
"create_sa:drone_controller",
"create_sa:fan_component",
"create_sa:vault_component",


"libraryferret:emerald_coins_jtl",

"libraryferret:diamond_coins_jtl",
"libraryferret:netherite_coins_jtl",

"libraryferret:iron_coins_jtl",

"libraryferret:gold_coins_jtl",


"ftbquests:detector",
"ftbquests:screen_5",
"ftbquests:lootcrate",
"ftbquests:screen_7",
"ftbquests:screen_1",
"ftbquests:screen_3",

'naturalist:deer_spawn_egg', 'naturalist:duck_spawn_egg', 'friendsandfoes:glare_spawn_egg',
"ftbquests:custom_icon",
"ftbquests:missing_item",
"ftbquests:task_screen_configurator",
"ftbquests:stage_barrier",
"ftbquests:barrier",
"block_factorys_bosses:dragon_bones_boots",
"block_factorys_bosses:dragon_bones_leggings",
"block_factorys_bosses:dragon_bones_chestplate",
"artifacts:scarf_of_invisibility",
"ftbquests:loot_crate_opener",
'createpropulsion:cable_relay',                             
'orevolution:tin_ore', 'orevolution:deepslate_tin_ore', 'orevolution:tin_bars', 
'orevolution:tin_nugget', 'orevolution:raw_tin', 'create_sa:copper_hoe',
 'create_sa:copper_shovel', 'create_sa:copper_sword', 'create_sa:copper_axe', 
 'create_sa:copper_pickaxe', 'create_sa:copper_chestplate', 'create_sa:copper_boots', 
 'create_sa:copper_leggings', 'create_sa:copper_helmet', 
'friendsandfoes:copper_button', 'friendsandfoes:exposed_copper_button', 'friendsandfoes:weathered_copper_button', 'friendsandfoes:oxidized_copper_button', 'friendsandfoes:waxed_copper_button', 'friendsandfoes:waxed_exposed_copper_button', 'friendsandfoes:waxed_weathered_copper_button', 'friendsandfoes:waxed_oxidized_copper_button',
   'aeronautics_utility_objects:giant_hydraulic_rod',  
   
   'caverns_and_chasms:copper_nugget',

    'friendsandfoes:copper_golem_spawn_egg',
    'aeronautics_utility_objects:brass_hydraulic_hinge_head', 'orevolution:gold_bars', 
    'orevolution:raw_tin_block',
    'friendsandfoes:exposed_lightning_rod', 'friendsandfoes:weathered_lightning_rod', 'friendsandfoes:oxidized_lightning_rod', 'friendsandfoes:waxed_lightning_rod', 'friendsandfoes:waxed_exposed_lightning_rod', 'friendsandfoes:waxed_weathered_lightning_rod', 'friendsandfoes:waxed_oxidized_lightning_rod',
     'orevolution:tin_ingot'
]

disabledItems.forEach(disable => {
 event.modify(disable, {}, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.red("This item is ").bold().underlined(),
            Text.red("disabled").bold().underlined()

        ]))
    })
})


const rawores = [
    'minecraft:coal',
     'minecraft:charcoal',
      'minecraft:raw_iron',
       'orevolution:raw_platinum', 
       'orevolution:raw_tungsten',
        'minecraft:raw_copper', 
        'caverns_and_chasms:raw_tin', 
        'minecraft:raw_gold', 
        'caverns_and_chasms:raw_silver', 
        'galosphere:raw_palladium', 
        'minecraft:emerald', 
        'minecraft:lapis_lazuli',
         'caverns_and_chasms:spinel',
          'caverns_and_chasms:turquoise',
           'caverns_and_chasms:zirconia', 
           'minecraft:diamond',
            'minecraft:netherite_scrap',
             'minecraft:quartz', 
             'minecraft:amethyst_shard',
              'galosphere:allurite_shard',
               'galosphere:lumiere_shard',
                'orevolution:verdite_nugget',
                 'orevolution:livingstone_shard', 
                 'orevolution:aethersteel_chunk']
const oredesc= [
    'Combusts stuff', 
    'Combusts stuff', 
    'Versatile metal',
     'Unique metal useful for precision applications',
      'Sturdy metal useful for enchanting machinery', 
      'Soft metal useful for wiring and plumbing',
      'Quirky metal with lots of potential',
      'Soft, temperate, and expensive metal',
      'Soft, cool, and expensive metal',
      'Hardening metal useful for drilling',
      'Rare gemstone useful for transaction',
      'Rare gemstone useful for enchantment',
      'Quirky gemstone with a theme of making more unstable and cursed versions of existing blocks and items.',
      'Rare gemstone with exclusively vanity uses.',
      'Mythical gemstone capable of repairing any item',
      'Ledgendary gemstone, shattered yet powerful',
      'Ductile stuff useful for reinforcement',
      'Translucent gemstone useful for optics',
      'Pretty gemstone',
      'Pretty gemstone',
      'Pretty gemstone',
      'Plant metal',
      'Living rock, what else?',
      'Unreal metal capable of unreasonable feats'


]
rawores.forEach(rawore => {
    event.modify(rawore, { shift: false }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Hold ["),
            Text.white("Shift"),
            Text.gray("] for Summary")

            // Text.gray("Hold [Shift] for Summary")
        ]))

        })

    event.modify(rawore, { shift: true }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray(oredesc[rawores.indexOf(rawore)]),

        ]))

    })
})













    event.modify('minecraft:tnt', { shift: false }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Hold ["),
            Text.white("Shift"),
            Text.gray("] for Summary")

            // Text.gray("Hold [Shift] for Summary")
        ]))

        })

    event.modify('minecraft:tnt', { shift: true }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Explodes on impact."),

        ]))

    })


    event.modify('rottencreatures:tnt_barrel', { shift: false }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Hold ["),
            Text.white("Shift"),
            Text.gray("] for Summary")

            // Text.gray("Hold [Shift] for Summary")
        ]))

        })

    event.modify('rottencreatures:tnt_barrel', { shift: true }, text => {
        // Insert a nice "hold Shift" hint at line #1
        text.insert(1, Text.join([
            Text.gray("Does not explode on impact."),

        ]))

    })




})

// ['create:cart_assembler', ]