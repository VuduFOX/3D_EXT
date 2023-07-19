// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1d001d0001010101010101010101010101010101010101010101010101010101010101010101010101010101000101010101000000000001010101010101010101010101010101010100010101010100010101010101010101010101010101010101010101010001010101010001010101010101010101010101010101010101010000000000000000000101010101010101010101010101010101010101000101010101010100010101010101010101010101010101010101010100010101010101010001010101010101010101010101010101010101010000000000010101000101010101010101010101010101010101010101010001010101010101010101000101010101010101010101010101000000000000010101010100010100010101010101010101010101010101010101010001010101010000000001010101010101010101010101010101010101000101010101010101000000010101010101010101010101010102000000000001010101010101010001010101010101010101010101010001010101000101010101010101000101010101010101010101010101010101010100000000000000000000010101010101010101010101010101010101010001010101010101010001010101010101010101010101010101010101000101010101010101000101010101010101010101010101010101010100010101010101010000010101010101010101010101010101010000000001010101010101010101010101010101010101010101000000000101000101010101010101010101010101010101010101010100010101010100010101010101010101010101010101010100000000000001010101010001010101010101010101010101010101010001010100010101010101000101010101010101010101010101010101000101010001010101010100010101010101010101010101010101000000010101000101010101010001010101010101010101010101010101010101010101010101010101000000000101010101010101010101010101010101010101010101010100010101010101010101010101010101010101010101010101010000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
22222222222222222222222222222
22222222222.22222.....2222222
22222222222.22222.22222222222
22222222222.22222.22222222222
222222222.........22222222222
222222222.2222222.22222222222
222222222.2222222.22222222222
222222222.....222.22222222222
2222222222.2222222222.2222222
2222222......22222.22.2222222
222222222222.22222....2222222
222222222222.22222222...22222
222222222......22222222.22222
222222222.2222.22222222.22222
22222222222222..........22222
22222222222222.22222222.22222
22222222222222.22222222.22222
22222222222222.2222222..22222
22222222222....22222222222222
22222222....22.22222222222222
22222222.22222.22222222222222
222......22222.22222222222222
222.222.222222.22222222222222
222.222.222222.22222222222222
2...222.222222.22222222222222
22222222222222....22222222222
22222222222222.22222222222222
22222222222....22222222222222
22222222222222222222222222222
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.