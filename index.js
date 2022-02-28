const express = require('express');

const port = 8000;

const app = express();

const expressLayouts = require('express-ejs-layouts');

//Telling my app to static files from a particular directory
app.use(express.static('./assets'));

//Telling our app/website to use the expressLayouts
app.use(expressLayouts);

//Re-routing to toutes folder
app.use('/',require('./routes'));


//setup the view engine
app.set('view engine','ejs');
app.set('views','./views')

app.listen(port , function(err){
    if(err){
        console.log(`Error in connecting: ${err}`);
    }

    console.log(`Connected successfully on port ${port}`);
})






/* 
1. Install express---> npm  install express
*/