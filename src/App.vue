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
            const file2 = new UploadedFile(2, `https://www.dkoding.in/wp-content/uploads/covidiots-19-mia-khalifa-dkoding-.jpg`);
            const file3 = new UploadedFile(3, `https://www.dkoding.in/wp-content/uploads/covidiots-19-mia-khalifa-dkoding-.pp`);
            const file4 = new UploadedFile(4, `https://www.dkoding.in/wp-content/uploads/covidiots-19-mia-khalifa-dkoding-.pp`);
            const file5 = new UploadedFile(5, `https://www.dkoding.in/wp-content/uploads/covidiots-19-mia-khalifa-dkoding-.pp`);

            this.oldFiles.push(file1, file2, file3, file4, file5)
        }
    }
</script>

<style scoped>
    #app {
        width: 940px;
        margin: 0 auto;
    }
</style>