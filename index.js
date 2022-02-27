const express = require('express');

const port = 8000;

const app = express();

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