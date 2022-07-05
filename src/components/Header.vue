<template>
  <header>
    <div class="content-logo" @click="$emit('clearUser')">
      <img
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg=="
        alt="website logo"
      />
      <br />
      <h1>
        <span> Github </span>
        profiles
      </h1>
    </div>
    <div
      class="change_username"
      v-if="username !== ''"
      @click="$emit('clearUser')"
    >
      change username
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    username: String,
  },
  emits: ["clearUser"],
};
</script>

<style scoped>
* {
  color: #fff;
}
header {
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #5c646d;
}
.content-logo {
  display: flex;
  align-items: center;
}

.content-logo:hover {
  cursor: pointer;
}
img {
  width: 45px;
  color: #fff;
  margin-bottom: 0.3rem;
}
h1 {
  white-space: nowrap;
  font-size: 2rem;
}
span {
  font-weight: bold;
  font-size: 2rem;
  position: sticky;
  top: 25px;
  margin-left: 8px;
}

@media screen and (max-width: 600px) {
  h1,
  span,
  img {
    font-size: 1rem;
  }
  header {
    padding: 1rem 0.2rem;
  }
}
@media screen and (max-width: 300px) {
  header {
    gap: 1rem;
    padding: 1rem 0;
  }
  h1,
  span {
    font-size: 1rem;
    margin-left: 2px;
  }
}
.change_username {
  white-space: nowrap;
  font-size: 0.8rem;
  padding: 0.3rem;
  border: 1px solid grey;
  border-radius: 10px;
}
.change_username:hover {
  cursor: pointer;
}
</style>
