import axios from "axios";
// import { config } from "../../Config/AxiosConfig";
import { base_url } from "../../Config/BaseUrl";

const getUsers = async () => {
  const response = await axios.get(`${base_url}user/getAllUser`);

  return response.data;
};

const CustomerService = {
  getUsers,
};

export default CustomerService;
