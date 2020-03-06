def pokaži():
    basic.show_string(pin)
    basic.show_number(desetisko)
    pin = ""
def pin_pressed_p1():
    radio.send_number(2)
input.on_pin_pressed(TouchPin.P1, pin_pressed_p1)
def pin_pressed_p0():
    radio.send_number(1)
input.on_pin_pressed(TouchPin.P0, pin_pressed_p0)
def button_pressed_ab():
    pin = ""
    desetisko = 0
    basic.show_icon(IconNames.NO)
input.on_button_pressed(Button.AB, button_pressed_ab)
def button_pressed_b():
    if len(pin) < 4:
        pin = "" + pin + "1"
        desetisko = desetisko * 2 + 1
    else:
        pokaži()
input.on_button_pressed(Button.B, button_pressed_b)
def pin_pressed_p2():
    radio.send_number(3)
input.on_pin_pressed(TouchPin.P2, pin_pressed_p2)
def received_number(prejeto):
    if prejeto == 1:
        basic.show_string("" + (imena[desetisko]))
    elif prejeto == 2:
        basic.show_string("" + (crke[desetisko]))
    elif prejeto == 3:
        while True:
            images.create_big_image("""
                # . . . # . . . # #
                # # . . . . . # # .
                . # # . . . # # . .
                . . # # . # # . . .
                . . . # # # . . . #
                """,).showImage(3)
radio.on_received_number(received_number)
def button_pressed_a():
    if len(pin) < 4:
        pin = "" + pin + "0"
        desetisko = desetisko * 2
    else:
        pokaži()
input.on_button_pressed(Button.A, button_pressed_a)
crke: List[str] = []
imena: List[str] = []
pin = ""
desetisko = 0
basic.show_leds("""
    . . # . .
    . # . # .
    # . . . #
    . # . # .
    . . # . .
    """,)
radio.set_group(21)
desetisko = 0
pin = ""
imena = ["ROBOKLIK",
    "KAJA",
    "JURE",
    "DEJAN",
    "KLEMEN",
    "JAN",
    "LUKA",
    "ŽAN",
    "MILENA",
    "MIHA",
    "ALEX",
    "X",
    "X",
    "X",
    "X",
    "X"]
crke = ["ROBOKLIK",
    "R",
    "O",
    "B",
    "O",
    "K",
    "L",
    "I",
    "K",
    "*",
    "*",
    "-",
    "-",
    "-",
    "-",
    "-"]