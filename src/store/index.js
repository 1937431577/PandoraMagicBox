import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: [],
    url: '',
    detail: '',
    comment: [],
    flag: false,
    audios: {},
    l_flag: false
  },
  mutations: {
    setflag(sta, val) {
      sta.flag = val
    },
    _flag(sta, val) {
      sta.l_flag = val
    },
    audios(sta, val) {
      sta.audios = val;
    },
    setdata(sta, val) {
      sta.msg = val;
    },
    seturl(sta, val) {
      sta.url = val;
    },
    setdetail(sta, val) {
      sta.detail = val;
    },
    setcomment(sta, val) {
      sta.comment = val;
    }
  },
  actions: {
    setdata(store, val) {
      store.commit('setdata', val)
    },
    seturl(store, val) {
      store.commit('seturl', val)
    },
    setdetail(store, val) {
      store.commit('setdetail', val)
    },
    setcomment(store, val) {
      store.commit('setcomment', val)
    }
  },
  modules: {
  }
})
