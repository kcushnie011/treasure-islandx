input.onButtonPressed(Button.A, function () {
    if (45 < input.compassHeading() && input.compassHeading() < 135) {
        basic.showString("E")
        basic.pause(200)
    }
})
basic.forever(function () {
	
})
