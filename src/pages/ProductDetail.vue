<template>
  <div class="ma-5">
    <h1 class="text-center">{{ title }}</h1>

    <div class="d-flex flex-wrap justify-space-between ma-4">
      <div>
        <img height="400" aspect-ratio="1/1" :src="image" alt="product" />
      </div>

      <div width="500" class="flex-column align-self-center justify-center">
        <h3 class="text-h6 text-deep-purple-lighten-1 text right">
          #produs ID {{ $route.params.id }}
        </h3>
        <v-rating
          height="50"
          v-model="rating"
          dense
          hover
          half-increments
          color="orange"
          :value="rating.rate.count"
          ><div v-if="rating.rate !== null && rating.count !== null">
            <p>Rating: {{ rating.rate }}</p>
            <p>Count: {{ rating.count }}</p>
          </div></v-rating
        >

        <h2 class="text-h3 font-weight-bold">{{ price }} EUR</h2>
        <div class="d-flex flex-column pa-3 ga-5">
          <v-btn color="purple" size="x-large" elevation="4" @click="addToCart">
            <v-icon>mdi-cart-plus</v-icon> Adauga in cos
          </v-btn>
        </div>
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

  methods: {
    addToCart() {},
  },

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
      this.rating = this.productData.rating;
      this.rate = this.productData.rate;
      this.count = this.productData.count;
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
  nameRules: [
    (v) => !!v || "Câmp obligatoriu",
    (v) => v.length <= 15 || "Numele să conțină maxim 15 caractere",
  ],
};
</script>

<style scoped>
/* Your styles */
</style>
