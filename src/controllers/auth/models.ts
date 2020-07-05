const { Schema } = require('mongoose')
const { mongoConnection } = require('../../mongoDB')
const userDB = mongoConnection.useDb('user')

const userProfileSchema = Schema({
  login: String,
  password: String,
})

export const userProfileModel = userDB.model('Profile', userProfileSchema)