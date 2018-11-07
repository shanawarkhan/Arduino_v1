'use strict';

var serialport = require('serialport');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'select port> '
});

var idx = 0;
var ports = [];

console.log('COM port list:');
serialport.list(function (err, p) {
  p.forEach(function(p) {
    ports.push(p.comName);
    console.log(' [' + idx + '] ' + p.comName);
    idx++;
  });

  rl.prompt();

  rl.on('line', (line) => {
    //console.log(line);
    //console.log(ports);
    if(line<idx) {
      console.log('Opening ' + ports[Number(line)]);

      var port = new serialport(ports[Number(line)], {
        baudRate: 9600,
        parser: serialport.parsers.Readline('\n')
        });

      port.on('error', function(e) {
        console.error(e.message);
        process.exit(0);
      });

      port.on('open', function() {
        console.log('Serial Port Opened');
        port.on('data', function(data){
          console.log(data);
        });
      });

    } else {
      console.error('ERROR: Wrong port number');
      process.exit(0);
    }
  });

  rl.on('close', () => {
  console.log('Bye!');
  process.exit(0);
});

});
