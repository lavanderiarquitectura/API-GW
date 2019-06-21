var express = require('express');
var router = express.Router()
var userService = require('./userService')
var clothingRegistrationService = require('./clothingRegistrationService')
var facturationService = require('./facturationService')
var machineService = require('./machineService')
var ldapService = require('./ldapService')
const axios = require('axios');
const userServiceIP = 'http://' + config_data.userServiceIP + ':8085'
const ldapServiceIP = 'http://' + config_data.ldapServiceIP + ':3001'

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.post('/api/users', (req, res) => {
	var params = {		

        }
	var headers = {
		'Content-Type': 'text/plain'
	}
	
		
	const request = require('request')
	  request.post(ldapServiceIP + '/ldap-auth/api/auth/register', {
	  headers: { 'Content-type': 'text/plain' },
	  json: {	 
	        name : req.body.name,
            last_name : req.body.last_name,
            personalId: req.body.personal_id,
            password: req.body.password,
            room_id: req.body.room_id,
			username: req.body.personal_id
	  }
	  }, (error, res, body) => {
	  if (error) {
    res.status(500).send(error);
	  }else{
	  if(response.data.id != null){

		res.status(201).send({ 
			success: true
		});
	}
	else{
		res.status(400).send({ 
			success: false
		});
	}
	  }
	  }
	)
})


router.get('/authenticate/:userId/:password', function(req, res) {
	axios.get(ldapServiceIP+ "/ldap-auth/api/auth/user/" + req.params.userId +"/"+ req.params.password, { 'headers': { 'Content-Type': 'text/plain' } }).then(response => {
		console.log(response)
	res.json(response.data)       
          })
          .catch(error => {
            res.send(error);
          });
});

router.get('/authenticate_operator/:username/:password', function(req, res) {
	axios.get(ldapServiceIP+ "/ldap-auth/api/auth/operator/" + req.params.username +"/"+ req.params.password, { 'headers': { 'Content-Type': 'text/plain' } }).then(response => {
		console.log(response)
	res.json(response.data)       
          })
          .catch(error => {
            res.send(error);
          });
});

router.use(function(req, res, next) {

	// check header or url parameters or post parameters for token
	var token = req.body.token || req.param('token') || req.headers['x-access-token'];
	console.log(token)
	console.log(ldapServiceIP+ "/ldap-auth/api/auth/token/" + token)
	axios.get(ldapServiceIP+ "/ldap-auth/api/auth/token/" + token, { 'headers': { 'Content-Type': 'text/plain' } }).then(response => {
		console.log(response)
		user = response;
		next();
          })
          .catch(error => {
            return res.status(403).send({ 
			success: false, 
			message: 'Token not provided or invalid.'
		});
          });
	
});

router.use(clothingRegistrationService)
router.use(facturationService)
router.use(machineService)
router.use(userService)
router.use(ldapService)

module.exports = router