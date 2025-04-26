import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

// Fetch all blog categories
const getBlogCategories = async () => {
  const response = await axios.get(`${base_url}blogcategory/`);
  return response.data;
};

// Create a new blog category
const createBlogCategory = async (bcat) => {
  const response = await axios.post(`${base_url}blogcategory/`, bcat, config);
  return response.data;
};

// Update a blog category by ID
const updateBlogCategory = async (blogCat) => {
  const response = await axios.put(
    `${base_url}blogcategory/${blogCat.id}`,
    { title: blogCat.blogCatData.title },
    config
  );
  return response.data;
};

// Get a single blog category by ID
const getBlogCategory = async (id) => {
  const response = await axios.get(`${base_url}blogcategory/${id}`, config);
  return response.data;
};

// Delete a blog category by ID
const deleteBlogCategory = async (id) => {
  const response = await axios.delete(`${base_url}blogcategory/${id}`, config);
  return response.data;
};

// Exported service object (no duplicate keys)
const BCategoryService = {
  getBlogCategories,
  createBlogCategory,
  updateBlogCategory,
  getBlogCategory,
  deleteBlogCategory,
};

export default BCategoryService;
