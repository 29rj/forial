module.exports.home = function(req,res){
    // return res.end("<h1>Controllers Home !!!</h1>");

    return res.render('home',{
        title:"Home",
    });
}