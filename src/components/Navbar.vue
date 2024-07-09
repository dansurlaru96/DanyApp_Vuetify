<template>
  <v-layout>
    <v-app-bar
      color="grey-darken-3"
      density="default"
      elevation="10"
      scroll-behavior="hide"
      scroll-threshold="81"
    >
      <template v-slot:prepend> </template>

      <v-app-bar-title>DAN SURLARU</v-app-bar-title>

      <template v-slot:append>
        <v-btn to="/home">Acasă</v-btn>

        <div class="text-center">
          <v-menu transition="scroll-y-transition" open-on-hover>
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props"> Resurse </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                :value="item"
              >
                <v-list-item-title :to="item.link">{{
                  item.title
                }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

        <v-btn to="/store">Magazin</v-btn>
        <v-btn to="/listen-down">Listen & Download</v-btn>
        <v-btn to="/about">Despre mine</v-btn>
        <v-btn to="/contact">Contact</v-btn>
        <v-divider
          :thickness="1"
          class="border-opacity-50"
          vertical
          inset
        ></v-divider>

        <v-btn
          icon
          href="https://www.facebook.com/dansurlaru.pro"
          target="_blank"
        >
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn
          href="https://www.instagram.com/danypromusic"
          target="_blank"
          icon
          ><v-icon>mdi-instagram</v-icon></v-btn
        >
        <v-btn
          href="https://www.linkedin.com/in/dan-surlaru-promusic-418a072a3/"
          target="_blank"
          icon
          ><v-icon>mdi-linkedin</v-icon></v-btn
        >
        <v-btn
          href="https://www.youtube.com/@dansurlaru/featured"
          target="_blank"
          icon
          ><v-icon>mdi-youtube</v-icon></v-btn
        >
        <v-btn
          href="https://open.spotify.com/artist/4viXypcCjfNp3LrDQXdzbf?go=1&sp_cid=6a7cb6a82e7bee33a5db2fee69b38b8e&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=81c147c3302a4142"
          target="_blank"
          icon
          ><v-icon>mdi-spotify</v-icon></v-btn
        >
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
