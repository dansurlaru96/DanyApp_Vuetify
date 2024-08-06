<template>
  <div class="bg-grey-darken-3 text-center d-flex flex-column">
    <div class="d-flex flex-wrap justify-center ma-4">
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
    </div>

    <div class="d-flex flex-wrap justify-center ga-4 mb-4">
      <v-btn variant="text" to="/home">Acasă</v-btn>
      <v-btn variant="text" to="/studio">Studio</v-btn>
      <v-btn variant="text" to="/listen-down">Listen & Download</v-btn>
      <v-btn variant="text" to="/store">Magazin</v-btn>
      <v-btn variant="text" to="/contact">Contact</v-btn>
      <v-divider color="grey" class="border-opacity-75 ma-4 ga-4"></v-divider>
    </div>

    <div class="pb-4">
      © {{ new Date().getFullYear() }}
      <strong> Dan Surlaru. Toate drepturile sunt rezervate.</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterLayout",
};
</script>
