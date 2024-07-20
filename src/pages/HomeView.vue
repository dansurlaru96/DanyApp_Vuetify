<template lang="">
  <div>
    <v-parallax
      src="@/assets/bg_parallax.jpg"
      height="690"
      jumbotron
      class="text-white"
    >
      <div class="d-flex flex-column flex-wrap align-center pa-8">
        <div>
          <v-img
            width="230"
            aspect-ratio="1/1"
            class="rounded-circle elevation-23 align-center mb-4"
            src="../assets/avatar_hero.jpg"
          ></v-img>
        </div>
        <div>
          <h1
            class="text-h3 font-weight-bold text-center"
            style="
              background: linear-gradient(
                to right,
                #00a9ff,
                #89cff3,
                #a0e9ff,
                #cdf5fd,
                #f0f9ff
              );
              -webkit-text-fill-color: transparent;
              -webkit-background-clip: text;
            "
          >
            DAN SURLARU
          </h1>
          <v-divider
            :thickness="2"
            class="border-opacity-75 ma-4"
            color="white"
          ></v-divider>
          <h2 class="font-weight-light text-center text-wrap">
            MUSICIAN - FRONT-END WEB DEVELOPER
          </h2>
        </div>
        <div class="d-flex flex-wrap justify-center ga-2 ma-4">
          <v-chip size="large" prepend-icon="mdi-language-html5"> HTML </v-chip>
          <v-chip size="large" prepend-icon="mdi-language-css3"> CSS </v-chip>
          <v-chip size="large" prepend-icon="mdi-language-javascript">
            JavaScript
          </v-chip>
          <v-chip size="large" prepend-icon="mdi-vuejs"> Vue </v-chip>
          <v-chip size="large" prepend-icon="mdi-language-typescript">
            TypeScript
          </v-chip>
          <v-chip size="large" prepend-icon="mdi-tailwind"> Tailwind </v-chip>
          <v-chip size="large" prepend-icon="mdi-bootstrap"> Bootstrap </v-chip>
        </div>
      </div>
    </v-parallax>

    <div>
      <h1 class="ma-7 text-center">Cum se naste o melodie?</h1>

      <v-divider dark thickness="2"></v-divider>

      <div
        class="d-flex flex-wrap justify-space-between justify-center align-center align-self-center pa-3"
      >
        <div>
          <v-card class="mx-auto my-8" elevation="16" max-width="344">
            <v-img cover src="../assets/inspiration.jpg"></v-img>
            <v-card-item>
              <v-card-title> Inspirație </v-card-title>
            </v-card-item>

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </v-card-text>
          </v-card>
        </div>

        <div>
          <v-card class="mx-auto my-8" elevation="16" max-width="344">
            <v-img cover src="../assets/composing.webp"></v-img>
            <v-card-item>
              <v-card-title> Compoziția </v-card-title>
            </v-card-item>

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </v-card-text>
          </v-card>
        </div>

        <div>
          <v-card class="mx-auto my-8" elevation="16" max-width="344">
            <v-img cover src="../assets/arranging.jpg"></v-img>
            <v-card-item>
              <v-card-title> Aranjamentul </v-card-title>
            </v-card-item>

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </v-card-text>
          </v-card>
        </div>

        <div>
          <v-card class="mx-auto my-8" elevation="16" max-width="344">
            <v-img cover src="../assets/recording.jpg"></v-img>
            <v-card-item>
              <v-card-title> Înregistrarea </v-card-title>
            </v-card-item>

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </v-card-text>
          </v-card>
        </div>

        <div>
          <v-card class="mx-auto my-8" elevation="16" max-width="344">
            <v-img cover src="../assets/mix-master.webp"></v-img>
            <v-card-item>
              <v-card-title> Mixajul </v-card-title>
            </v-card-item>

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </v-card-text>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeView",
};
</script>
<style lang=""></style>
