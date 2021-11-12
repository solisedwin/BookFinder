class ApplicationError extends Error {
    get name() {
        return this.constructor.name;
    }
}
class DatabaseError extends ApplicationError {
    get statusCode() {
        return 500;
    }
}
class UserFacingError extends ApplicationError {
    get statusCode() {
        return 400;
    }
}

module.exports = {
    DatabaseError,
    UserFacingError,
    ApplicationError
}
