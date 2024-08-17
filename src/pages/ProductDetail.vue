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
            v-model="rating__rate"
            density="comfortable"
            readonly
            color="amber-darken-2"
            class="pa-2"
            half-increments
          ></v-rating>
          <pre>{{ rating__rate }}</pre>
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
import { supabase } from "@/lib/supabaseClient";

export default {
  name: "ProductDetail",

  methods: {},

  async created() {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", this.idProdus)
      .single();
    if (error) {
      console.error("Error fetching product", error);
    } else {
      this.productData = data;
      this.title = data.title;
      this.description = data.description;
      this.price = data.price;
      this.image = data.image;
      this.rating__rate = data.rating__rate;
      this.rating__count = data.rating__count;
    }
  },
  data() {
    return {
      idProdus: this.$route.params.id,
      productData: {},
      title: "",
      description: "",
      price: 0,
      image: "",
      rating: {
        rate: 0,
        count: 0,
      },
    };
  },
};
</script>

<style scoped>
/* Your styles */
</style>
