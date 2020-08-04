<template>
    <div class="vue-uploader">
        <ItemBlock v-for="fileInfo in value"
                   :key="fileInfo.fileId"
                   :file-info="fileInfo"
        />

        <UploadBlock
                :accepted-extensions="acceptedExtensions"
                :file-rules="fileRules"
        />
    </div>
</template>

<script>
    import ItemBlock from "./ItemBlock"
    import UploadBlock from "@/components/UploadBlock";

    export default {
        name: "VueUploader",
        components: {
            UploadBlock,
            ItemBlock
        },
        props: {
            /**
             * Limit of files that can be uploaded
             */
            limit: {
                type: Number,
                default: 0 // 0 => unlimited
            },

            /**
             * <form>..</form> mode or not.
             * If it's form mode => I will create 2 hidden fields which contain:
             *  - ID of Files (1,2,3,4...,n)
             *  - Path of Files (xx,yy,..,zz)
             */
            formMode: {
                type: Boolean,
                default: false
            },

            /**
             * attribute `accept` for input-file
             * @default "image/jpg, image/jpeg, image/png"
             */
            fileRules: {
                type: String,
                default: "image/jpg, image/jpeg, image/png",
            },

            /**
             * Array of Extensions you want to do upload
             * @default ['jpg', 'png', 'jpeg']
             */
            acceptedExtensions: {
                type: Array,
                default: () => ['jpg', 'png', 'jpeg']
            },

            value: Array,
        },

        model: {
            prop: "value",
            event: "change"
        },

        watch: {
            /**
             * We need to watch the change of the Value prop. In-case it need to update or not...
             */
            value(val) {
                if (!val || !val.forEach) {
                    val = [];
                }

                this.setValue(val);
            }
        },

        data: () => ({
            uploaderDOM: null,
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

                this.uploaderDOM.click();
            },


            /**
             * Set Value for the current state
             * @param val
             */
            setValue(val) {
                this.$emit('change', val);
            }
        },

        mounted() {
            this.uploaderDOM = document.getElementById('vueUploadField')
        },
    }
</script>

<style scoped>

</style>