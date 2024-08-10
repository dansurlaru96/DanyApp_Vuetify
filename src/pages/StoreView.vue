<template>
  <v-app>
    <v-container>
      <v-card
        variant="tonal"
        class="d-flex flex-wrap justify-center justify-space-around align-center ga-4"
      >
        <v-card-title>
          <h3>Produse;</h3>
        </v-card-title>
        <v-card-item>
          <v-text-field
            class="pt-6"
            width="300"
            label="Cautǎ produs"
            prepend-inner-icon="mdi-magnify"
            density="compact"
            clearable
            color="purple-accent-4"
            @input="searchProduct"
          ></v-text-field>
        </v-card-item>
        <v-card-item>
          <select @change="sortProduct($event.target.value)">
            <option disabled selected>Sorteaza produsele</option>
            <option v-for="option in sortOptions" :key="option" :value="option">
              {{ option }}
            </option>
          </select>
        </v-card-item>
        <v-card-item>
          <select @change="filterOption($event.target.value)">
            <option disabled selected>Filtreazǎ produsele</option>
            <option value="men's clothing">Îmbrăcăminte bărbați</option>
            <option value="women's clothing">Îmbrăcăminte femei</option>
            <option value="jewelery">Bijuterii</option>
            <option value="electronics">Electronica</option>
          </select>
        </v-card-item>
        <v-card-item>
          <v-btn
            @click="resetSortFilter"
            color="purple"
            size="large"
            rounded="lg"
            prepend-icon="mdi-reload"
            >Resetare opțiuni</v-btn
          >
        </v-card-item>
        <v-card-item>
          <v-btn append-icon="mdi-cart" color="purple" size="large" rounded="lg"
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
        :rate="product.rating.rate"
        :count="product.rating.count"
      ></CardProdus>
    </div>
  </v-app>
</template>
<script>
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
      sortOptions: [
        "Preț: crescător",
        "Preț: descrescător",
        "Nume: A-Z",
        "Nume: Z-A",
      ],
      products: [],
    };
  },

  computed: {},

  methods: {
    searchProduct(event) {
      let target = event.target;
      let searchTerm = target.value.toLowerCase();
      if (searchTerm === "") {
        axios.get("https://fakestoreapi.com/products").then((response) => {
          this.products = response.data;
        });
      } else {
        this.products = this.products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
    },
    sortProduct(option) {
      if (option === "Preț: crescător") {
        this.products.sort((a, b) => a.price - b.price);
      } else if (option === "Preț: descrescător") {
        this.products.sort((a, b) => b.price - a.price);
      } else if (option === "Nume: A-Z") {
        this.products.sort((a, b) => a.title.localeCompare(b.title));
      } else if (option === "Nume: Z-A") {
        this.products.sort((a, b) => b.title.localeCompare(a.title));
      }
    },
    filterOption(option) {
      axios
        .get(`https://fakestoreapi.com/products/category/${option}`)
        .then((response) => {
          this.products = response.data;
        });
    },
    resetSortFilter() {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        this.products = response.data;
      });
    },
  },

  mounted() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      this.products = response.data;
      console.log(this.products);
    });
  },
});
</script>

<style lang="css">
select {
  width: 300px;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid purple;
  color: purple;
  font-size: 1rem;
  font-weight: 500;
  background-color: white;
}
select:hover {
  background-color: purple;
  color: white;
}
select:focus {
  outline: none;
}
select option {
  color: purple;
  background-color: white;
}
select option:hover {
  background-color: purple;
  color: white;
}
</style>
