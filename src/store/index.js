import Vue from 'vue'
import Vuex from 'vuex'
import {Fetch_UserInfo} from '../api/index.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo : {
      id : '',
      nickName : '',
      joinedDate : '',
    },
    isAuth : false,
  },
  mutations: {
    successLogin (state, payload) {
      this.state.isAuth = true;
      state.userInfo.id = payload.userId;
      state.userInfo.nickName = payload.nickName;
      state.userInfo.joinedDate = payload.joinedDate;
    },
    logout (state) {
      state.isAuth = false;
      window.sessionStorage.clear();
    }
  },
  actions: {
    setUserInfo ({commit}) {
      Fetch_UserInfo().then( (res) => {
        commit('successLogin', res.data[0]);
        window.sessionStorage.setItem('isAuth', true);
        window.sessionStorage.setItem('userInfo', JSON.stringify(this.state.userInfo));
      });
    }
  },
  modules: {
  }
})
