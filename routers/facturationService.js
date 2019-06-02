var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'http://localhost:4000'
const api = apiAdapter(BASE_URL)

router.get('/fac_prendas', (req, res) => {
  api.get(req.path).then(response => {
    res.send(response.data)
  })
})

router.get('/getglobales', (req, res) => {
  api.get(req.path).then(response => {
	res.send(response.data)
  })
})

router.get('/getglobales/:idCuarto', (req, res) => {
  api.get(req.path).then(response => {
	res.send(response.data)
  })
})

router.get('/getlocales/:idCuarto', (req, res) => {
  api.get(req.path).then(response => {
	res.send(response.data)
  })
})

router.patch('/updatestateglobales/:idCuarto', (req, res) => {
  api.patch(req.path, req.body).then(response => {
    res.send(response.data)
  })
})

router.post('/createlocales/:idCuarto/:cobro/:date', (req, res) => {
  api.post(req.path, req.body).then(response => {
    res.send(response.data)
  })
})

module.exports = router