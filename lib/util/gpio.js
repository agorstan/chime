'use strict';

const wpi = require('pi-gpio');
const logger = require('../util/logger');

let inputs = [
				{ pin: '16', gpio: '23', value: null },
				{ pin: '22', gpio: '25', value: null }
			];

let i;
for (i in inputs) {
	logger.info('opening GPIO port ' + inputs[i].gpio + ' on pin ' + inputs[i].pin + ' as input');
	gpio.open(inputs[i].pin, "input", function (err) {
	if (err) {
		throw err;
		}
	});
}