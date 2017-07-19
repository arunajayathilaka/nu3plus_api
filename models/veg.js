var mongoose=require('mongoose');

var vegSchema=mongoose.Schema({

	name:{
		type:String,
		required:true
	},
	des:{
		type:String,
		required:true
	},
	image_url:{
		type:String,
		required:true
	},
	details:{
		type:String,
		required:true
	},
	nutritions:{
		type:Array,
		default: []
	},
	created_date:{
		type:Date,
		default:Date.now
	}
});

var Veg =module.exports = mongoose.model('Veg',vegSchema);

module.exports.getVegs =function(callback,limit){
	Veg.find(callback).limit(limit);
};

module.exports.getVegById =function(id,callback){
	Veg.findById(id,callback);
};

module.exports.addVeg =function(fruit,callback){
	Veg.create(fruit,callback);
};