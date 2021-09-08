class BaseError extends Error {
    constructor(message, errorLocation, httpStatusCode) {
        super(message)
        this.errorLocation = errorLocation;
        this.httpStatusCode = httpStatusCode;
        sendError();
    }

    sendError() {
        return {
            'errorMessage': this.message,
            'errorLocation': this.errorLocation,
            'errorHTTPSCode': this.httpStatusCode
        }
    }
}

module.exports = class DatabaseError extends BaseError {
    constructor(message, errorLocation) {
        super(message, errorLocation, 500)
    }
}

module.exports = class InvalidInputType extends BaseError {
    constructor(message, errorLocation) {
        super(message, errorLocation, 400)
    }
}
module.exports = class ServerError extends BaseError {
    constructor(message, errorLocation) {
        super(message, errorLocation, 500)
    }
}
module.exports = class NullValue extends BaseError {
    constructor(message, errorLocation) {
        super(message, errorLocation, 400)
    }
}

module.exports = class InvalidURL extends BaseError {
    constructor(message, errorLocation) {
        super(message, errorLocation, 400)
    }
}
module.exports = class EmpyData extends BaseError {
    constructor(message, errorLocation) {
        super(message, errorLocation, 400)
    }
}
module.exports = class HashingError extends BaseError {
    constructor(message, errorLocation) {
        super(message, errorLocation, 500)
    }
}
