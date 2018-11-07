var five = require("johnny-five");
var hexColor = require('hex-to-color-name');

five.Board().on("ready", function() {

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
      console.log(rainbow[index]);
    });
  });


