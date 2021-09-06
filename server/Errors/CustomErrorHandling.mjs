class BaseError extends Error{
    constructor(message,errorLocation, httpStatusCode){
        super(message)
        this.errorLocation = errorLocation;
        this.httpStatusCode = httpStatusCode;
        sendError();
    }

    sendError(){
        return {
            'errorMessage': this.message
            'errorLocation': this.errorLocation
            'errorHTTPSCode': this.httpStatusCode
            }
        }
}

export class DatabaseError extends BaseError{
    constructor(message,errorLocation){
        super(message, errorLocation,500)
    }
}

export class InvalidInputType extends BaseError{
    constructor(message,errorLocation){
        super(message, errorLocation,400)
    }
}
export class ServerError extends BaseError{
    constructor(message,errorLocation){
        super(message, errorLocation, 500)
    }
}
export class NullValue extends BaseError{
    constructor(message,errorLocation){
        super(message, errorLocation,400)
    }
}

export class InvalidURL extends BaseError{
    constructor(message,errorLocation){
        super(message, errorLocation,400)
    }
}
export class EmpyData extends BaseError{
    constructor(message,errorLocation){
        super(message, errorLocation,400)
    }
}
export class HashingError extends BaseError{
    constructor(message,errorLocation){
        super(message, errorLocation,500)
    }
}
