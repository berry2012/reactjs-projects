var express = require('express');
var app = express();
var request = require('requestretry');


let options = {
    url: "https://httpbin.org/",
	// url: "http://express.dev.whalecloud.internal/submit-data",
	body: {
		"firstName": "bar",
        "lastName": "foo",
        "policies": "tst"
	},
    time: true, // When set, the timingPhases properties are added to the response object https://www.npmjs.com/package/request
	json: true,
    timeout: 5, // 50ms
    fullResponse: true,
    // The below parameters are specific to request-retry - HTTP Client and automatic request retry 
    maxAttempts: 5,   // (default) try 5 times
    retryDelay: 5000,  // (default) wait for 5s before trying again
    retryStrategy: request.RetryStrategies.HTTPOrNetworkError // (default) retry on 5xx or network errors
};

request.post(options, function(error, response, body){
    if (!error && response.statusCode == 301) {
        console.log('Poster service succeeded!!!', ' Request attempts: ' + response.attempts, 'wait:', response.timingPhases.wait, 'dns:', response.timingPhases.dns, 'tcp:', response.timingPhases.tcp, 'firstByte:', response.timingPhases.firstByte, 'download:', response.timingPhases.download, 'Total timings:', response.timingPhases.total);
        // console.log(response); // print full logs
        // console.log(response.timings.connect, response.timings.lookup, response.timings.socket, response.timings.response, response.timings.end);
        // console.log('wait:', response.timingPhases.wait, 'dns:', response.timingPhases.dns, 'tcp:', response.timingPhases.tcp, 'firstByte:', response.timingPhases.firstByte, 'download:', response.timingPhases.download, 'Total timings:', response.timingPhases.total);
    } else {
        console.log('Post Request failed!!! ', `Error = ${error}`, ' Request attempts: ' + error.attempts);
    }
}
);


