import winston from 'winston';
import config from './config.js';

const { format, createLogger, transports } = winston;
const { combine, timestamp, colorize, printf } = format;

const winstonFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

const logger = createLogger({
  level: config.env === 'production' ? 'info' : 'debug',
  format: combine(
    timestamp(),
    config.env === 'production'
      ? winstonFormat
      : combine(colorize(), winstonFormat),
  ),
  transports: [new transports.Console()],
});

export default logger;
