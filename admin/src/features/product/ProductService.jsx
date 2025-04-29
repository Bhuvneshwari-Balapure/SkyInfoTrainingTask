import axios from "axios";
import { config } from "../../Config/AxiosConfig";
import { base_url } from "../../Config/BaseUrl";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/get`);
  console.log("response.data from product service ", response.data);

  return response.data;
};
const createProduct = async (product) => {
  const response = await axios.post(`${base_url}product/`, product, config);

  return response.data;
};

const ProductService = {
  getProducts,
  createProduct,
};

export default ProductService;
