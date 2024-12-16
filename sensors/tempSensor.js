const read = () => {
    // Dummy sensor reading logic
    const temperature = (20 + Math.random() * 5).toFixed(2); // Simulated value
    console.log(`Temperature Sensor Reading: ${temperature} °C`);
    return temperature;
};

module.exports = {
    read
};
