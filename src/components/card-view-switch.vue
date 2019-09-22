<template>
  <div>
    <md-toolbar md-elevation="0">
      <h3 class="md-title" style="flex: 1">EDH toolkit</h3>
      <md-button class="md-primary" @click="$emit('changeView', 1)"
        >Seznam</md-button
      >
      <md-button class="md-primary" @click="$emit('changeView', 2)"
        >Opráski</md-button
      >
      <md-button class="md-primary" @click="$emit('changeView', 3)"
        >Builder</md-button
      >
    </md-toolbar>
  </div>
</template>

<script>
export default {
  name: "CardViewSwitch"
};
</script>

<style lang="scss" scoped></style>
