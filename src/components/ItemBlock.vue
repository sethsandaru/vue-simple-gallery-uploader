<template>
    <div class="item-block">

    </div>
</template>

<script>
    import {UploadedFile} from "@/classes/uploaded-file.class";

    export default {
        name: "ItemBlock",
        props: {
            fileInfo: {
                type: UploadedFile,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>