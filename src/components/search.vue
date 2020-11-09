<template>
  <div class="title1">
    <div class="title">
      <p>潘多拉-魔盒</p>
    </div>
    <div>
      <div class="search">
        <div class="o"></div>
        <div>
          <input type="text" @keyup="keycods($event)" v-model="keywords" />
        </div>
        <div>
          <img src="@/assets/img/zoom.png" />
          <div class="o"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "network/request";
export default {
  data() {
    return {
      keywords: "热门",
      id: "",
    };
  },
  methods: {
    keycods(ev) {
      if (ev.keyCode == 13) {
        this.search();
      }
    },
    search() {
      // 请求歌曲列表
      this.axios("search", {
        params: { keywords: this.keywords },
      })
        .then((res) => {
          // 歌曲列表
          // 返回歌曲ID
          if (res.data.result.songs) {
            this.$store.dispatch("setdata", res.data.result.songs);
            this.id = res.data.result.songs[0].id;
            return res.data.result.songs[0].id;
          } else {
            alert("不存在改歌曲");
            return this.id;
          }
        })
        .then((res) => {
          request(res);
        });
    },
  },
  created() {
    this.search();
  },
};
</script>

<style>
</style>