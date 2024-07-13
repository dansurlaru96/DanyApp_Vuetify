<template lang="">
  <div>
    <router-link to="/product/:id"> </router-link>
    <v-card
      class="ma-3"
      width="290"
      hover="4dp"
      density="confortable"
      :variant="variant"
    >
      <v-card-item>
        <v-img :src="image" height="200"></v-img>

        <v-card-title> {{ title }} </v-card-title>
      </v-card-item>

      <div class="text-right mr-3">
        <v-rating
          :value="rating"
          active-color="orange"
          color="orange-lighten-1"
          dense="confortable"
          size="30px"
          hover
        >
          <pre>{{ rating.rate.count }}</pre>
        </v-rating>
      </div>

      <!-- <v-card-text> {{ description }}</v-card-text> -->

      <v-card-text class="text-h5">{{ price }} {{ currency }} EUR </v-card-text>
      <v-card-actions class="ma-2 pa-2 ga-4">
        <v-btn
          color="purple"
          variant="flat"
          block="block"
          size="large"
          @click="addToCart"
          ><v-icon> mdi-cart-plus </v-icon>Adauga in cos</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
const variants = ["elevated", "flat", "tonal", "outlined"];

export default defineComponent({
  name: "CardProdus",
  props: {
    id: Number,
    image: String,
    title: String,
    description: String,
    price: Number,
    currency: String,
    rating: Number,
    rate: Number,
    count: Number,
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.id);
    },
  },
  setup() {
    return {
      variants,
    };
  },
});
</script>
<style lang=""></style>
