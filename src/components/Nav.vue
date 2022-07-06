<template>
  <nav>
    <router-link to="/">Repo</router-link>
    <router-link to="/starred">Starred</router-link>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
nav {
  width: 100%;
}

nav a {
  text-decoration: none;
  font-size: 2rem;
  padding: 1rem 1.5rem;
  text-align: center;
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
</style>
