var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'http://localhost:5000'
const api = apiAdapter(BASE_URL)

router.get('/delete/:id', (req, res) => {
  api.get(req.path).then(response => {
    res.send(response.data)
  })
})

router.post('/add', (req, res) => {
  api.post(req.path).then(response => {
	res.send(response.data)
  })
})

router.post('/lote', (req, res) => {
  api.post(req.path).then(response => {
	res.send(response.data)
  })
})

router.post('/', (req, res) => {
  api.post(req.path).then(response => {
	res.send(response.data)
  })
})


router.post('/planchado', (req, res) => {
  api.post(req.path).then(response => {
	res.send(response.data)
  })
})

router.post('/fin', (req, res) => {
  api.post(req.path).then(response => {
	res.send(response.data)
  })
})

router.get('/', (req, res) => {
  api.get(req.path, req.body).then(response => {
    res.send(response.data)
  })
})

router.get('/add', (req, res) => {
  api.get(req.path, req.body).then(response => {
    res.send(response.data)
  })
})

module.exports = router