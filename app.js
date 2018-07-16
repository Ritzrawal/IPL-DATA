var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/matches');


var db=mongoose.connection;


Match=require('./models/match');



app.get('/',function(req,res){
  console.log('Basic Get Function');
  res.send('Hello World!');

});

app.get('/api/matches',function(req,res){
  Match.getMatches(function(err,matches){
      if(err){
           throw err;
      }
     res.json(matches);
  });
});






app.listen(3000);
console.log('Running port 3000....');