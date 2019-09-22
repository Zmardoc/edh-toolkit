<template>
  <div>
    <CardViewSwitch @changeView="changeView" />
    <div class="container">
      <DetailDeckHeader :deck="currentDeck" />
      <CardViewList v-if="currentView === 1" :deck="currentDeck" />
      <CardViewBuilder v-if="currentView === 3" :deck="currentDeck" />
    </div>
  </div>
</template>
<script>
import DetailDeckHeader from "../components/detail-deck-header";
import CardViewSwitch from "../components/card-view-switch";
import CardViewList from "../components/card-view-list";
import CardViewBuilder from "../components/card-view-builder";
export default {
  name: "DetailCards",
  components: {
    DetailDeckHeader,
    CardViewSwitch,
    CardViewList,
    CardViewBuilder
  },
  data: () => ({
    currentDeck: {},
    currentView: 1
  }),
  created() {
    this.currentDeck = this.$store.state.decks.find(
      d => d.id === this.$route.params.id
    );
  },
  methods: {
    changeView(view) {
      this.currentView = view;
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  padding: 20px;
}
</style>
