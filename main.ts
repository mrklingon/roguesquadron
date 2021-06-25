input.onButtonPressed(Button.A, function () {
    Alt += -1
    if (Alt < 0) {
        Alt = 0
    }
    Xwing.set(LedSpriteProperty.Y, Alt)
})
input.onButtonPressed(Button.AB, function () {
    Missle = game.createSprite(Xwing.get(LedSpriteProperty.X), Xwing.get(LedSpriteProperty.Y))
    while (!(4 == Missle.get(LedSpriteProperty.X))) {
        Missle.move(1)
        basic.pause(125)
    }
    Missle.delete()
})
input.onButtonPressed(Button.B, function () {
    Alt += 1
    if (Alt > 4) {
        Alt = 4
    }
    Xwing.set(LedSpriteProperty.Y, Alt)
})
let Tie2: game.LedSprite = null
let Tie1: game.LedSprite = null
let Missle: game.LedSprite = null
let Xwing: game.LedSprite = null
let Alt = 0
game.setScore(0)
game.setLife(5)
images.createBigImage(`
    . . . . . . . . . .
    . . . # . # # # . .
    . # # . # # . . . .
    . . . . . # # # . .
    . . . . . . . . . .
    `).scrollImage(1, 200)
Alt = 2
Xwing = game.createSprite(0, 2)
basic.forever(function () {
    basic.pause(randint(500, 3000))
    Tie1 = game.createSprite(4, randint(0, 4))
    Tie1.turn(Direction.Right, 180)
    for (let index = 0; index <= 4; index++) {
        Tie1.move(1)
        if (Tie1.isTouching(Missle)) {
            game.addScore(50)
            Tie1.delete()
        }
        basic.pause(200)
    }
    Tie1.delete()
})
basic.forever(function () {
    basic.pause(randint(500, 3000))
    Tie2 = game.createSprite(4, randint(0, 4))
    Tie1.turn(Direction.Right, 180)
    for (let index = 0; index <= 4; index++) {
        Tie2.move(1)
        if (Tie2.isTouching(Missle)) {
            game.addScore(50)
            Tie2.delete()
        }
        basic.pause(200)
    }
    Tie2.delete()
})
