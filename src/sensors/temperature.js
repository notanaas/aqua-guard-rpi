const { Gpio } = require('onoff');  // Assuming a digital temperature sensor

// Placeholder for temperature sensor logic
const temperatureSensorPin = new Gpio(18, 'in');  // Pin 18 for temperature sensor (modify for your actual pin)

function readTemperature() {
  // Logic to read temperature sensor
  // Example: Simulate reading with random value between 20°C and 30°C
  const temperatureValue = (Math.random() * (30 - 20) + 20).toFixed(2);
  return temperatureValue;
}

module.exports = readTemperature;
