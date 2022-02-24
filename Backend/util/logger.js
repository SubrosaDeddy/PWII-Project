const {
    createLogger,
    format,
    transports
  } = require("winston");

//   require('winston-mongodb').MongoDB;
  
  const logger = createLogger({
    transports: [
    //   new transports.MongoDB({
    //     db: process.env.MONGODB_URI,
    //     level: 'silly',
    //     options: {
    //       useUnifiedTopology: true
    //     }
    //   }),
      new transports.File({
        filename: "error.log",
        level: "error",
        format: format.combine(format.timestamp(), format.json())
      }),
      new transports.File({
        filename: "info.log",
        level: "info",
        format: format.combine(format.timestamp(), format.json())
      }),
    ]
  });
  module.exports = logger;
  