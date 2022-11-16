let Sorteio = 0
input.onGesture(Gesture.Shake, function () {
    Sorteio = randint(0, 2)
    if (Sorteio == 0) {
        basic.showString("NS")
    } else if (Sorteio == 1) {
        basic.showString("S")
    } else if (Sorteio == 2) {
        basic.showString("S")
    }
})
