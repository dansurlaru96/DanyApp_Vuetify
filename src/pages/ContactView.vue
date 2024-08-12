<template lang="">
  <v-parallax src="../assets/cover-contact.jpg" height="200">
    <div class="text-center text-white ma-15">
      <h1 class="text-h3">Contact</h1>
    </div>
  </v-parallax>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="30" md="6">
          <v-card>
            <v-card-title class="headline font-weight-bold"
              >Informații de contact</v-card-title
            >
            <v-card-text>
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title
                      ><v-icon icon="mdi-cellphone-basic"></v-icon
                      >Telefon</v-list-item-title
                    >
                    <v-list-item-subtitle
                      ><a href="tel:+37379660024"
                        >+373 79 66 00 24</a
                      ></v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title
                      ><v-icon icon="mdi-at"></v-icon> E-mail</v-list-item-title
                    >
                    <v-list-item-subtitle>
                      <a variant="text" href="mailto:surlaru@bk.ru"
                        >surlaru@bk.ru</a
                      >
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title
                      ><v-icon icon="mdi-map-marker"></v-icon
                      >Adresa</v-list-item-title
                    >
                    <v-list-item-subtitle class="text-wrap"
                      >Republica Moldova oraşul Drochia, satul Chetrosu strada
                      Aurel Coțofanǎ MD-5213
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title class="headline">Formular de contact</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field label="Nume" required></v-text-field>
                <v-text-field label="E-mail" required></v-text-field>
                <v-textarea label="Mesajul tǎu" required></v-textarea>
                <v-btn color="deep-orange">Trimite</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21333.13742157071!2d27.90304172292408!3d48.05924623689228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ccb08a4b9e3dc9%3A0xc465bee9ef8f53e2!2sChetrosu%2C%20Moldova!5e0!3m2!1sro!2s!4v1723298433641!5m2!1sro!2s"
    width="100%"
    height="450"
    style="border: 0"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
</template>
<script>
export default {};
</script>
<style lang=""></style>
