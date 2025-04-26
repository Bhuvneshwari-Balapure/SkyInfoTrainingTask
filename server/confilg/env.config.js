import "dotenv/config";

const _config = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  CLOUD_NAME: process.env.CLOUD_NAME,
  API_KEY: process.env.API_KEY,
  SECRET_KEY: process.env.SECRET_KEY,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  MAIL_ID: process.env.MAIL_ID,
  MAIL_PASS: process.env.MAIL_PASS,
};

const config = Object.freeze(_config);
export default config;
