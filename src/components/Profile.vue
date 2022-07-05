<template>
  <article>
    <img :src="userAvatar" alt="user avatar" class="avatar" />
    <div>
      <h2>{{ infoUser.name }}</h2>
      <p class="description">{{ infoUser.bio }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "AboutUser",
  data() {
    return {};
  },
  props: {
    username: String,
    infoUser: Object,
    userAvatar: String,
  },
};
</script>

<style scoped>
h2 {
  padding-bottom: 1.7rem;
}

main article {
  flex: 4;
  margin: 3rem 0 0 0;
  align-items: center;
  text-align: center;
}

main article img {
  width: 300px;
  border-radius: 50%;
  margin: -1rem 2rem 1rem;
}

@media screen and (max-width: 966px) {
  main article img {
    width: 70px;
    border-radius: 50%;
  }
  .description {
    display: none;
  }
}
</style>
