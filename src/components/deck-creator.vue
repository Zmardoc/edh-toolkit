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
          <md-field>
            <label>Generál</label>
            <md-input v-model="generalName" @input="validateGeneral"></md-input>
          </md-field>
        </div>
        <Card
          class="column"
          :url="general ? general.image_uris.normal : null"
        />
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false"
          >Storno</md-button
        >
        <md-button
          class="md-primary"
          @click="createDeck"
          :disabled="general == null || name === '' || loading"
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
    err: false,
    loading: true
  }),

  methods: {
    show() {
      this.name = "";
      this.generalName = "";
      this.showDialog = true;
    },
    createDeck() {
      var deck = {
        name: this.name,
        general: this.general,
        id: uuid.v1(),
        cards: []
      };

      this.$store.commit("addDeck", deck);
      this.showDialog = false;
    },
    validateGeneral() {
      if (this.generalName === "") {
        return false;
      }
      this.loading = true;
      this.axios
        .get(
          `/cards/search?q=!"${this.generalName}" legal:commander ((o:can o:be o:your o:commander t:planeswalker) or (t:legendary t:creature))"`
        )
        .then(res => {
          if (res.data.data.length > 0) {
            this.general = res.data.data[0];
            this.loading = false;
            return true;
          }
        })
        .catch(() => {
          this.general = null;
          this.loading = false;
          return false;
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
