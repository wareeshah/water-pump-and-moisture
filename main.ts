let Moisture_setting = 0
for (let index = 0; index < 4; index++) {
    motor.motorStop(motor.Motors.M1)
    pins.analogWritePin(AnalogPin.P1, 1023)
    Moisture_setting = pins.analogReadPin(AnalogPin.P0)
    pins.analogWritePin(AnalogPin.P1, 0)
    basic.showNumber(Moisture_setting)
    if (Moisture_setting < 777) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
        basic.pause(2000)
        motor.motorStop(motor.Motors.M1)
    }
}
