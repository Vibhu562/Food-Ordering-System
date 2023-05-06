const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

  name: {
    type: String,
    require
  },
  email: {
    type: String,
    require
  },
  Address: {
    type: String,
    require
  },
  phonenumber: {
    type: Number,
    require
  },
  otp :{
    type :Number,
    require
  },
  password: {
    type: String,
    require
  }
})

const User = mongoose.model('users', userSchema)
module.exports=User