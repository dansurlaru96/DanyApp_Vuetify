<template>
  <v-layout>
    <v-app-bar color="grey-darken-3" density="default" elevation="10">
      <template v-slot:prepend> </template>

      <v-app-bar-title>DAN SURLARU</v-app-bar-title>

      <template v-slot:append>
        <v-btn to="/home">Acasă</v-btn>

        <div class="text-center">
          <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
              <v-btn color="primary" v-bind="props"> Resurse </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

        <v-btn to="/store">Magazin</v-btn>
        <v-btn to="/listen-down">Listen & Download</v-btn>
        <v-btn to="/about">Despre mine</v-btn>
        <v-btn to="/contact">Contact</v-btn>
      </template>
    </v-app-bar>
    <v-main> </v-main>
  </v-layout>
</template>

<script lang="ts">
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
