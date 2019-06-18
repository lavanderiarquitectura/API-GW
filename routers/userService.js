var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')


config_data = require('../ipconfig.json')

const BASE_URL = 'http://' + config_data.clothingRegistrationServiceIP + ':8085'
const api = apiAdapter(BASE_URL)

router.get('/api/users', (req, res) => {
  api.get(req.path).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.get('/api/users/:userId', (req, res) => {
  api.get(req.path).then(response => {
	res.send(response.data)
  }).catch(function (error) {
	  res.send(error)
  })
})

router.get('/api/users/:userPersonalId/:userPassword', (req, res) => {
  api.get(req.path).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.put('/api/users/:userId', (req, res) => {
  api.put(req.path, req.body).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.delete('/api/users/:userId', (req, res) => {
  api.delete(req.path, req.body).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.get('/api/rooms', (req, res) => {
  api.get(req.path, req.body).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})


router.get('/api/rooms/:roomId', (req, res) => {
  api.get(req.path, req.body).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})


router.post('/api/rooms', (req, res) => {
  api.post(req.path, req.body).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})


router.put('/api/rooms/:roomId', (req, res) => {
  api.put(req.path, req.body).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.delete('/api/rooms/:roomId', (req, res) => {
  api.delete(req.path, req.body).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})


module.exports = router
