<template>
  <div class="d-flex flex-wrap justify-content-center">
    <CardProdus
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :image="product.image"
      :title="product.title"
      :description="product.description"
      :price="product.price"
      :currency="product.currency"
      :rating="product.rating.rate"
      :rate="product.rating.count"
      :count="product.rating.count"
    ></CardProdus>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import CardProdus from "../components/CardProdus.vue";
export default defineComponent({
  name: "StoreView",
  components: {
    CardProdus,
  },
  data() {
    return {
      products: [
        {
          id: "",
          image: "",
          title: "",
          description: "",
          price: "",
          currency: "",
          rating: {
            rate: "",
            count: "",
          },
        },
      ],
    };
  },
  mounted() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      this.products = response.data;
    });
  },
});
</script>
<style lang=""></style>
