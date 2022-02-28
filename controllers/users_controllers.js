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
    // TODO later
}


//signin and create session for the user
module.exports.createSession = function(req,res){
    // TODO later
}