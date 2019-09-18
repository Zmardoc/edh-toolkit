<template>
  <div>
    <md-progress-spinner md-mode="determinate" class="underText" :md-value="numb" :md-diameter="40" :md-stroke="10"></md-progress-spinner>
    
  </div>
</template>
<script>
export default {
  name: "Progresser",
  components: {},
  props: {
    numb: {
      type: Number,
      default: 0
    }
  },
};
</script>
<style lang="scss" scoped>
.underText{

}
</style>
