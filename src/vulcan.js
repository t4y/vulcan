/**
 * Created by taylorks on 3/7/15.
 */
'use strict';

var
    nconf = require('nconf'),
    util = require('./util'),
    appConfigPath = util.url.resolve(process.cwd(), '/config');

module.exports = function () {
    nconf
        .env()
        .argv();
        //.file('app', appConfigPath + '.json');
    util._.forEach(util.listFiles(appConfigPath), function (uri) {
        nconf.file(uri, uri);
    });
}();