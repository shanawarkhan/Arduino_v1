var pixel = require("node-pixel");
var firmata = require('firmata');
var five = require('johnny-five');
var board = new five.Board();

var board = new firmata.Board('path to usb',function(){

    strip = new pixel.Strip({
        pin: 3, // this is still supported as a shorthand
        // length: 8,
        firmata: board,
        controller: "LPD66803S",

    });

    strip.on("ready", function() {
        strip.color("#ff0000"); // turns entire strip red using a hex colour
		strip.show();
		// console.log(strip.length)
		var p = strip.pixel(1); // get second LED
		p.off(); // turn it off

    });
});