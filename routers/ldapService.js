var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')


config_data = require('../ipconfig.json')

const BASE_URL = 'http://' + config_data.ldapServiceIP + ':3001'
const api = apiAdapter(BASE_URL)

router.get('/ldap-auth/api/auth/user/:usr/:psw', (req, res) => {
  api.get(req.path).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.get('/ldap-auth/api/auth/operator/:usr/:psw', (req, res) => {
  api.get(req.path).then(response => {
	res.send(response.data)
  }).catch(function (error) {
	  res.send(error)
  })
})

router.get('/ldap-auth/api/auth/token/:tkn', (req, res) => {
  api.get(req.path).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.get('/ldap-auth/api/auth/getuser/:user', (req, res) => {
  api.get(req.path).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

router.post('/ldap-auth/api/auth/register', (req, res) => {
  api.put(req.path, req.body).then(response => {
	res.send(response.data)
  }).catch(function (error) {
      res.send(error)
  })
})

module.exports = router