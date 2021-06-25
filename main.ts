input.onButtonPressed(Button.A, function () {
    Missle = game.createSprite(Xwing.get(LedSpriteProperty.X), Xwing.get(LedSpriteProperty.Y))
    while (!(4 == Missle.get(LedSpriteProperty.X))) {
        Missle.move(1)
        basic.pause(125)
    }
    Missle.delete()
})
input.onGesture(Gesture.TiltLeft, function () {
    Alt += -1
    if (Alt < 0) {
        Alt = 0
    }
    Xwing.set(LedSpriteProperty.Y, Alt)
})
input.onGesture(Gesture.TiltRight, function () {
    Alt += 1
    if (Alt > 4) {
        Alt = 4
    }
    Xwing.set(LedSpriteProperty.Y, Alt)
})
let Tie1: game.LedSprite = null
let Missle: game.LedSprite = null
let Xwing: game.LedSprite = null
let Alt = 0
Alt = 2
Xwing = game.createSprite(1, 2)
basic.forever(function () {
    Tie1 = game.createSprite(4, randint(0, 4))
    Tie1.turn(Direction.Right, 180)
    for (let index = 0; index <= 4; index++) {
        Tie1.move(1)
        basic.pause(200)
    }
    Tie1.delete()
})
