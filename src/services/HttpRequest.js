import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? "https://journal-trade-jkrq.vercel.app/api"
    : "https://digitalnodestore.iran.liara.run/api";

export const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
