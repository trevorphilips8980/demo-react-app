import axios from "axios";

// API url

const AXIOS = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/`,
});
// Set token based on user authentication
export const AXIOS_SET_AUTH_TOKEN = (token: string) => {
  AXIOS.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const AXIOS_REMOVE_AUTH_TOKEN = () => {
  delete AXIOS.defaults.headers.common["Authorization"];
};

//set authorization headers for all requests
AXIOS.defaults.headers.common["Accept"] = "application/json";
AXIOS.defaults.headers.common["Content-Type"] = "application/json";
AXIOS.defaults.headers.common["Accept-Language"] = localStorage.getItem(
  "language"
)
  ? localStorage.getItem("language")
  : "en";
// Add a response interceptor
AXIOS.interceptors.response.use(
  function (response) {
    if (response.data instanceof Blob) {
      return response;
    } else {
      return response.data;
    }
  },
  function (error) {
    return Promise.reject(error.response);
  }
);

export default AXIOS;
