<template>
    <div class="item-block">
        <div class="toolbox">
            X
        </div>

        <div v-if="canBeShowInPreviewMode">
            <img :src="fileInfo.fileURL" />
        </div>
        <div v-else>
            Name: X
            10: 10
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
            }
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
        }
    }
</script>

<style scoped>

</style>