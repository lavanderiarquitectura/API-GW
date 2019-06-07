var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')

config_data = require('../ipconfig.json')

const BASE_URL = 'http://' + config_data.clothingRegistrationServiceIP + ':8082'
const api = apiAdapter(BASE_URL)


router.get('/cloth_register/get', (req, res) => {
  api.get(req.path).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.get('/cloth_register/get/:id_prenda', (req, res) => {
  api.get(req.path).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.get('/cloth_fac/get/:id_cuarto', (req, res) => {
  api.get(req.path).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.post('/cloth_register/create', (req, res) => {
  api.post(req.path, req.body).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.put('/cloth_register/update/:id_prenda', (req, res) => {
  api.put(req.path, req.body).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.delete('/cloth_register/delete/:id_prenda', (req, res) => {
  api.delete(req.path, req.body).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

module.exports = router