<template>
  <div class="list">
    <header>
      {{userInfo.nickName}}님 안녕하세요.
    </header>
    <main>
      <chart :studyLists="imageList" :weekInfo="weekInfo" @refreshList="refresh"></chart>
      <div v-if="imageList.length == 0" class="no_list">
        <div class="not_found">
          <img src="/images/not_found.png" alt="">
          <p>학습 내용이 없습니다.<br>업로드 해주세요!</p>
        </div>
      </div>
      <ul v-else>
        <li v-for="(item, index) in imageList" :key="item[index]" >
          <figure class="image_thumbnail">
            <span class="week">{{item.week}}</span>
            <slide :slideList="item.imageUrl"></slide>
          </figure>
          <div class="list_emotion">
            <button type="button" @click="setLike(index)" class="heart">
              <svg v-if="item.btnStatus == false" aria-label="좋아요" class="_8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
              <svg v-else aria-label="좋아요 취소" class="_8-yf5 " color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
            </button>
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
import dayjs from 'dayjs';
const weekOfYear = require('dayjs/plugin/weekOfYear');
const locale = require('dayjs/locale/ko');// eslint-disable-line

dayjs.extend(weekOfYear);
dayjs.locale('ko');
dayjs().locale('ko').format();

export default{
  data () {
    return {
      imageList : [],
      comment : {},
      weekInfo : {
        currentWeek : dayjs().week(),
        today : dayjs().format('YYYY-MM-DD'),
        startDay : ""
      }
    }
  },
  created() {
    if ( window.sessionStorage.getItem('userInfo') ) {
      this.$store.commit('successLogin', JSON.parse(window.sessionStorage.getItem('userInfo')));
    }

    this.$nextTick(() => {
      // 시작하는 주의 월요일 체크
      this.weekInfo.startDay = dayjs().week(this.weekInfo.currentWeek).day(1).format('YYYY-MM-DD');

      Fetch_Images().then((res) => {
        const data = res.data;
        localStorage.setItem('studyGramImages', JSON.stringify(data));
        this.getImageData();
      });

      Fetch_Comments().then ( (res) => {
        const data = res.data;
        localStorage.setItem('comments', JSON.stringify(data));
      });
    })
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
    getImageData() {
      const images = JSON.parse(localStorage.getItem('studyGramImages'));
      const comments = JSON.parse(localStorage.getItem('comments'));
      console.log(images);
      let result = images.filter(item => item.startDay === this.weekInfo.startDay);
      if(result.length > 0) {
        this.imageList = result[0].imageLists;
        this.comment = comments;
      } else {
        this.imageList = []
      }
    },
    setLike(index) {
      let btnIndex = this.imageList[index];
      if (btnIndex.btnStatus == false) {
        btnIndex.btnStatus = true;
        btnIndex.likeCount++;
      } else {
        btnIndex.btnStatus = false;
        btnIndex.likeCount--;
      }
    },
    refresh () {
      this.weekInfo.startDay = dayjs().week(this.weekInfo.currentWeek).day(1).format('YYYY-MM-DD');
      this.getImageData();
    },
  }
}
</script>
<style scoped>
</style>
