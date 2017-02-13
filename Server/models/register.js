var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var AddRegisterSchema = new Schema({
	name:String,
	mobile:Number,
	email:String,
	upload:String,
	tkt:String,
	res:String
});

adddata = mongoose.model('AddData', AddRegisterSchema );

module.exports = adddata;/*mongoose.model('AddData', AddRegisterSchema );*/
