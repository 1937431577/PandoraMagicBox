<template>
  <div class="speack_list">
    <ul>
      <li v-for="d in comment" :key="d.id">
        <div class="artical_img">
          <img :src="d.user.avatarUrl" />
        </div>
        <div class="artical_text">
          <h3>{{ d.user.nickname }}</h3>
          <p>{{ d.content }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    comment() {
      return this.$store.state.comment.length > 0
        ? this.$store.state.comment
        : {};
    },
  },
  created() {},
};
</script>

<style>
</style>