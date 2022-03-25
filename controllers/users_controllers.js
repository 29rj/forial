const User = require('../models/user');

module.exports.profile = function(req,res){
    return res.render('users',{
        title:"Users",
        user:req.user,
    });
}

module.exports.signup = function(req,res){

    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('signup',{
        title:"Sign Up Page"
    });
}

module.exports.signin = function(req,res){

    //Authenticate means here that we cannot open signup page if we are already loggegin that means we need to logout before going to sigup page!!!
    //if true then it takes you to the profile page
    
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    //in response to the '/sigin' url it will take you to the signin page!!!
    return res.render('signin',{
        title:"Sign In Page"
    })
}

//signup using passport
module.exports.create = function(req,res){

    console.log(req.body.password);
    
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');//back to signup page
    }

    //query if thaat username is already present and take action accordingly
    User.findOne({email:req.body.email},function(err,user){

        //in case of any error in sigup return back!!!
        if(err){ console.log("error in finding user in signing up"); return};

        //if the user is unique i.e. new user try to singup then make it happen
        if(!user){
            User.create(req.body,function(err,user){
                //first argument is req.body that gives the data you want to fill for new user(we r actually passing as a whole form and our schema will fetch  accordingly)
                if(err){ console.log("error in finding user in signing up"); return};
                //if successfully created then redirect it the login page!!
                return res.redirect('/users/signin');
            })
        }
        else{//if existing user try to login then just redirect  to the signup page
            return res.redirect('back');
        }
    })
}


//signin and create session for the user using passport
module.exports.createSession = function(req,res){
    return res.redirect('/users/profile');
}


//signout using passport
module.exports.destroySession = function(req,res){
    req.logout();
    return res.redirect('/');
}