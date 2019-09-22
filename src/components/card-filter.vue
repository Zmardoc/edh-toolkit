<template>
  <div>
    <form novalidate class="md-layout" @submit="filterCards">
      <md-card class="md-layout-item md-small-size-100">
        <md-card-header>
          <div class="md-title">Filtr</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label>Název</label>
                <md-input v-model="filter.name" :disabled="sending" />
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label>Typ</label>
                <md-input v-model="filter.types" :disabled="sending" />
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label>Oracle</label>
                <md-input v-model="filter.rules" :disabled="sending" />
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label>Do ceny</label>
                <md-input v-model="filter.goodPrize" :disabled="sending" />
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label>Barvy</label>
                <md-input v-model="filter.colors" :disabled="sending" />
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label>CMC</label>
                <md-input v-model="filter.cmc" :disabled="sending" />
              </md-field>
            </div>
          </div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending"
            >Filtruj</md-button
          >
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>
<script>
export default {
  name: "CardFilter",
  props: ["deck"],
  data: () => ({
    sending: false,
    filter: {
      name: "",
      types: "",
      rules: "",
      goodPrize: "5",
      colors: "",
      cmc: ""
    }
  }),
  computed: {
    colorIdentity: function() {
      return this.deck.general.color_identity.join("");
    }
  },
  methods: {
    filterCards(event) {
      event.preventDefault();
      var filterString = `${this.returnFilter(
        "q",
        this.filter.name
      )} ${this.returnFilter("o", this.filter.rules)} ${this.returnFilter(
        "t",
        this.filter.types
      )} ${this.returnFilter("c", this.filter.colors)} ${this.returnFilter(
        "cmc",
        this.filter.cmc
      )} eur<${this.filter.goodPrize} id:${this.colorIdentity} legal:commander`;
      this.$emit("filtering", filterString);
    },
    returnFilter(ft, value) {
      if (value === "") {
        return "";
      }
      return `${ft}=${value}`;
    }
  }
};
</script>
<style lang="scss" scoped></style>
