#qpx-client#

###The simple client for Google QPX Express API.###

##Usage##

###Install qpx-client###

~~~
npm install qpx-client 
~~~

###Example:###

~~~ javascript
var QPXClient = require('../'),
    util = require('util'),

    options = {
        key: 'YOUR_APIKey',
        timeout: 15000
    },

    searchConfig = {
        body: {
            "request": {
                "passengers": {
                    "adultCount": 1
                },
                "slice": [
                    {
                        "origin": "SFO",
                        "destination": "LAX",
                        "date": "YYYY-MM-DD"
                    }
                ],
                "solutions": 50
            }
        }
    },

    qpxClient = new QPXClient(options);

qpxClient.search(searchConfig, function (err, data) {
    console.log('\n-------------search-------------');
    if (err) {
        console.log('ERROR: qpxClient.search: ' + err);
    } else {
        console.log(util.inspect(data, { depth : 8 }));
    }
});
~~~

Replace *YOUR_APIKey* to your API key and *YYYY-MM-DD* with a date, which can be up to a year in the future.
####Refer to [QPX Express API Page](https://developers.google.com/qpx-express/) to get additional information about API.####