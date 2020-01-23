var http = require('http');

let url1 = "http://echo.jsontest.com/key/value/show/data/format/json/type/testapp"
let url2 = "http://test.jsontest.com/key/value/show/data/format/json/type/testapp-DoNotWork"


async function downloadJsonData(url) {
	let resdata 
	let response = await http.get(url); 

	if (response.err) { 
		console.log('error') 
		return "Error in URL call: " + url 
	}
    else { 
    	console.log('fetched response');
    	return response
    }
	   //response.setEncoding('utf8')
	   //
}

async function getProcessedData(url) {
  let v
  try {
    v = await downloadJsonData(url)
    console.log("Resonse = " + v)
  } catch(e) {
    // v = await downloadFallbackData(url)
    console.log(e)
  }
}

getProcessedData(url1)
//getProcessedData(url2)


