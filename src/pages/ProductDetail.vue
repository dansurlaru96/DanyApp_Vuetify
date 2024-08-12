<template>
  <div class="ma-5">
    <h1 class="pa-5 text-center">{{ title }}</h1>

    <div class="d-flex flex-wrap justify-space-between ma-4">
      <div>
        <img height="400" aspect-ratio="4/3" :src="image" alt="product" />
      </div>

      <div width="500" class="flex-column align-self-center">
        <h3 class="text-h6 text-deep-purple-lighten-1 text-right">
          #produs ID {{ $route.params.id }}
        </h3>
        <div class="text-center">
          <v-rating
            v-model="rating.rate"
            density="comfortable"
            readonly
            color="amber-darken-2"
            class="pa-2"
            half-increments
          ></v-rating>
          <pre class="">{{ rating.rate }}</pre>
        </div>

        <h1 class="pa-6 text-h3 font-weight-bold">{{ price }} EUR</h1>

        <v-btn color="purple" size="x-large" @click="addToCart">
          <v-icon>mdi-cart-plus</v-icon> Adaugǎ în coş
        </v-btn>
      </div>
    </div>

    <p>{{ description }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
import api from "../api/api";
export default {
  name: "ProductDetail",

  methods: {},

  async created() {
    this.product.value = await api.getProduct(this.$route.params.id);

    try {
      const response = await api.getProduct(this.idProdus);
      this.productData =
        response.data[
          response.data.findIndex((product) => product.id == this.idProdus)
        ];

      this.title = this.productData.title;
      this.description = this.productData.description;
      this.price = this.productData.price;
      this.image = this.productData.image;
      this.rating.rate = this.productData.rating.rate;
      this.rating.count = this.productData.rating.count;
      this.category = this.productData.category;
    } catch (error) {
      console.error("A aparut o eroare: ", error);
    }
    console.log(this.productData);
  },
  data() {
    return {
      showAllProducts: false,
      idProdus: this.$route.params.id,
      productData: {},
      name: null,
      description: null,
      price: null,
      image: null,
      rating: {
        rate: null,
        count: null,
      },
      product: ref({}),
    };
  },
};
</script>

<style scoped>
/* Your styles */
</style>
