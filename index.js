var utils = require('./utils');

function QPXClient(options) {
    this.key = options.key || null;
    this.timeout = options.timeout || 10000;
}

QPXClient.prototype.search = function (config, callback) {
    var api = '/qpxExpress/v1/trips/search',
        options = {
            key: this.key,
            timeout: this.timeout,
            body: config.body
        };
        
    utils.apiRequest(api, options, callback);
}

module.exports = QPXClient;