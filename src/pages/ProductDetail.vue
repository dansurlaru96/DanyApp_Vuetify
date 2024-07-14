<template>
  <div v-if="product">
    <h1>{{ product.title }}</h1>
    <img :src="product.image" :alt="product.title" />
    <p>{{ product.description }}</p>
    <p>{{ product.price }} {{ product.currency }}</p>
    <p>Rating: {{ product.rating }}</p>
  </div>
</template>

<script>  

export default {
  name: "ProductDetail",
  props: ["id", "image", "title", "description", "price", "currency", "rating"],
  data() {
    return {
      product: null,
    };
  },
};
</script>
