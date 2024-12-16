const read = () => {
    // Dummy sensor reading logic
    const uvIndex = (Math.random() * 10).toFixed(2); // Simulated value
    console.log(`UV Sensor Reading: ${uvIndex}`);
    return uvIndex;
};

module.exports = {
    read
};
