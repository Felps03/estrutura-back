/* eslint no-shadow: 0 */
import moment from 'moment-timezone';
import winston from 'winston';

const { combine, timestamp, printf } = winston.format;

const removeFileName = message => {
  return message.replace(`${message.split(' ')[0]} - `, '');
};

const getFileName = message => {
  return `${message.split(' ')[0]}.js`;
};

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${getFileName(message)}] ${level}: ${removeFileName(message)}`;
});

const logger = winston.createLogger({
  level: 'silly',
  transports: [new winston.transports.Console(), new winston.transports.File({ filename: 'app.log' })],
  format: combine(
    timestamp({
      format: moment.tz(Date.now(), 'America/Sao_Paulo').format('DD-MM-YYYY HH:mm:ss')
    }),
    myFormat
  )
});

module.exports = logger;
/* eslint no-shadow: 0 */
