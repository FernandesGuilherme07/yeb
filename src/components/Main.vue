<template>
  <main>
    <Profile
      :username="username"
      :userAvatar="userAvatar"
      :infoUser="infoUser"
    />
    <section>
      <Nav />
      <div class="input">
        <form class="col-sm-3 my-1 content">
          <div class="input-group">
            <input
              class="form-control"
              v-model="search"
              type="search"
              placeholder="search repo"
              aria-label="Search"
              style="border-right: none"
            />
            <div class="input-group-append">
              <div
                type="submit"
                class="input-group-text"
                style="background-color: #fff"
              >
                <i class="fas fa-search"></i>
              </div>
            </div>
          </div>
        </form>
      </div>

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
import Profile from "./Profile.vue";
import Nav from "./Nav.vue";

export default {
  name: "Main",
  data() {
    return {
      search: "",
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
      return filteredRepos;
    },
    filterStarredReposInput() {
      if (!this.search) return this.filterStarred;
      return this.filterStarred.filter((e) => e.name.includes(this.search));
    },
    filterAllReposInput() {
      if (!this.search) return this.repos;
      return this.repos.filter((e) => e.name.includes(this.search));
    },
  },
  props: {
    username: String,
  },
  components: {
    Nav,
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

.input {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content,
.input-group,
input {
  min-width: 50%;
}
.input-group-append {
  padding: 0;
  border-left: 1px solid grey;
}
div .input-group-append:hover {
  cursor: pointer;
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
  .content,
  .input-group,
  input {
    min-width: 80%;
    max-width: 95%;
  }
  .description {
    display: none;
  }
}
</style>
