const read = () => {
    // Dummy sensor reading logic
    const pHValue = (7 + Math.random() * 0.5).toFixed(2); // Simulated value
    console.log(`pH Sensor Reading: ${pHValue}`);
    return pHValue;
};

module.exports = {
    read
};
