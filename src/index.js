const registerDevice = require('./device');
const sendData = require('./sendData');

// Register the device first (to ensure the device is registered before sending data)
registerDevice().then(() => {
  // After registration, send sensor data every 5 seconds
  setInterval(() => {
    sendData();
  }, 5000);  // Adjust interval as needed
});
