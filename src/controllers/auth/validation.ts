const { validate, Joi } = require('express-validation')

export const registrationValidate = validate({
  body: Joi.object({
    login: Joi.string().min(3).max(20).required(),
    password: Joi.string().regex(/[\w]{5,25}/).required(),
  })
})