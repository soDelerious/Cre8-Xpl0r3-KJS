ClientEvents.lang("en_us", (event) => {
    event.add("create.recipe.heat_requirement.draconic", "Draconic");
    event.add("create.recipe.heat_requirement.withered", "Withered");
    event.add("create.recipe.heat_requirement.pressurized", "Pressurized");



    // event.renameEntity('luminous_beasts:mummy', 'Royal Mummy')
    // event.renameEntity('luminous_beasts:red_mummy', 'Red Royal Mummy')
    event.renameEntity('friendsandfoes:crab', 'Pincher Crab')
    event.renameEntity('naturalist:crab', 'Hermit Crab')
    event.renameEntity('naturalist:rat', 'Large Rat')
        event.renameEntity('galosphere:mole', 'Deep Underground Mole')


    event.renameEntity('endermanoverhaul:desert_enderman', 'Mummified Enderman')
    event.renameEntity('rottencreatures:mummy', 'Mummified Zombie')
    // event.renameEntity('luminous_beasts:yeti', 'Abnormal Goat')
    // event.renameEntity('luminous_beasts:arid_yeti', 'Arid Abnormal Goat')
    // event.renameItem('luminous_beasts:yeti_horn', 'Abnormal Goat Horn')
    // event.renameItem('luminous_beasts:rare_yeti_trophy', 'Arid Abnormal Goat Trophy')
    // event.renameItem('luminous_beasts:yeti_trophy', 'Abnormal Goat Trophy')
            event.renameItem('minecraft:diamond', 'Diamond Shard')
    event.renameItem('orevolution:nether_tungsten_ore', 'Tungsten Ore')
    event.renameBlock('orevolution:nether_tungsten_ore', 'Tungsten Ore')
    event.renameItem('orevolution:reinforced_smithing_template', 'Tungsten Smithing Template')
});

// CuriosJSEvents.registerRenderer(event => {
//     // remove curios render
//     // event.remove('test')

//     // register curios render
//     event.register(
//         'apple',
//         context => {
//             let {
//                 stack,
//                 slotContext,
//                 matrixStack,
//                 renderLayerParent,
//                 renderTypeBuffer,
//                 light,
//                 limbSwing,
//                 limbSwingAmount,
//                 partialTicks,
//                 ageInTicks,
//                 netHeadYaw,
//                 headPitch
//             } = context
//             let { modelManager } = Client
//             let entity = slotContext.entity()
//             let model = modelManager.getModel(new ModelResourceLocation(stack.id, 'inventory'))
//             matrixStack.pushPose()
//             CuriosRenderer.translateIfSneaking(matrixStack, entity)
//             matrixStack.mulPose(new Quaternionf().rotateZ(JavaMath.toRadians(180)))
//             matrixStack.mulPose(RotationAxis.YP.deg(-netHeadYaw))
//             matrixStack.mulPose(RotationAxis.XP.deg(-headPitch))
//             Client.itemRenderer.render(
//                 stack,
//                 'head',
//                 false,
//                 matrixStack,
//                 renderTypeBuffer,
//                 light,
//                 OverlayTexture.NO_OVERLAY,
//                 model
//             )
//             matrixStack.popPose()
//         }
//     )
// })