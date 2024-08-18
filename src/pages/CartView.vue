<template lang="">
  <h1 class="text-center pa-4">Coş de cumpǎrǎturi</h1>
  <v-stepper
    alt-labels
    editable
    elevation="5"
    mobile-breakpoint="680"
    :items="['Coşul cu produse', 'Adresa de livrare & metoda de platǎ']"
  >
    <template v-slot:item.1>
      <v-card>
        <div class="justify-center text-center">
          <v-alert
            v-if="cartItemCount === 0"
            width="250"
            type="warning"
            colored-border
            class="mb-4"
            variant="flat"
            >Coșul este gol</v-alert
          >
        </div>
        <div class="text-right">
          <v-btn
            @click="clearCart"
            prepend-icon="mdi-trash-can"
            color="error"
            class="mb-2"
            elevation="0"
            >Golește coșul</v-btn
          >
        </div>

        <v-table hover>
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

              <td>
                <v-btn
                  icon
                  variant="text"
                  @click="decreaseQuantity(item.id)"
                  color="error"
                  >-</v-btn
                >
                {{ item.quantity }}
                <v-btn
                  icon
                  variant="text"
                  @click="increaseQuantity(item)"
                  color="success"
                  >+</v-btn
                >
              </td>

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
      <v-row>
        <v-col cols="12" sm="6">
          <v-card title="Adresa de livrare">
            <v-form v-model="valid" ref="form" lazy-validation :rules="rules">
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    label="Nume"
                    required
                    prepend-icon="mdi-account"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field label="Prenume" required></v-text-field>
                </v-col>
              </v-row>
              <v-text-field
                label="Email"
                required
                prepend-icon="mdi-at"
              ></v-text-field>
              <v-text-field
                label="Telefon"
                required
                prepend-icon="mdi-phone"
              ></v-text-field>
              <v-text-field
                label="Adresa"
                required
                prepend-icon="mdi-map-marker"
              ></v-text-field>
              <v-text-field
                label="Oras"
                required
                prepend-icon="mdi-city"
              ></v-text-field>
              <v-text-field label="Cod postal" required></v-text-field>
            </v-form>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card prepend-icon="mdi-bank" title="Metoda de plată" flat>
            <v-radio-group
              required
              label="Alege o opțiune"
              ref="form"
              lazy-validation
              :rules="rules"
            >
              <v-radio
                defaults-target
                color="purple"
                label="Card bancar"
                value="Card bancar, POS terminal la livrare"
              ></v-radio>
              <v-radio
                color="purple"
                label="Transfer bancar"
                value="Transfer bancar (în avans)"
              ></v-radio>
              <v-radio
                color="purple"
                label="Revolut"
                value="Plata prin Revolut"
              ></v-radio>
              <v-radio
                color="purple"
                label="PayPal"
                value="Plata prin PayPal"
              ></v-radio>
              <v-radio
                color="purple"
                label="Apple Pay"
                value="Plata prin Apple Pay"
              ></v-radio>
              <v-radio
                color="purple"
                label="Google Pay"
                value="Plata prin Google Pay"
              ></v-radio>
              <v-radio
                color="purple"
                label="Numerar"
                value="Numerar (la livrare)"
              ></v-radio>
            </v-radio-group>
          </v-card>
          <v-card
            prepend-icon="mdi-truck-delivery-outline"
            title="Metoda de livrare"
          >
            <v-radio-group
              required
              label="Alege o opțiune"
              ref="form"
              lazy-validation
              :rules="rules"
            >
              <v-radio
                color="orange"
                label="Livrare standard"
                value="Livrare standard prin curier"
              ></v-radio>
              <v-radio
                color="orange"
                label="Livrare prin poștă"
                value="Livrare prin poștă (Poșta Moldovei)"
              ></v-radio>
              <v-radio
                color="orange"
                label="Livrare express"
                value="Livare express prin curier"
              ></v-radio>
              <v-radio
                color="orange"
                label="Ridicare personală(pick-up)"
                value="Ridicare personală din magazin(pick-up)"
              ></v-radio>
            </v-radio-group>
          </v-card>
        </v-col>
      </v-row>
      <v-checkbox
        required
        label="Sunt de acord cu termenii și condițiile"
        ref="form"
        lazy-validation
        :rules="rules"
      ></v-checkbox>
      <div class="text-center">
        <v-btn
          class="mr-6"
          @click="
            () =>
              $refs.form.validate(() => {
                if (this.valid) {
                  alert('Comanda a fost trimisă cu succes');
                }
              })
          "
          color="success"
          elevation="0"
          >Trimite comanda</v-btn
        >
        <v-btn @click="() => $refs.form.reset()" color="error" elevation="0"
          >Resetează</v-btn
        >
      </div>
    </template>
  </v-stepper>
</template>
<script>
import { useCartStore } from "../stores/cartStore";
export default {
  name: "CartView",
  data: () => {
    return {
      cart: null,
      cartItemCount: null,
      cartTotalPrice: null,
      rules: {
        required: (value) => !!value || "Câmpul este obligatoriu",
      },
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
    increaseQuantity(item) {
      const cartStore = useCartStore();
      cartStore.increaseQuantity(item.id);
      this.cart = cartStore.cart;
      this.cartItemCount = cartStore.cartItemCount;
      this.cartTotalPrice = cartStore.cartTotalPrice;
    },
    decreaseQuantity(id) {
      const cartStore = useCartStore();
      cartStore.decreaseQuantity(id);
      this.cart = cartStore.cart;
      this.cartItemCount = cartStore.cartItemCount;
      this.cartTotalPrice = cartStore.cartTotalPrice;
    },
  },
};
</script>
<style lang=""></style>
