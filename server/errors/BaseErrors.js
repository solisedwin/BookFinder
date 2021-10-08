class ApplicationError extends Error {
    constructor() {

    }
    name() {
        return this.constructor.name;
    }
}
class DatabaseError extends ApplicationError { }
class UserFacingError extends ApplicationError { }

module.exports = {
    DatabaseError,
    UserFacingError
}