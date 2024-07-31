<template>
  <div>
    <div>
      <v-container>
        <v-card
          class="d-flex flex-wrap justify-center justify-space-evenly align-center ga-4"
        >
          <v-card-title>
            <h3>Produse;</h3>
          </v-card-title>
          <v-card-item>
            <v-text-field
              width="300"
              label="Cauta produs"
              outlined
              dense
              clearable
              @input="searchProduct"
            ></v-text-field>
          </v-card-item>
          <v-card-item>
            <v-select
              width="300"
              outlined
              dense
              clearable
              label="Selectează o opțiune"
              :items="[
                'Preț crescător',
                'Preț descrescător',
                'Alfabetic A-Z',
                'Alfabetic Z-A',
              ]"
              @change="sortProducts"
            ></v-select>
          </v-card-item>
          <v-card-item>
            <v-btn
              append-icon="mdi-cart"
              color="purple"
              size="large"
              rounded="lg"
              >Cos</v-btn
            >
          </v-card-item>
        </v-card>
      </v-container>
      <div
        class="d-flex flex-wrap justify-space-evenly justify-center align-center align-self-center ma-2"
      >
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
  methods: {
    searchProduct(event: Event) {
      let target = event.target as HTMLInputElement;
      let searchTerm = target.value.toLowerCase();
      if (searchTerm == "") {
        axios.get("https://fakestoreapi.com/products").then((response) => {
          this.products = response.data;
        });
      } else {
        this.products = this.products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm)
        );
      }
    },
    sortProducts(event: Event) {
      let target = event.target as HTMLSelectElement;
      let selectedOption = target.value;
      if (selectedOption == "Preț crescător") {
        this.products = this.products.sort(
          (a: any, b: any) => a.price - b.price
        );
      } else if (selectedOption == "Preț descrescător") {
        this.products = this.products.sort(
          (a: any, b: any) => b.price - a.price
        );
      } else if (selectedOption == "Alfabetic A-Z") {
        this.products = this.products.sort((a: any, b: any) =>
          a.title.localeCompare(b.title)
        );
      } else if (selectedOption == "Alfabetic Z-A") {
        this.products = this.products.sort((a: any, b: any) =>
          b.title.localeCompare(a.title)
        );
      }
    },
  },
  mounted() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      this.products = response.data;
    });
  },
});
</script>
<style lang=""></style>
