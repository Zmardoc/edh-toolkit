<template>
  <div>
    <DetailDeckHeader :deck="currentDeck" />
  </div>
</template>
<script>
import DetailDeckHeader from "../components/detail-deck-header";
export default {
  name: "Detail",
  components: {
    DetailDeckHeader
  },
  data: () => ({
    currentDeck: {}
  }),
  created() {
    this.currentDeck = this.$store.state.decks.find(
      d => d.id === this.$route.params.id
    );
  }
};
</script>
<style lang="scss" scoped></style>
