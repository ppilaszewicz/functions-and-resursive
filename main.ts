let num = 0
input.onButtonPressed(Button.A, function () {
    stuff(5)
})
function stuff (num: number) {
    basic.showNumber(num)
    if (num > 0) {
        num += -1
        stuff(num)
    }
}
basic.forever(function () {
	
})
