<template>
  <div>
    <img :src="imageUrl" class="img" />
  </div>
</template>
<script>
import mtgBack from "../assets/back.jpg";
export default {
  name: "Card",
  components: {},
  props: {
    url: {
      type: String,
      default: null
    }
  },
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
  width: 280px;
}
.inPicture {
  margin-top: -30px;
  color: white;
}
</style>
