'use strict';

module.exports = {
    messages: {
        'externalError': {
            'text': 'Error on external services',
            'code': 1,
            'status': 500,
            'success': false
        },
        'fieldsMissing': {
            'text': 'Required fields are missing',
            'code': 2,
            'status': 500,
            'success': false
        },
        'itemNotFound': {
            'text': 'Item not found',
            'code': 3,
            'status': 500,
            'success': false
        },
        'itemsNotFound': {
            'text': 'Items not found',
            'code': 4,
            'status': 500,
            'success': false
        },
    },
    "with": function(message, data) {

        let responseJson = {};

        if ((message !== null ? message.text : void 0) !== null) {
            if (message.text !== null)
                responseJson.message = message.text;

            if (message.code !== null)
                responseJson.code = message.code;

            if (message.success !== null)
                responseJson.success = message.success;
        } else {
            responseJson = message;
        }

        if (data !== null)
            responseJson.content = data;

        if ((message !== null ? message.status : void 0) !== null)
            this.status(message.status);

        return this.json(responseJson);
    }
};