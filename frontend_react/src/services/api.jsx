import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

export const getProducts = () => axios.get(`${API_BASE_URL}/produits`);
export const getCategories = () => axios.get(`${API_BASE_URL}/categories`);

export const createProduct = (data) => axios.post(`${API_BASE_URL}/produits`, data);
export const updateProduct = (id, data) => axios.patch(`${API_BASE_URL}/produits/${id}`, data);
export const deleteProduct = (id) => axios.delete(`${API_BASE_URL}/produits/${id}`);

export const createCategory = (data) => axios.post(`${API_BASE_URL}/categories`, data);
export const updateCategory = (id, data) => axios.patch(`${API_BASE_URL}/categories/${id}`, data);
export const deleteCategory = (id) => axios.delete(`${API_BASE_URL}/categories/${id}`);