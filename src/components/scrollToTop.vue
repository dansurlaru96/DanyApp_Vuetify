<template>
  <div>
    <v-expand-transition mode="out-in">
      <v-btn
        icon="mdi-arrow-up"
        v-if="showButton"
        @click="scrollToTop"
        class="scroll-to-top"
        color="purple"
        size="x-large"
        rounded="circle"
        elevation="8"
      >
      </v-btn>
    </v-expand-transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showButton: false,
    };
  },
  methods: {
    handleScroll() {
      this.showButton = window.scrollY > 200;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>
