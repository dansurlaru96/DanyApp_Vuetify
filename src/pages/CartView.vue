<template lang="">
  <h1>Cos de cumparaturi</h1>

  <v-stepper
    alt-labels
    editable
    prev-text="Inapoi"
    next-text="Urmatorul"
    :items="['Coşul cu produse', 'Adresa de livrare', 'Confirmare comandă']"
  >
    <template v-slot:item.1>
      <v-card title="Lista produselor din coş" flat>
        <v-card>
          <v-btn
            @click="clearCart"
            prepend-icon="mdi-trash-can"
            color="error"
            flat
            class="mb-2"
            >Golește coșul</v-btn
          >
        </v-card>
        <v-table theme="dark" hover>
          <thead>
            <tr>
              <th class="text-left">Img</th>
              <th class="text-left">Nume produs</th>
              <th class="text-left">Preț</th>
              <th class="text-left">Cantitatea</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart" :key="item.id">
              <td>
                <v-img
                  :src="item.image"
                  max-height="40"
                  max-width="40"
                  class="my-2"
                  cover
                ></v-img>
              </td>

              <td>{{ item.title }}</td>
              <td>{{ item.price }} EUR</td>
              <td>{{ item.quantity }}</td>
              <td>
                <v-btn
                  icon="mdi-trash-can"
                  variant="text"
                  @click="removeFromCart(item.id)"
                  color="error"
                >
                </v-btn>
              </td>
            </tr>

            <tr>
              <td colspan="2"></td>
              <td>
                <strong>Total:</strong>
              </td>
              <td>
                <strong>{{ cartTotalPrice }} EUR</strong>
              </td>
              <td>
                <strong>{{ cartItemCount }} Produse</strong>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </template>

    <template v-slot:item.2>
      <v-card title="Step Two" flat>...</v-card>
    </template>

    <template v-slot:item.3>
      <v-card title="Step Three" flat>...</v-card>
    </template>
  </v-stepper>
</template>
<script>
import { useCartStore } from "../stores/cartStore";
export default {
  name: "CartView",
  data() {
    return {
      cart: null,
      cartItemCount: null,
      cartTotalPrice: null,
    };
  },

  created() {
    const cartStore = useCartStore();
    this.cart = cartStore.cart;
    this.cartItemCount = cartStore.cartItemCount;
    this.cartTotalPrice = cartStore.cartTotalPrice;
  },
  methods: {
    removeFromCart(id) {
      const cartStore = useCartStore();
      cartStore.removeFromCart(id);
      this.cart = cartStore.cart;
      this.cartItemCount = cartStore.cartItemCount;
      this.cartTotalPrice = cartStore.cartTotalPrice;
    },
    clearCart() {
      const cartStore = useCartStore();
      cartStore.clearCart();
      this.cart = cartStore.cart;
      this.cartItemCount = cartStore.cartItemCount;
      this.cartTotalPrice = cartStore.cartTotalPrice;
    },
  },
};
</script>
<style lang=""></style>
