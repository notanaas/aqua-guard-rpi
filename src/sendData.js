const axios = require('axios');
const { apiUrl, deviceId, jwtToken } = require('./config/config');
const readPH = require('./sensors/pH');
const readTemperature = require('./sensors/temperature');
const readWaterLevel = require('./sensors/water_level');

async function sendData() {
  const pH = readPH();
  const temperature = readTemperature();
  const waterLevel = readWaterLevel();

  const sensorData = {
    serialNumber: deviceId,
    pH,
    temperature,
    waterLevel,
    timestamp: new Date(),
  };

  try {
    const response = await axios.post(`${apiUrl}/devices/${deviceId}/sensor-data`, sensorData, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    console.log('Data Sent:', response.data);
  } catch (error) {
    console.error('Error sending data:', error);
  }
}

module.exports = sendData;
