const { Gpio } = require('onoff'); // For GPIO handling
const axios = require('axios'); // For sending data to the API

// GPIO Pin Configuration
const waterLevelPin = new Gpio(14, 'in'); // GPIO 14 for water level sensor
const tempSensorPin = new Gpio(15, 'in'); // GPIO 15 for temperature sensor
const phSensorPin = new Gpio(18, 'in'); // GPIO 18 for pH sensor

// API Configuration
const API_URL = 'http://192.168.1.15:3001/api/devices/674c6d837d1e8455d5ec723a/sensor-data'; // Replace <your-ip-address> with the actual Raspberry Pi's IP

// Function to Read Water Level Sensor
const readWaterLevel = () => {
    const level = waterLevelPin.readSync(); // Reads 1 or 0
    return level === 1 ? 'Full' : 'Low'; // Convert to readable format
};

// Function to Read Temperature Sensor
const readTemperature = () => {
    // Replace with actual sensor reading logic
    const tempCelsius = Math.random() * 10 + 20; // Dummy value: 20–30 °C
    return tempCelsius.toFixed(2); // Return temperature as a string
};

// Function to Read pH Sensor
const readPH = () => {
    const phReading = phSensorPin.readSync(); // Reads 1 or 0 (example; update logic if using an analog sensor)
    return phReading === 1 ? 'High' : 'Normal'; // Example logic; replace as needed
};

// Function to Send Sensor Data to API
const sendSensorData = async () => {
    const waterLevel = readWaterLevel();
    const temperature = readTemperature();
    const pH = readPH();

    const payload = {
        waterLevel,
        temperature,
        pH
    };

    try {
        const response = await axios.post(API_URL, payload);
        console.log('Data sent successfully:', response.data);
    } catch (error) {
        console.error('Error sending data:', error.message);
    }
};

// Periodically Send Sensor Data
setInterval(sendSensorData, 5000); // Send data every 5 seconds

// Gracefully Cleanup GPIO on Exit
process.on('SIGINT', () => {
    waterLevelPin.unexport();
    tempSensorPin.unexport();
    phSensorPin.unexport();
    console.log('Exiting and releasing GPIO resources');
    process.exit();
});
