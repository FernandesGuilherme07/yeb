<template>
  <Header :username="userName" @clear-user="clearUser" />
  <div class="input" v-if="userName === ''">
    <form class="col-sm-3 my-1 content">
      <div class="input-group">
        <input
          class="form-control"
          v-model="userNameInput"
          type="search"
          placeholder="insert a username"
          aria-label="Search"
          style="border-right: none"
        />
        <div class="input-group-append">
          <button
            type="submit"
            class="input-group-text"
            style="background-color: #fff"
            v-on:click="submitForm"
          >
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>
  </div>
  <router-view :username="userName" v-else />
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  data() {
    return {
      userName: "",
      userNameInput: "",
    };
  },
  components: {
    Header,
  },

  methods: {
    submitForm(e) {
      e.preventDefault();
      this.userName = this.userNameInput;
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
.input {
  margin-top: 1rem;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content,
.input-group,
input {
  min-width: 50%;
  height: 100%;
}
@media screen and (max-width: 1000px) {
  .content,
  .input-group,
  input {
    min-width: 80%;
  }
}
.input-group-append {
  height: 38px;
  padding: 0;
  border-left: 1px solid grey;
}
div .input-group-append:hover,
button {
  cursor: pointer;
}
</style>
