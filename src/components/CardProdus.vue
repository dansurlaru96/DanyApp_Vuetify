<template lang="">
  <div>
    <v-card class="" max-width="340" hover>
      <v-card-item>
        <v-img :src="image"></v-img>

        <v-card-title> {{ title }} </v-card-title>
      </v-card-item>

      <v-card-text> {{ description }}</v-card-text>

      <v-chip class="ma-3" color="green" dark v-if="available"
        >Disponibil</v-chip
      >
      <v-chip class="ma-3" color="red" dark v-else>Indisponibil</v-chip>
      <v-card-text class="text-h5"
        >{{ price }} {{ currency
        }}<v-chip class="ma-3" v-if="discount > 0" color="orange" dark>
          - {{ discount }}% reducere
        </v-chip>
      </v-card-text>
      <v-btn @click="addToCart">Adauga in cos</v-btn>
    </v-card>
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
    discount: Number,
    available: Boolean,
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.id);
    },
  },
});
</script>
<style lang=""></style>
