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
        <div class="justify-center justify-space-around ma-5 pa-5">
          <!-- <v-img src="../assets/cover_album.jpg" height="500"></v-img> -->

          <v-table theme="dark" hover>
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

      <v-tabs-window-item value="two"> Two </v-tabs-window-item>
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
};
</script>
<style lang=""></style>
