input.onPinPressed(TouchPin.P1, function () {
    radio.sendNumber(2)
})
input.onPinPressed(TouchPin.P0, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    pin = ""
    desetisko = 0
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.B, function () {
    if (pin.length == 4) {
        basic.showString(pin)
        basic.showNumber(desetisko)
        pin = ""
    } else {
        pin = "" + pin + "1"
        desetisko = desetisko * 2 + 1
    }
})
input.onPinPressed(TouchPin.P2, function () {
    radio.sendNumber(3)
})
radio.onReceivedNumber(function (prejeto) {
    if (prejeto == 1) {
        basic.showString("" + (imena[desetisko]))
    } else if (prejeto == 2) {
        basic.showString("" + (crke[desetisko]))
    } else if (prejeto == 3) {
        while (true) {
            images.createBigImage(`
                # . . . # . . . # #
                # # . . . . . # # .
                . # # . . . # # . .
                . . # # . # # . . .
                . . . # # # . . . #
                `).showImage(3)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    if (pin.length == 4) {
        basic.showString(pin)
        basic.showNumber(desetisko)
        pin = ""
    } else {
        pin = "" + pin + "0"
        desetisko = desetisko * 2
    }
})
let crke: string[] = []
let imena: string[] = []
let pin = ""
let desetisko = 0
basic.showLeds(`
    . . # . .
    . # . # .
    # . . . #
    . # . # .
    . . # . .
    `)
radio.setGroup(21)
desetisko = 0
pin = ""
imena = ["ROBOKLIK", "KAJA", "JURE", "DEJAN", "KLEMEN", "JAN", "LUKA", "ŽAN", "MILENA", "MIHA", "ALEX", "X", "X", "X", "X", "X"]
crke = ["ROBOKLIK", "R", "O", "B", "O", "K", "L", "I", "K", "*", "*", "-", "-", "-", "-", "-"]
