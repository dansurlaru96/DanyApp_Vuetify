<template>
  <v-app>
    <v-container>
      <v-card
        variant="tonal"
        class="d-flex flex-wrap justify-center justify-space-evenly align-center ga-2"
      >
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
            flat
            prepend-icon="mdi-reload"
            >Resetare opțiuni</v-btn
          >
        </v-card-item>
        <v-card-item>
          <template v-slot:append>
            <v-btn
              @click="$router.push({ name: 'CartView' })"
              color="purple"
              size="large"
              rounded="lg"
              flat
              prepend-icon="mdi-cart"
              to="/cart"
              >Coș<v-badge
                color="error"
                :content="cartItemCount"
                overlap
                inline
              ></v-badge
            ></v-btn>
          </template>
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
import { useCartStore } from "@/stores/cartStore";

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
    addProductToCart() {
      this.$emit("addedToCart", this.id);
      let cartStore = useCartStore();

      cartStore.addToCart({
        id: this.id,
        image: this.image,
        name: this.name,
        price: this.price,
      });
    },
  },

  mounted() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      this.products = response.data;
      console.log(this.products);
    });
  },
  created() {
    let cartStore = useCartStore();
    cartStore.loadCart();
  },

  computed: {
    cartItemCount() {
      const cartStore = useCartStore();
      return cartStore.cartItemCount;
    },
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
  transition: all 0.3s;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
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
  transition: all 0.3s;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
}
</style>
