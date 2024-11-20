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
};
