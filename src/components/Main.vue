<template>
  <main>
    <Profile
      :username="username"
      :userAvatar="userAvatar"
      :infoUser="infoUser"
    />
    <section>
      <Nav />
      <InputSearch
        :search="search"
        @loadDataInput="loadDataInput"
        type="repos"
      />
      <Repositorie
        :username="username"
        :repos="filterStarredReposInput"
        v-if="this.$route.path === '/starred'"
      />
      <Repositorie :username="username" :repos="filterAllReposInput" v-else />
    </section>
  </main>
</template>

<script>
import Repositorie from "./Repositories.vue";
import InputSearch from "./InputSearch.vue";
import Profile from "./Profile.vue";
import Nav from "./Nav.vue";

export default {
  name: "Main",
  props: {
    username: String,
  },

  data() {
    return {
      search: "",
      infoUser: {},
      repos: [],
      userAvatar: `https://github.com/${this.username}.png`,
    };
  },

  methods: {
    loadDataInput(value) {
      return (this.search = value);
    },
  },

  created() {
    fetch(`https://api.github.com/users/${this.username}`)
      .then((resp) => resp.json())
      .then((data) => (this.infoUser = data));

    fetch(`https://api.github.com/users/${this.username}/repos`)
      .then((resp) => resp.json())
      .then((data) => ((this.repos = data), console.log(this.repos)));
  },

  computed: {
    filterAllReposInput() {
      if (!this.search) return this.repos;
      return this.repos.filter((e) =>
        e.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },

    filterStarredReposInput() {
      let filteredRepos = [];
      filteredRepos = this.repos.filter((repo) => {
        return repo.stargazers_count > 0;
      });

      if (!this.search) return filteredRepos;
      return filteredRepos.filter((e) =>
        e.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },

  components: {
    Nav,
    Repositorie,
    Profile,
    InputSearch,
  },
};
</script>

<style scoped>
main {
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: space-around;
}

main section {
  flex: 9;
}

@media screen and (max-width: 966px) {
  main {
    flex-direction: column;
  }
  article {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  main article img[data-v-54d3a52e] {
    width: 70px;
    border-radius: 50%;
  }
  .description {
    display: none;
  }
}
</style>
