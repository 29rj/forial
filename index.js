const express = require('express');

const port = 5678;

const app = express();

const db = require('./config/mongoose');

const expressLayouts = require('express-ejs-layouts');

const cookieParser = require('cookie-parser');

//-------------------- for cookie --------------------------
//Used for session creation using passport
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-stragety');

const MongoStore = require('connect-mongo');
const { default: mongoose } = require('mongoose');

const sassMiddleware = require('node-sass-middleware')

//--------------------for cookie----------------------------

app.use(sassMiddleware({
    src:'./assets/scss',
    dest:'./assets/css',
    debug:true,
    outputStyle:'expanded',
    prefix:'/css'
}))

app.use(express.urlencoded());

app.use(cookieParser());

//Telling my app to static files from a particular directory
app.use(express.static('./assets'));

//Telling our app/website to use the expressLayouts
app.use(expressLayouts);

//It is used when we need to style and scripts particular sub files in layout 
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


//setup the view engine
app.set('view engine','ejs');
app.set('views','./views');

//telling our app to use session we have created in config as "passport-local-stragety"
app.use(session({
    name:'forial',

    //TODO change before production
    secret:"kuchbhi", // using ecret key to encypt our session_id
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*68*100) //time for our cookie to remain in existance
    },
    store:MongoStore.create({
        mongoUrl: 'mongodb://localhost/db',
        autoRemove:'disabled'
    },function(err){
        console.log(err || 'connect monogodb is ok');
    })
}));

app.use(passport.initialize());
app.use(passport.session());

//Re-routing to routes folder
app.use('/',require('./routes'));

app.listen(port , function(err){
    if(err){
        console.log(`Error in connecting: ${err}`);
    }
    console.log(`Connected successfully on port ${port}`);
})


/* 
sudo systemctl status mongod
sudo systemctl start mongod
1. Install express---> npm  install express
*/