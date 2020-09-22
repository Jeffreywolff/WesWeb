const express = require('express');
const app = express();
const port = 3000;

const clientDir = __dirname + "\\client\\"


//MongoDb initials
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bruh', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
// Lets gooo

const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model('User', userSchema) 





app.use(express.json());
app.use(express.urlencoded());

app.get('/',(reg, res) => res.sendFile(clientDir + "index.html"));

app.get('/cssenn', (req, res) => {
  res.sendFile(clientDir + "style.css")
});

app.get('/bilden', (req, res) => {
  res.sendFile(clientDir + "SimpleSpaceGuy.jpg")
})

app.get('/Waifu', (req, res) => {
  res.sendFile(clientDir + "Chizuru_Ichinose_profil.jpg")
})



app.post('/', (req, res) => {
  console.log(req.body.fname);
  console.log(req.body.email);
  const user1 = new User({name: req.body.fname,email:req.body.email});
  user1.save();
  res.redirect('/');
})





app.listen(port, () => console.log(`Example app listening on port ${port}!`));