<template>
    <div class="comment_wrap">
        <div class="comment">
            <ul class="commentList">
                <li v-for="(item, index) in comment" :key="index">
                    <span class="user">{{item.id}}</span>
                    <span class="desc">{{item.comment}}</span>
                    <span class="date">{{item.uploadDate}}</span>
                </li>
            </ul>
            <ul class="replayCommentList" v-show="setReplayCommentStatus">
                <li v-for="(item, index) in replyCommentList" :key="index">
                    <span class="user">{{userInfo.nickName}}</span>
                    <span class="desc">{{item.comment}}</span>
                    <span class="date">{{item.date}}</span>
                </li>
            </ul>
        </div>
        <ul class="replyComment">
            <li>
                <input type="text" v-model="replyComment" @keyup="getTagList" ref="replyComment">
                <ul class="tagList" v-show="tagStatus">
                    <li v-for="(item, index) in comment" :key="index">
                        <button type="button" @click="setTag($event)">{{item.id}}</button>
                    </li>
                </ul>
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
            replyCommentList : [],
            tagStatus : false,
        }
    },
    computed : {
        ...mapState( ['userInfo']),
        setReplayCommentStatus () {
            if(this.replyCommentList.length > 0) {
                return true;
            } else {
                return false;
            }
        }
    },
    props : {
        comment : Array
    },
    methods : {
        updateComment() {
            const year = new Date().getFullYear();
            let month = new Date().getMonth();
            let day = new Date().getDate();
            if(month < 10) {
                month = `0${month}` 
            }
            if(day < 10){
                day = `0${day}`;
            }
            if(this.replyComment !== '') {
                // @태그는 별도의 태그로 처리되도록 정규표현식 처리를 해야 함.
                this.replyCommentList.push(
                    {
                        comment : this.replyComment,
                        date : `${year}-${month}-${day}`
                    }
                );
            }
        },
        getTagList() {
            if(this.replyComment.match(/@[가-하a-zA-Z]*/g)){
                this.tagStatus = true;
            } 
        },
        setTag(event) {
            let tagText = event.target.textContent;
            this.replyComment = this.replyComment + tagText
            this.tagStatus = false;
            this.$refs.replyComment.focus();
        }
    }
}
</script>

<style>

</style>