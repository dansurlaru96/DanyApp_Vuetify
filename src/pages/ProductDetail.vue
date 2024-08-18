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

  methods: {
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

    created() {
      let cartStore = useCartStore();
      this.cartItemCount = cartStore.cartItemCount;
    },

    computed: {
      cartItemCount() {
        let cartStore = useCartStore();
        return cartStore.cartItemCount;
      },
    },

    addToCart() {
      this.addProductToCart();
    },
  },

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
      this.image = data.image;
      this.price = data.price;
      this.description = data.description;
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
      image: "",
      price: "",
      rating: {
        rate: 0,
        count: 0,
      },
      snackbar: false,
      text: "Produsul a fost adăugat în coș",
    };
  },
};
</script>

<style scoped>
/* Your styles */
</style>
