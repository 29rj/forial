const express = require('express');

const port = 8000;

const app = express();

const db = require('./config/mongoose');

const expressLayouts = require('express-ejs-layouts');

const cookieParser = require('cookie-parser');

app.use(express.urlencoded());

app.use(cookieParser());

//Telling my app to static files from a particular directory
app.use(express.static('./assets'));

//Telling our app/website to use the expressLayouts
app.use(expressLayouts);

//It is used when we need to style and scripts particular sub files in layout 
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


//Re-routing to routes folder
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