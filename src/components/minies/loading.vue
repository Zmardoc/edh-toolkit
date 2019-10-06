<template>
  <div class="container">
    <md-progress-spinner
      v-if="spinner"
      md-mode="indeterminate"
    ></md-progress-spinner>
    <md-progress-bar
      v-else
      md-mode="indeterminate"
      class="progress"
    ></md-progress-bar>
    <div class="text">{{ text }}</div>
  </div>
</template>
<script>
export default {
  name: "Loading",
  props: {
    text: {
      type: String
    },
    spinner: {
      type: Boolean,
      default: true
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  flex-direction: column;
  display: flex;
  align-items: center;

  .text {
    margin-top: 15px;
  }
  .progress {
    width: 100%;
  }
}
</style>
