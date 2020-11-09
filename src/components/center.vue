<template>
  <div class="sing">
    <div :class="{ player_bar: 'player_bar', active: flag ? 'active' : '' }">
      <img src="@/assets/img/player_bar.png" />
    </div>
    <div :class="{ disc: 'disc', acrive_disc: flag ? 'acrive_disc' : '' }">
      <div class="disc_png">
        <img src="@/assets/img/disc.png" />
      </div>
      <div class="cover">
        <img :src="url" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      // flag:false
    };
  },

  computed: {
    ...mapState({
      url: (start) => (start.detail ? start.detail : "@/assets/img/cover.jpg"),
    }),
    // url(){
    //   return this.$store.state.detail ? this.$store.state.detail :'.././imgs/cover.jpg'
    // },
    flag() {
      return this.$store.state.flag;
    },
  },
  created() {},
};
</script>

<style>
</style>