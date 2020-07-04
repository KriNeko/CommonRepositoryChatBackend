const bcrypt = require('bcrypt')
const { userProfileModel } = require('./models')


module.exports = (app) => {

  app.get('/auth/registration', (req, res) => {
    const { login, password } = req.headers
    const { genSaltSync, hashSync } = bcrypt
    const salt = genSaltSync(10)
    const hash = hashSync(password, salt)
    const userProfile = new userProfileModel ({
      login,
      password: hash,
    })
    try {
      userProfile.save()
      res.send({ ok: true })
    } catch (error) {
      console.log('registration failed. Error:' + error)
    }
  })
  
}
