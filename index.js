const express = require('express');
const { Gpio } = require('onoff'); // GPIO for Raspberry Pi
const axios = require('axios');
const config = require('./config.json');

// Initialize app
const app = express();
app.use(express.json());

// Import controllers
const motorController = require('./controllers/motorController');
const pHSensor = require('./sensors/pHSensor');
const tempSensor = require('./sensors/tempSensor');
const uvSensor = require('./sensors/uvSensor');

// Motor Control Endpoint
app.post('/motor', (req, res) => {
    const { direction } = req.body;
    motorController.controlMotor(direction);
    res.json({ message: `Motor moved ${direction}` });
});

// Periodic Sensor Data Sending
const sendSensorData = async () => {
    const data = {
        pH: pHSensor.read(),
        temperature: tempSensor.read(),
        uv: uvSensor.read()
    };
    try {
        await axios.post(`${config.serverUrl}/api/sensors`, data);
        console.log('Sensor data sent:', data);
    } catch (error) {
        console.error('Error sending sensor data:', error.message);
    }
};
setInterval(sendSensorData, config.sensorUpdateInterval);

// Start Server
app.listen(config.piPort, () => {
    console.log(`AquaGuard Raspberry Pi server running on port ${config.piPort}`);
});
