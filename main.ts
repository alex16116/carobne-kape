function pokazi () {
    basic.clearScreen()
    basic.showString(pin)
    basic.showNumber(desetisko)
    pokazal = true
}
input.onButtonPressed(Button.AB, function () {
    pin = ""
    desetisko = 0
    basic.showIcon(IconNames.No)
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    if (pin.length < 4) {
        pin = "" + pin + "1"
        desetisko = desetisko * 2 + 1
    }
    if (pin.length == 4) {
        if (!(pokazal)) {
            pokazi()
        }
        radio.sendNumber(2)
    }
})
radio.onReceivedNumber(function (prejeto) {
    if (prejeto == 1) {
        basic.clearScreen()
        basic.showString("" + (imena[desetisko]))
    } else if (prejeto == 2) {
        basic.clearScreen()
        basic.showString("" + (crke[desetisko]))
    } else if (prejeto == 3) {
        basic.clearScreen()
        images.createBigImage(`
            # . . . # . . . # #
            # # . . . . . # # .
            . # # . . . # # . .
            . . # # . # # . . .
            . . . # # # . . . #
            `).scrollImage(1, 200)
    }
})
input.onButtonPressed(Button.A, function () {
    if (pin.length < 4) {
        pin = "" + pin + "0"
        desetisko = desetisko * 2
    }
    if (pin.length == 4) {
        if (!(pokazal)) {
            pokazi()
        }
        radio.sendNumber(1)
    }
})
let crke: string[] = []
let imena: string[] = []
let pin = ""
let desetisko = 0
let pokazal = false
pokazal = false
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
imena = ["ROBOKLIK", "KAJA", "JURE", "DEJAN", "KLEMEN", "JAN", "LUKA", "ŽAN", "MILENA", "MIHA", "ALEX", "BOSTJAN", "SIMONA", "BARBARA", "URSKA", "VILI"]
crke = ["ROBOKLIK", "R", "O", "B", "O", "K", "L", "I", "K", "*", "*", "-", "-", "-", "-", "-"]
