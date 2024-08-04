<template lang="">
  <v-parallax src="../assets/parallax-header.jpeg" height="300">
    <div class="text-center text-white ma-15">
      <h1 class="text-h3">Listen & Download</h1>
      <p class="text-h5">
        Ascultă și descarcă muzica de autor compusă din repertoriul meu.
      </p>
    </div>
  </v-parallax>
  <div>
    <v-tabs
      v-model="tab"
      align-tabs="center"
      color="deep-orange-accent-4"
      height="64"
    >
      <v-tab value="one" prepend-icon="mdi-music-box-multiple-outline"
        >Playlist music</v-tab
      >
      <v-tab value="two" prepend-icon="mdi-youtube">Playlist YouTube</v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="one">
        <v-banner class="ma-5" width="800" lines="two" text="" :stacked="false">
        </v-banner>

        <v-alert
          icon="mdi-alert"
          class="ma-8"
          v-model="alert"
          border="start"
          color="warning"
          variant="tonal"
          elevation="2"
          dark
          width="800"
          outlined
        >
          Imi cer scuze. Aceasta sectiune este in deplina desfasurare a
          aspectului stilistic. Din cauza unor bug-uri ale unei biblioteci de
          stiluri. P.S Mai am de lucru la aceasta sectiune pentru a o finaliza
          si a o face functionala. din perspectiva elementelor de design si
          functionalitate.
        </v-alert>

        <div class="justify-center justify-space-around ma-5 pa-5">
          <!-- <v-img src="../assets/cover_album.jpg" height="500"></v-img> -->

          <div class="justify-center justify-space-around ma-5 pa-5">
            <v-btn
              prepend-icon="mdi-arrow-down-bold-circle"
              color="deep-orange"
              dark
              size="x-large"
              @click="downloadFile"
              >Download full album</v-btn
            >
          </div>
          <v-table
            theme="dark"
            hover
            density="compact"
            height="300px"
            fixed-header
          >
            <thead>
              <tr>
                <th class="text-left">Nume</th>
                <th class="text-left">Durata</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="track in tracklist" :key="track.nume">
                <td>{{ track.nume }}</td>
                <td>{{ track.durata }}</td>
              </tr>
            </tbody>
          </v-table>
        </div>
      </v-tabs-window-item>

      <v-tabs-window-item value="two">
        >
        <div
          class="d-flex flex-column justify-center justify-space-around ma-5"
        >
          <h1 class="">Playlist muzica</h1>
          <iframe
            aspect-ratio="16/9"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JOIXYTK1l3U?list=PL1fXZqEGhpwTaJiM2oyrsBU4Pe1Qmymef"
            title="Dan Surlaru - Vino isuse (lyric video)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <v-divider class="ma-10"></v-divider>

          <h1 class="">Playlist negative profesionale</h1>

          <iframe
            aspect-ratio="16/9"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?si=j_GPUJS5ukZjh6ZE&amp;list=PL1fXZqEGhpwS22cUodfoW0USoPqnGr148"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>
<script>
export default {
  data: () => ({
    tab: null,

    tracklist: [
      { nume: "Ai fost mereu de partea mea", durata: "4:10" },
      { nume: "Astept printul meu", durata: "4:04" },
      { nume: "Cand inima era zdrobita", durata: "4:20" },
      { nume: "Dragostea bucuria pacea", durata: "4:33" },
      { nume: "Fa-ti timp", durata: "5:38" },
      { nume: "Iti multumesc din inima", durata: "3:30" },
      { nume: "La tine vin Isuse", durata: "4:37" },
      { nume: "Ma-ntorc cu cainta", durata: "5:16" },
      { nume: "Mă-ncred în Tine, Domnul meu divin", durata: "4:13" },
      { nume: "Nu te opri", durata: "4:18" },
      { nume: "Stau si privesc ochii adanci", durata: "5:07" },
      { nume: "Zilele mele", durata: "5:57" },
      { nume: "Zilele se duc si anii", durata: "4:15" },
      { nume: "Doar Iubirea", durata: "4:37" },
      { nume: "Vino Iisuse", durata: "4:02" },
      { nume: "Mie dor de tine Doamne", durata: "3:21" },
      { nume: "Prieten credincios", durata: "4:24" },
    ],
  }),
  methods: {
    downloadFile() {
      const link = document.createElement("a");
      link.href =
        "https://downloader.disk.yandex.ru/zip/87af9907038bb3487cd7fd6f615d921f18a634776f7aacc2887ac6f2bfc58009/66af8f1a/WVdpVnBoVnpRcklYZDNobjkxaHVXREI1WTdNUTZGUU8waFB5TlNNMmNyT2xuMllEVm9hc0puNjc5VW00ZEhSRXEvSjZicG1SeU9Kb25UM1ZvWG5EYWc9PQ==?uid=0&filename=DAN%20SURLARU.zip&disposition=attachment&hash=YWiVphVzQrIXd3hn91huWDB5Y7MQ6FQO0hPyNSM2crOln2YDVoasJn679Um4dHREq/J6bpmRyOJonT3VoXnDag%3D%3D&limit=0&owner_uid=220657180&tknv=v2";
      link.download = "album_single-FULL.zip";
      link.click();
    },
  },
};
</script>
<style lang=""></style>
