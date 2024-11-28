import dotenv from 'dotenv';
dotenv.config();

import envVarSchema from './../validations/env.validation.js';

const { error, value: envVars } = envVarSchema.validate(process.env);

export default {
  dbUri: envVars.DB_URI,
  port: envVars.PORT,
  clientId: envVars.CLIENT_ID,
  clientSecret: envVars.CLIENT_SECRET,
  redirectUri: envVars.REDIRECT_URI,
  refreshToken: envVars.REFRESH_TOKEN,
  senderEmail: envVars.SENDER_EMAIL,
  env: envVars.NODE_ENV,
  url: envVars.URL,
  jwt: {
    secretKey: envVars.JWT_SECRET_KEY,
    accessTokenMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshTokenDays: envVars.JWT_REFRESS_EXPIRATION_DAYS,
  },
};
