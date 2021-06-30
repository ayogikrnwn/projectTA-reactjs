import axios from "axios";

import errorHandler from "./errorHandler.js";

const intance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_HOST}`,
});

intance.interceptors.response.use(
  (response) => response.data,
  errorHandler
);

export default intance;
