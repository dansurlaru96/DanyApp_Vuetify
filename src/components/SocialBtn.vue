<template lang="">
    <div>
        <v-btn  icon="mdi-facebook" href="https://www.facebook.com/dan.surlaru.promusic"
        target="_blank"></v-btn>
      <v-btn  icon="mdi-instagram" href="https://instagram.com/danypromusic" target="_blank"></v-btn>
      <v-btn  icon="mdi-linkedin" href="https://www.linkedin.com/in/dan-surlaru-promusic-418a072a3/"
        target="_blank"></v-btn>
      <v-btn  icon="mdi-youtube" href="https://www.youtube.com/@dansurlaru/featured"
        target="_blank"></v-btn>
      <v-btn  icon="mdi-spotify"
        href="https://open.spotify.com/artist/4viXypcCjfNp3LrDQXdzbf?go=1&sp_cid=e7e7564b5f5e7489b13d62256216a2b7&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=7690dae220434f38"
        target="_blank"></v-btn>
      <v-btn  icon="mdi-apple" href="https://music.apple.com/md/artist/dan-surlaru/1449898549"
        target="_blank"></v-btn>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: "SocialBtn",
    props: {
        icon: {
            type: String,
            required: true
        },
        href: {
            type: String,
            required: true
        },
        target: {
            type: String,
            required: true
        }
    },
});
</script>
<style lang="">

</style>