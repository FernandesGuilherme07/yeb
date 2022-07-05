/* eslint-disable prettier/prettier */
<template>
  <div class="input">
    <form class="col-sm-3 my-1 content" @submit="$emit(submitForm)">
      <div class="input-group">
        <input
          class="form-control"
          v-model="InputData"
          type="text"
          placeholder="search repo"
          aria-label="Search"
          style="border-right: none"
        />
        <div class="input-group-append">
          <button
            type="submit"
            class="input-group-text"
            style="background-color: #fff"
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
  name: "Input",
  data() {
    return {
      InputData: "",
    };
  },
  emits: ["submitForm"],
  props: {
    placeholder: String,
  },
};
</script>

<style scoped>
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
@media screen and (max-width: 1000px) {
  .content,
  .input-group,
  input {
    min-width: 80%;
    max-width: 95%;
  }
}
.input-group-append {
  padding: 0;
  border-left: 1px solid grey;
}
div .input-group-append:hover,
button {
  cursor: pointer;
}
</style>
