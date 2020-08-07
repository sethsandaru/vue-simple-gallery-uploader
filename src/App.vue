<template>
    <div id="app">
        <h1>Vue Uploader UI</h1>

        <div class="btn-group">
            <button class="btn btn-success" @click="setNew">New Instance</button>
            <button class="btn btn-danger" @click="setOldFiles">Old Gallery</button>
        </div>

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

        methods: {
            setNew() {
                this.$set(this, 'oldFiles', [])
            },
            setOldFiles() {
                this.setNew()

                const file1 = new UploadedFile(1, `https://i.imgur.com/XDMSNPi.jpg`);
                const file2 = new UploadedFile(2, `https://i.imgur.com/BlznTkg.png`);
                const file3 = new UploadedFile(3, `https://i.imgur.com/cLFpPo0.jpg`);
                const file4 = new UploadedFile(4, `https://localhost/file.php`);

                this.oldFiles.push(file1, file2, file3, file4)
            },
        },
    }
</script>

<style scoped>
    #app {
        width: 940px;
        margin: 0 auto;
    }
</style>