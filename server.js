'use strict' 

let express = require('express'); 
let app = express(); 
const PORT = 3000; 

let middleware = {
    requireAuthentication: function(req, res, next){
      console.log('private route hit!'); 
      next();  
    },

    logger: function(req, res, next){
      console.log('Request: ' + new Date().toString() + " "  + req.method + " " + req.originalUrl); 
      next(); 
    }
};

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

