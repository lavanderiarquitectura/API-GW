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

<<<<<<< HEAD
module.exports = router
=======
router.put('/api/users/:userId', (req, res) => {
  api.put(req.path, req.body).then(response => {
    res.send(response.data)
  })
})

router.delete('/api/users/:userId', (req, res) => {
  api.delete(req.path, req.body).then(response => {
    res.send(response.data)
  })
})

router.get('/api/rooms', (req, res) => {
  api.get(req.path, req.body).then(response => {
    res.send(response.data)
  })
})


router.get('/api/rooms/:roomId', (req, res) => {
  api.get(req.path, req.body).then(response => {
    res.send(response.data)
  })
})


router.post('/api/rooms', (req, res) => {
  api.post(req.path, req.body).then(response => {
    res.send(response.data)
  })
})


router.put('/api/rooms/:roomId', (req, res) => {
  api.put(req.path, req.body).then(response => {
    res.send(response.data)
  })
})

router.delete('/api/rooms/:roomId', (req, res) => {
  api.delete(req.path, req.body).then(response => {
    res.send(response.data)
  })
})


module.exports = router
>>>>>>> e1e85392fa46a5cfe43924633e8cf8ae75a1de14
