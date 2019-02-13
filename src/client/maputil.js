require('../tomtom/tomtom.min.js');

const getMap = (lat, lon, zoom) => {
	const asychMaps= new XMLHttpRequest();
	let urlMaps = "http://localhost:8000/";

	
	asychObj.open('GET', url);
	console.log("Opening");
	asychObj.onload = (res) => {
		console.log(res);
	};
	asychObj.onerror = () =>{
		console.log("Error connecting to the server");
	}
	console.log("Sending");
	asychObj.send();
	console.log("Sent");
};

export default getMap;