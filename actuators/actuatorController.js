const { Gpio } = require('onoff');

// Example GPIO pin for actuator control
const actuatorPin = new Gpio(22, 'out');

const activateActuator = () => {
    actuatorPin.writeSync(1);
    console.log('Actuator activated');
};

const deactivateActuator = () => {
    actuatorPin.writeSync(0);
    console.log('Actuator deactivated');
};

module.exports = {
    activateActuator,
    deactivateActuator
};
