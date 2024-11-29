# Raspberry Pi Device

This project reads sensor data from connected sensors on a Raspberry Pi and sends it to the backend API for processing and decision making. It includes functionality for device registration, reading pH, temperature, and water level, and sending this data to a remote server.

## Installation

1. Clone or download this project to your Raspberry Pi.
2. Ensure that the necessary sensors are connected to the GPIO pins or other appropriate interfaces.
3. Run `npm install` to install the dependencies.
4. Create an `.env` file for configuration (see below).
5. Start the process by running `node src/index.js`.

## Configuration

In the `.env` file, define the following environment variables:

- `API_URL`: The base URL of your backend API (e.g., `http://your-server-ip:3000/api`).
- `DEVICE_ID`: The unique serial number of the device.
- `JWT_TOKEN`: The JWT token for the logged-in user.

# aqua-guard-rpi
