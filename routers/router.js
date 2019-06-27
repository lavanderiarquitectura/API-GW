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
var jwt    = require('jsonwebtoken');
var crypto = require('crypto');

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
	  }, (error, response, body) => {
	  if (error) {
    res.status(500).send(error);
	  }else{
		console.log('Response: ' + response)
		res.status(201).send({ 
			success: true
		});
	
	  }
	  }
	)
})


router.get('/authenticate/:userId/:password', function(req, res) {
	axios.get(ldapServiceIP+ "/ldap-auth/api/auth/user/" + req.params.userId +"/"+ req.params.password, { 'headers': { 'Content-Type': 'text/plain' } }).then(response => {
var myCipher = crypto.createCipher('aes-128-cbc', 'Laundry');

var myDecipher = crypto.createDecipher('aes-128-cbc', 'Laundry');
		const payload = { //TODO
			userId: req.params.userId,
			type: "user"	  };
		var token = jwt.sign(payload, ('superSecret'), {expiresIn: 60 * 60 * 24});
		var cipheredToken = myCipher.update(token, 'utf8', 'hex')+ myCipher.final('hex')
console.log(payload)
		console.log("Unecrypted token " + token + "\n\n" + cipheredToken)
var undec = myDecipher.update(cipheredToken, 'hex', 'utf8')+ myDecipher.final('utf8')
	jwt.verify(undec, ('superSecret'), function(err, decoded) {       if (err) {
        console.log('Failed to authenticate token.')
		} else {
        // if everything is good, save to request for use in other routes
		console.log(decoded.type)
		console.log(Date.now())
		console.log(Date.now() >= decoded.exp * 1000)
        console.log(decoded);
      }
    });		
		res.json(cipheredToken)
	//res.json(response.data)       
          })
          .catch(error => {
            res.send(error);
          });
});

router.get('/authenticate_operator/:username/:password', function(req, res) {
	axios.get(ldapServiceIP+ "/ldap-auth/api/auth/operator/" + req.params.username +"/"+ req.params.password, { 'headers': { 'Content-Type': 'text/plain' } }).then(response => {
var myCipher = crypto.createCipher('aes-128-cbc', 'Laundry');

		const payload = { //TODO
			userId: req.params.username,
			type: "admin"	  };
		var token = jwt.sign(payload, ('superSecret'), {expiresIn: 60 * 60 * 24});
		var cipheredToken = myCipher.update(token, 'utf8', 'hex')
		res.json(cipheredToken + "\n")
	//res.json(response.data)        
          })
          .catch(error => {
            res.send(error);
          });
});

router.use(function(req, res, next) {
	var myDecipher = crypto.createDecipher('aes-128-cbc', 'Laundry');

	// check header or url parameters or post parameters for token
	var cipheredToken = req.body.token || req.param('token') || req.headers['x-access-token'];
	var token = myDecipher.update(cipheredToken, 'hex', 'utf8')
	console.log(token)
	jwt.verify(token, ('superSecret'), function(err, decoded) {       if (err) {
        console.log('Failed to authenticate token ' + token)
		return res.status(403).send({ 
			success: false, 
			message: 'Token not provided or invalid.'
		});
		} else {
			if(Date.now() >= decoded.exp * 1000){
				return res.status(403).send({ 
					success: false, 
					message: 'Expired token'
				});
			}
			else{
				console.log(decoded)
				next();
			}
        // if everything is good, save to request for use in other routes
      }
    });
	
});

router.use(clothingRegistrationService)
router.use(facturationService)
router.use(machineService)
router.use(userService)
router.use(ldapService)

module.exports = router
