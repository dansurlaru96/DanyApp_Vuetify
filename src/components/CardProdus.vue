<template lang="">
  <div>
    <router-link :to="`/pages/ProductDetail/${id}`">
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

        <v-card-text class="text-h5"
          >{{ price }} {{ currency }} EUR
        </v-card-text>
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
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";
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
});
</script>
<style lang=""></style>
