const { Schema, model } = require('mongoose')

const userProfileSchema = Schema({
  password:{
    type:String,
    required: true,
    trim:true,
    max: 25,
    min: 5,
  },
  login:{
    type:String,
    required: true,
    trim:true,
    unique: true,
    max: 20,
    min: 3,
  }
})

export const userProfileModel = model('user_profile', userProfileSchema)