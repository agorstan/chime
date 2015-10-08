'use strict';

const bunyan = require('bunyan');
const bunyanFormat = require('bunyan-format');

const logger = bunyan.createLogger({
    name: require('../../package.json').name,
    src: true,
    stream: bunyanFormat({output: 'long'})
});

process.on('unhandledRejection', function (err) {
    console.log(err.stack, err);
    logger.error({err}, 'unhandledRejection Caught. Was there a promise with no error handling?');
});

module.exports = logger;