const { UserFacingError } = require('./BaseErrors')

class BadRequestError extends UserFacingError {
    constructor(message, options = {}) {
        super(message);
        for (const [key, value] of Object.entries(options)) {
            this[key] = value;
        }
    }
    get statusCode() {
        return 400;
    }
}


class NotFoundError extends UserFacingError {
    constructor(message, options = {}) {
        super(message);
        for (const [key, value] of Object.entries(options)) {
            this[key] = value;
        }
    }
    get statusCode() {
        return 404
    }
}

class DuplicateData extends UserFacingError {
    constructor(message, options = {}) {
        super(message);
        for (const [key, value] of Object.entries(options)) {
            this[key] = value;
        }
    }
    get statusCode() {
        return 400
    }
}



module.exports = {
    BadRequestError,
    NotFoundError,
    DuplicateData
}
