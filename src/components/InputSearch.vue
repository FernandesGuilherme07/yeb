<template>
  <div class="input">
    <form class="col-sm-3 my-1 content">
      <div class="input-group" v-if="this.type === 'repos'">
        <input
          class="form-control"
          v-model="searchInput"
          @keyup="$emit('loadDataInput', searchInput)"
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

      <div class="input-group" v-else>
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
            @Click="$emit('submitForm', userNameInput)"
          >
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "InputSearch",
  emits: ["loadDataInput", "submitForm"],
  data() {
    return {
      searchInput: this.search,
      userNameInput: this.search,
    };
  },
  props: {
    serach: String,
    type: String,
  },
};
</script>

<style scoped>
.input {
  margin-top: 0.5rem;
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
  .content,
  .input-group,
  input {
    min-width: 80%;
    max-width: 95%;
  }
}
</style>
