<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-20 ">
      <Card :card="deck.general" class="md-layout-item center" />
    </div>
    <div class="md-layout-item leftPad ">
      <div class="md-title">{{ deck.name }}</div>
      <div class="md-subhead">{{ deck.general.name }}</div>
      <div>
        <md-button class="md-raised" @click="deleteDeck">Smazat</md-button>
      </div>
    </div>
    <div class="md-layout-item">
      graf
    </div>
  </div>
</template>
<script>
import Card from "./card";

export default {
  name: "DetailDeckHeader",
  components: {
    Card
  },
  props: ["deck"],
  methods: {
    deleteDeck() {
      this.$store.commit("removeDeck", this.deck.id);
      this.$router.push("/");
    }
  }
};
</script>
<style lang="scss" scoped>
.center {
  justify-content: center;
  display: flex;
}
.leftPad {
  padding-left: 20px;
}
</style>
