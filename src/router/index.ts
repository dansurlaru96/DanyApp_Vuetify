import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/pages/HomeView.vue";
import ContactView from "@/pages/ContactView.vue";
import StoreView from "@/pages/StoreView.vue";
import ListenDownView from "@/pages/ListenDownView.vue";
import StudioView from "@/pages/StudioView.vue";
import ProductDetail from "@/pages/ProductDetail.vue";
import CartView from "@/pages/CartView.vue";

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
    path: "/product-detail/:id",
    name: "ProductDetail",
    component: ProductDetail,
  },
  {
    path: "/cart",
    component: CartView,
    name: "Cart",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
