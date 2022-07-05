<template>
  <Main :username="username" />
</template>

<script>
import Main from "../components/Main.vue";

export default {
  name: "AboutView",
  props: {
    username: String,
  },
  components: {
    Main,
  },
};
</script>
