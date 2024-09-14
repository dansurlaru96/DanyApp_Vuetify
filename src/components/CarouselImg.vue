<template>
  <v-carousel
    show-arrows="hover"
    cycle
    continuous
    theme="white"
    touch="true"
    progress="blue"
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      cover
      eager="true"
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
          src: "/assets/carousel_img/img1.jpg",
        },
        {
          src: "/assets/carousel_img/img2.jpg",
        },
        {
          src: "/assets/carousel_img/img3.jpg",
        },
        {
          src: "/assets/carousel_img/img4.jpg",
        },
        {
          src: "/assets/carousel_img/img5.jpg",
        },
        {
          src: "/assets/carousel_img/img6.jpg",
        },
        {
          src: "/assets/carousel_img/img7.jpg",
        },
      ],
    };
  },
};
</script>
