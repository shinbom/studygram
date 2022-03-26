<template>
    <div class="custom_select_wrap">
        <button type="button" class="custom_select" @click="expandOption">{{selectedOption}}</button>
        <ul v-if="optionStatus">
            <li v-for="(item, index) in optionList" :key="index">
                <button type="button" @click="setOption(item)">{{item}}</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            selectedOption : '카테고리 선택',
            optionStatus : false
        }
    },
    props : {
        optionList : Array
    },
    methods : {
        expandOption () {
            this.optionStatus = !this.optionStatus;
        },
        setOption (item) {
            this.selectedOption = item; 
            this.optionStatus = false;
            this.$emit('setSelected', item);
        }
    }
}
</script>

<style>

</style>