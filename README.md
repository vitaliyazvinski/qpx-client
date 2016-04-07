# qpx-client #

To use qpx-client must `require('qpx-client')`.

The simple client for Google QPX Express API.



#### Usage: ####

Create instance of client:

```javascript
qpxClient = new QPXClient(options);
```

`Options` must contain valid `API key` for QPX Express API and `timeout` in ms (optional):

```javascript
    options = {
        key: 'YOUR_APIKey',
        timeout: 15000
    }
```

Then use `qpxClient.search(config, callback)`, 

#### Example: ####

```javascript
var QPXClient = require('qpx-client'),
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

```

Where `searchConfig.body` is a request body for QPX Express API.

Make sure that you put correct time up to year in the future instead of "YYYY-MM-DD" string. 

Refer to [QPX Express API Page](https://developers.google.com/qpx-express/) to get additional information about API.