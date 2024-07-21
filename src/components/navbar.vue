<template lang="">
  <v-layout class="ma-8">
    <v-app-bar app scroll-behavior="hide" scroll-threshold="50">
      <v-toolbar mobile-breakpoint="680" color="grey-darken-3">
        <v-app-bar-nav-icon
          v-if="$vuetify.display.smAndDown"
          variant="text"
          @click.stop="drawer = !drawer"
          class="mr-4"
        ></v-app-bar-nav-icon>
        <template v-if="$vuetify.display.mdAndUp">
          <v-spacer></v-spacer>

          <v-toolbar-items>
            <v-btn to="/home">Acasă</v-btn>
            <v-btn to="/studio">Studio</v-btn>
            <v-btn to="/listen-down">Listen & Download</v-btn>
            <v-btn to="/store">Magazin</v-btn>
            <v-btn to="/contact">Contact</v-btn>

            <v-divider
              class="mx-2"
              light
              opacity="75"
              inset
              vertical
            ></v-divider>
            <SocialBtn class="d-flex justify-center pa-2"/>
          </v-toolbar-items>
        </template>
</v-toolbar>
</v-app-bar>
<v-navigation-drawer v-if="$vuetify.display.mdAndDown" v-model="drawer"
  :location="$vuetify.display.mobile ? 'top' : undefined" theme="dark" floating="auto" app>
  <v-list :items="items">
    <template v-slot:prepend> </template>
    <v-list-item v-for="(item, i) in items" :key="i" @click="drawer = false" :to="item.link">
      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>

    </v-list-item>

    <v-container class="text-center">
      <SocialBtn />
    </v-container>

  </v-list>
</v-navigation-drawer>
</v-layout>
</template>
<script>
import { defineComponent } from "vue";
import SocialBtn from "./SocialBtn.vue";
export default defineComponent({
  name: "Navbar",
  components: {
    SocialBtn,
  },
  data: () => ({
    drawer: false,
    group: null,

    items: [
      { title: "Acasă", link: "/home" },
      { title: "Studio", link: "/studio" },
      { title: "Listen & Download", link: "/listen-down" },
      { title: "Magazin", link: "/store" },
      { title: "Contact", link: "/contact" },
    ],
  }),
});
</script>
<style lang=""></style>

<!-- <v-layout>
      <v-app-bar
        color="primary"
        density="compact"
      >
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Photos</v-app-bar-title>

        <template v-slot:append>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-app-bar>

      <v-main>
        <v-container fluid>
          <v-row dense>
            <v-col
              v-for="n in 8"
              :key="n"
              cols="3"
            >
              <v-sheet
                color="surface-variant-alt"
                height="96"
              ></v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout> -->
