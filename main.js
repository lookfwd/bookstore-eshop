﻿var zenx = require('zenx');
var argvs = {};

// Load commonly used modules
global.http = require('http');
global.https = require('https');

// Detect internal IP
global.nw = require('os').networkInterfaces().eth0[0].address;
zx.log('Default IP: ' + global.nw);

// Index process arguments
process.argv.forEach(function (key) { argvs[key] = 1; });

global.config = require('./config.json');

global.mongodb = require('mongodb');
global.ObjectID = require('mongodb').ObjectID;
global.bodyParser = require('body-parser');
global.pwh = require('password-hash');

global.querystring = require('querystring');

// Load utils
require('./src/utils/price.js');
require('./src/utils/verifyCaptcha.js');
require('./src/utils/log.js');
require('./src/utils/alias.js');

// Load search scrappers
require('./src/search/search.cast.js');
require('./src/search/search.fetchBookByBnid.js');
require('./src/search/search.getBooksFromUrl.js');
require('./src/search/search.getExtraInfo.js');
require('./src/search/search.scrapAuthorByBnid.js');
require('./src/search/search.scrapBookMeta.js');

// reCAPTCHA key
global.RCP_KEY = config.grecaptcha.key;

// Facebook backend JS SDK
global.FB = require('fb');

// Enables analytic logs
global._debug = "--debug" in argvs;

// Sitemap generator
global.sitemap = require('./src/sitemap.js');

// Redirect server on :80
require('./src/redirect.js');

// App server on :443
require('./src/server.js');

// CMS server on :10000
require('./src/cms.js');