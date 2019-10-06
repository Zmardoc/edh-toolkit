<template>
  <md-app class="fullHeight">
    <md-app-drawer md-permanent="full" class="centerContent">
      <QuickDeckViewer :deck="hoveredItem" />
    </md-app-drawer>
    <md-app-content class="noPadding">
      <md-table
        v-model="$store.state.decks"
        v-if="$store.state.decks != null && $store.state.decks.length > 0"
        class="fullWidth "
        @md-selected="goToDeck"
      >
        <md-table-toolbar>
          <h1 class="md-title">Moje decky</h1>
        </md-table-toolbar>
        <md-table-row
          slot="md-table-row"
          slot-scope="{ item }"
          md-selectable="single"
          @mouseover="hoveredItem = item"
        >
          <md-table-cell md-label="Název">{{ item.name }}</md-table-cell>
          <md-table-cell md-label="Generál">{{
            item.general.name
          }}</md-table-cell>
          <md-table-cell md-label="Barvy">
            <mana
              :t="item"
              v-for="item in item.general.color_identity"
              :key="item"
            />
            <mana v-if="item.general.color_identity.length === 0" t="C" />
          </md-table-cell>
          <md-table-cell md-label="Počet karet" class="biggerFont">
            <div>{{ item.cards ? item.cards.length : 0 }}/99</div>
          </md-table-cell>
          <md-table-cell md-label="Kompletnost">
            <progresser :numb="item.cards ? item.cards.length : 0" />
          </md-table-cell>
        </md-table-row>
      </md-table>
      <div class="decksTable" v-else>Zatím nebyl založen žádný balíček</div>
      <DeckCreator />
    </md-app-content>
  </md-app>
</template>
<script>
import QuickDeckViewer from "../components/quick-deck-viewer";

export default {
  name: "Decks",
  components: {
    DeckCreator: () => import("../components/deck-creator"),
    QuickDeckViewer
  },
  data: () => ({
    hoveredItem: null
  }),
  methods: {
    goToDeck(deck) {
      this.$router.push(`decks/${deck.id}`);
    }
  }
};
</script>
<style lang="scss" scoped>
.decksTable {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.noPadding {
  padding: 0;
}
.fullHeight {
  height: 100%;
}
.centerContent {
  display: flex;
  justify-content: center;
}
.biggerFont {
  font-size: 20px;
}
</style>
