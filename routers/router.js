var express = require('express');
var router = express.Router()
var userService = require('./userService')
var clothingRegistrationService = require('./clothingRegistrationService')
var facturationService = require('./facturationService')
var machineService = require('./machineService')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(clothingRegistrationService)
router.use(facturationService)
router.use(machineService)
router.use(userService)

module.exports = router