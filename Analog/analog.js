let blue = 0
let green = 0
let red = 0
basic.forever(() => {
    pins.analogWritePin(AnalogPin.P0, red)
    pins.analogWritePin(AnalogPin.P1, green)
    pins.analogWritePin(AnalogPin.P2, blue)
    if (input.buttonIsPressed(Button.A) && red < 1020) {
        red += 10
    } else if (input.buttonIsPressed(Button.A) && red == 1020) {
        red = 0
    }
    if (input.buttonIsPressed(Button.B) && green < 1020) {
        green += 10
    } else if (input.buttonIsPressed(Button.B) && green == 1020) {
        green = 0
    }
    if (input.buttonIsPressed(Button.AB) && blue < 1020) {
        blue += 10
    } else if (input.buttonIsPressed(Button.AB) && blue == 1020) {
        blue = 0
    }
})
