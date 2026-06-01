




// ItemEvents.modification(event => {
//   // Change the durability of an item

//   //COPPRER TOOLS/ARMOR***************************************************
//   //[Item.of('create_sa:copper_sword', '{Damage:0}'), Item.of('create_sa:copper_pickaxe', '{Damage:0}'), Item.of('create_sa:copper_axe', '{Damage:0}'), Item.of('create_sa:copper_shovel', '{Damage:0}'), Item.of('create_sa:copper_hoe', '{Damage:0}'), Item.of('create_sa:copper_helmet', '{Damage:0}'), Item.of('create_sa:copper_chestplate', '{Damage:0}'),
//   //  Item.of('create_sa:copper_leggings', '{Damage:0}'), Item.of('create_sa:copper_boots', '{Damage:0}')]

// // COPPER *******************
//   event.modify('create_sa:copper_sword', item => {
//     item.maxDamage = 59;
//   });
//   event.modify('create_sa:copper_axe', item => {
//     item.maxDamage = 59;
//   });
//   event.modify('create_sa:copper_pickaxe', item => {
//     item.maxDamage = 59;
//   });
//   event.modify('create_sa:copper_shovel', item => {
//     item.maxDamage = 59;
//   });
//   event.modify('create_sa:copper_hoe', item => {
//     item.maxDamage = 59;
//   });
//   // event.modify('create_sa:copper_helmet', item => {
//   //   item.maxDamage = 65;
//   //       item.armorProtection = 2;

//   // });
//   // event.modify('create_sa:copper_chestplate', item => {
//   //   item.maxDamage = 75;
//   //       item.armorProtection = 3;

//   // });
//   // event.modify('create_sa:copper_leggings', item => {
//   //   item.maxDamage = 80;
//   //       item.armorProtection = 2;

//   // });
//   // event.modify('create_sa:copper_boots', item => {
//   //   item.maxDamage = 55;
//   //       item.armorProtection = 1;

//   // });


// // ZINC ***********************
ItemEvents.modification(event => {
  // COPPER TOOLS - low durability
  // event.modify('create_sa:copper_sword', item => {
  //   item.maxDamage = 59;
  // });
  event.modify('create_sa:copper_axe', item => {
    item.maxDamage = 59;
  });
  event.modify('create_sa:copper_pickaxe', item => {
    item.maxDamage = 59;
  });
  event.modify('create_sa:copper_shovel', item => {
    item.maxDamage = 59;
  });
  event.modify('create_sa:copper_hoe', item => {
    item.maxDamage = 59;
  });

  event.modify('create_sa:zinc_sword', item => {
    let modifiers = item.item().getDefaultInstance().getAttributeModifiers()
      .withModifierAdded(
        "minecraft:generic.attack_damage", 
        {
          "id": "minecraft:base_attack_damage",
          "amount": 3.5,
          "operation": 0
        }, 
        "mainhand"
      )
      .modifiers();
    item.setAttributeModifiersWithTooltip(modifiers);
  });


    event.modify('create_sa:copper_sword', item => {
    let modifiers = item.item().getDefaultInstance().getAttributeModifiers()
      .withModifierAdded(
        "minecraft:generic.attack_damage", 
        {
          "id": "minecraft:base_attack_damage",
          "amount": 2,
          "operation": 0
        }, 
        "mainhand"
      )
      .modifiers();
    item.setAttributeModifiersWithTooltip(modifiers);
  });

      event.modify('create_sa:blazing_cleaver', item => {
    let modifiers = item.item().getDefaultInstance().getAttributeModifiers()
      .withModifierAdded(
        "minecraft:generic.attack_damage", 
        {
          "id": "minecraft:base_attack_damage",
          "amount": 6.25,
          "operation": 0
        }, 
        "mainhand"
      )
      .modifiers();
    item.setAttributeModifiersWithTooltip(modifiers);
  });
//   event.modify('create_sa:zinc_axe', item => {
//     item.maxDamage = 250;

//   });
//   event.modify('create_sa:zinc_pickaxe', item => {
//     item.maxDamage = 250;
//   });
//   event.modify('create_sa:zinc_shovel', item => {
//     item.maxDamage = 250;

//   });
//   event.modify('create_sa:zinc_hoe', item => {
//     item.maxDamage = 250;

//   });
//   // event.modify('create_sa:zinc_helmet', item => {
//   //   item.maxDamage = 195;
//   //   item.armorProtection = 2;
//   // });
//   // event.modify('create_sa:zinc_chestplate', item => {
//   //   item.maxDamage = 255;
//   //   item.armorProtection = 5;
//   // });
//   // event.modify('create_sa:zinc_leggings', item => {
//   //   item.maxDamage = 240;
//   //   item.armorProtection = 3;
//   // });
//   // event.modify('create_sa:zinc_boots', item => {
//   //   item.maxDamage = 165;
//   //   item.armorProtection = 2;
//   // });

 


// // [Item.of('create_sa:experience_sword', '{Damage:0}'), Item.of('create_sa:experience_pickaxe', '{Damage:0}'), Item.of('create_sa:experience_shovel', 
// // '{Damage:0}'), Item.of('create_sa:experience_axe', '{Damage:0}')]

// // EXPERIENCE ***********************

  event.modify('create_sa:experience_sword', item => {
    let modifiers = item.item().getDefaultInstance().getAttributeModifiers()
      .withModifierAdded(
        "minecraft:generic.attack_damage", 
        {
          "id": "minecraft:base_attack_damage",
          "amount": 5.5,
          "operation": 0
        }, 
        "mainhand"
      )
      .modifiers();
    item.setAttributeModifiersWithTooltip(modifiers);
  });
//     event.modify('create_sa:experience_pickaxe', item => {
//     item.digSpeed = 9;
//   });
//     event.modify('create_sa:experience_shovel', item => {
//     item.digSpeed = 9;
//   });
//     event.modify('create_sa:experience_axe', item => {
//     item.digSpeed = 9;
//   });
  event.modify('minecraft:stone_sword', item => {
    let modifiers = item.item().getDefaultInstance().getAttributeModifiers()
      .withModifierAdded(
        "minecraft:generic.attack_damage", 
        {
          "id": "minecraft:base_attack_damage",
          "amount": 1,
          "operation": 0
        }, 
        "mainhand"
      )
      .modifiers();
    item.setAttributeModifiersWithTooltip(modifiers);
  });
  event.modify('minecraft:wooden_sword', item => {
    let modifiers = item.item().getDefaultInstance().getAttributeModifiers()
      .withModifierAdded(
        "minecraft:generic.attack_damage", 
        {
          "id": "minecraft:base_attack_damage",
          "amount": 0,
          "operation": 0
        }, 
        "mainhand"
      )
      .modifiers();
    item.setAttributeModifiersWithTooltip(modifiers);
  });

//   // IRON ***********************

  event.modify('minecraft:iron_sword', item => {
    let modifiers = item.item().getDefaultInstance().getAttributeModifiers()
      .withModifierAdded(
        "minecraft:generic.attack_damage", 
        {
          "id": "minecraft:base_attack_damage",
          "amount": 2.5,
          "operation": 0
        }, 
        "mainhand"
      )
      .modifiers();
    item.setAttributeModifiersWithTooltip(modifiers);
  });
//   // event.modify('minecraft:iron_axe', item => {

//   // });
//   // event.modify('minecraft:iron_pickaxe', item => {
//   // });
//   // event.modify('minecraft:iron_shovel', item => {

//   // });
//   // event.modify('minecraft:iron_hoe', item => {

//   // });
//   // event.modify('minecraft:iron_helmet', item => {
//   //   item.armorProtection = 1;
//   // });
//   // event.modify('minecraft:iron_chestplate', item => {
//   //   item.armorProtection = 4;
//   // });
//   // event.modify('minecraft:iron_leggings', item => {
//   //   item.armorProtection = 5;
//   // });
//   // event.modify('minecraft:iron_boots', item => {
//   //   item.armorProtection = 2;
//   // });





  event.modify('minecraft:iron_chestplate', item => {
    
    // 1. Get the item's default attribute modifiers
    let modifiers = item.item().getDefaultInstance().getAttributeModifiers()
    
      // 2. Overwrite the base armor value
      .withModifierAdded(
        "minecraft:generic.armor", 
        {
          "id": "minecraft:armor.body", // Using the vanilla ID overwrites the original stat
          "amount": -2, // New armor point value
          "operation": 0 // 0 = ADDITION
        }, 
        "chest" // Target equipment slot
      )
      
      // 4. Overwrite knockback resistance (optional)

      .modifiers(); // Finalize the modifier map

    // 5. Apply the modified components back to the item, retaining tooltips
    item.setAttributeModifiersWithTooltip(modifiers);
  })

event.modify('minecraft:iron_helmet', item => {
    
    // 1. Get the item's default attribute modifiers
    let modifiers = item.item().getDefaultInstance().getAttributeModifiers()
    
      // 2. Overwrite the base armor value
      .withModifierAdded(
        "minecraft:generic.armor", 
        {
          "id": "minecraft:armor.helmet", // Using the vanilla ID overwrites the original stat
          "amount": 1, // New armor point value
          "operation": 0 // 0 = ADDITION
        }, 
        "head" // Target equipment slot
      )

      
      // 4. Overwrite knockback resistance (optional)

      .modifiers(); // Finalize the modifier map

    // 5. Apply the modified components back to the item, retaining tooltips
    item.setAttributeModifiersWithTooltip(modifiers);
  })

event.modify('minecraft:iron_leggings', item => {
  let modifiers = item.item().getDefaultInstance().getAttributeModifiers()
    .withModifierAdded(
      "minecraft:generic.armor", 
      {
        "id": "minecraft:armor.legs",
        "amount": -3,
        "operation": 0
      }, 
      "legs"
    )

    .modifiers();
  item.setAttributeModifiersWithTooltip(modifiers);
})

event.modify('kubejs:wither_knight_catalyst', item => {
  item.rarity = "EPIC"
})

event.modify('kubejs:frost_catalyst', item => {
  item.rarity = "RARE"
})

event.modify('kubejs:snad_catalyst', item => {
  item.rarity = "UNCOMMON"
})

event.modify('create_sa:copper_helmet', item => {
  item.maxDamage = 65;
  let modifiers = item.item().getDefaultInstance().getAttributeModifiers()
    .withModifierAdded(
      "minecraft:generic.armor", 
      {
        "id": "minecraft:armor.helmet",
        "amount": 2,
        "operation": 0
      }, 
      "head"
    )
    .withModifierAdded(
      "minecraft:generic.armor_toughness", 
      {
        "id": "minecraft:armor.helmet",
        "amount": 2,
        "operation": 0
      }, 
      "head"
    )
    .modifiers();
  item.setAttributeModifiersWithTooltip(modifiers);
})

event.modify('create_sa:copper_chestplate', item => {
  item.maxDamage = 75;
  let modifiers = item.item().getDefaultInstance().getAttributeModifiers()
    .withModifierAdded(
      "minecraft:generic.armor", 
      {
        "id": "minecraft:armor.body",
        "amount": -3,
        "operation": 0
      }, 
      "chest"
    )
    .modifiers();
  item.setAttributeModifiersWithTooltip(modifiers);
})

event.modify('create_sa:copper_leggings', item => {
  item.maxDamage = 80;
  let modifiers = item.item().getDefaultInstance().getAttributeModifiers()
    .withModifierAdded(
      "minecraft:generic.armor", 
      {
        "id": "minecraft:armor.legs",
        "amount": -3,
        "operation": 0
      }, 
      "legs"
    )

    .modifiers();
  item.setAttributeModifiersWithTooltip(modifiers);
})

// event.modify('create_sa:copper_boots', item => {
//   item.maxDamage = 55;
//   let modifiers = item.item().getDefaultInstance().getAttributeModifiers()
//     .withModifierAdded(
//       "minecraft:generic.armor", 
//       {
//         "id": "minecraft:armor.feet",
//         "amount": -1,
//         "operation": 0
//       }, 
//       "feet"
//     )

//     .modifiers();
//   item.setAttributeModifiersWithTooltip(modifiers);
// })

event.modify('create_sa:zinc_helmet', item => {
  item.maxDamage = 195;
  let modifiers = item.item().getDefaultInstance().getAttributeModifiers()
    .withModifierAdded(
      "minecraft:generic.armor", 
      {
        "id": "minecraft:armor.helmet",
        "amount": 2,
        "operation": 0
      }, 
      "head"
    )
    .modifiers();
  item.setAttributeModifiersWithTooltip(modifiers);
})

event.modify('create_sa:zinc_chestplate', item => {
  item.maxDamage = 255;
  let modifiers = item.item().getDefaultInstance().getAttributeModifiers()
    .withModifierAdded(
      "minecraft:generic.armor", 
      {
        "id": "minecraft:armor.body",
        "amount": -1,
        "operation": 0
      }, 
      "chest"
    )
    .modifiers();
  item.setAttributeModifiersWithTooltip(modifiers);
})

event.modify('create_sa:zinc_leggings', item => {
  item.maxDamage = 240;
  let modifiers = item.item().getDefaultInstance().getAttributeModifiers()
    .withModifierAdded(
      "minecraft:generic.armor", 
      {
        "id": "minecraft:armor.legs",
        "amount": -1,
        "operation": 0
      }, 
      "legs"
    )

    .modifiers();
  item.setAttributeModifiersWithTooltip(modifiers);
})










})









// });

