import joi from 'joi';

const envVarSchema = joi
  .object({
    NODE_ENV: joi.string().required(),
    PORT: joi.number().positive().default(3000).required(),
    DB_URI: joi.string().required(),
  })
  .unknown();

export default envVarSchema;
