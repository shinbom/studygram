<template>
    <footer>
        <button type="button" class="btn" @click="setUpload">업로드</button>
        <div class="dim" v-show="uploadStatus">
            <div class="upload">
                <ul>
                    <li v-for="(item, index) in uploadFiles" :key="index">
                        <input type="text" v-model="item.fileMemo">
                    </li>
                </ul>
            </div>
            <input type="file">
        </div>
    </footer>
</template>

<script>
export default {
    name : 'ImageUpload',
    data () {
        return {
            uploadStatus : false,
            uploadFiles : [
                {
                    fileName : '',
                    fileMemo : '',
                }
            ]
        }
    },
    methods : {
        setUpload () {
            this.uploadStatus = !this.uploadStatus;
        }
    }
}
</script>

<style>

</style>