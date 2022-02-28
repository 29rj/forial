const express = require('express');

const router = express.Router();

const usersControllers = require('../controllers/users_controllers');

router.get('/profile',usersControllers.profile);
router.get('/signup',usersControllers.signup);
router.get('/signin',usersControllers.signin);

module.exports = router;