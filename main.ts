input.onButtonPressed(Button.A, function () {
    currentIndex = (currentIndex + 1) % letters.length
    basic.showString("" + (letters[currentIndex]))
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString(currentText)
    basic.clearScreen()
    currentText = ""
})
radio.onReceivedString(function (receivedString) {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.showString("" + (receivedString))
})
input.onButtonPressed(Button.B, function () {
    currentIndex = (currentIndex - 1 + letters.length) % letters.length
    basic.showString("" + (letters[currentIndex]))
})
input.onGesture(Gesture.Shake, function () {
    currentText = "" + currentText + letters[currentIndex]
    basic.showString(currentText)
})
let currentText = ""
let currentIndex = 0
let letters = ""
letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_"
radio.setGroup(43)
basic.showString("" + (letters[currentIndex]))
