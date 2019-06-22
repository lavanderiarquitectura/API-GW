var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')

config_data = require('../ipconfig.json')

const BASE_URL = 'http://' + config_data.machineServiceIP + ':5000'
const api = apiAdapter(BASE_URL)

router.get('/devices', (req, res) => {
  api.get(req.path).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.get('/devices/byType/:type', (req, res) => {
  api.get(req.path).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.get('/devices/byTypeAndState/:type/:state', (req, res) => {
  api.get(req.path).then(response => {
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

router.get('/lots/:id_op/:id_fab/:bool_fin', (req, res) => {
  api.get(req.path).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.get('/lots/max', (req, res) => {
  api.get(req.path).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.get('/lots/byOperation/:typeOperation', (req, res) => {
  api.get(req.path).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.get('/lots/byOperationAndState/:type_operation/:state', (req, res) => {
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
  api.post(req.path, req.body).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.put('/devices/:deviceId', (req, res) => {
  api.put(req.path, req.body).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.delete('/devices/:deviceId', (req, res) => {
  api.delete(req.path, req.body).then(response => {
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
  api.post(req.path, req.body).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.put('/lots/:lotId', (req, res) => {
  api.put(req.path, req.body).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.delete('/lots/:lotId', (req, res) => {
  api.delete(req.path, req.body).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})


module.exports = router