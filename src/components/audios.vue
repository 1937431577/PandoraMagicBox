<template>
  <div class="audios">
    <audio
      :src="url"
      controls
      @pause="ispause"
      @play="isplay"
      ref="mp3"
    ></audio>
  </div>
</template>

<script>
export default {
  // data(){
  //   return {url:''}
  // },

  computed: {
    url() {
      return this.$store.state.url;
    },
  },
  methods: {
    isplay() {
      this.$store.state.flag = true;
    },
    ispause() {
      this.$store.state.flag = false;
    },
  },
  created() {
    this.$nextTick(() => {
      this.$store.commit("audios", this.$refs.mp3);
    });
  },
};
</script>

<style>
</style>