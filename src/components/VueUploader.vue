<template>
    <div class="vue-uploader">
        <ItemBlock v-for="fileInfo in value" />

        <input type="file" v-show="false" id="vueUploadField">
    </div>
</template>

<script>
    import ItemBlock from "./ItemBlock"

    export default {
        name: "VueUploader",
        components: {
            ItemBlock
        },
        props: {
            /**
             * Limit of files that can be uploaded
             */
            limit: {
                type: Number,
                default: 0
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
            }
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
                if (this.limit <= this.value.length) {
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