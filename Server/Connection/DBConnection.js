var mongoose=require('mongoose');

function DBConnection(){
mongoose.connect("mongodb://localhost/Register");

db=mongoose.connection;
db.on('error', console.error.bind(console,'Connection Error.....!'));
db.once('open', function(){
  console.log("Connected to MongoDB successfully");
});
}

module.exports=DBConnection;
