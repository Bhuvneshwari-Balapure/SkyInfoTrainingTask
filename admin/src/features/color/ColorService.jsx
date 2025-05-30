import axios from "axios";
import { config } from "../../Config/AxiosConfig";
import { base_url } from "../../Config/BaseUrl";

const getColors = async () => {
  const response = await axios.get(`${base_url}color/get-color`);
  console.log("Color List", response.data);
  return response.data;
};
const createColor = async (color) => {
  const response = await axios.post(`${base_url}color/create`, color, config);
  console.log("Create color :  ", response.data);

  return response.data;
};

const updateColor = async (color) => {
  const response = await axios.put(
    `${base_url}color/${color.id}`,
    { title: color.colorData.title },
    config
  );

  return response.data;
};
const getColor = async (id) => {
  const response = await axios.get(`${base_url}color/${id}`, config);

  return response.data;
};

const deleteColor = async (id) => {
  const response = await axios.delete(`${base_url}color/${id}`, config);

  return response.data;
};
const ColorService = {
  getColors,
  createColor,
  updateColor,
  getColor,
  deleteColor,
};

export default ColorService;
