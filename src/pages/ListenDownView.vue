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
      bg-color="deep-orange-accent-4"
      height="64"
    >
      <v-tab value="one" prepend-icon="mdi-music-box-multiple-outline"
        >Playlist music</v-tab
      >
      <v-tab value="two" prepend-icon="mdi-youtube">Playlist YouTube</v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="one">
        <v-container fluid>
          <v-row class="justify-center justify-content-center">
            <v-col cols="40" md="6">
              <v-card class="pa-4">
                <v-img src="../assets/cover_album.jpg" height="500"></v-img>
                <v-card-actions class="justify-center justify-content-center">
                  <v-btn
                    prepend-icon="mdi-arrow-down-bold-circle"
                    color="deep-orange"
                    size="x-large"
                    rounded="lg"
                    variant="elevated"
                    @click="downloadFile"
                    >Download full album</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card>
                <v-card-title class="headline font-weight-bold"
                  >Tracklist</v-card-title
                >
                <v-table density="compact" fixed-header height="584px" hover>
                  <thead>
                    <tr>
                      <th class="text-left">Nume</th>
                      <th class="text-left">Durata</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="track in tracklist" :key="track.tracklist">
                      <td>{{ track.nume }}</td>
                      <td>{{ track.durata }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-tabs-window-item>

      <v-tabs-window-item value="two">
        <v-container fluid>
          <v-row class="justify-center justify-content-center">
            <v-col cols="50" md="6">
              <v-card class="">
                <v-card-title class="headline font-weight-bold"
                  >Playlist muzicǎ de pe YouTube</v-card-title
                >
                <v-card-item>
                  <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube-nocookie.com/embed/videoseries?si=ugY0WLO1aAeHno7q&amp;list=PL1fXZqEGhpwTaJiM2oyrsBU4Pe1Qmymef"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe
                ></v-card-item>
              </v-card>
            </v-col>
            <v-col cols="50" md="6">
              <v-card>
                <v-card-title class="headline font-weight-bold"
                  >Playlist cu negative profesionale</v-card-title
                >
                <v-card-item>
                  <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube-nocookie.com/embed/videoseries?si=eHDZLyMPgWAivGGZ&amp;list=PL1fXZqEGhpwS22cUodfoW0USoPqnGr148"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe
                ></v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
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
      link.href = "https://disk.yandex.md/d/U1fqvDv7-C8E6g";
      link.download = "album_single-FULL.zip";
      link.click();
    },
  },
};
</script>
<style lang=""></style>
