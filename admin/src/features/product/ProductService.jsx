import axios from "axios";
import { config } from "../../Config/AxiosConfig";
import { base_url } from "../../Config/BaseUrl";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/get`);
  console.log("response.data from product service ", response.data);

  return response.data;
};
const createProduct = async (product) => {
  const response = await axios.post(
    `${base_url}product/createProduct`,
    product,
    config
  );
  console.log("Products from product service ", response.data);
  return response.data;
};
// Example: PcategoryService.jsx
const getProductCategory = async () => {
  try {
    const response = await axios.get("/api/category"); // Check your actual API route
    return response.data;
  } catch (error) {
    console.error("Failed to fetch product categories", error);
    return []; // Return an empty array to avoid breaking the frontend
  }
};

const ProductService = {
  getProducts,
  createProduct,
  getProductCategory,
};

export default ProductService;
