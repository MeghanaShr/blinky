// Write a program to make the maqueen Red LED blink on Even numbers.
// 
// 1. Start a counter that counts from 78 down till 16. (one second for every number)
// 2. if the number is odd then Turn OFF the RED LEDs
// 3. if the number is even then Turn ON the RED LEDs
let counter = 78
while (counter > 16) {
    if (counter % 2 == 0) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    } else if (counter % 2 == 1) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    } else {
    	
    }
    basic.pause(1000)
    counter += -1
}
music.setVolume(127)
music.playMelody("C5 G B A F A C5 B ", 120)
