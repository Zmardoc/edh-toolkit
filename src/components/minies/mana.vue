<template>
  <img :src="url" />
</template>
<script>
export default {
  name: "Mana",
  props: ["t"],
  data: () => ({}),
  computed: {
    url: function() {
      return `https://gatherer.wizards.com/Handlers/Image.ashx?size=medium&name=${this.t}&type=symbol`;
    }
  }
};
</script>
<style lang="scss" scoped>
img {
  margin-right: 2px;
}
</style>
