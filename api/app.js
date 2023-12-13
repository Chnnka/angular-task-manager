const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser');

// Load in the mongoose models
const { List, Task, User } = require('./db/models');

//load middleware
app.use(bodyParser.json());

//Route Handles
//List routes

/*
GET /lists
purpose: get all lists
*/
app.get('/lists',(req,res)=>{
  //return an array of all the lists in the db
  List.find().then((lists)=>{
    res.send(lists);
  }).catch((e)=>{
    res.send(e);
  });
});

/*
POST /lists
*/
app.post('/lists',(req,res)=>{
  //create a new list and return new list document back to user
  //the list information (fields) will be passed in via the JSON req body
  let title = req.body.title;
  let newList=new List({
    title
  });
  newList.save().then((listDoc)=>{
    //the full list document is returned
    res.send(listDoc);
  });
});

/*
PATH /lists/:id
Purpose: Update
*/
app.patch('/lists/:id',(req,res)=>{
  //update the specified list (list document with id in the URL) with the new values specified in the JSON body
  List.findOneAndUpdate({_id:req.params.id},{
    $set:req.body
  }).then(()=>{
    res.sendStatus(200);
  });
});

/*
DELETE /lists/:id
Purpose: Update
*/
app.delete('/lists/:id',(req,res)=>{
  //delete the specified list ( document with id in the URL) 
  List.findOneAndRemove({
    _id:req.params.id
  }).then((removedListDoc)=>{
    res.send(removedListDoc);
  });
});


//GET /lists/:listId/tasks
//purpose get all tasks belong to specific list
app.get('lists/:listId/tasks',(req,res)=>{
  //return all tasks belong to a specific list
  Task.find({
    _listId: req.params.listId
  }).then((tasks)=>{
    res.send(tasks);
  });
});

app.listen(3000,()=>{
  console.log('Server is running on port 3000');
})