/**
 * Vue Uploader main file
 */
import VueUploader from "@/components/VueUploader";

/**
 * Register for browser
 */
if (window.Vue) {
    window.Vue.component('vue-uploader', VueUploader)
} else if (global.Vue) {
    global.Vue.component('vue-uploader', VueUploader)
}

/**
 * For NodeJS
 */
export default VueUploader