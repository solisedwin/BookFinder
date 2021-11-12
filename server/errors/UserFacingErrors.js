const { UserFacingError } = require('./BaseErrors')

class BadRequestError extends UserFacingError {
    constructor(message, options = {}) {
        super(message);
        for (const [key, value] of Object.entries(options)) {
            this[key] = value;
        }
    }
}


class NotFoundError extends UserFacingError {
    constructor(message, options = {}) {
        super(message);
        for (const [key, value] of Object.entries(options)) {
            this[key] = value;
        }
    }
}

class DuplicateData extends UserFacingError {
    constructor(message, options = {}) {
        super(message);
        this.message = message;
        for (const [key, value] of Object.entries(options)) {
            this[key] = value;
        }
    }
}



module.exports = {
    BadRequestError,
    NotFoundError,
    DuplicateData
}
