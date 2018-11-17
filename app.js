var express = require('express');
var path    = require('path');

//initial app
var app = express();

//view engine setup 
app.set('view', path.join(__dirname,'view'));
app.set('view engine', 'ejs');

//setup public folder
app.use(express.static(path.join(__dirname,'public')));

//setup index
app.get('/', function(req,res){
    res.send("this is index")
});

// setup server
var port = 3000;
app.listen(port, function(){
    console.log('Server is running brayy on port'+port);
});