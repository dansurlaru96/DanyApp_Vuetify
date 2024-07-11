<template lang="">
  <div class="d-flex flex-row justify-space-evenly flex-wrap justify-center">
    <CardProdus
      image="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      id="00"
      title="Produsul Meu"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "
      price="100"
      currency="MDL"
      :discount="10"
      :available="true"
    />
    <CardProdus
      image="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      id="01"
      title="Produsul Meu"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "
      price="100"
      currency="MDL"
      :discount="10"
      :available="true"
    />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import CardProdus from "./CardProdus.vue";

export default defineComponent({
  name: "CardProdusContainer",
  components: {
    CardProdus,
  },
  created() {
    fetch("http://localhost:3000/produse")
      .then((response) => response.json())
      .then((data) => console.log(data));
  },
  updated() {

  },
  
});
</script>
<style lang=""></style>
