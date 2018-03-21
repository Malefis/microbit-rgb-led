input.onGesture(Gesture.Shake, () => {
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
})
// RED = Pin 14 || GREEN = Pin 15 ||BLUE = Pin 16
input.onButtonPressed(Button.A, () => {
    pins.digitalWritePin(DigitalPin.P14, 1)
})
input.onButtonPressed(Button.B, () => {
    pins.digitalWritePin(DigitalPin.P15, 1)
})
input.onButtonPressed(Button.AB, () => {
    pins.digitalWritePin(DigitalPin.P16, 1)
})
