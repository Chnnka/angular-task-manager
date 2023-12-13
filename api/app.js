const express =require('express');
const app = express();

//load in the mongoose models
const { List,Task } = require('./db/models');


//Route Handles
//List routes

/*
GET /lists
*/
app.get('/lists',(req,res)=>{
  //return an array of all the lists in the db
});

/*
POST /lists
*/
app.post('/lists',(req,res)=>{
  //create a new list and return new list document back to user
  //the list information (fields) will be passed in via the JSON req body
});

/*
PATH /lists/:id
Purpose: Update
*/
app.patch('/lists/:id',(req,res)=>{
  //update the specified list (list document with id in the URL) with the new values specified in the JSON body
});

/*
DELETE /lists/:id
Purpose: Update
*/
app.delete('/lists/:id',(req,res)=>{
  //delete the specified list ( document with id in the URL) 
});

app.listen(3000,()=>{
  console.log('Server is running on port 3000');
})