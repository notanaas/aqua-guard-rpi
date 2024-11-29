const axios = require('axios');
const { apiUrl, deviceId, jwtToken } = require('./config/config');

async function registerDevice() {
  try {
    const response = await axios.post(`${apiUrl}/devices/register`, {
      serialNumber: deviceId,
      jwtToken: jwtToken,
      // Include additional device information as necessary
    });

    console.log('Device Registered:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error registering device:', error);
  }
}

module.exports = registerDevice;
