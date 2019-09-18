<template>
  <div></div>
</template>
<script>
export default {
  name: "Detail",
  components: {},
  data: () => ({
    currentDeck: {}
  }),
  created(){
    this.currentDeck = this.$store.state.decks.find(d => d.id === this.$route.params.id);
  }
};
</script>
<style lang="scss" scoped></style>
