<template>
  <div>
    <v-card class="ma-3" width="290" hover="4dp" :variant="outline">
      <v-card-item>
        <v-img :src="image" height="200"></v-img>
        <v-card-title> {{ title }} </v-card-title>
      </v-card-item>
      <v-card-text class="text-h5">
        {{ price }} {{ currency }} EUR
      </v-card-text>
      <v-card-actions class="ma-2 pa-2 ga-4">
        <v-btn
          width="auto"
          color="purple"
          variant="flat"
          @click="
            snackbar = true;
            addToCart();
          "
        >
          <v-icon>mdi-cart-plus</v-icon>În coș
        </v-btn>

        <v-snackbar
          v-model="snackbar"
          color="black"
          timeout="4000"
          multi-line
          rounded="pill"
          variant="elevated"
        >
          {{ text }}

          <template v-slot:actions>
            <v-btn color="blue" variant="text" @click="snackbar = false">
              Închide
            </v-btn>
          </template>
        </v-snackbar>

        <v-btn
          width="auto"
          @click="goToProductDetail"
          color="purple"
          variant="outlined"
        >
          <v-icon>mdi-eye</v-icon> Detalii
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useCartStore } from "@/stores/cartStore";

export default defineComponent({
  name: "CardProdus",
  props: {
    id: String,
    image: String,
    title: String,
    description: String,
    price: Number,
    currency: String,
    rating: Number,
    rate: Number,
    count: Number,
  },

  data: () => ({
    snackbar: false,
    text: "Produsul a fost adăugat în coș",
  }),

  methods: {
    goToProductDetail() {
      this.$router.push({
        name: "ProductDetail",
        params: {
          id: this.id,
        },
      });
    },
    addToCart() {
      useCartStore().addToCart({
        id: this.id,
        image: this.image,
        title: this.title,
        price: this.price,
        currency: this.currency,
      });
    },
  },
});
</script>

<style></style>
