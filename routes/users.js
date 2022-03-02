const express = require('express');
const passport = require('passport');

const router = express.Router();

const usersControllers = require('../controllers/users_controllers');

router.get('/profile',passport.checkAuthentication,usersControllers.profile);
router.get('/signup',usersControllers.signup);
router.get('/signin',usersControllers.signin);


router.post('/create',usersControllers.create);
router.post('/create_session',passport.authenticate(
    'local',
    {failureRedirect:'/users/signin'},
),usersControllers.createSession);

router.get('/signout',usersControllers.destroySession);

module.exports = router;