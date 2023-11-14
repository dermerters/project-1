input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 A C5 A C5 A C5 A ", 160), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P2, 0)
    basic.pause(1000)
    music.play(music.stringPlayable("E G A B - G C5 - ", 120), music.PlaybackMode.UntilDone)
    basic.pause(5000)
    pins.servoWritePin(AnalogPin.P2, 180)
    basic.pause(10)
    pins.servoWritePin(AnalogPin.P1, 180)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C5 A C5 A C5 A C5 A ", 160), music.PlaybackMode.UntilDone)
})
pins.servoWritePin(AnalogPin.P2, 180)
basic.forever(function () {
    if (input.logoIsPressed()) {
        pins.servoWritePin(AnalogPin.P1, 0)
        pins.servoWritePin(AnalogPin.P2, 180)
        basic.pause(1000)
    }
})
