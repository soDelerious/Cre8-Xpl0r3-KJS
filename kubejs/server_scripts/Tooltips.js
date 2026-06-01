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
            Text.gray("heat level to basins. Alternatively, can be used for bulk"),
            Text.gold(" Blasting ").italic()
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
            Text.gray("heat level to basins. Alternatively, can be used for bulk"),
            Text.aqua(" Haunting ").italic()            // Text.gray("Hold [Shift] for Summary")
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
            Text.gray("An intelligent navigation device. When in hotbar, allows the player access to a mini and world map by pressing [x]"),

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
'get_creative:fluid_barrel',
 'get_creative:hinge_bearing',
  'get_creative:industrial_fan',
   'get_creative:wind_up_key',
    'get_creative:encapsulator',
     'get_creative:glue_cleaner',
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


'luminous_beasts:ultimate_bestiary', 
'luminous_beasts:cherry_tree_ent_spawn_egg', 
'luminous_beasts:tree_ent_spawn_egg',
 'luminous_beasts:rare_spitter_trophy',
  'luminous_beasts:spitter_trophy',
  'luminous_beasts:tree_ent_disc', 
    'luminous_beasts:executioner_disc',
     'luminous_beasts:crimson_spitter_disc',
   'luminous_beasts:executioner_cowl_helmet',
    'luminous_beasts:rare_tree_ent_trophy',
     'luminous_beasts:tree_ent_trophy',
      'luminous_beasts:warped_mushlin_king_spawn_egg',
       'luminous_beasts:spore_bundle',
        'luminous_beasts:piglin_executioner_spawn_egg',
         'luminous_beasts:rare_executioner_trophy',
          'luminous_beasts:magic_root',
           'luminous_beasts:crimson_mushlin_king_spawn_egg',
            'luminous_beasts:basalt_executioner_spawn_egg',
 'luminous_beasts:executioner_trophy',
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


"overpacked:purple_giant_backpack",
"overpacked:orange_giant_backpack",
"overpacked:yellow_giant_backpack",
"overpacked:brown_giant_backpack",

"overpacked:white_giant_backpack",
"overpacked:red_giant_backpack",
"overpacked:green_giant_backpack",
"overpacked:light_blue_giant_backpack",
"overpacked:cyan_giant_backpack",
"overpacked:gray_giant_backpack",
"overpacked:light_gray_giant_backpack",

"overpacked:magenta_giant_backpack",
"overpacked:blue_giant_backpack",
"overpacked:pink_giant_backpack",
"overpacked:black_giant_backpack",
"overpacked:lime_giant_backpack",


"create_sa:brass_drone_item",
"create_sa:drone_controller",
"create_sa:fan_component",
"create_sa:vault_component",

"create_power_loader:empty_andesite_chunk_loader",

"libraryferret:emerald_coins_jtl",

"libraryferret:diamond_coins_jtl",
"libraryferret:netherite_coins_jtl",

"create_power_loader:andesite_chunk_loader",
"libraryferret:iron_coins_jtl",

"libraryferret:gold_coins_jtl",


"ftbquests:detector",
"ftbquests:screen_5",
"ftbquests:lootcrate",
"ftbquests:screen_7",
"ftbquests:screen_1",
"ftbquests:screen_3",


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
'luminous_beasts:rare_witch_doctor_trophy',
 'luminous_beasts:furnace_trophy',
  'luminous_beasts:witch_doctor_trophy',
   'luminous_beasts:bone_stalker_trophy',
    'luminous_beasts:phoenix_trophy',
     'luminous_beasts:vile_gator_trophy',
      'luminous_beasts:yeti_trophy',
       'luminous_beasts:mummy_trophy',
        'luminous_beasts:hermit_king_trophy',
         'luminous_beasts:viper_trophy',
          'luminous_beasts:rare_bone_stalker_trophy',
           'luminous_beasts:rare_phoenix_trophy',
            'luminous_beasts:rare_vile_gator_trophy',
             'luminous_beasts:rare_yeti_trophy',
              'luminous_beasts:rare_viper_trophy',
               'luminous_beasts:rare_mummy_trophy',
                'luminous_beasts:rare_hermit_king_trophy',
                 'luminous_beasts:horseless_headsman_trophy',
                  'luminous_beasts:scarecrow_trophy',
                   'luminous_beasts:rare_executioner_trophy',
                    'luminous_beasts:rare_spitter_trophy',
'luminous_beasts:gilded_ent_trophy',
     'luminous_beasts:gilded_ent_spawn_egg',
     'luminous_beasts:luminous_moth_trophy', 'luminous_beasts:albino_moth_trophy',
     'luminous_beasts:the_scarecrow_spawn_egg',
      'luminous_beasts:scarecrow_minion_spawn_egg',
       'luminous_beasts:horseless_headsman_spawn_egg',
        'luminous_beasts:pumpkin_minion_spawn_egg',
         'luminous_beasts:pumpkin_helmet_helmet',
         'luminous_beasts:headsman_disc',
     'luminous_beasts:soul_furnace_trophy'
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











})

// ['create:cart_assembler', ]