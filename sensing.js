let values = [0, 0];

function getTemp() {
  return values[0];
}

function getHumid() {
  return values[1];
}
let sensorLib = require('node-dht-sensor');
  let sensorType = 22;
  let sensorPin = 4;
  let temperature;
  if (!sensorLib.initialize(sensorType, sensorPin)) {
    console.warn('Failed to initialize sensor');
  }
function dht22() {
  let readout = sensorLib.read();
  values[0] = readout.temperature.toFixed(1);
  values[1] = readout.humidity.toFixed(1);
  console.log('temp: ' + readout.temperature.toFixed(1) + '°C ');
  console.log('humid: ' + readout.humidity.toFixed(1) + '% ');
}
  module.exports.get = [getTemp(), getHumid];
  module.exports.sensing = dht22;
