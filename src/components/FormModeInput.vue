<template>
    <div>
        <input :key="fileInfo.fileId"
               :value="fileInfo.fileId"
               :name="fileIdName + '[]'"
               type="hidden"
               v-for="fileInfo in fileInfoArray"
        >

        <input :key="fileInfo.fileURL"
               :value="fileInfo.fileURL"
               :name="fileUrlName + '[]'"
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
            fileIdName: String,
            fileUrlName: String
        }
    }
</script>
