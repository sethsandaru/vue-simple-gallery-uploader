const BaseController = require('./base.controller')
const _ = require('lodash')

module.exports = class UploaderController extends BaseController {

    upload() {
        // validation
        if (!this.request.files) {
            return this.response.status(500).send({
                status: false,
                message: 'Empty file'
            })
        }

        const imageFile = this.request.files.file;

        const newFileName = `${Date.now().toString()}-${imageFile.name}`
        imageFile.mv(`uploads/${newFileName}`)

        return this.response.send({
            status: true,
            message: 'Files are uploaded',
            fileId: _.random(1, 9999),
            fileURL: this.baseURL + "/uploads/" + newFileName,
        })
    }
}