'use strict';

let jwt = require('jsonwebtoken'),
    config = require('../config');

module.exports = {
    isAuthenticated: function(req, res, next) {
        let token = req.headers['x-access-token'];
        if (token) {
            return jwt.verify(token, config.jwt.secret, function(err, decoded) {
                console.log();
                if (err) {
                    return res.status(403).json({
                        success: false,
                        message: 'Failed to authenticate token.',
                        error: err
                    });
                } else {
                    if(decoded.code !== config.jwt.code) {
                        return res.status(403).json({
                            success: false,
                            message: 'Failed to authenticate token.',
                            error: err
                        });
                    }
                    return next();
                }
            });
        } else {
            return res.status(403).send({
                success: false,
                message: 'No access token provided.'
            });
        }
    }
};