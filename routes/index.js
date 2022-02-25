const express = require('express');

const router = express.Router();

const homeControllers = require('../controllers/home_controllers');
router.get('/',homeControllers.home);//callback function is homeControllers.home whenever url is '/'

//Re-routing to another routes
router.use('/users',require('./users'));

console.log("Router Loaded!!");


module.exports = router;