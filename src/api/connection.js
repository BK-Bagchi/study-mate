import axios from "./axiosInstance";

export const makeConnection = (data) => axios.post(`/connection`, data);
