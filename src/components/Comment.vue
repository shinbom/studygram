<template>
    <div class="comment">
        <ul>
            <li v-for="(item, index) in comment" :key="index">
                <span class="user">{{item.id}}</span>
                <span class="desc">{{item.comment}}</span>
                <span class="date">{{item.uploadDate}}</span>
                <button type="button" @click="commentToggle">답글달기</button>
                <ul class="replayComment" v-show="commentStatus">
                    <li>
                        <span class="user">{{userInfo.nickName}}</span>
                        <input type="text">
                        <button type="button" class="btn">확인</button>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name : 'comment',
    data() {
        return {
            commentStatus : false 
        }
    },
    computed : {
        ...mapState( ['userInfo'])
    },
    props : {
        comment : Array
    },
    methods : {
        commentToggle() {
            this.commentStatus = !this.commentStatus;
        }
    }
}
</script>

<style>

</style>