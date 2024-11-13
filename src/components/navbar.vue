<template lang="">
  <v-layout class="ma-8">
    <v-app-bar app scroll-behavior="hide" scroll-threshold="50">
      <v-toolbar mobile="true" mobile-breakpoint="xs" color="grey-darken-3">
        <v-app-bar-nav-icon
          v-if="$vuetify.display.smAndDown"
          variant="text"
          @click.stop="drawer = !drawer"
          class="mr-4"
        ></v-app-bar-nav-icon>
        <template v-if="$vuetify.display.mdAndUp">
          <v-spacer></v-spacer>

          <v-toolbar-items>
            <v-btn v-ripple="{ class: `text-deep-purple-accent-4` }" to="/home"
              >Acasă</v-btn
            >
            <v-btn
              v-ripple="{ class: `text-deep-purple-accent-4` }"
              to="/studio"
              >Studio</v-btn
            >
            <v-btn
              v-ripple="{ class: `text-deep-purple-accent-4` }"
              to="/listen-down"
              >Listen & Download</v-btn
            >
            <v-btn v-ripple="{ class: `text-deep-purple-accent-4` }" to="/store"
              >Magazin</v-btn
            >
            <v-btn
              v-ripple="{ class: `text-deep-purple-accent-4` }"
              to="/contact"
              >Contact</v-btn
            >

            <v-menu transition="slide-y-transition">
              <template v-slot:activator="{ props }">
                <v-btn
                  variant="flat"
                  color="deep-purple"
                  v-bind="props"
                  append-icon="mdi-menu-down"
                  >Hire me</v-btn
                >
              </template>
              <v-list>
                <v-list-item
                  v-for="(option, index) in options"
                  :key="index"
                  :value="index"
                  :href="option.href"
                  :target="option.href"
                  append-icon="mdi-open-in-new"
                >
                  <v-list-item-title>{{ option.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-divider
              class="mx-2 opacity-100"
              light
              inset
              vertical
            ></v-divider>
            <SocialBtn class="d-flex justify-center pa-2" />
            <v-btn
              :ripple="false"
              variant="plain"
              rounded="0"
              icon="mdi-theme-light-dark"
              @click="toggleTheme"
            ></v-btn>
          </v-toolbar-items>
        </template>
      </v-toolbar>
    </v-app-bar>
    <v-navigation-drawer
      v-if="$vuetify.display.mdAndDown"
      v-model="drawer"
      :location="$vuetify.display.mobile ? 'top' : undefined"
      theme="dark"
      floating="auto"
      app
    >
      <v-list :items="items">
        <template v-slot:prepend> </template>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="drawer = false"
          :to="item.link"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group active-color="deep-purple" fluid="true">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Hire me"></v-list-item>
          </template>

          <v-list-item
            v-for="(option, index) in options"
            :key="index"
            :title="option.title"
            :value="index"
            :href="option.href"
            :target="option.href"
            append-icon="mdi-open-in-new"
          ></v-list-item>
        </v-list-group>

        <v-divider thickness="2"></v-divider>

        <v-container class="text-center">
          <v-btn
            :ripple="false"
            variant="plain"
            rounded="0"
            icon="mdi-facebook"
            href="https://www.facebook.com/dan.surlaru.promusic"
            target="_blank"
          ></v-btn>
          <v-btn
            :ripple="false"
            variant="plain"
            rounded="0"
            icon="mdi-instagram"
            href="https://instagram.com/danypromusic"
            target="_blank"
          ></v-btn>
          <v-btn
            :ripple="false"
            variant="plain"
            rounded="0"
            icon="mdi-linkedin"
            href="https://www.linkedin.com/in/dan-surlaru-promusic-418a072a3/"
            target="_blank"
          ></v-btn>
          <v-btn
            :ripple="false"
            variant="plain"
            rounded="0"
            icon="mdi-youtube"
            href="https://www.youtube.com/@dansurlaru/featured"
            target="_blank"
          ></v-btn>
          <v-btn
            :ripple="false"
            variant="plain"
            rounded="0"
            icon="mdi-spotify"
            href="https://open.spotify.com/artist/4viXypcCjfNp3LrDQXdzbf?go=1&sp_cid=e7e7564b5f5e7489b13d62256216a2b7&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=7690dae220434f38"
            target="_blank"
          ></v-btn>
          <v-btn
            :ripple="false"
            variant="plain"
            rounded="0"
            icon="mdi-apple"
            href="https://music.apple.com/md/artist/dan-surlaru/1449898549"
            target="_blank"
          ></v-btn>
          <v-btn
            :ripple="false"
            variant="plain"
            rounded="0"
            icon="mdi-theme-light-dark"
            @click="toggleTheme"
          ></v-btn>
        </v-container>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>
<script>
import { defineComponent } from "vue";
import SocialBtn from "./SocialBtn.vue";
import { useTheme } from "vuetify";
export default defineComponent({
  name: "Navbar",
  components: {
    SocialBtn,
  },
  data: () => ({
    drawer: false,
    group: null,
    model: false,

    options: [
      {
        title: "Românǎ CV",
        href: "https://drive.google.com/file/d/1Hf9YaW3f-6zSHJippUoEbvsAKn-Qjr9q/view?usp=sharing",
      },
      {
        title: "English Resume",
        href: "https://drive.google.com/file/d/1fsn0DG4BKiJFx-7lzNEa6gNpDYMoZsye/view?usp=sharing",
      },
    ],

    items: [
      { title: "Acasă", link: "/home" },
      { title: "Studio", link: "/studio" },
      { title: "Listen & Download", link: "/listen-down" },
      { title: "Magazin", link: "/store" },
      { title: "Contact", link: "/contact" },
    ],
  }),
  setup() {
    const theme = useTheme();

    function toggleTheme() {
      theme.global.name.value = theme.global.current.value.dark
        ? "light"
        : "dark";
    }
    return {
      toggleTheme,
    };
  },
});
</script>
<style lang=""></style>
