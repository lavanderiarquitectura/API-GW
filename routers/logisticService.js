var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'http://localhost:8089'
const api = apiAdapter(BASE_URL)

router.get('/api/items', (req, res) => {
  api.get(req.path).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.get('/api/items/:userId', (req, res) => {
  api.get(req.path).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.get('/api/items/room/:roomId', (req, res) => {
  api.get(req.path).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.post('/api/items', (req, res) => {
  api.post(req.path, req.body).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.put('/api/items/:itemId', (req, res) => {
  api.put(req.path, req.body).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.delete('/api/items/:itemId', (req, res) => {
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



router.get('/api/fabricTypes', (req, res) => {
  api.get(req.path, req.body).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})


router.get('/api/fabricTypes/:fabricId', (req, res) => {
  api.get(req.path, req.body).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})


router.post('/api/fabricTypes', (req, res) => {
  api.post(req.path, req.body).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})


router.put('/api/fabricTypes/:fabricId', (req, res) => {
  api.put(req.path, req.body).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.delete('/api/fabricTypes/:fabricId', (req, res) => {
  api.delete(req.path, req.body).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})


module.exports = router