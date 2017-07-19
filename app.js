var express= require('express');

var app=express();

var bodyParser=require('body-parser');
var mongoose=require('mongoose');

Fruit =require('./models/fruit');
Veg=require('./models/veg');
//connect to Mongoose
mongoose.connect('mongodb://localhost/nu3plus');
var db = mongoose.connection;

// get our request parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
	res.send('hello');
});

app.get('/api/fruits',function(req,res){
	Fruit.getFruits(function(err,fruits){
		if(err){
			throw err;
		}
		res.json(fruits);
	});
});

app.post('/api/fruits',function(req,res){
	var fruit = req.body;
	console.log(fruit);
	Fruit.addFruit(fruit,function(err,fruit){
		if(err){
			throw err;
		}
		res.json(fruit);
	});
});
app.get('/api/fruits/:_id',function(req,res){
	Fruit.getFruitById(req.params._id,function(err,fruits){
		if(err){
			throw err;
		}
		res.json(fruits);
	});
});

app.get('/api/vegetables',function(req,res){
	Veg.getVegs(function(err,vegs){
		if(err){
			throw err;
		}
		res.json(vegs);
	});
});

app.post('/api/vegetables',function(req,res){
	var veg = req.body;
	console.log(veg);
	Veg.addVeg(veg,function(err,veg){
		if(err){
			throw err;
		}
		res.json(veg);
	});
});
app.get('/api/vegetables/:_id',function(req,res){
	Veg.getVegById(req.params._id,function(err,veg){
		if(err){
			throw err;
		}
		res.json(veg);
	});
});





app.listen(3000);
console.log("listening on 3000....");