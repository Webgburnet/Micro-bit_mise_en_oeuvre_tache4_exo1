let luminosite = 0
let strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.White))
basic.forever(function () {
    luminosite = input.lightLevel()
    basic.showNumber(luminosite)
    strip.setBrightness(luminosite)
    strip.show()
})
