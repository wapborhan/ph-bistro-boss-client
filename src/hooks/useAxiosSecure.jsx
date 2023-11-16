import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3300",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
