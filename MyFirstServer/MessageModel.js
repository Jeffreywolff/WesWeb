const mongoose = require('mongoose');
const MessageSchema = new mongoose.Schema({
    fname: String,
    email: String
  });

  const Message = mongoose.model('Message', MessageSchema);


exports.newMessage = (fname,email) =>{

    var message = new Message({
      fname: fname,
      email: email

    });

    return message;
}

exports.messageFind = async () =>{
  let foundMessage = await Message.find({});
  return foundMessage;
}