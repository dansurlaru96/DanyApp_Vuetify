import { defineStore } from "pinia";

interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
}

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[],
  }),
  getters: {
    cartItemCount: (state): number => {
      return state.cart.reduce(
        (total: number, item: CartItem) => total + item.quantity,
        0
      );
    },
    cartTotalPrice: (state): number => {
      return state.cart.reduce(
        (total: number, item: CartItem) => total + item.price * item.quantity,
        0
      );
    },
  },
  actions: {
    addToCart(product: Product) {
      const produsExista = this.cart.find(
        (item: CartItem) => item.id === product.id
      );

      if (produsExista) {
        produsExista.quantity += 1;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
      this.saveCart();
    },
    increaseQuantity(productId: number) {
      const produsExista = this.cart.find(
        (item: CartItem) => item.id === productId
      );

      if (produsExista) {
        produsExista.quantity += 1;
      }
      this.saveCart();
    },
    decreaseQuantity(productId: number) {
      const produsExista = this.cart.find(
        (item: CartItem) => item.id === productId
      );

      if (produsExista) {
        produsExista.quantity -= 1;
        if (produsExista.quantity === 0) {
          this.removeFromCart(productId);
        }
      }
      this.saveCart();
    },
    removeFromCart(productId: number) {
      this.cart = this.cart.filter((item: CartItem) => item.id !== productId);
      this.saveCart();
    },
    clearCart() {
      this.cart = [];
      this.saveCart();
    },

    saveCart() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    loadCart() {
      const cartData = localStorage.getItem("cart");
      if (cartData) {
        this.cart = JSON.parse(cartData) as CartItem[];
      }
    },
  },
});

export function useCartStoreHook() {
  return useCartStore();
}
