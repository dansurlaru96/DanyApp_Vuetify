<template>
  <v-carousel :show-arrows="true">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      cover
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "CarouselImg",
  data() {
    return {
      items: [
        {
          src: "/src/assets/carousel_img/img1.jpg",
        },
        {
          src: "/src/assets/carousel_img/img2.jpg",
        },
        {
          src: "/src/assets/carousel_img/img3.jpg",
        },
        {
          src: "/src/assets/carousel_img/img4.jpg",
        },
        {
          src: "/src/assets/carousel_img/img5.jpg",
        },
        {
          src: "/src/assets/carousel_img/img6.jpg",
        },
        {
          src: "/src/assets/carousel_img/img7.jpg",
        },
      ],
    };
  },
};
</script>
