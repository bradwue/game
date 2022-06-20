let player: game.LedSprite = null
let bullet: game.LedSprite = null
let fruit: game.LedSprite = null
input.onButtonPressed(Button.A, function () {
    player.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    bullet = game.createSprite(bullet.get(LedSpriteProperty.X), player.get(LedSpriteProperty.Y))
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
})
basic.forever(function () {
    fruit = game.createSprite(randint(0, 2), 0)
    basic.pause(100)
    while (fruit.get(LedSpriteProperty.Y) < 4) {
        fruit.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    if (player.isTouching(fruit)) {
        game.addScore(1)
        fruit.delete()
    } else {
        game.gameOver()
    }
})
