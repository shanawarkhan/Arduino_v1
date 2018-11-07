var five = require("johnny-five");


five.Board().on("ready", function() {

  // Initialize the RGB LED
  // var led = new five.Led.RGB({
  //   pins: {
  //     red: 6,
  //     green: 5,
  //     blue: 3
  //   }
  // });

  // RGB LED alternate constructor
  // This will normalize an array of pins in [r, g, b]
  // order to an object (like above) that's shaped like:
  // {
  //   red: r,
  //   green: g,
  //   blue: b
  // }
  //var led = new five.Led.RGB([3,5,6]);

  // Add led to REPL (optional)
  // this.repl.inject({
    // led: led
  // });

  // Turn it on and set the initial color
  // led.on();
  // led.color("#FF0000");

  // led.blink(100);


  var rgb = new five.Led.RGB([6, 5, 3]);
    var index = 0;
    var rainbow = ["FF0000",
                    "FF7F00",
                    "FFFF00",
                    "00FF00",
                    "0000FF",
                    "4B0082",
                    "8F00FF",
                    "#FFA07A",
                    "#E9967A",
                    "#FFFFFF",
                    "#C0C0C0",
                    "#808080",
                    "#000000",
                    "#FF0000",
                    "#800000",
                    "#FFFF00",
                    "#808000",
                    "#00FF00",
                    "#008000",
                    "#00FFFF",
                    "#008080",
                    "#0000FF",
                    "#000080",
                    "#FF00FF",
                    "#800080"];

    this.loop(1000, function() {
      rgb.color(rainbow[index++]);
      if (index === rainbow.length) {
        index = 0;
      }
    });




  // Create a standard `led` component
  // on a valid pwm pin
  var ledblue = new five.Led(11);

  // Instead of passing a time and rate, you can
  // pass any valid Animation() segment opts object
  // https://github.com/rwaldron/johnny-five/wiki/Animation#segment-properties
  ledblue.pulse({
    easing: "linear",
    duration: 3000,
    cuePoints: [0, 0.2, 0.4, 0.6, 0.8, 1],
    keyFrames: [0, 10, 0, 50, 0, 255],
    onstop: function() {
      console.log("Animation stopped");
    }
  });

  // Stop and turn off the led pulse loop after
  // 12 seconds (shown in ms)
  this.wait(1000, function() {

    // stop() terminates the interval
    // off() shuts the led off
    // ledblue.stop().off();
  });

  var led = new five.Led(13);
  // Blink every half second
  led.blink(500);

});
