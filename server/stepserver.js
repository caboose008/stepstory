const http = require('http');
const db = require('./db/dbutil');

const hostname = '127.0.0.1';
const port = 80;

//extracting parameters from the request
var getParamsFromUrl = function(req){
	console.log(`request url ${req.url}`);
  	let query = req.url.split('?')[1]; 
  	//for debuging
  	console.log(`query ${query}`);
  	if(query === undefined){
  		return -1;
  	}
	let nameValuePairs = {};
	query.split('&').forEach(pair => {
		let keyValue = pair.split('=');
		nameValuePairs[keyValue[0]] = keyValue[1];
	});
	return nameValuePairs;	
}

//creating a server for responding for requests from stepstory 
const server = http.createServer((req, res) => {
	
	const x = req.url.split('?')[0];
	console.log(`url : ${x}`);
	switch(x){
		case '/requeststory' : {
			storyRequest(req, res);
			break;
		}
		default : {
			//call a method that will tell the client that resource not found --- TBD
		}

	}
	
});

//this functoin handles the requests for /requeststory 
const storyRequest = function(req, res){
	//setting up the headers. CORS is not a consern right now
	res.setHeader('Content-Type', 'application/json'); 
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
	res.setHeader("Access-Control-Allow-Methods" , "GET");

	//getting the parameters from the URL
	let params =  getParamsFromUrl(req);
	//if no parameters than tell the client no parameters where sent
	if(params === -1){
		res.statusCode = 200;		
		res.end('-2');
		return;	
	}
	//get the s_id for. if no s_id parameter tel the client 
	let s_id = params['s_id'];
	if(s_id === undefined){				
		res.statusCode = 200;		
		res.end("Wrong request. Id for the story is missing.");		
	} else {
		//for debuging purpose
		//console.log(`passing response ${res}`);
		//pass the s_id and response object to getStoryById wich will find the record and return to the client async
		db.getStoryById(s_id, res);			
	}
}
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

