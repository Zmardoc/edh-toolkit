<template>
  <div>
    <CardFilter class="filter" @filtering="filterCards" :deck="deck" />
    <CardPictureList :cards="cards" />
  </div>
</template>

<script>
import CardFilter from "./card-filter";
import CardPictureList from "./card-picture-list";

export default {
  name: "CardViewBuilder",
  props: ["deck"],
  components: {
    CardFilter,
    CardPictureList
  },
  data: () => ({
    loading: false,
    cards: []
  }),
  methods: {
    filterCards(filter) {
      this.axios
        .get(`/cards/search?q=${filter}`)
        .then(res => {
          if (res.data.data.length > 0) {
            this.loading = false;
            this.cards = res.data.data;
          }
        })
        .catch(() => {
          this.loading = false;
        });
    }
  },
  computed: {
    colorIdentity: function() {
      return this.deck.general.color_identity.join("");
    }
  }
};
</script>

<style lang="scss" scoped>
.filter {
  margin: 15px 0px;
}
</style>
