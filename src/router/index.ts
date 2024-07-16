import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/pages/HomeView.vue";
import AboutView from "@/pages/AboutView.vue";
import ContactView from "@/pages/ContactView.vue";
import StoreView from "@/pages/StoreView.vue";
import ArtistView from "@/pages/ArtistView.vue";
import DiscografieView from "@/pages/DiscografieView.vue";
import ListenDownView from "@/pages/ListenDownView.vue";
import StudioView from "@/pages/StudioView.vue";
import ProductDetail from "@/pages/ProductDetail.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Acasa",
    component: HomeView,
  },
  {
    path: "/about",
    name: "Despre",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/store",
    name: "Magazin",
    component: StoreView,
  },
  {
    path: "/artist",
    name: "Interpreti",
    component: ArtistView,
  },
  {
    path: "/discografie",
    name: "Discografie",
    component: DiscografieView,
  },
  {
    path: "/listen-down",
    name: "Asculta si Descarca",
    component: ListenDownView,
  },
  {
    path: "/studio",
    name: "Studio",
    component: StudioView,
  },
  {
    path: "/product/:id",
    name: "ProductDetail",
    component: ProductDetail,
  },
  {
    path: "/product-detail/:id",
    name: "ProductDetail",
    component: ProductDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
