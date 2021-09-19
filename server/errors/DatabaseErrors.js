const { DatabaseError } = require('./BaseErrors')

class MalformedData extends DatabaseError {
    constructor(message, options = {}) {
        super(message);
        for (const [key, value] of Object.entries(options)) {
            this[key] = value;
        }
    }
    get statusCode() {
        return 500;
    }
}


module.exports = {
    MalformedData
}
