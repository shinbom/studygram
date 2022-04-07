<template>
  <div id="app">
    <header>
      <div class="box">
        <nav>
          <h1>
            <router-link to="/" @click.native="goMain">StudyGram</router-link>
          </h1>
          <ul class="utils">
            <li>
              <router-link to="/" class="btn" v-if="isAuth" @click.native="setLogout">로그아웃</router-link>
              <router-link to="/join" class="btn" v-else>회원 가입</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <div class="box">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default{
  name : '',
  computed : {
    ...mapState(['userInfo', 'isAuth']),
  },
  methods : {
    ...mapMutations(['logout']),
    goMain(){
      if(this.isAuth == true) {
        this.$router.push({
          path : `/list/${this.userInfo.id}`,
        })
      } else {
        this.$router.push({
          path : `/`,
        })
      }
    },
    setLogout() {
      this.$store.commit('logout');
    }
  }
}
</script>

<style>
</style>
