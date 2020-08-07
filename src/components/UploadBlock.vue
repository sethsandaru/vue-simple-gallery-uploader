<template>
    <div class="upload-block"
         @click="doChooseFile"
         title="Click here to upload"
    >
        <svg xmlns="http://www.w3.org/2000/svg"
             width="24px"
             height="24px"
             fill="#000"
             viewBox="0 0 20 20">
            <path d="M13 10v6H7v-6H2l8-8 8 8h-5zM0 18h20v2H0v-2z"/>
        </svg>

        <p class="text-center">
            Click here to upload
        </p>

        <input type="file"
               v-show="false"
               id="vueUploadField"
               :accept="fileRules"
               @change="uploadSelectedFile"
        >
    </div>
</template>

<script>
    import {UploadedFile} from "@/classes/uploaded-file.class";
    import {AjaxService} from "@/libraries/AjaxService";

    export default {
        name: "UploadBlock",
        props: {
            fileRules: String,
            acceptedExtensions: Array,
            endpoint: Object,
        },

        data: () => ({
            uploaderDOM: null,
            isUpload: false
        }),

        methods: {
            /**
             * [CLICKED] When users clicked the "Add-More"
             */
            doChooseFile() {
                // limit reached => can't upload anymore
                if (this.limit > 0 && this.limit <= this.value.length) {
                    return;
                }

                // Single Upload Only :(
                if (this.isUpload) {
                    alert("There's an upload process running. Please wait...");
                    return
                }

                this.uploaderDOM.click();
            },

            /**
             * [EVENT] When users selected a file
             * @param {{target: {files: FileList}}} e
             */
            uploadSelectedFile(e) {
                const file = e.target.files.item(0)
                const fileExtension = file.name.substr(file.name.lastIndexOf(".") + 1)

                // validation the file
                if (this.acceptedExtensions.indexOf(fileExtension) < 0) {
                    alert(`We don't support this kind of file.`);
                    return this.clearFile();
                }

                // notify uploading...
                this.$emit('uploading', file)
                this.isUpload = true

                // ok upload now
                const uploadData = new FormData()
                uploadData.append("file", file)

                // send ajax now
                AjaxService.postUpload(
                    this.endpoint.upload,
                    uploadData,
                    this.afterUploadedFileSuccessfully,
                    this.afterUploadFailed
                )
            },

            /**
             * After API Uploaded Image Successfully.
             * Emit to Parent to let Parent deal with it
             */
            afterUploadedFileSuccessfully(result) {
                this.isUpload = false

                // create new uploadedFile Instance and emit it to parent
                const uploadedFileInfo = new UploadedFile(result.fileId, result.fileURL)
                this.$emit('uploaded', uploadedFileInfo) // notify uploaded
                this.clearFile()
            },

            /**
             * Basic Error Handling => Show Message =))
             */
            afterUploadFailed() {
                this.isUpload = false
                this.$emit('upload-failed')
                this.clearFile()

                alert(`There was an error while uploading your file. Please try again or contact our administrator to find out.`)
            },

            /**
             * Clear the files of the input
             */
            clearFile() {
                this.uploaderDOM.value = null
            }
        },

        mounted() {
            this.uploaderDOM = document.getElementById('vueUploadField')
        },
    }
</script>