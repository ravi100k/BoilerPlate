var express = require('express');
var router = express.Router();
var user=require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/p/:username', function(req,res,next){
	res.send("Hello "+req.params.username);
});

router.post('/post',function(req,res,next){

	res.send("Hello "+ req.query.fname[0]+" "+req.query.lname[0]);
});

router.route('/AddUser').post(function(req,res){
if(req.body){
	var userVar=new user(req.body);
	console.log(req.body);
	userVar.save(function(err){
		if(err){
			res.send(err);
		}
		else{
			res.send("User inserted");
		}
	});
}
});


module.exports = router;
