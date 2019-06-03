var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'http://localhost:5000'
const api = apiAdapter(BASE_URL)

router.get('/devices', (req, res) => {
  api.get(req.path).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.get('/devices/:deviceId', (req, res) => {
  api.get(req.path).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.post('/devices', (req, res) => {
  api.post(req.path).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.put('/devices', (req, res) => {
  api.put(req.path).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.delete('/devices', (req, res) => {
  api.delete(req.path).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.get('/lots', (req, res) => {
  api.get(req.path).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.get('/lots/:lotId', (req, res) => {
  api.get(req.path).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.post('/lots', (req, res) => {
  api.post(req.path).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.put('/lots', (req, res) => {
  api.put(req.path).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.delete('/lots', (req, res) => {
  api.delete(req.path).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})


module.exports = router