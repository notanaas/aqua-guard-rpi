const { Gpio } = require('onoff');

// GPIO Pins for Motor
const motorIn = new Gpio(17, 'out');
const motorOut = new Gpio(27, 'out');

const controlMotor = (direction) => {
    if (direction === 'in') {
        motorIn.writeSync(1);
        motorOut.writeSync(0);
    } else if (direction === 'out') {
        motorIn.writeSync(0);
        motorOut.writeSync(1);
    } else {
        motorIn.writeSync(0);
        motorOut.writeSync(0); // Stop
    }
    console.log(`Motor moved: ${direction}`);
};

module.exports = {
    controlMotor
};
