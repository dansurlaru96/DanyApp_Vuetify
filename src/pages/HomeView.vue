<template lang="">
  <div>
    <v-parallax
      src="/assets/bg_parllax.jpg"
      height="770"
      jumbotron
      class="text-white"
    >
      <div class="d-flex flex-column flex-wrap align-center pa-8">
        <div>
          <v-img
            width="230"
            aspect-ratio="1/1"
            class="rounded-circle elevation-23 align-center mb-4"
            src="/assets/avatar.jpg"
          ></v-img>
        </div>
        <div>
          <h1
            class="text-h3 font-weight-bold text-center"
            style="
              background: linear-gradient(
                to right,
                #4535c1,
                #478ccf,
                #36c2ce,
                #77e4c8,
                #b9f2c7
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
        <div class="d-flex flex-wrap justify-center ga-2 ma-4 opacity-100">
          <v-chip
            size="large"
            color="#e14f1c"
            variant="elevated"
            prepend-icon="mdi-language-html5"
          >
            HTML
          </v-chip>
          <v-chip
            size="large"
            color="#2d52e5"
            variant="elevated"
            prepend-icon="mdi-language-css3"
          >
            CSS
          </v-chip>
          <v-chip
            size="large"
            color="#F7E025"
            prepend-icon="mdi-language-javascript"
            variant="elevated"
          >
            JavaScript
          </v-chip>
          <v-chip
            size="large"
            color="rgb(71,186,135)"
            variant="elevated"
            prepend-icon="mdi-vuejs"
          >
            Vue
          </v-chip>
          <v-chip
            size="large"
            color="rgb(55,124,200)"
            prepend-icon="mdi-language-typescript"
            variant="elevated"
          >
            TypeScript
          </v-chip>
          <v-chip
            size="large"
            color="rgb(72,170,178)"
            prepend-icon="mdi-tailwind"
            variant="elevated"
          >
            Tailwind
          </v-chip>
          <v-chip
            size="large"
            color="rgb(140,25,252)"
            variant="elevated"
            prepend-icon="mdi-bootstrap"
          >
            Bootstrap
          </v-chip>
        </div>

        <v-dialog max-width="1000">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn
              v-bind="activatorProps"
              color="primary"
              size="large"
              rounded="xl"
              prepend-icon="mdi-file-document"
              text="Vizualizează CV-ul meu"
              variant="flat"
              class="ma-4 text-center font-weight-bold"
            ></v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <v-card title="CV-ul meu">
              <iframe
                width="100%"
                height="700"
                :src="'/assets/CV Daniel Surlaru_ROM.pdf'"
              ></iframe>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  text="Descarcă CV"
                  color="primary"
                  variant="flat"
                  size="large"
                  prepend-icon="mdi-download"
                  href="/assets/CV Daniel Surlaru_ROM.pdf"
                  download
                ></v-btn>

                <v-btn
                  text="Închide"
                  size="large"
                  @click="isActive.value = false"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </div>
    </v-parallax>

    <div>
      <h1 class="ma-3 text-center">Cum se naste o melodie?</h1>

      <v-divider dark thickness="2"></v-divider>
      <div
        class="d-flex flex-wrap justify-space-evenly justify-center align-center align-self-center ma-1"
      >
        <CardInfo
          image="/assets/inspiration.jpg"
          subject="Inspirație"
          text="Totul începe cu o idee sau o emoție pe care vrei să o exprimi. Inspirația poate veni din experiențe personale, natură, alte melodii sau chiar dintr-o simplă frază."
        ></CardInfo>

        <CardInfo
          image="/assets/composing.webp"
          subject="Compoziția"
          text="Aici începi să pui ideile pe hârtie sau într-un software de producție muzicală. Alegi acordurile, melodia principală și structura piesei (versuri, refren, punte etc.)."
        ></CardInfo>

        <CardInfo
          image="/assets/arranging.jpg"
          subject="Aranjamentul"
          text="După ce ai melodia de bază, începi să adaugi alte elemente, cum ar fi armonii, ritmuri și instrumente suplimentare. Acest pas ajută la crearea unei texturi mai bogate și mai complexe."
        ></CardInfo>

        <CardInfo
          image="/assets/recording.jpg"
          subject="Înregistrarea"
          text="Odată ce aranjamentul este finalizat, începi să înregistrezi fiecare parte a melodiei. Acest lucru poate implica înregistrarea vocalelor, instrumentelor și a altor sunete."
        ></CardInfo>

        <CardInfo
          image="/assets/mix-master.webp"
          subject="Mixajul"
          text="După înregistrare, piesa trece prin procesul de mixaj, unde toate elementele sunt echilibrate și ajustate pentru a suna bine împreună. Masterizarea este etapa finală, unde piesa este pregătită pentru distribuție, asigurându-se că sună bine pe toate dispozitivele și platformele."
        ></CardInfo>
      </div>
    </div>
    <CarouselImg />
  </div>
</template>
<script>
import CarouselImg from "../components/CarouselImg.vue";
import CardInfo from "../components/CardInfo.vue";

export default {
  name: "HomeView",
  components: {
    CarouselImg,
    CardInfo,
  },
  data() {
    return {
      pdfSource: "/assets/CV Daniel Surlaru_ROM.pdf",
    };
  },

  methods: {
    downloadPdf() {
      window.open(this.pdfSource, "_blank");
    },
  },
};
</script>
<style lang=""></style>
