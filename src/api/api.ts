import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/", // url de baza pentru api
  headers: {
    "Content-Type": "application/json",
  },
});

const api = {
  // GET request pentru a prelua toate produsele
  getProducts() {
    return axiosInstance.get("/products");
  },

  // GET request pentru a prelua un singur produs
  getProduct(id: number) {
    return axiosInstance.get(`/products?=${id}`);
  },

  // POST request pentru a crea un produs nou
  addProduct(produs: object) {
    return axiosInstance.post("/products", produs);
  },

  // PUT request pentru a actualiza total un produs existent
  updateProduct(id: number, produs: object) {
    return axiosInstance.put(`/produse/${id}`, produs);
  },

  // PATCH request pentru a actualiza parțial un produs
  patchProduct(id: number, produs: object) {
    return axiosInstance.patch(`/produse/${id}`, produs);
  },

  // DELETE request pentru a șterge produsul
  deleteProduct(id: number) {
    return axiosInstance.delete(`/produse/${id}`);
  },
};

export default api;
