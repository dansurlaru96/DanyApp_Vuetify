<template lang="">
  <div>
    
  </div>
</template>
<script>

import { defineComponent } from 'vue'

export default defineComponent({
    name: "CardProdus",
    props: {
        id: Number,
        image: String,
        title: String,
        description: String,
        price: Number,
        discount: Number,
        available: Boolean,
        
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.id);
        }
    }
});
</script>
<style lang=""></style>
