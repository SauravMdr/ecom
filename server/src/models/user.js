const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({ 
  //define schema according to your project
  phoneNumber: {type:String, unique: true, required: true}, 
  email: String,
  role: {
    type: String,
    enum : ['user','admin','rider'],
    default: 'user'
    },
  password: String
});

//create model
const User = mongoose.model('User', userSchema);
module.exports = User