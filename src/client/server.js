"use strict"

var testServer = () => {
	const asychObj= new XMLHttpRequest();
	let url = "http://localhost:8000/";
	let settings = {
		URL: url,
		 responseType : 'application/json'		
	}
	asychObj.onload = (response) => {
		if (response.status === 200) {
            console.log(response.response);
            console.log(response.responseText);
        }
	}
	asychObj.open('GET', settings);
	console.log("Opening");
	asychObj.onload = (res) => {
		console.log(res);
	};
	asychObj.onerror = () =>{
		console.log("Error connecting to the server");
	}
	console.log("Sending");
	asychObj.send();

};

export default testServer;