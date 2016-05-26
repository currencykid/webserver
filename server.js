'use strict' 

let express = require('express'); 
let app = express(); 
const PORT = 3000; 

let middleware = require('./middleware'); 
// app.use(middleware.requireAuthentication); 

app.use(middleware.logger); 

app.get('/about', middleware.requireAuthentication, function(req,res){
  res.send('About us'); 
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
  console.log('Express server started'); 
  console.log('Using port ' + PORT); 
  
}); 

