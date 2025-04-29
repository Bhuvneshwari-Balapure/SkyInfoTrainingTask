import axios from "axios";
import { config } from "../../Config/AxiosConfig";
import { base_url } from "../../Config/BaseUrl";
const getEnquiries = async () => {
  try {
    const response = await axios.get(`${base_url}enq/get-allEnq`);
    console.log("Get Enquiries from enquiry service", response.data);

    return response.data;
  } catch (error) {
    console.log("Error fetching enquiries:", error);
    throw error;
  }
};
const deleteEnquiry = async (id) => {
  const response = await axios.delete(`${base_url}enquiry/${id}`, config);
  return response.data;
};
const getEnquiry = async (id) => {
  const response = await axios.get(`${base_url}enquiry/${id}`);
  return response.data;
};
const udpateEnquiry = async (enq) => {
  const response = await axios.put(
    `${base_url}enquiry/${enq.id}`,
    { status: enq.enqData },
    config
  );
  return response.data;
};
const EnquiryService = {
  getEnquiries,
  deleteEnquiry,
  getEnquiry,
  udpateEnquiry,
};

export default EnquiryService;
