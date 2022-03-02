//Passport library is used for the authentication
const passport = require('passport');

//Making use of the table/model in which user information is being stored
const User = require('../models/user');

//Sub-Library which is being utilised for the actual authentication
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
    usernameField:'email'
},
function(email,password,done){ //email and password from table/model of User and "done" is a callback function 
    User.findOne({email:email},function(err,user){ //if email from form is found in table then get thagt user fro  table as 'user'
        if(err){
            console.log("Error in finding user --> Passport");
            return done(err);//callback function
        }

        if(!user || user.password != password){ //if user doesn't exist or password doesn't match
            console.log("Invalid password/username");
            return done(null,false);//callback function
        }

        console.log(user);
        return done(null,user);//callback function
    });
}
));


//serializing the user means key used in the cookies
passport.serializeUser(function(user,done){
    done(null,user.id);
})


//deserialize the user from the cookies
//It means it picks id from the cookies then converts it into user information
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log("Error in finding user --> Passport");
            return done(err);
        }
        return done(null,user);
    })
});


//used as middleware
passport.checkAuthentication = function(req,res,next){

    //if user is authenticated then pass on the request to the next function(controllers's action)
    if(req.isAuthenticated()){
        return next();
    }

    return res.redirect('/users/signin');
}


//sending the information to the user
passport.setAuthenticateduser = function(req,res,next){
    if(req.isAuthenticated()){
        // req.user contains info about current signined user from session and sending this to locals for views
        res.locals.user = req.user;
        console.log(req.user);
    }

    next();
}

module.exports = passport;