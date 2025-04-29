import axios from "axios";
import { config } from "../../Config/AxiosConfig";
import { base_url } from "../../Config/BaseUrl";
const login = async (user) => {
  const response = await axios.post(`${base_url}user/admin-login`, user, {
    withCredentials: true,
  });
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
const getOrders = async () => {
  const response = await axios.get(`${base_url}user/get-orders`, config);
  console.log("Get orders from authservice : ", response.data);
  return response.data;
};
const getOrder = async (id) => {
  const response = await axios.post(
    `${base_url}user/getorderbyuser/${id}`,
    "",
    config
  );

  return response.data;
};

const AuthService = {
  login,
  getOrders,
  getOrder,
};

export default AuthService;
