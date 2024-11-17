class ApiResponse {

    constructor(statusCode, message = "Success", data) {

        this.data = data
        this.statusCode = statusCode
        this.message = message
        this.success = this.success < 400
    }

}