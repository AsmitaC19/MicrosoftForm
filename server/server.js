const express = require('express');
mongoose = require('mongoose'); 

const port = 3000;

const app = express();

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});

mongoose.connect("mongodb://localhost:27017/demo",{useNewUrlParser:true,useUnifiedTopology: true },function(err)
{     
    if(err)     
    {          
        console.log("Fail to connect DB");     
    }     
    else     
    {         
        console.log("Successfully connected to DB");     
    } 
}); 
