<template>
  <div>
    <div class="decksTable">
      <md-table
        v-model="$store.state.decks"
        v-if="$store.state.decks != null && $store.state.decks.length > 0"
        class="fullWidth"
        @md-selected="goToDeck"
      >
        <md-table-toolbar>
          <h1 class="md-title">Moje dicky</h1>
        </md-table-toolbar>

        <md-table-row
          slot="md-table-row"
          slot-scope="{ item }"
          md-selectable="single"
        >
          <md-table-cell md-label="Název">{{ item.name }}</md-table-cell>
          <md-table-cell md-label="Generál">{{
            item.general.name
          }}</md-table-cell>
          <md-table-cell md-label="Barvy">
            <S
              :t="item"
              v-for="item in item.general.color_identity"
              :key="item"
            />
          </md-table-cell>
          <md-table-cell md-label="Počet karet"
            >{{ item.gender }}/99</md-table-cell
          >
          <md-table-cell md-label="Kompletnost">Ikonka TODO</md-table-cell>
        </md-table-row>
      </md-table>
      <div v-else>Zatím nebyl založen žádný balíček</div>
    </div>
    <DeckCreator />
  </div>
</template>
<script>
import S from "../components/symbol";
export default {
  name: "Decks",
  components: {
    DeckCreator: () => import("../components/deck-creator"),
    S
  },
  methods: {
    goToDeck(deck) {
      this.$router.push(`decks/${deck.id}`);
    }
  }
};
</script>
<style lang="scss" scoped>
.decksTable {
  padding: 15px;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.fullWidth {
  width: 100%;
}
</style>
