<template>
  <div>
    <img :src="imageUrl" class="img" />
  </div>
</template>
<script>
import mtgBack from "../assets/back.jpg";
export default {
  name: "Card",
  props: ["url"],
  data: () => ({
    imageUrl: mtgBack
  }),
  watch: {
    url: function(val) {
      this.imageUrl = val == null ? mtgBack : val;
    }
  }
};
</script>
<style lang="scss" scoped>
.img {
  width: 200px;
}
</style>
