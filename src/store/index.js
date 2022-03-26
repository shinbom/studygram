import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios';
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
      state.userInfo.id = payload.userId;
      state.userInfo.nickName = payload.nickName;
      state.userInfo.joinedDate = payload.joinedDate;
    },
    logout (state) {
      console.log('tets');
      state.isAuth = false;
    }
  },
  actions: {
    setUserInfo ({commit}) {
      Fetch_UserInfo().then( (res) => {
        commit('successLogin', res.data[0]);
        this.state.isAuth = true
      });
    }
  },
  modules: {
  }
})
