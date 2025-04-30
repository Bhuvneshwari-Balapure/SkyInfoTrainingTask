import axios from "axios";
import { config } from "../../Config/AxiosConfig";
import { base_url } from "../../Config/BaseUrl";

const uploadImg = async (data) => {
  const response = await axios.post(`${base_url}product/upload`, data, config);
  console.log("response.data from upload service ", response.data);
  return response.data;
};
const deleteImg = async (id) => {
  const response = await axios.delete(
    `${base_url}upload/delete-img/${id}`,

    config
  );
  return response.data;
};

const UploadService = {
  uploadImg,
  deleteImg,
};

export default UploadService;
