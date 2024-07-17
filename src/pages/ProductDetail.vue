<template>
  <div>
    <h1>{{ $route.params.id }}</h1>
    <h1>{{ product.title }}</h1>
    <img :src="product.image" alt="Product Image" />
    <p>{{ product.description }}</p>
    <p>Price: {{ product.price }} {{ product.currency }}</p>
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<script>
import api from "../api/api";
export default {
  data() {
    return {
      product: {},
    };
  },
  created() {
    this.fetchProductDetails();
  },
  methods: {
    async created() {
      this.products = this.$route.params.id;

      try {
        const response = await api.getProduct(this.products);
        this.product = response.data;

        this.name = this.product.name;
        this.description = this.product.description;
        this.price = this.product.price;
        this.image = this.product.image;
        this.stock = this.product.stock;
      } catch (error) {
        console.error("A aparut o eroare: ", error);
      }
      console.log(this.product);
    },
    data() {
      return {
        showAllProducts: false,
        idProdus: null,
        productData: {
          name: null,
          description: null,
          price: null,
          image: null,
          stock: null,
        },
        name: null,
        description: null,
        price: null,
        image: null,
        stock: null,
      };
    },
  },
};
</script>

<style scoped>
/* Your styles */
</style>
