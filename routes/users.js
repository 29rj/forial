const express = require('express');
const passport = require('passport');

const router = express.Router();

const usersControllers = require('../controllers/users_controllers');

router.get('/profile',passport.checkAuthentication,usersControllers.profile);

//for signin and signup using passport
router.get('/signup',usersControllers.signup);
router.get('/signin',usersControllers.signin);


router.post('/create',usersControllers.create);

router.post('/create_session',passport.authenticate(
    'local',
    {failureRedirect:'/users/signin'},
),usersControllers.createSession);

//get --> Use when there is no data send by the user, only some action has to be taken
router.get('/signout',usersControllers.destroySession);

module.exports = router;