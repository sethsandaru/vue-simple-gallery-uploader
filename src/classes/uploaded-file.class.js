
export class UploadedFile {
    /**
     * File URL - For Preview Mode
     * @type {string}
     */
    fileURL = "";

    /**
     * File ID - For your processing backend usage
     * @type {string}
     */
    fileId = "";

    constructor(id, url) {
        this.fileId = id
        this.fileURL = url
    }

}