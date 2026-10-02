
StartupEvents.registry("block", (event) => {

      event.create("chunk_pulser", 'detector') 
    .displayName('Chunk Pulser')
    .property(BlockProperties.POWERED)
    .box(1, 0, 1, 15, 4, 15, true)
    .detectorId('chunk_pulser') // Crucial for the server events to find it
 
    // .item(item => {
    //   item.parentModel('kubejs:item/chunk_pulser')
    // })

  event.create("frost_catalyst") // You don't need 'kubejs:' prefix inside the quotes here
    .displayName('Freezing Catalyst')
    .notSolid()

    .fullBlock(false)
    .opaque(false)
    .renderType('cutout') // Ensures transparency works
    .tagBlock('create_dragons_plus:passive_block_freezers')
    .tagBlock('create:fan_transparent')

    .box(2, 0, 2, 14, 8, 14, true)



      event.create("snad_catalyst") 
    .displayName('Sanding Catalyst')
    .notSolid()

    .fullBlock(false)
    .opaque(false)
    .renderType('cutout')
    .tagBlock('create_dragons_plus:fan_processing_catalysts/sanding')
    .tagBlock('create:fan_transparent')

    .box(2, 0, 2, 14, 5, 14, true)

    event.create("wither_knight_catalyst") 
    .displayName("Helvar's Skull")
    .notSolid()

    .fullBlock(false)
    .opaque(false)
    .renderType('cutout')
    .tagBlock('create:fan_processing_catalysts/haunting')
    .tagBlock('create:fan_transparent')
    .property(BlockProperties.HORIZONTAL_FACING) // Adds the North/South/East/West property
    .placementState(state => {
        // Sets the block's facing direction to the player's opposite direction (standard MC behavior)
        state.setValue(BlockProperties.HORIZONTAL_FACING, state.horizontalDirection.opposite)
    })
    .box(0, 0, 0, 15, 20, 15, true)
})

// Listen to item registry event
StartupEvents.registry('item', event => {


  // If you want to specify a different texture location you can do that too, like this:
  event.create('copper_map')
  .texture('kubejs:item/copper_map')
  .maxStackSize(1) // This texture would be located at kubejs/assets/mobbo/textures/item/lava.png
  .displayName('Smart Navigator')


event.create('incomplete_totem', 'create:sequenced_assembly')
  .texture('kubejs:item/totem_incomplete')
  .maxStackSize(1)
  .displayName('Incomplete Totem of Undying')
  .rarity("UNCOMMON")

event.create('whirlwind_helmet_fragment').texture('kubejs:item/whirlwind_crown_fragment').displayName('Whirlwind Crown Fragment')
event.create('forged_diamond').texture('kubejs:item/forged_diamond').displayName('Forged Diamond')


event.create('whirlwind_helmet', 'helmet').material('kubejs:whirl').texture('kubejs:item/whirlwind_crown').maxDamage(407).displayName('Whirlwind Crown')





});

StartupEvents.registry("armor_material", (event) => {
  event.create('whirl')
  .defense({helmet: 3, chestplate: 6, leggings: 8, boots: 3})
  .enchantmentValue(24)
  .equipSound('minecraft:item.armor.equip_iron')
  .repairIngredient(() => Ingredient.of('kubejs:whirlwind_helmet_fragment'))
  .toughness(1) // diamond has 2, netherite 3


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

    event.registerHeat("PRESSURIZED", builder => builder
            .color(0x252930)
            .addHeatSource('minecraft:bedrock') //Block
    )

    // addHeatSource('block_factorys_bosses:dragon_skull', "HEATED")
})

const $SoundEvents = Java.loadClass('net.minecraft.sounds.SoundEvents')
const $ParticleTypes = Java.loadClass('net.minecraft.core.particles.ParticleTypes')

StartupEvents.registry('fluid', event => {
  event.create('molten_tin', 'thick')
    .displayName('Molten Tin')
    .tint(0x968e82)//da

      event.create('molten_aethersteel', 'thick')
    .displayName('Molten Aethersteel')
    .tint(0xff5f47)
          event.create('molten_bronze', 'thick')
    .displayName('Molten Bronze')
    .tint(0xff9c47)
          event.create('molten_tungsten', 'thick')
    .displayName('Molten Tungsten')
    .tint(0xd1f3d2)
          event.create('molten_platinum', 'thick')
    .displayName('Molten Platinum')
    .tint(0xb1f1fc)
          event.create('molten_verdite', 'thick')
    .displayName('Molten Verdite')
    .tint(0xb6ff7f)
           event.create('molten_silver', 'thick')
    .displayName('Molten Silver')
    .tint(0xb3fff1)
})

BlockEvents.modification(event => {
  event.modify('the_beyond:auroracite', block => {
    block.hasCollision = false
  })
})
// BlockEvents.modification(event => {
//   event.modify('block_factorys_bosses:dragon_skull', block => {
//     block.destroySpeed = 0.1
//     block.hasCollision = false
//   })
// })