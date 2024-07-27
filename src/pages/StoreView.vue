<template>
  <div>
    <div>
      <v-container>


        <v-card class="d-flex flex-wrap justify-center justify-space-evenly align-center  ga-4">
          <v-card-title>
            <h3>Produse;</h3>
          </v-card-title>
          <v-card-item>
            <v-text-field width="300" label="Cauta produs" outlined dense></v-text-field>
          </v-card-item>
          <v-card-item>
            <v-select width="300" label="Sorteaza dupa" outlined dense>
              <v-select-item value="1">Pret crescator</v-select-item>
              <v-select-item value="2">Pret descrescator</v-select-item>
              <v-select-item value="3">Rating</v-select-item>
            </v-select>
          </v-card-item>
          <v-card-item>
            <v-btn append-icon="mdi-cart" color="purple" size="large" rounded="lg">Cos</v-btn>
          </v-card-item>
        </v-card>


      </v-container>
      <div class="d-flex flex-wrap justify-space-evenly justify-center align-center align-self-center ma-2">
        <CardProdus v-for="product in products" :key="product.id" :id="product.id" :image="product.image"
          :title="product.title" :description="product.description" :price="product.price" :currency="product.currency"
          :rating="product.rating.rate" :rate="product.rating.count" :count="product.rating.count"></CardProdus>
      </div>
    </div>
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
