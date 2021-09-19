class ApplicationError extends Error {
    name() {
        return this.constructor.name;
    }
}
class DatabaseError extends ApplicationError() { }
class UserFacingError extends ApplicationError() { }


