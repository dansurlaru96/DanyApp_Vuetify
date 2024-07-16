<template>
  <div>
    <h1>{{ title }}</h1>
    <img :src="image" alt="Product Image" />
    <p>{{ description }}</p>
    <p>{{ price }} {{ currency }}</p>
    <p>Rating: {{ rating }} ({{ rate }} votes)</p>
    <p>Count: {{ count }}</p>
  </div>
</template>

<script>
export default {
  props: [
    "id",
    "image",
    "title",
    "description",
    "price",
    "currency",
    "rating",
    "rate",
    "count",
  ],
  created() {
    // Fetch additional product details if necessary
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
