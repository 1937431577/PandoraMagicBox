<template>
  <div class="vm">
    <div class="vm_left"></div>
    <div class="vm_center">
      <div class="btn">
        <button @click="tomusic">x</button>
      </div>
      <div class="vedi">
        <video :src="v_url" controls></video>
      </div>
    </div>
    <div class="vm_right"></div>
  </div>
</template>

<script>
export default {
  // data(){
  //     return {v_url:''}
  // },
  computed: {
    v_url() {
      return this.$route.query.v_url;
    },
  },
  methods: {
    tomusic() {
      this.$router.push("/");
    },
  },
  // created(){
  //     this.v_url = this.$route.query.v_url;

  // }
};
</script>

<style>
</style>