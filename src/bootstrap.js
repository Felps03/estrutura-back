import dotenv from 'dotenv';

const environment = Object.freeze({
  test: '.env.test',
  dev: '.env',
  homolog: '.env.homolog'
});

dotenv.config({
  path: environment[process.env.NODE_ENV]
});
