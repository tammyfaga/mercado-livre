'use strict';

let express = require('express'),
    router = express.Router();

router.use('/items', require('./controllers/items'));

module.exports = router;