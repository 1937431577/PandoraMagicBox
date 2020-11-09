<template>
  <div id="app">
    <div class="loading" v-show="l_flag">
      <img src="@/assets/img/loading.gif" alt="" />
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  computed: {
    l_flag() {
      return this.$store.state.l_flag;
    },
  },
};
</script>
