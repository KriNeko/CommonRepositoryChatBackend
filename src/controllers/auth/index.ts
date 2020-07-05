const bcrypt = require('bcrypt')
const { userProfileModel } = require('./models')
const { registrationValidate } = require('./validation')

module.exports = (app) => {

  app.post('/auth/registration', registrationValidate, (req, res) => {
    const { login, password } = req.body
    const { genSaltSync, hashSync } = bcrypt
    const salt = genSaltSync(10)
    const hash = hashSync(password, salt)
    const userProfile = new userProfileModel ({
      login,
      password: hash,
    })
    userProfile.save(error => {
      if (error)
        res.send({ ok: false, error })
      else
        res.send({ ok: true })
    })
  })
  
}
