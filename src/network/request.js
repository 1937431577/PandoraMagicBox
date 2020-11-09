import axios from 'axios'
import store from '@/store'
export default function request(id, callback) {
  axios('song/url', {
    params: { id }
  }).then(res => {
    // 歌曲地址
    store.dispatch('seturl', res.data.data[0].url);
    callback && callback();
  }).then(() => {
    // 请求封面
    axios('song/detail', {
      params: { ids: id }
    }).then(res => {
      // 封面地址
      store.dispatch('setdetail', res.data.songs[0].al.picUrl);
    })
  }).then(() => {
    // 请求封面
    axios('comment/hot?type=0', {
      params: { id }
    }).then(res => {
      // 评论数组
      store.dispatch('setcomment', res.data.hotComments);
    })
  })
}