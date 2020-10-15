const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fname: String,
    email: String
  });

  const User = mongoose.model('User', userSchema);


exports.newUser = (name,email) =>{

    var user = new User({
      fname: name,
      email: email

    });

    return user;
}

exports.userFind = async () =>{
  let foundUser = await User.find({});
  return foundUser;
}