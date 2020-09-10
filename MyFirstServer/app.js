const express = require('express');
const app = express();
const port = 3000;

const clientDir = __dirname + "\\client\\"

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
  res.redirect('/');
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`));