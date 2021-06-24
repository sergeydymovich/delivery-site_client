import axios from "axios";

const API_BASE = "http://localhost:5000";
axios.defaults.baseURL = API_BASE;

export const fetchGetCategories = async () => {
  return await axios.get(`/categories`);
};

export const fetchGetProducts = async ({ category }) => {
  return await axios.get(`/products?category=${category}`)
};




