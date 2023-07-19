info.onCountdownEnd(function () {
    Reset()
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    Reset()
    info.setLife(5)
    info.changeScoreBy(1)
    music.baDing.play()
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.toggleViewMode()
})
function Reset () {
    info.startCountdown(30)
    tiles.setTileAt(Tresure, assets.tile`transparency16`)
    tiles.setTileAt(tiles.getTilesByType(assets.tile`transparency16`)._pickRandom(), sprites.dungeon.chestClosed)
    Tresure = tiles.getTilesByType(sprites.dungeon.chestClosed)[0]
}
let Tresure: tiles.Location = null
info.setLife(5)
tiles.setCurrentTilemap(tilemap`level1`)
info.setScore(0)
let mySprite = Render.getRenderSpriteVariable()
Tresure = tiles.getTilesByType(sprites.dungeon.chestClosed)[0]
tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 14))
Render.moveWithController(3, 3, 1)
Render.setViewMode(ViewMode.raycastingView)
Reset()
