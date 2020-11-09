

<template>
  <div class="list_itme">
    <ul>
      <List v-for="d in arr" :key="d.id" :d="d"></List>
    </ul>
  </div>
</template>

<script>
import List from "@/components/list_itme";
export default {
  components: { List },
  computed: {
    arr() {
      return this.$store.state.msg;
    },
  },
};
</script>

<style>
</style>