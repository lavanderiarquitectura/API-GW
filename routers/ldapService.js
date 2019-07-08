var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')


config_data = require('../ipconfig.json')

const BASE_URL = 'http://' + config_data.ldapServiceIP + ':3030'
const api = apiAdapter(BASE_URL)

router.get('/ldap-auth/api/auth/getuser/:user', (req, res) => {
  api.get(req.path).then(response => {
    console.log("Response");
    console.log(response.data);

	  res.send(response.data)
  }).catch(function (error) {
    console.log("Error");
    console.log(error);

      res.send(error)
  })
})

module.exports = router
