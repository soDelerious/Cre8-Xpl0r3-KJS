ServerEvents.tags('item', event => {
  // This allows the item to be placed in the 'head' Curio slot
//   event.add('curios:head', 'minecraft:turtle_helmet')
  // event.add('curios:head', 'friendsandfoes:wildfire_crown')
  event.add('curios:charm', 'artifacts:chorus_totem')
  event.add('curios:tank', 'create_sa:creative_filling_tank')
  event.add('curios:back', 'create:netherite_backtank')
  event.add('curios:back', 'create:copper_backtank')
const Tanks =['create_sa:small_filling_tank', 'create_sa:medium_filling_tank', 'create_sa:large_filling_tank', 'create_sa:small_fueling_tank', 'create_sa:medium_fueling_tank', 'create_sa:large_fueling_tank']
Tanks.forEach(tank => {
    event.add('curios:tank', tank)
})
  // event.add('c:enchantables', 'create_sa:rose_quartz_pickaxe')
  // event.add('minecraft:enchantable/mining', 'create_sa:rose_quartz_pickaxe')
  // event.add('minecraft:enchantable/mining_loot', 'create_sa:rose_quartz_pickaxe')
  // event.add('minecraft:pickaxes', 'create_sa:rose_quartz_pickaxe')

  // event.add('create_dragons_plus:passiveBlockFreezers', 'create:depot[]{HeldItem: {Item: {components: {"minecraft:custom_data": {itemKey: "52fc8544-6b38-4281-8fc6-07440e6b295d"}}, count: 1, id: "block_factorys_bosses:ice_gauntlet"}}}')


  //OILS *****




})

ServerEvents.tags('worldgen/biome', event => {
const NetherStructureRemove = ['minecraft:warped_forest','minecraft:crimson_forest','minecraft:nether_wastes','minecraft:soul_sand_valley','minecraft:basalt_deltas']
  NetherStructureRemove.forEach(biome => {
    event.remove('piglinproliferation:travelers_compass_search', biome)
  })
  const OilBiomeList = ['yungscavebiomes:lost_caves','#c:is_desert','terralith:ancient_sands','terralith:sandstone_valley','#terralith:reference/badlands_all', '#terralith:reference/desert_all']

  OilBiomeList.forEach(biome => {
    event.add('createdieselgenerators:oil_biomes', biome)
  })
const AllOverworldBiomes=[
'minecraft:badlands',
'minecraft:bamboo_jungle',
'minecraft:beach',
'minecraft:birch_forest',
'minecraft:cherry_grove',
'minecraft:cold_ocean',
'minecraft:dark_forest',
'minecraft:deep_cold_ocean',
'minecraft:deep_dark',
'minecraft:deep_frozen_ocean',
'minecraft:deep_lukewarm_ocean',
'minecraft:deep_ocean',
'minecraft:desert',
'minecraft:dripstone_caves',
'minecraft:eroded_badlands',
'minecraft:flower_forest',
'minecraft:forest',
'minecraft:frozen_ocean',
'minecraft:frozen_peaks',
'minecraft:frozen_river',
'minecraft:grove',
'minecraft:ice_spikes',
'minecraft:jagged_peaks',
'minecraft:jungle',
'minecraft:lukewarm_ocean',
'minecraft:lush_caves',
'minecraft:mangrove_swamp',
'minecraft:meadow',
'minecraft:mushroom_fields',
'minecraft:ocean',
'minecraft:old_growth_birch_forest',
'minecraft:old_growth_pine_taiga',
'minecraft:old_growth_spruce_taiga',
'minecraft:plains',
'minecraft:river',
'minecraft:savanna',
'minecraft:savanna_plateau',
'minecraft:snowy_beach',
'minecraft:snowy_plains',
'minecraft:snowy_slopes',
'minecraft:snowy_taiga',
'minecraft:sparse_jungle',
'minecraft:stony_peaks',
'minecraft:stony_shore',
'minecraft:sunflower_plains',
'minecraft:swamp',
'minecraft:taiga',
'minecraft:warm_ocean',
'minecraft:windswept_forest',
'minecraft:windswept_gravelly_hills',
'minecraft:windswept_hills',
'minecraft:windswept_savanna',
'minecraft:wooded_badlands',
'terrablender:deferred_placeholder',
'terralith:alpha_islands',
'terralith:alpha_islands_winter',
'terralith:alpine_grove',
'terralith:alpine_highlands',
'terralith:amethyst_canyon',
'terralith:amethyst_rainforest',
'terralith:ancient_sands',
'terralith:arid_highlands',
'terralith:ashen_savanna',
'terralith:basalt_cliffs',
'terralith:birch_taiga',
'terralith:blooming_plateau',
'terralith:blooming_valley',
'terralith:brushland',
'terralith:bryce_canyon',
'terralith:caldera',
'terralith:cave/andesite_caves',
'terralith:cave/deep_caves',
'terralith:cave/diorite_caves',
'terralith:cave/frostfire_caves',
'terralith:cave/fungal_caves',
'terralith:cave/granite_caves',
'terralith:cave/infested_caves',
'terralith:cave/mantle_caves',
'terralith:cave/thermal_caves',
'terralith:cave/tuff_caves',
'terralith:cave/underground_jungle',
'terralith:cloud_forest',
'terralith:cold_shrubland',
'terralith:deep_warm_ocean',
'terralith:desert_canyon',
'terralith:desert_oasis',
'terralith:desert_spires',
'terralith:emerald_peaks',
'terralith:forested_highlands',
'terralith:fractured_savanna',
'terralith:frozen_cliffs',
'terralith:glacial_chasm',
'terralith:granite_cliffs',
'terralith:gravel_beach',
'terralith:gravel_desert',
'terralith:haze_mountain',
'terralith:highlands',
'terralith:hot_shrubland',
'terralith:ice_marsh',
'terralith:jungle_mountains',
'terralith:lavender_forest',
'terralith:lavender_valley',
'terralith:lush_desert',
'terralith:lush_valley',
'terralith:mirage_isles',
'terralith:moonlight_grove',
'terralith:moonlight_valley',
'terralith:orchid_swamp',
'terralith:painted_mountains',
'terralith:red_oasis',
'terralith:rocky_jungle',
'terralith:rocky_mountains',
'terralith:rocky_shrubland',
'terralith:sakura_grove',
'terralith:sakura_valley',
'terralith:sandstone_valley',
'terralith:savanna_badlands',
'terralith:savanna_slopes',
'terralith:scarlet_mountains',
'terralith:shield',
'terralith:shield_clearing',
'terralith:shrubland',
'terralith:siberian_grove',
'terralith:siberian_taiga',
'terralith:skylands_autumn',
'terralith:skylands_spring',
'terralith:skylands_summer',
'terralith:skylands_winter',
'terralith:snowy_badlands',
'terralith:snowy_cherry_grove',
'terralith:snowy_maple_forest',
'terralith:snowy_shield',
'terralith:steppe',
'terralith:stony_spires',
'terralith:temperate_highlands',
'terralith:tropical_jungle',
'terralith:valley_clearing',
'terralith:volcanic_crater',
'terralith:volcanic_peaks',
'terralith:warm_river',
'terralith:warped_mesa',
'terralith:white_cliffs',
'terralith:white_mesa',
'terralith:windswept_spires',
'terralith:wintry_forest',
'terralith:wintry_lowlands',
'terralith:yellowstone',
'terralith:yosemite_cliffs',
'terralith:yosemite_lowlands',
'yungscavebiomes:frosted_caves',
'yungscavebiomes:lost_caves']

const AllNetherBiomes = [
'minecraft:basalt_deltas',
'minecraft:crimson_forest',
'minecraft:nether_wastes',
'minecraft:soul_sand_valley',
'minecraft:warped_forest'
]

const AllEndBiomes = [
'minecraft:end_barrens',
'minecraft:end_highlands',
'minecraft:end_midlands',
'minecraft:small_end_islands',
'minecraft:the_end'
]

const MoobloomBiomes = ['minecraft:flower_forest','terralith:skylands_spring', 'terralith:skylands_summer', 'minecraft:meadow', 'minecraft:plains', 'minecraft:sunflower_plains', 'terralith:blooming_plateau', 'terralith:blooming_valley']
const MoobloomPurp = ['terralith:moonlight_grove', 'terralith:moonlight_valley', 'terralith:lavender_forest', 'terralith:lavender_valley']
MoobloomBiomes.forEach(biome => {
    event.add('friendsandfoes:has_moobloom/any', biome)
    event.add('friendsandfoes:has_moobloom/azure_bluet', biome)
    event.add('friendsandfoes:has_moobloom/blue_orchid', biome)
    event.add('friendsandfoes:has_moobloom/allium', biome)
    event.add('friendsandfoes:has_moobloom/cornflower', biome)
    event.add('friendsandfoes:has_moobloom/dandelion', biome)
    event.add('friendsandfoes:has_moobloom/lilac', biome)
    event.add('friendsandfoes:has_moobloom/lily_of_the_valley', biome)
    event.add('friendsandfoes:has_moobloom/orange_tulip', biome)
    event.add('friendsandfoes:has_moobloom/oxeye_daisy', biome)
    event.add('friendsandfoes:has_moobloom/peony', biome)
    event.add('friendsandfoes:has_moobloom/pink_tulip', biome)
    event.add('friendsandfoes:has_moobloom/poppy', biome)
    event.add('friendsandfoes:has_moobloom/red_tulip', biome)
    event.add('friendsandfoes:has_moobloom/rose_bush', biome)
    event.add('friendsandfoes:has_moobloom/sunflower', biome)
    event.add('friendsandfoes:has_moobloom/white_tulip', biome)
    
})
MoobloomPurp.forEach(biome => {
    event.add('friendsandfoes:has_moobloom/allium', biome)
    event.add('friendsandfoes:has_moobloom/pink_tulip', biome)
    event.add('friendsandfoes:has_moobloom/peony', biome)
    event.add('friendsandfoes:has_moobloom/lilac', biome)
})
//Add specific moobloom biomes too!


AllOverworldBiomes.forEach(biome => {
    event.remove('block_factorys_bosses:dragon_tower', biome)
    event.add('creeperoverhaul:where_creepers_spawn', biome)
    
})
const OverworldMountainBiomes = ['#c:is_mountain/peak', 'terralith:ashen_savanna','terralith:volcanic_crater', 'terralith:volcanic_peaks','terralith:alpine_highlands','terralith:jagged_peaks','terralith:emerald_peaks','terralith:scarlet_mountains','terralith:rocky_mountains','terralith:haze_mountain', 'minecraft:jagged_peaks', 'minecraft:jungle_mountains']
OverworldMountainBiomes.forEach(biome => {
    event.add('block_factorys_bosses:dragon_tower', biome)
})
const overworldFIRE =['terralith:volcanic_crater', 'terralith:volcanic_peaks','terralith:scarlet_mountains','terralith:ashen_savanna', 'rottencreatures:can_burned_spawn_on']
overworldFIRE.forEach(biome => {
    event.add('rottencreatures:can_burned_spawn_on', biome)
    event.add('endermanoverhaul:crimson_forest_spawns', biome)
})

event.add('bettermineshafts:has_structure/better_mineshaft_desert','yungscavebiomes:lost_caves')
const YetiBiomes = ['minecraft:ice_spikes','minecraft:snowy_beach','minecraft:snowy_plains','minecraft:snowy_slopes','minecraft:snowy_taiga', 'terralith:frozen_cliffs', 'terralith:ice_marsh']

event.add('rottencreatures:can_frostbitten_spawn_on', '#c:is_mountain')

YetiBiomes.forEach(biome => {
    event.add('block_factorys_bosses:yeti_hideout', biome)
    event.add('rottencreatures:can_glacial_hunter_spawn_on', biome)
    event.add('endermanoverhaul:ice_spikes_spawns', biome)
    event.add('rottencreatures:can_frostbitten_spawn_on', biome)
    event.add('rottencreatures:can_frostbitten_spawn_on', biome)

})
event.add('friendsandfoes:has_iceologer', '#c:is_icy')
const SandwormBiomes = ['terralith:lush_desert', 'minecraft:desert', 'terralith:desert_canyon', 'terralith:desert_oasis', 'terralith:desert_spires','yungscavebiomes:lost_caves']

SandwormBiomes.forEach(biome => {
    event.add('block_factorys_bosses:sandworm_nest', biome)
    event.add('endermanoverhaul:desert_spawns', biome)
    event.add('rottencreatures:can_mummy_spawn_on', biome)
})

const BadlandsBiomes = ['minecraft:badlands', 'minecraft:wooded_badlands','terralith:savanna_badlands', 'minecraft:eroded_badlands']

BadlandsBiomes.forEach(biome => {
  event.add('rottencreatures:can_undead_miner_spawn_on', biome)
  event.add('endermanoverhaul:badlands_spawns', biome)
  event.add('rottencreatures:can_mummy_spawn_on', biome)

})

AllEndBiomes.forEach(biome => {
event.add('endermanoverhaul:end_spawns', biome)
event.add('endermanoverhaul:end_islands_spawns', biome)
})

  event.add('endermanoverhaul:windswept_hills_spawns', '#c:is_windswept')
  event.add('endermanoverhaul:windswept_hills_spawns', '#c:is_windswept')

const JungleTempleBiomes = ['minecraft:jungle', 'minecraft:sparse_jungle', 'terralith:tropical_jungle', 'terralith:rocky_jungle','terralith:cave/underground_jungle','terralith:amethyst_rainforest']
JungleTempleBiomes.forEach(biome => {
    event.add('betterdeserttemples:has_structure/better_jungle_temple', biome)
})

const DesertTempleBiomes = ['minecraft:desert', 'minecraft:badlands', 'terralith:desert_canyon', 'terralith:desert_oasis', 'terralith:desert_spires','terralith:lush_desert','yungscavebiomes:lost_caves']

DesertTempleBiomes.forEach(biome => {
     event.add('betterdeserttemples:has_structure/better_desert_temple', biome)
})


AllOverworldBiomes.forEach(biome => {
  event.add('skyvillages:has_structure/skyvillage', biome)
})

YetiBiomes.forEach(biome => {
  event.add('friendsandfoes:has_iceologer', biome)
})

const ForestBiomes = ['minecraft:dark_forest', 'minecraft:forest', 'minecraft:old_growth_birch_forest', 'minecraft:old_growth_pine_taiga', 'minecraft:old_growth_spruce_taiga', 'minecraft:wooded_badlands', 'terralith:forested_highlands', 'terralith:rocky_jungle']

ForestBiomes.forEach(biome => {
  event.add('friendsandfoes:has_illusioner', biome)
})


})





ServerEvents.tags('worldgen/structure', event => {
const NetherStructureAdd = ['friendsandfoes:citadel','block_factorys_bosses:underworld_arena']
  NetherStructureAdd.forEach(strut => {
    event.add('piglinproliferation:travelers_compass_search', strut)
  })


  event.add('rottencreatures:can_mummy_spawn_on', 'betterdeserttemples:desert_temple')


})
//['friendsandfoes:wildfire_crown', 'artifacts:chorus_totem', 'create_sa:creative_filling_tank',
//  'create:netherite_backtank[create:banktank_air=900]', 'create:copper_backtank[create:banktank_air=900]', 'powergrid:portable_battery', 'aeronautics:aviators_goggles']

ServerEvents.tags('block', event => {
      // event.add('create_dragons_plus:fan_processing_catalysts/sanding', 'minecraft:oak_stairs')
      // event.add('create_dragons_plus:passive_block_freezers', 'create:depot[]{HeldItem: {Item: {components: {"minecraft:custom_data": {itemKey: "52fc8544-6b38-4281-8fc6-07440e6b295d"}}, count: 1, id: "block_factorys_bosses:ice_gauntlet"}}}')
      event.remove('create_dragons_plus:passive_block_freezers', 'minecraft:powder_snow')
      event.remove('create_dragons_plus:passive_block_freezers', 'minecraft:ice')
      event.remove('create_dragons_plus:passive_block_freezers', 'minecraft:packed_ice')
      event.remove('create_dragons_plus:passive_block_freezers', 'minecraft:blue_ice')
      event.remove('create_dragons_plus:passive_block_freezers', 'minecraft:snow')
      event.remove('create_dragons_plus:passive_block_freezers', 'minecraft:snow_block')
        event.add('create:fan_processing_catalysts/blasting', 'block_factorys_bosses:dragon_skull')

      event.add('create:passive_boiler_heaters', 'block_factorys_bosses:dragon_skull')
      event.add('sable:slippery', 'yungscavebiomes:rare_ice')
      event.add('sable:slippery', 'yungscavebiomes:ice_sheet')

      event.add('sable:end_stones', 'get_creative:breeze_whirler')
      event.add('sable:light', 'get_creative:breeze_whirler')

const PlatinumOres = ['createpropulsion:platinum_ore', 'createpropulsion:deepslate_platinum_ore', 'createpropulsion:raw_platinum_block']

PlatinumOres.forEach(ore => {
    event.add('terralith:island_blocks', ore)
})



const bulkSanding = [ 'friendsandfoes:totem_of_illusion','minecraft:prismarine_crystals', 'minecraft:suspicious_sand',  'minecraft:suspicious_gravel', 'yungscavebiomes:ancient_sand', 'yungscavebiomes:suspicious_ancient_sand'];

bulkSanding.forEach(item => {
event.add('create_dragons_plus:not_applicable_for_polishing')
})
      // event.remove('create_dragons_plus:fan_processing_catalysts/sanding', 'quicksand:red_quicksand')
      // event.remove('create_dragons_plus:fan_processing_catalysts/sanding', 'quicksand:quicksand')
      // event.remove('create_dragons_plus:fan_processing_catalysts/sanding', 'quicksand:red_quicksand')
      // event.remove('create_dragons_plus:fan_processing_catalysts/sanding', 'quicksand:quicksand')


})

ServerEvents.tags('fluid', event => {
const blazemix = ['createdieselgenerators:biodiesel', 'createdieselgenerators:diesel', 'createdieselgenerators:gasoline', 'createdieselgenerators:ethanol']
blazemix.forEach(fluid => {
    event.add('blazinghot:blaze_mixer_fuel', fluid)
    
})
})

