<template>
  <div class="list">
    <header>
      {{userInfo.nickName}}님 안녕하세요.
    </header>
    <main>
      <chart :studyLists="imageList" @refreshList="refresh"></chart>
      <div v-if="imageList.length == 0" class="no_list">
          <img src="/images/not_found.png" alt="">
          <p>학습 내용이 없습니다.<br>업로드 해주세요!</p>
      </div>
      <ul v-else>
        <li v-for="(item, index) in imageList" :key="item[index]" >
          <figure class="image_thumbnail">
            <span class="week">{{item.week}}</span>
            <slide :slideList="item.imageUrl"></slide>
          </figure>
          <div class="list_emotion">
            <button type="button" class="status" @click="setEmotion(index)">상태</button>
            <ul class="popup" v-show="item.btnStatus">
              <li>
                <button type="button" @click="setLike(index)" @dblClick="setLike(index, minus)">좋아요 {{item.likeCount}}</button>
                <button type="button" @click="setSad(index)" @dblClick="setLike(index, minus)">슬퍼요 {{item.sadCount}}</button>
              </li>
            </ul>
            <span class="uploadDate">{{item.uploadDate}}</span>
          </div>
          <comment :comment="comment[index]"></comment>
        </li>
      </ul>
    </main>
    <image-upload></image-upload>
  </div>
</template>

<script>
import {Fetch_Images, Fetch_Comments} from '../api/index';
import {mapState} from 'vuex';
import Chart from '../components/Chart.vue';
import Comment from '../components/Comment.vue';
import Slide from '../components/Slide.vue';
import ImageUpload from '../components/ImageUpload.vue';

export default{
  data () {
    return {
      imageList : [],
      comment : {},
    }
  },
  mounted() {
    Fetch_Images().then( (res) => {
      this.imageList = res.data[0];
    });
    Fetch_Comments().then ( (res) => {
      let commentList = res.data;
      this.comment = commentList;
    });
    if ( window.sessionStorage.getItem('userInfo') ) {
      this.$store.commit('successLogin', JSON.parse(window.sessionStorage.getItem('userInfo')));
    }
  },
  computed : {
    ...mapState(['userInfo']),
  },
  components : {
    Comment,
    Slide,
    Chart,
    ImageUpload
  },
  methods : {
    setEmotion (index) {
      this.imageList[index].btnStatus = !this.imageList[index].btnStatus;  
    },
    setLike(index) {
      this.imageList[index].likeCount++;
    },
    setSad(index) {
      if (this.imageList[index].sadCount < 0) {
        this.imageList[index].sadCount--;
      } else {
        this.imageList[index].sadCount++
      }
    },
    refresh () {
      this.imageList = [];
    }
  }
}
</script>
<style scoped>
</style>
