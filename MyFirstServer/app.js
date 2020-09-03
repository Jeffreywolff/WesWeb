const express = require('express');
const app = express();
const port = 3000;

const clientDir = __dirname + "\\client\\"

app.get('/',(reg, res) => res.sendFile(clientDir + "index.html"));

app.get('/cssenn', (req, res) => {
  res.sendFile(clientDir + "style.css")
});

app.get('/bilden', (req, res) => {
  res.sendFile(clientDir + "SimpleSpaceGuy.jpg")
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`));