// ---Post request with timeout------

// get an environment variable
const url = process.env['ENDPOINT'];
console.log(url);

const got = require('got');
got.post(url, {
  json:  {
    "vehicle": {
      "id": "4",
      "available": "true",
      "type": "train"
    }
  },
	timeout: {
		lookup: 100, // It is preferred to not use any greater value than 100. Got some error with 100 - Timeout awaiting 'lookup' for 100ms ErrorCode:  ETIMEDOUT 
		connect: 50000,
		secureConnect: 50000,
		socket: 50000,
		send: 10000,
		response: 10000
	}
,
  retry: {
    limit: 3,
    methods: [
        'GET',
        'LIST',
        'POST',
    ],
    statusCodes: [
        502,
        503,
    ]
  }  

})

  .then(res => {
    const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
    console.log('Post Request succeeded on:', headerDate + '. Status Code:', res.statusCode  + '. Total Phase Timings: ', res.timings.phases.total + '. RetryCount: ', res.retryCount);
    console.log('Phases Timings:' + ' wait:', res.timings.phases.wait + ' dns:', res.timings.phases.dns + ' tcp:', res.timings.phases.tcp + ' tls:', res.timings.phases.tls + ' request:', res.timings.phases.request + ' firstByte:', res.timings.phases.firstByte + ' download:', res.timings.phases.download + ' total:', res.timings.phases.total)
    // if (res.statusCode !== 200 || res.statusCode !== 204 || headerDate.error) {
    //     throw new Error(headerDate.error || 'Oops. Something went wrong! Try again please.');
    // }
    
  })
  .catch(err => {
    // console.log(err)
    console.log('Post Request failed on', err.name, 'Error: ', err.message, 'ErrorCode:', err.code  + '. Total Phase Timings:', err.timings.phases.total);
    console.log('Post Request failed on', new Date().toISOString(), err.name, 'Error: ', err.message, 'ErrorCode:', err.code  + '. Total Phase Timings:', err.timings.phases.total);
    console.log('Phases Timings:' + ' wait:', err.timings.phases.wait + ' dns:', err.timings.phases.dns + ' tcp:', err.timings.phases.tcp + ' tls:', err.timings.phases.tls + ' request:', err.timings.phases.request + ' firstByte:', err.timings.phases.firstByte + ' download:', err.timings.phases.download + ' total:', err.timings.phases.total)
  });



