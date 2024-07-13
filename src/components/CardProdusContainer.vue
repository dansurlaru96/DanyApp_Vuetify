<template lang="">
  <div class="d-flex flex-row justify-space-evenly flex-wrap">
    <CardProdus
      v-for="product in products"
      :key="product.id"
      :title="product.title"
      :image="product.image"
      :price="product.price"
      :rating="product.rating.rate.count"
      :currency="product.currency"
    >
    </CardProdus>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CardProdus from "./CardProdus.vue";
import axios from "axios";

export default defineComponent({
  name: "CardProdusContainer",
  components: {
    CardProdus,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => (this.products = response.data))
      .then((response) => console.log(response.data));
  },
});
</script>
<style lang=""></style>
