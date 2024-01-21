const express = require('express')
router = express.Router()

//import controller
const {registerNewUser, loginUser}  = require('../controllers/user')

//create routes
router.post('/register', registerNewUser)
router.post('/login', loginUser)
module.exports = router