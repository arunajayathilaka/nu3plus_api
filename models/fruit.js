var mongoose=require('mongoose');

var fruitSchema=mongoose.Schema({

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

var Fruit =module.exports = mongoose.model('Fruit',fruitSchema);

module.exports.getFruits =function(callback,limit){
	Fruit.find(callback).limit(limit);
};

module.exports.getFruitById =function(id,callback){
	Fruit.findById(id,callback);
};

module.exports.addFruit =function(fruit,callback){
	Fruit.create(fruit,callback);
};