<template>
  <ul>
    <li class="repos" v-for="repo in repos" :key="repo.id">
      <h3>{{ repo.name }}</h3>
      <p>{{ repo.description }}</p>
      <div>
        <span>{{ programmingLanguageTag }} {{ repo.language }} </span>
        <span>
          <img
            class="forc_image"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjEgNGgtMnYyaC0ydi0yaC0ydi0yaDJ2LTJoMnYyaDJ2MnptLTQuMTMgNGMtLjU3NyAyLjMxNy0yLjQ0NSAyLjcyMy00LjgxNyAzLjIyMy0xLjcxLjM2LTMuNjQzLjc3NS01LjA1MyAyLjA4NXYtNy40OTJjMS4xNjItLjQxMyAyLTEuNTExIDItMi44MTYgMC0xLjY1Ny0xLjM0My0zLTMtM3MtMyAxLjM0My0zIDNjMCAxLjMwNS44MzggMi40MDMgMiAyLjgxNnYxMi4zNjdjLTEuMTYyLjQxNC0yIDEuNTEyLTIgMi44MTcgMCAxLjY1NyAxLjM0MyAzIDMgM3MzLTEuMzQzIDMtM2MwLTEuMjk1LS44MjQtMi4zODgtMS45NzMtMi44MDguMjctMy45MjIgMi41Ny00LjQwOCA1LjQzOC01LjAxMiAyLjYxMS0uNTUgNS43MzMtMS4yMyA2LjQzNS01LjE4aC0yLjAzem0tMTIuNjctNWMwLS45OTMuODA4LTEuOCAxLjgtMS44czEuOC44MDcgMS44IDEuOC0uODA4IDEuOC0xLjggMS44LTEuOC0uODA3LTEuOC0xLjh6bTMuNiAxOGMwIC45OTMtLjgwOCAxLjgtMS44IDEuOHMtMS44LS44MDctMS44LTEuOC44MDgtMS44IDEuOC0xLjggMS44LjgwNyAxLjggMS44eiIvPjwvc3ZnPg=="
            alt="forc symbol representation"
          />
          {{ repo.forks_count }}
        </span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Repositorie",
  data() {
    return {
      programmingLanguageTag: "<>",
      urlRepo: this.repos.html_url,
    };
  },
  props: {
    username: String,
    repos: Array,
  },
};
</script>

<style scoped>
.repos {
  padding: 2rem;
  border-bottom: 1px solid #d2cfcf;
}

.forc_image {
  width: 1rem;
  margin-left: 1rem;
}

h3 {
  color: #92d7ff;
  font-size: 1.5rem;
}

@media screen and (max-width: 966px) {
  ul {
    padding: 0.5rem;
  }
  h3 {
    font-size: 1rem;
  }
}
</style>
