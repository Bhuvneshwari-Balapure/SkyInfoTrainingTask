import axios from "axios";
import { config } from "../../Config/AxiosConfig";
import { base_url } from "../../Config/BaseUrl";

const getBlogs = async () => {
  const response = await axios.get(`${base_url}blog/get-all-blog`);

  return response.data;
};
const createBlog = async (blog) => {
  const response = await axios.post(`${base_url}blog/create`, blog, config);
  console.log("Create Blog response", response.data);
  return response.data;
};
const updateBlog = async (blog) => {
  const response = await axios.put(
    `${base_url}blog/${blog.id}`,
    {
      title: blog.blogData.title,
      description: blog.blogData.description,
      category: blog.blogData.category,
      images: blog.blogData.images,
    },
    config
  );

  return response.data;
};
const getBlog = async (id) => {
  const response = await axios.get(`${base_url}blog/${id}`, config);

  return response.data;
};

const deleteBlog = async (id) => {
  const response = await axios.delete(`${base_url}blog/${id}`, config);

  return response.data;
};
const BlogService = {
  getBlogs,
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
};

export default BlogService;
