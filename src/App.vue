<template>
  <div>
    <Navbar />
    <router-view> </router-view>
    <scrollToTop />
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import Navbar from "./components/navbar.vue";
import scrollToTop from "./components/scrollToTop.vue";
export default defineComponent({
  name: "App",
  components: {
    Navbar,
    scrollToTop,
  },
  setup() {
    onMounted(() => {});
  },
});
</script>
<style lang="scss"></style>
