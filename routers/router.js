var express = require('express');
var router = express.Router()
var userService = require('./userService')
var clothingRegistrationService = require('./clothingRegistrationService')
var facturationService = require('./facturationService')
var machineService = require('./machineService')
const axios = require('axios');
const userServiceIP = 'http://' + config_data.clothingRegistrationServiceIP + ':8085'

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.post('/api/users', (req, res) => {
  axios.post(userServiceIP + '/api/users', {		
            name : req.body.name,
            last_name : req.body.last_name,
            personal_id: req.body.personal_id,
            password: req.body.password,
            room_id: req.body.room_id
        }).then(function (response) {
			console.log(response)
    res.send(response.data);
  })
  .catch(function (error) {
    res.send(error);
  });
})


router.get('/authenticate/:userId/:password', function(req, res) {
	axios.get(userServiceIP+ "/api/users/" + req.params.userId +"/"+ req.params.password).then(response => {
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
	console.log(userServiceIP+ "/api/token/" + token)
	axios.get(userServiceIP+ "/api/token/" + token).then(response => {
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

module.exports = router