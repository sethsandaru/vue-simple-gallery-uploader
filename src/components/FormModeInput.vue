<template>
    <div>
        <input :key="fileInfo.fileId"
               :value="fileInfo.fileId"
               name="files[]"
               type="hidden"
               v-for="fileInfo in fileInfoArray"
        >

        <input :key="fileInfo.fileURL"
               :value="fileInfo.fileURL"
               name="urls[]"
               type="hidden"
               v-for="fileInfo in fileInfoArray"
        >
      </div>
</template>

<script>
    export default {
        name: "FormModeInput",
        props: {
            fileInfoArray: Array,
        }
    }
</script>