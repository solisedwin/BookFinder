class ApplicationError extends Error {
    constructor() {
        super();
    }
    name() {
        return this.constructor.name;
    }
}
class DatabaseError extends ApplicationError { }
class UserFacingError extends ApplicationError {}

module.exports = {
    DatabaseError,
    UserFacingError
}
