
module.exports = class BaseController {

    constructor(
        request,
        response
    ) {
        this.request = request
        this.response = response
        this.baseURL = "http://localhost:3000"
    }

}