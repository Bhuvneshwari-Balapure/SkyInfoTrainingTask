// import axios from "axios";
// import { config } from "../../Config/AxiosConfig";
// import { base_url } from "../../Config/BaseUrl";
// const getBrands = async () => {
//   const response = await axios.get(`${base_url}brand/get-brand`);

//   console.log("response.data from brand service ", response.data);
//   return response.data;
// };

// const createBrand = async (brand) => {
//   const response = await axios.post(`${base_url}brand/`, brand, config);

//   return response.data;
// };
// const updateBrand = async (brand) => {
//   const response = await axios.put(
//     `${base_url}brand/${brand.id}`,
//     { title: brand.brandData.title },
//     config
//   );

//   return response.data;
// };
// const getBrand = async (id) => {
//   const response = await axios.get(`${base_url}brand/${id}`, config);

//   return response.data;
// };

// const deleteBrand = async (id) => {
//   const response = await axios.delete(`${base_url}brand/${id}`, config);

//   return response.data;
// };

// const BrandService = {
//   getBrands,
//   createBrand,
//   getBrand,
//   updateBrand,
//   deleteBrand,
// };

// export default BrandService;

import axios from "axios";
import { config } from "../../Config/AxiosConfig";
import { base_url } from "../../Config/BaseUrl";

// Get all brands
const getBrands = async () => {
  const response = await axios.get(`${base_url}brand/get-brand`, config);
  return response.data;
};

// Create a brand

const createBrand = async (brandData) => {
  try {
    const response = await axios.post(
      `${base_url}brand/create`,
      brandData,
      config
    );
    console.log("Brand data from brand service:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating brand:", error);
    // Return a serializable error message
    return { error: error.response?.data?.message || "Server Error" };
  }
};

// Update a brand
const updateBrand = async (brand) => {
  const response = await axios.put(
    `${base_url}brand/${brand.id}`,
    { title: brand.brandData.title },
    config
  );
  return response.data;
};

// Get a single brand
const getBrand = async (id) => {
  const response = await axios.get(`${base_url}brand/${id}`, config);
  return response.data;
};

// Delete a brand
const deleteBrand = async (id) => {
  const response = await axios.delete(`${base_url}brand/${id}`, config);
  return response.data;
};

// Export all services
const BrandService = {
  getBrands,
  createBrand,
  updateBrand,
  getBrand,
  deleteBrand,
};

export default BrandService;
