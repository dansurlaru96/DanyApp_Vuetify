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

        <!-- <v-btn
          width="auto"
          color="purple"
          variant="flat"
          size="x-large"
          @click="
            snackbar = true;
            addToCart();
          "
        >
          <v-icon>mdi-cart-plus</v-icon>În coș
        </v-btn> -->
      </div>
    </div>

    <p>{{ description }}</p>
  </div>
</template>

<script>
import { supabase } from "@/lib/supabaseClient";
import { useCartStore } from "@/stores/cartStore";
export default {
  name: "ProductDetail",
  data() {
    return {
      title: "",
      description: "",
      price: 0,
      image: "",
      rating__rate: 0,
      snackbar: false,
    };
  },
  methods: {
    async getProduct() {
      const { data, error } = await supabase
        .from("products")
        .select()
        .eq("id", this.$route.params.id)
        .single();
      if (error) {
        console.error(error);
      } else {
        this.title = data.title;
        this.description = data.description;
        this.price = data.price;
        this.image = data.image;
        this.rating__rate = data.rating;
      }
    },
    async addToCart() {
      const { data, error } = await supabase
        .from("products")
        .select()
        .eq("id", this.$route.params.id)
        .single();
      if (error) {
        console.error(error);
      } else {
        useCartStore().addProduct(data);
      }
    },
  },
};
</script>

<style></style>
