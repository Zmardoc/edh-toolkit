<template>
  <div>
    <img :src="card ? card.image_uris.normal : imageUrl" class="img" />
  </div>
</template>
<script>
import mtgBack from "../../assets/back.jpg";
export default {
  name: "Card",
  components: {},
  props: {
    card: {
      type: Object,
      default() {
        return {
          image_uris: {
            small: mtgBack,
            normal: mtgBack,
            large: mtgBack
          }
        };
      }
    }
  },
  data: () => ({
    imageUrl: mtgBack
  })
};
</script>
<style lang="scss" scoped>
.img {
  width: 280px;
  border-radius: 14px;
}
.inPicture {
  margin-top: -30px;
  color: white;
}
</style>
