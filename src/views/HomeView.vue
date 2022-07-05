<template>
  <Main :username="username" />
</template>

<script>
import Main from "../components/Main.vue";

export default {
  name: "HomeView",
  props: {
    username: String,
  },
  components: {
    Main,
  },
};
</script>

<style scoped></style>
