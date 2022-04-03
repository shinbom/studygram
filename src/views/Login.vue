<template>
  <div id="login_wrap">
    <div id="login">
      <h2>로그인</h2>
      <ul>
        <li>
            <label for="userId">아이디</label>
            <input type="text" id="userId" v-model="userId" ref="userId" @input="checkId">
        </li>
        <li>
            <label for="userPw">암호</label>
            <input type="password" id="userPw" v-model="userPw">
        </li>
      </ul>
      <button type="button" @click="onSubmit" class="btn">로그인</button>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex';

export default {
  name: 'login',
  data () {
    return {
        userId : '',
        userPw : '',
    }
  },
  methods : {
    ...mapMutations(['successLogin']),
    ...mapActions(['setUserInfo']),
    checkId () {

    },
    onSubmit() {
      if (this.userId =='test' && this.userPw == 'test1234!!' ) {
        this.$store.commit('successLogin', this.userId);
        this.$store.dispatch('setUserInfo');
        this.$router.push({
          path : `/list/${this.userId}`,
        })
      } else {
        alert('아이디/비밀번호가 일치하지 않습니다.');
        this.$refs.userId.focus();
      }
    }
  }
}
</script>
