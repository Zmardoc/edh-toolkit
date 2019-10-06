<template>
  <div class="cardList">
    <card
      v-for="card in cards"
      :key="card.tcgplayer_id"
      :card="card"
      class="smallerCard"
    />
  </div>
</template>

<script>
export default {
  name: "CardPictureList",
  props: ["cards"]
};
</script>

<style lang="scss" scoped>
.cardList {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-flow: row wrap;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
  max-width: 1150px;
  margin: 15px auto;
}
.smallerCard {
  width: 19.5%;
  margin: 0px 0px 9px 0px;
}
</style>
