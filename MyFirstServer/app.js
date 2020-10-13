const express = require('express');
const app = express();
const port = 3000;
const dBModule = require('./dBModule');
const personModel = require('./PersonModel');
const clientDir = __dirname + "\\client\\";

app.set('view engine', 'ejs');

//exports.dBAddress = 'mongodb://localhost/webshop';


app.use(express.static(clientDir));

app.use(express.json());
app.use(express.urlencoded());

app.get('/',(reg, res) => res.render('pages/index.ejs', { name: "", email: ""}));
app.post('/', (req, res) => {

  console.log(req.body.fname);
  console.log(req.body.email);
  let user = personModel.newUser(req.body.fname, req.body.email);
  res.render('pages/index.ejs', {name: req.body.fname, email: req.body.email});
  dBModule.store(user);
  res.redirect('/');

})




app.listen(port, () => console.log(`Example app listening on port ${port}!`));