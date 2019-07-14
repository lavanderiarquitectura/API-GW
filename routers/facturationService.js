var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')

config_data = require('../ipconfig.json')

const BASE_URL = 'http://' + config_data.facturationServiceIP + ':3000'
const api = apiAdapter(BASE_URL)

router.get('/getfacturaglobal/:idCuarto', (req, res) => {
  api.get(req.path).then(response => {
    console.log("response.data");
    console.log(response.data);

    res.status(200).send(response.data)
  }).catch(function (error) {
    console.log("error");
    console.log(error);
    
    res.send(error)
  })
})

router.patch('/payfactura/:idCuarto', (req, res) => {
  api.patch(req.path).then(response => {
    console.log("response.data");
    console.log(response.data);

    res.send(response.data)
  }).catch(function (error) {
    console.log("error");
    console.log(error);

    res.send(error)
  })
})

router.post('/postfacprendas', (req, res) => {
  api.post(req.path, req.body).then(response => {
    console.log("response.data");
    console.log(response.data);

    res.send(response.data)
  }).catch(function (error) {
    console.log("error");
    console.log(error);

    res.send(error)
  })
})

router.get('/gethabitacionescostfree', (req, res) => {
  api.get(req.path).then(response => {
    console.log("response.data");
    console.log(response.data);

    res.status(200).send(response.data)
  }).catch(function (error) {
    console.log("error");
    console.log(error);
    
    res.send(error)
  })
})

module.exports = router
