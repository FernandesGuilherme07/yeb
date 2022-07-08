<template>
  <Header :username="userName" @clear-user="clearUser" />
  <InputSearch
    v-if="userName === ''"
    :search="userName"
    @submitForm="submitForm"
  />
  <router-view :username="userName" v-else />
</template>

<script>
import Header from "./components/Header.vue";
import InputSearch from "./components/InputSearch.vue";

export default {
  name: "App",
  data() {
    return {
      userName: "",
    };
  },
  components: {
    Header,
    InputSearch,
  },

  methods: {
    submitForm(value) {
      return (this.userName = value);
    },
    clearUser() {
      this.userName = "";
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}
</style>
