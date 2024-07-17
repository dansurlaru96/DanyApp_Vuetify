import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/products",
  headers: {
    "Content-Type": "application/json",
  },
});

const api = {
  getProducts() {
    return axiosInstance.get("/products");
  },
  getProduct(id: number) {
    return axiosInstance.get(`/products/${id}`);
  },
  addProduct(product: object) {
    return axiosInstance.post("/products", product);
  },
  updateProduct(id: number, product: object) {
    return axiosInstance.put(`/products/${id}`, product);
  },
  patchProduct(id: number, product: object) {
    return axiosInstance.patch(`/products/${id}`, product);
  },
  deleteProduct(id: number) {
    return axiosInstance.delete(`/products/${id}`);
  },
};

export default api;
