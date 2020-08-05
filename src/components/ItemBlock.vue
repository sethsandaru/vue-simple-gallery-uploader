<template>
    <div class="col-md-3">
        <div class="item-block">

            <div class="toolbox">
                <span class="drag-icon" title="Reposition file">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 20 20"
                         width="24px"
                         height="24px"
                    >
                        <path d="M1 4h2v2H1V4zm4 0h14v2H5V4zM1 9h2v2H1V9zm4 0h14v2H5V9zm-4 5h2v2H1v-2zm4 0h14v2H5v-2z"/>
                    </svg>
                </span>

                <span class="delete-icon"
                      title="Remove file"
                      @click="doRemoveFile">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 20 20"
                         width="24px"
                         height="24px"
                    >
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
                    </svg>
                </span>
            </div>

            <div v-if="canBeShowInPreviewMode">
                <img :src="fileInfo.fileURL"/>
            </div>
            <div v-else style="padding-top:10px">
                <div class="file-icon">
                    <svg version="1.1"
                         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                         x="0px"
                         y="0px"
                         viewBox="0 0 317.001 317.001"
                         style="enable-background:new 0 0 317.001 317.001;" xml:space="preserve"
                         width="48px"
                         height="48px"
                    >
                    <path d="M270.825,70.55L212.17,3.66C210.13,1.334,207.187,0,204.093,0H55.941C49.076,0,43.51,5.566,43.51,12.431V304.57
                        c0,6.866,5.566,12.431,12.431,12.431h205.118c6.866,0,12.432-5.566,12.432-12.432V77.633
                        C273.491,75.027,272.544,72.51,270.825,70.55z M55.941,305.073V12.432H199.94v63.601c0,3.431,2.78,6.216,6.216,6.216h54.903
                        l0.006,222.824H55.941z"/>
                </svg>

                </div>
                <p class="text-file-name">
                    Filename: {{fileName}}
                </p>
            </div>

        </div>

    </div>
</template>

<script>
    import {UploadedFile} from "@/classes/uploaded-file.class";

    const imageExtensions = [
        'png',
        'jpg',
        'jpeg',
        'gif',
        'svg'
    ];

    export default {
        name: "ItemBlock",
        props: {
            fileInfo: {
                type: UploadedFile,
                required: true
            },
            fileIndex: Number,
            requestAPIDelete: {
                type: Boolean,
                default: false,
            }
        },

        methods: {
            doRemoveFile() {
                if (!confirm('Are you sure you want to delete this file?')) {
                    return
                }

                // TODO: Check if need to send api to delete
                if (this.requestAPIDelete) {
                    // TODO: request api
                    return
                }

                // DELETE
                this.removeFile();
            },

            /**
             * Emit to parent to let them delete the file
             */
            removeFile() {
                this.$emit('delete', this.fileIndex);
            },
        },

        computed: {
            /**
             * Check if the uploaded file is image => can preview
             * @returns {boolean}
             */
            canBeShowInPreviewMode() {
                const extension = this.fileInfo.fileURL.substr(this.fileInfo.fileURL.lastIndexOf('.') + 1)
                return imageExtensions.indexOf(extension) >= 0
            },

            /**
             * Get file name from the URL
             * BIG NOTE: File Path must be contains file name at the last path
             * Like this: https://localhost/a/b/c.jpg => c.jpg
             * This will not work: https://localhost/a/b/c?latest=12984091 (and Google doesn't suggest to use like this either)
             * @returns {string}
             */
            fileName() {
                return this.fileInfo.fileURL.substr(this.fileInfo.fileURL.lastIndexOf('/') + 1)
            }
        }
    }
</script>

<style scoped>

</style>