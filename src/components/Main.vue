<!--eslint-disable vue/no-mutating-props
--->
<template>
  <main>
    <section>
      <Profile
        :username="username"
        :userAvatar="userAvatar"
        :infoUser="infoUser"
      />
      <nav>
        <router-link to="/">Repo</router-link>
        <router-link to="/starred">Starred</router-link>
      </nav>

      <Input />

      <Repositorie
        :username="username"
        :repos="filterStarred"
        v-if="this.$route.path === '/starred'"
      />
      <Repositorie :username="username" :repos="repos" v-else />
    </section>
  </main>
</template>

<script>
import Input from "./InputText.vue";
import Repositorie from "./Repositories.vue";
import Profile from "./Profile.vue";

export default {
  name: "Main",
  data() {
    return {
      infoUser: {},
      repos: [],
      userAvatar: `https://github.com/${this.username}.png`,
    };
  },
  mounted() {
    fetch(`https://api.github.com/users/${this.username}`)
      .then((resp) => resp.json())
      .then((data) => (this.infoUser = data));

    fetch(`https://api.github.com/users/${this.username}/repos`)
      .then((resp) => resp.json())
      .then((data) => ((this.repos = data), console.log(this.repos)));
  },
  computed: {
    filterStarred() {
      let filteredRepos = [];
      filteredRepos = this.repos.filter((repo) => {
        return repo.stargazers_count > 0;
      });
      console.log(filteredRepos);
      return filteredRepos;
    },
  },

  props: {
    username: String,
  },
  components: {
    Input,
    Repositorie,
    Profile,
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
