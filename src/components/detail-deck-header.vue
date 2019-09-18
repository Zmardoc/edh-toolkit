<template>
  <div class="md-layout">
    <div class="md-layout-item">
      <Card :card="deck.general" class="md-layout-item" />
    </div>
    <div class="md-layout-item">
      <div class="md-title">{{ deck.name }}</div>
      <div class="md-subhead">{{ deck.general.name }}</div>
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
  props: ["deck"]
};
</script>
<style lang="scss" scoped></style>
