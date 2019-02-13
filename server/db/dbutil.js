var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//this function is only for testing purposes to make sure that we have a connection to MongoDB
var testDB = function (story){
	MongoClient.connect(url, function(err, db) {
  		if (err) throw err;
  		console.log("Database created!");
  		let dbo = db.db("stepsDB");  
  		db.close();
	});	
};

//this function is unfinished. It is used to add a recored to MongoDB
//it needs to check for dublicate recores --- missing
var insertStory = function(story){
	MongoClient.connect(url, function(err, db) {
  		if (err) throw err;
  		console.log("Database created!");
  		let dbo = db.db("stepsDB");
  		dbo.collection("stories").insertOne(story, function(err, res) {  
			if (err) throw err;  
			console.log("1 record inserted");  
			db.close();  
			});  
  		db.close();
	});	

};

//this function searches for a specific recored in stories with a given id as a value for s_id(not to be confused with _id) 
var getStoryById = function(id, response){
	let httpresponse = response;
	console.log(`httpresponse ${httpresponse}`);
		
	let message;
	MongoClient.connect(url, function(err, db) {
  		if (err) throw err;
  		console.log(`searching ${id}`);
  		
  		let dbo = db.db("stepsDB");
  		dbo.collection("stories").find({'s_id' : id}).toArray(function(err, res) {  
				if (err) throw err;  
				//responseStory is the recored we need. res should be have only 1 element if everything correct. Cannot be more than 1 for the given id
				responseStory = res[0];
				console.log(`responseStory.s_id ${JSON.stringify(responseStory)}`); //debuging purposes
				//if the record is not empty than return to the client
				if(responseStory !== null && responseStory !== undefined){
				console.log(`Found story ${responseStory}`)
				message = JSON.stringify(responseStory);
			} else {
				//if no record is found return -1 so the client knows there is no such record
				message = '-1';
			}
			httpresponse.statusCode = 200;		
			httpresponse.end(message);				
			db.close();  			
		});  
  		db.close();

	});

}
//exporting both function 
module.exports = {insertStory : insertStory,
				getStoryById : getStoryById};
