forever(function () {
    pins.LED.digitalWrite(false)
    pause(500)
    pins.A0.digitalWrite(true)
    pause(1000)
})
