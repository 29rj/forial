const User = require('../models/user');

module.exports.profile = function(req,res){
    return res.render('users',{
        title:"Users",
    });
}

module.exports.signup = function(req,res){
    return res.render('signup',{
        title:"Sign Up Page"
    });
}

module.exports.signin = function(req,res){
    return res.render('signin',{
        title:"Sign In Page"
    })
}

//signup 
module.exports.create = function(req,res){
    console.log(req.body.password);
    
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email:req.body.email},function(err,user){
        if(err){ console.log("error in finding user in signing up"); return};

        if(!user){
            User.create(req.body,function(err,user){
                if(err){ console.log("error in finding user in signing up"); return};

                return res.redirect('/users/signin');
            })
        }
        else{
            return res.redirect('back');
        }
    }) 

}


//signin and create session for the user
module.exports.createSession = function(req,res){
    // TODO later
}