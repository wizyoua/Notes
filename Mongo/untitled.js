var MongoClient = require('mongodb').MongoClient;

//connects to database course
MongoClient.connect('mongodb://localhost:27017/course', function(err,db){
	//if there is an error connecting throw err
	if(err) throw err;

	//query for students that got 100
	var query = {'grade':100};

	//perform findOne query against mongodb and log 1 document to the console.
	db.collection('grades').findOne(query, function(){
		if(err) throw err;
		console.dir(doc);
		db.close();
	});

	//log the documents to the console in an array.
	db.collection('grades').find(query).toArray(function(err, docs){
		if(err) throw err;

		console.dir(docs);
		
		db.close();
	});
});



var MongoClient = require('mongodb').MongoClient;

//connects to database course
MongoClient.connect('mongodb://localhost:27017/course', function(err,db){
	//if there is an error connecting throw err
	if(err) throw err;

	//query for students that got 100
	var query = {'grade':100};

	var projection = {'student': 1, '_id':0};
	//
	db.collection('grades').find(query, projection).toArray(function(err, docs){
		if(err) throw err;
		//iterating through all documents  
		docs.forEach(function (doc){
			console.dir(doc);
			console.dir(doc.student + " got a good grade!");
		});
		db.close();
	});


});








var MongoClient = require('mongodb').MongoClient;

//connects to database course
MongoClient.connect('mongodb://localhost:27017/course', function(err,db){
	//if there is an error connecting throw err
	if(err) throw err;


	//query projection 
	var query = {'student': 'Joe', 'grade':{'$gt':80, '$lt':95}};

	db.collection('grades').find(query).each(function(err, doc){
		if(err) throw err;

		if(doc == null){
			return db.close();
		}
		console.dir(doc);
	});
});








var MongoClient = require('mongodb').MongoClient;

//connects to database course
MongoClient.connect('mongodb://localhost:27017/course', function(err,db){
	//if there is an error connecting throw err
	if(err) throw err;

	//brings back title with NSA in it
	var query = {'title':{'$regex': 'NSA'}};

	var projection = {'title':1, '_id':0};

	db.collection('reddit').find(query, projection).each(function(err, doc){
		if(err) throw err;

		if(doc == null) {
			return db.close();
		}
		console.dir(doc.title);
	});
});







var MongoClient = require('mongodb').MongoClient;

//connects to database course
MongoClient.connect('mongodb://localhost:27017/course', function(err,db){
	//if there is an error connecting throw err
	if(err) throw err;
	//queries something nested inside media - json
	var query = {'media.oembed.type': 'video'};

	//remove all fields on top level and in oembed reuturns only url
	var projection = {'media.oembed.url': 1, '_id': 0};

	db.collection('reddit_front').find(query, projection).each(function(err, doc){
		if(err) throw err;

		if(doc == null) {
			return db.close();
		}
		console.dir(doc);
	});
});



var MongoClient = require('mongodb').MongoClient;

//connects to database course
MongoClient.connect('mongodb://localhost:27017/course', function(err,db){
	//if there is an error connecting throw err
	if(err) throw err;
	
	var grades = db.collection('grades');

	var cursor = grades.find({});
	cursor.skip(1);
	cursor.limit(4);
	//ascending order sort -1 = descending
	cursor.sort('grade',1);

	cursor.each(function(err, doc){
		if(err) throw err;
		if(doc == null) {
			return db.close();
		}
		console.dir(doc);
	})
});





var MongoClient = require('mongodb').MongoClient;

//connects to database course
MongoClient.connect('mongodb://localhost:27017/course', function(err,db){
	//if there is an error connecting throw err
	if(err) throw err;
	
	var doc {'student': 'Calvin', 'age': 6};

	db.collection('students').insert(function(err, inserted){
		if(err) {
			console.log(err.message);
			return db.close();
		};

		console.dir("Successfully inserted: " + JSON.stringify(inserted));

		return db.close();
	});
});




//replace
var MongoClient = require('mongodb').MongoClient;

//connects to database course
MongoClient.connect('mongodb://localhost:27017/course', function(err,db){
	//if there is an error connecting throw err
	if(err) throw err;
	
	var query = {'assignment': 'hw1'};

	db.collection('students').findOne(query, function(err, doc){
		if(err) throw err;

		if(!doc){
			console.log('No docuements for assignment ' + query.assignment + ' found!');
			return db.close();
		}

		query['_id'] = doc['_id'];
		doc['date_returned'] = new Date();

		db.collection('grades').update(query, doc, function(err, updated){
			if(err) throw err;

			console.dir("Successfully updated" + updated + " docuement");
			return db.close();
		});		
	});
});




//in place replacement
var MongoClient = require('mongodb').MongoClient;

//connects to database course
MongoClient.connect('mongodb://localhost:27017/course', function(err,db){
	//if there is an error connecting throw err
	if(err) throw err;
	
	var query = {'assignment': 'hw1'};
	var operator = {'$set': {'date_returned': new Date()}};

	db.collection('grades').update(query, operator, function(err, updated){
		if(err) throw err;
		console.dir("Successfully updated " + updated + " document");
		
		return db.close();
	});
});




//multi updates
var MongoClient = require('mongodb').MongoClient;

//connects to database course
MongoClient.connect('mongodb://localhost:27017/course', function(err,db){
	//if there is an error connecting throw err
	if(err) throw err;
	
	var query = { };
	var operator = {'$unset': {'date_returned': ''}};
	var options = {'multi': true};

	db.collection('grades').update(query, operator, options, function(err, updated){
		if(err) throw err;

		console.dir("Successfully updated " + updated + " document");
		
		return db.close();
	});
});





//replace
var MongoClient = require('mongodb').MongoClient;

//connects to database course
MongoClient.connect('mongodb://localhost:27017/course', function(err,db){
	//if there is an error connecting throw err
	if(err) throw err;
	
	var query = {'assignment': 'hw1'};

	db.collection('students').findOne(query, function(err, doc){
		if(err) throw err;

		if(!doc){
			console.log('No docuements for assignment ' + query.assignment + ' found!');
			return db.close();
		}

		query['_id'] = doc['_id'];
		doc['date_returned'] = new Date();

		db.collection('grades').update(query, doc, function(err, updated){
			if(err) throw err;

			console.dir("Successfully updated" + updated + " docuement");
			return db.close();
		});		
	});
});




//in place replacement
var MongoClient = require('mongodb').MongoClient;

//connects to database course
MongoClient.connect('mongodb://localhost:27017/course', function(err,db){
	//if there is an error connecting throw err
	if(err) throw err;
	
	var query = {'assignment': 'hw1'};
	var operator = {'$set': {'date_returned': new Date()}};

	db.collection('grades').update(query, operator, function(err, updated){
		if(err) throw err;
		console.dir("Successfully updated " + updated + " document");
		
		return db.close();
	});
});





var MongoClient = require('mongodb').MongoClient;

//connects to database course
MongoClient.connect('mongodb://localhost:27017/course', function(err,db){
	//if there is an error connecting throw err
	if(err) throw err;
	
	//insert then update
	var query = {'student': 'frank', 'assignment':'hw1' };
	var operator = {'student': 'frank', 'assignment':'hw1', 'grade':100};

	var options = {'upsert': true};
	
	db.collection('grades').update(query, operator, options, function(err, upserted){
		if(err) throw err;

		console.dir("Successfully upserted " + upserted + " document");
		
		return db.close();
	});
});





var MongoClient = require('mongodb').MongoClient;

//connects to database course
MongoClient.connect('mongodb://localhost:27017/course', function(err,db){
	//if there is an error connecting throw err
	if(err) throw err;
	
	//insert then update
	var query = {'name': 'comments'};
	var sort = [];
	var operator = {'$inc': {'counter':1}};
	var options = {'new': true};
	
	db.collection('counters').findAndModify(query, sort, operator, options, function(err, doc){
		if(err) throw err;

		if (!doc) {
			console.log("No counter found for comments");
		} else {
			console.log("Number of comments " + doc.counter)
		}
		return db.close();
	});
});



var MongoClient = require('mongodb').MongoClient;

//connects to database course
MongoClient.connect('mongodb://localhost:27017/course', function(err,db){
	//if there is an error connecting throw err
	if(err) throw err;
	
	//insert then update
	var query = {'assignment': 'hw3'};
	
	db.collection('grades').remove(query function(err, removed){
		if (err) throw err;

		console.dir("Successfully removed " + " documents");

		return db.close();
	});
});



