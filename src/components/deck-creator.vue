<template>
  <div>
    <md-dialog :md-active.sync="showDialog" class="dialog">
      <md-dialog-title>Vytvoření decku</md-dialog-title>
      <md-dialog-content class="container">
        <div class="column">
          <md-field>
            <label>Název</label>
            <md-input v-model="name" autofocus></md-input>
          </md-field>
          <md-autocomplete
            v-model="generalName"
            :md-options="availableGenerals"
            @md-changed="getGenerals"
            @md-opened="getGenerals"
            md-dense
          >
            <label>Generál</label>
          </md-autocomplete>
        </div>
        <Card class="column" :url="imageUrl" />
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false"
          >Storno</md-button
        >
        <md-button
          class="md-primary"
          @click="createDeck"
          :disabled="general == null || name === ''"
          >Vytvořit</md-button
        >
      </md-dialog-actions>
    </md-dialog>
    <md-button class="md-raised md-primary" @click="show"
      >Založit deck</md-button
    >
  </div>
</template>
<script>
import mtgBack from "../assets/back.jpg";
import { uuid } from "vue-uuid";
import Card from "../components/card";
export default {
  name: "DeckCreator",
  components: {
    Card
  },
  data: () => ({
    showDialog: false,
    name: "",
    generalName: "",
    general: null,
    imageUrl: mtgBack,
    availableGenerals: []
  }),
  watch: {
    generalName: function(val) {
      this.axios
        .get(`/cards/search?q=!"${val}"`)
        .then(res => {
          if (res.data.data.length > 0) {
            this.general = res.data.data[0];
            this.imageUrl = this.general.image_uris.normal;
          }
        })
        .catch(() => {
          this.general = null;
          this.imageUrl = mtgBack;
        });
    }
  },
  methods: {
    show() {
      this.name = "";
      this.generaleName = "";
      this.showDialog = true;
    },
    createDeck() {
      //TODO
      var deck = {
        name: this.name,
        general: this.general,
        id: uuid.v1()
      };
      this.$store.commit("addDeck", deck);
      this.showDialog = false;
    },
    getGenerals() {
      var params = `${
        this.generalName ? this.generalName : ""
      } legal:commander ((o:can o:be o:your o:commander t:planeswalker) or (t:legendary t:creature))`;
      this.axios.get(`/cards/search?&q=${params}`).then(res => {
        this.availableGenerals = res.data.data.slice(0, 15).map(function(item) {
          return item["name"];
        });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.column {
  display: flex;
  flex-direction: column;
  margin: 10px;
  flex-basis: 100%;
  flex: 1;
}
</style>
