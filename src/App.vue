<template>
    <div id="app">
        <h1>Vue Uploader UI</h1>
        <VueUploader v-model="oldFiles" />
    </div>
</template>

<script>
    import '@/assets/simple-uploader.css'
    import VueUploader from "@/components/VueUploader";
    import {UploadedFile} from "@/classes/uploaded-file.class";
    export default {
        name: 'app',
        components: {VueUploader},
        data:() => ({
            oldFiles: [],
        }),

        created() {
            const file1 = new UploadedFile(1, `https://vignette.wikia.nocookie.net/kamenrider/images/b/b7/Fumikababa.jpg`);


            this.oldFiles.push(file1)
        }
    }
</script>

<style scoped>
    #app {
        width: 940px;
        margin: 0 auto;
    }
</style>