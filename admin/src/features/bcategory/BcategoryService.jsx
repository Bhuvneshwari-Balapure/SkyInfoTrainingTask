import axios from "axios";
import { config } from "../../Config/AxiosConfig";
import { base_url } from "../../Config/BaseUrl";

const getBlogCategories = async () => {
  const response = await axios.get(`${base_url}blogCat/get-blogcategory`);
  console.log("Blog category List", response.data);
  return response.data;
};
const createBlogCategory = async (bcat) => {
  const response = await axios.post(`${base_url}blogCat/`, bcat, config);

  return response.data;
};
const updateBlogCategory = async (blogCat) => {
  const response = await axios.put(
    `${base_url}blogcategory/${blogCat.id}`,
    { title: blogCat.blogCatData.title },
    config
  );

  return response.data;
};
const getBlogCategory = async (id) => {
  const response = await axios.get(`${base_url}blogCat/${id}`, config);

  return response.data;
};

const deleteBlogCategory = async (id) => {
  const response = await axios.delete(`${base_url}blogCat/${id}`, config);

  return response.data;
};
const BCategoryService = {
  getBlogCategories,
  createBlogCategory,
  deleteBlogCategory,
  getBlogCategory,

  updateBlogCategory,
};

export default BCategoryService;
