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
<<<<<<< HEAD
    res.send("this is index tes")
=======
    res.send("this is index, edit dari hanif ke reponya panji")
>>>>>>> 011c6f34472eae228ae1569d7945971de13f9a94
});

// setup server
var port = 3000;
app.listen(port, function(){
    console.log('Server is running brayy on port '+port);
});