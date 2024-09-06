<template lang="">
  <div>
    <v-card
      class="mx-auto my-8"
      elevation="6"
      max-width="320"
      outlined
      height="400"
    >
      <v-img cover height="200" :src="image"></v-img>
      <v-card-item>
        <v-card-title>{{ subject }}</v-card-title>
      </v-card-item>
      <v-card-text>
        {{ text }}
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "CardInfo",
  props: {
    subject: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
});
</script>
<style lang=""></style>
