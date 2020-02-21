input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (imena[0]))
    pin = ""
})
input.onButtonPressed(Button.B, function () {
    if (pin.length > 3) {
        basic.showString(pin)
        basic.showNumber(desetisko)
    } else {
        pin = "" + pin + "0"
        desetisko = desetisko * 2
    }
})
radio.onReceivedNumber(function (prejeto) {
    if (prejeto == desetisko) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.A, function () {
    if (pin.length > 3) {
        basic.showString(pin)
        basic.showNumber(desetisko)
    } else {
        pin = "" + pin + "1"
        desetisko = desetisko * 2 + 1
    }
})
let imena: string[] = []
let pin = ""
let desetisko = 0
radio.setGroup(21)
desetisko = 0
pin = ""
imena = ["ROBOKLIK", "Kaja", "jure", "Dejan", "Klemen", "Jan", "luka", "žan", "milena", "Miha", "alex", "-", "-", "-", "-", "-"]
basic.forever(function () {
    basic.showString("" + (imena[desetisko]))
})
