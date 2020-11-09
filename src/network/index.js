import axios from 'axios'
import store from '@/store'
// import vm from './main'
axios.defaults.baseURL = 'https://apimusic.linweiqin.com/';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  console.log('s',store);
  // debugger
  store.commit('_flag', true)
  // 把修改后的请求配置返回,继续请求.
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  store.commit('_flag', false)
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});