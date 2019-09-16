<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme(
  "default",
  (
    primary: md-get-palette-color(blue, A200),
    // The primary color of your application
      accent: md-get-palette-color(red, A200),
    // The accent or secondary color
      theme: dark // This can be dark or light
  )
);

@import "~vue-material/dist/theme/all"; // Apply the theme
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.md-menu-content {
  z-index: 11 !important;
}
</style>
