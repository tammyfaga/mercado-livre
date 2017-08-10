'use strict';

let express = require('express'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    cors = require('cors'),
    response = require('./services/response');

const app = express();
app.set('port', config.port);
app.set('host', config.host);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let corsOptions = {
    'origin': true,
    'allowedHeaders': "Origin, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Accept, x-access-token",
    "methods": "GET,PUT,POST,DELETE,OPTIONS",
    'credentials': true
};

app.use(cors(corsOptions));
app.options('http://localhost:3000', cors(corsOptions));

app.use(function(req, res, next) {
    res.type = response.messages;
    res.with = response.with;
    next();
});

app.use('/api', require('./routes'));

app.listen(app.get('port'), function() {
    return console.log('App listening on ' + app.get('host') + ':' + app.get('port'));
});