<template>
  <li>
    <div class="start">
        <div class="start-img" @click="isplay"></div>
    </div>
    <div class="text">
      <p>{{ d.name }}</p>
    </div>
    <div class="tv" v-if="d.mvid">
        <div class="tv-img" @click="istv"></div>
    </div>
  </li>
</template>

<script>
import request from "network/request"
export default {
  props: ["d"],
  data() {
    return {};
  },
  methods: {
    isplay() {
      request(this.d.id, () => {
        this.$store.commit("setflag", true);
      });
      let audios = this.$store.state.audios;
      audios.play();
    },
    istv() {
      this.axios("mv/url", { params: { id: this.d.mvid } }).then((res) => {
        let v_url = res.data.data.url;
        this.$router.push({ path: "/vedio", query: { v_url: v_url } });
      });
    },
  },
  created() {},
};
</script>

<style>
</style>