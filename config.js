const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  environment: process.env.NODE_ENV,
  port: process.env.PORT,
  uri: process.env.URL
};