import axios from "axios";

const AxiosClient = axios.create({
  headers: { "Content-Type": "application/json" },
});

AxiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: token ? `Token ${token}` : "",
    },
  };
});

export default AxiosClient;
