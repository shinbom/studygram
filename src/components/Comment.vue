<template>
    <div class="comment_wrap">
        <div class="comment">
            <ul>
                <li v-for="(item, index) in comment" :key="index">
                    <span class="user">{{item.id}}</span>
                    <span class="desc">{{item.comment}}</span>
                    <span class="date">{{item.uploadDate}}</span>
                </li>
            </ul>
            {{updateReplyComment}}
        </div>
        <ul class="replyComment">
            <li>
                <input type="text" v-model="replyComment">
                <button type="button" class="btn" @click="updateComment">확인</button>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name : 'comment',
    data () {
        return {
            replyComment : '',
            replyCommentList : []
        }
    },
    computed : {
        ...mapState( ['userInfo']),
        updateReplyComment () {
            return this.replyCommentList.length ; 
        }
    },
    props : {
        comment : Array
    },
    methods : {
        updateComment() {
            this.replyCommentList.push(this.replyComment);
        }
    }
}
</script>

<style>

</style>