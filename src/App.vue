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
nav {
  width: 100%;
}

nav a {
  text-decoration: none;
  font-size: 2rem;
  padding: 1rem 1.5rem;
  text-align: center;
}

@media screen and (max-width: 1066px) {
  nav,
  a {
    display: flex;
    justify-content: center;
  }
}

nav a:hover {
  text-decoration: none;
}
nav a:visited {
  color: #505050;
}

li {
  list-style: none;
}

nav a.router-link-exact-active {
  color: #505050;
  font-weight: bold;
  display: inline-block;
  position: relative;
  padding: 0 0.5rem;
  height: 5rem;
  line-height: 5rem;
  transition: color 0.2s;
}
nav a.router-link-exact-active::after {
  content: "";
  height: 4px;
  width: 130%;
  position: absolute;
  bottom: 1px;
  left: 0;
  background: #e36209;
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
