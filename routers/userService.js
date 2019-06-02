var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'http://localhost:8085'
const api = apiAdapter(BASE_URL)

router.get('/api/users', (req, res) => {
  api.get(req.path).then(response => {
    res.send(response.data)
  })
})

router.get('/api/users/:userId', (req, res) => {
  api.get(req.path).then(response => {
	res.send(response.data)
  })
})

router.get('/api/users/:userPersonalId/:userPasswword', (req, res) => {
  api.get(req.path).then(response => {
	res.send(response.data)

  })
})

router.post('/api/users', (req, res) => {
  api.post(req.path, req.body).then(response => {
    res.send(response.data)
  })
})

module.exports = router
