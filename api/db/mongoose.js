//handle connection logic to the MOngoDB

const mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TaskManager',{useNewUrlParser:true}).then(()=>{
  console.log('Connected to MongoDB Successfully');
}).catch((e)=>{
  console.log('Error while attempting to connect MongoDB');
  console.log(e);
});


//to prevent deprecation warnings
mongoose.set('useCreateIndex',true);
mongoose.set('useFindAndModify',false);

module.exports={
  mongoose
};