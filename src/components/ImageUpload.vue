<template>
    <footer>
        <button type="button" class="btn" @click="setUpload">업로드</button>
        <div class="dim" v-show="uploadStatus">
            <div class="dropzone_wrap">
                <vue-dropzone :options="dropzoneOptions" :useCustomSlot="true" id="dropzone" class="upload">
                    <div class="dropzone-custom-content">
                        <h3 class="dropzone-custom-title">드래그 &amp; 드롭을 이용하여<br>파일을 업로드 할 수 있습니다.</h3>
                    </div>
                </vue-dropzone>
                <button type="button" @click="setUpload($event).stop" class="close" aria-label="닫기"></button>
            </div>
        </div>
    </footer>
</template>

<script>
import vueDropzone from 'vue2-dropzone';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';

export default {
    name : 'ImageUpload',
    data () {
        return {
            uploadStatus : false,
            dropzoneOptions: {
                url: 'localhost',
                autoProcessQueue: false,
                headers: { "My-Awesome-Header": "header value" }
            }
        }
    },
    components : {
        vueDropzone
    },
    methods : {
        setUpload () {
            this.uploadStatus = !this.uploadStatus;
        },
    }
}
</script>

<style>

</style>