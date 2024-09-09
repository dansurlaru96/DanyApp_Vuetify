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
            clearable="true"
            color="purple-accent-4"
            @input="searchProduct"
          ></v-text-field>
        </v-card-item>
        <v-card-item class="mx-auto">
          <v-chip-group
            filter
            column
            mandatory="force"
            variant="tonal"
            mobile-breakpoint="680"
            v-model="selected"
          >
            <v-chip
              density="default"
              color="deep-purple-darken-4"
              @click="displayAllProducts"
              >Toate produsele</v-chip
            >
            <v-chip
              density="default"
              color="deep-purple-darken-4"
              @click="filterOption(`men's clothing`)"
              >Îmbrăcăminte bărbați</v-chip
            >
            <v-chip
              density="default"
              color="deep-purple-darken-4"
              @click="filterOption(`women's clothing`)"
              >Îmbrăcăminte femei</v-chip
            >
            <v-chip
              density="default"
              color="deep-purple-darken-4"
              @click="filterOption(`jewelery`)"
              >Bijuterii</v-chip
            >
            <v-chip
              density="default"
              color="deep-purple-darken-4"
              @click="filterOption(`electronics`)"
              >Electronice</v-chip
            >
          </v-chip-group>
        </v-card-item>
        <v-card-item>
          <select v-model="selected" @change="sortProduct($event.target.value)">
            <option disabled selected>Sorteaza produsele</option>
            <option v-for="option in sortOptions" :key="option" :value="option">
              {{ option }}
            </option>
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
                color="white"
                :content="cartItemCount"
                overlap
                inline
              ></v-badge>
            </v-btn>
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
        :price="product.price"
      ></CardProdus>
    </div>
  </v-app>
</template>
<script>
import { defineComponent } from "vue";
import CardProdus from "../components/CardProdus.vue";
import { useCartStore } from "@/stores/cartStore";
import { supabase } from "@/lib/supabaseClient";
import { de, fi } from "vuetify/locale";

const getProducts = async () => {
  try {
    const { data, error } = await supabase.from("products").select("*");
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error fetching products", error);
  }
};

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
      supabase
        .from("products")
        .select("*")
        .ilike("title", `%${event.target.value}%`)
        .then((response) => {
          this.products = response.data;
        });
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

    displayAllProducts() {
      supabase
        .from("products")
        .select("*")
        .then((response) => {
          this.products = response.data;
        });
    },

    filterOption(option) {
      supabase
        .from("products")
        .select("*")
        .eq("category", option)
        .then((response) => {
          this.products = response.data;
        });
    },

    resetSortFilter() {
      supabase
        .from("products")
        .select("*")
        .then((response) => {
          this.products = response.data;
        });
      this.selected = null;
      this.sortOption = null;
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

  async mounted() {
    this.products = await getProducts();
  },
});
</script>

<style lang="css">
select {
  width: 190px;
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
  transition: all 0.3s;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
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
