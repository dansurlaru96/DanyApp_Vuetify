<template>
  <div>
    <Navbar />
    <router-view> </router-view>
    <scrollToTop />
    <FooterLayout />
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import Navbar from "./components/navbar.vue";
import scrollToTop from "./components/scrollToTop.vue";
import FooterLayout from "./components/FooterLayout.vue";
export default defineComponent({
  name: "App",
  components: {
    Navbar,
    scrollToTop,
    FooterLayout,
  },
  setup() {
    onMounted(() => { });
  },
});
</script>
<style lang="scss"></style>
