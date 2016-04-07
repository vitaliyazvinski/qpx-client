'use strict';

var request = require('request');

exports.apiRequest = function (api, options, callback) {
    var baseUrl = 'https://www.googleapis.com' + api,
        config = {
            uri: baseUrl + '?key=' + options.key,
            method: 'POST',
            json: true,
            timeout: options.timeout,
            body : options.body
        },
        err;
    if (options.key) {
        request.post(config, function (error, res, body) {
            if (!error && res.statusCode === 200) {
                callback(null, body);
            } else {
                err = 'request.post: ' + error;
                if (res && res.statusCode) {
                    err += ' (code: ' + res.statusCode + ')';
                    err += '\n' + JSON.stringify(body);
                }
                callback(err);
            }
        })
    } else {
        err = 'You must provide a valid API key';
        callback(err);
    }
}