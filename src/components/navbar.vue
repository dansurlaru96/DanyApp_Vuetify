<template lang="">
  <div>
    <v-toolbar mobile-breakpoint="580" color="grey-darken-3">
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/home">Acasă</v-btn>

        <v-menu transition="scroll-y-reverse-transition">
          <template v-slot:activator="{ props }">
            <v-btn append-icon="mdi-menu-down" v-bind="props"> Resurse </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              :value="index"
              :to="item.link"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn to="/store">Magazin</v-btn>
        <v-btn to="/listen-down">Listen & Download</v-btn>
        <v-btn to="/contact">Contact</v-btn>
      </v-toolbar-items>

      <v-divider class="mx-2" light opacity="75" inset vertical></v-divider>
      <v-btn icon="mdi-facebook"></v-btn>
      <v-btn icon="mdi-instagram"></v-btn>
      <v-btn icon="mdi-linkedin"></v-btn>
      <v-btn icon="mdi-youtube"></v-btn>
      <v-btn icon="mdi-spotify"></v-btn>
      <v-btn icon="mdi-apple"></v-btn>
    </v-toolbar>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  data: () => ({
    items: [
      { title: "Studio de înregistrări", link: "/studio" },
      { title: "Discografie", link: "/discografie" },
      { title: "Interpreți", link: "/artist" },
    ],
  }),
});
</script>
<style lang=""></style>
