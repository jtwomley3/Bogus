import winston from 'winston';

const logger = new(winston.Logger)({
  transports: [
    // if we ever want to log to a file in addition to console then we could use this setup
    // new (winston.transports.File)({
    //   timestamp: function() {
    //     return new Date().toTimeString();
    //   },
    //   formatter: function(options) {
    //     // Return string will be passed to logger.
    //     return options.timestamp() +' '+ options.level.toUpperCase() +' '+ (options.message ? options.message : '') +
    //       (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
    //   }
    // }),
    new(winston.transports.Console)({
      formatter: function (options) {
        return options.level.toUpperCase() + ': ' + (options.message ? options.message : '');
      }
    })
  ]
});

export default logger;
