var express = require('express');
var app = express();
var router = require('./routers/router')
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Simple API Gateway")
})

app.use(cors());
app.use(router)

console.log("Simple API Gateway run on localhost:3005")

<<<<<<< HEAD
app.listen(3000);
=======
app.listen(3005);
>>>>>>> b88d74be42157e333a7c1e9b02b7c153301a941b
