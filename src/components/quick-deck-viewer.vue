<template>
<div>
    <h1 class="md-title">{{deck ? deck.name : "Prázdný deck"}}</h1>
    <div class="md-subhead subheader">{{deck ? deck.general.name : "Karta náhody"}}</div>
    <Card :url="deck ? deck.general.image_uris.normal : null"/> 
</div>
</template>
<script>
import Card from "./card"
export default {
    name: "QuickDeckViewer",
    components: {
        Card
    },
    props:["deck"] 
}
</script>
<style lang="scss" scoped>
    .subheader{
        margin-bottom: 10px;
    } 
</style>