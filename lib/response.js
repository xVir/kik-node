'use strict';

const util = require('util');

class Response {
    static text(body) {
        return {
            type: 'text',
            body: '' + body
        };
    }

    static friendPicker(body, min, max, preselected) {
        return {
            type: 'friend-picker',
            body: body ? '' + body : body,
            min: min,
            max: max,
            preselected: preselected
        };
    }

}

module.exports = Response;
