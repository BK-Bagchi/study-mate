import axios from "./axiosInstance";

export const createProfile = (data) => axios.post(`/profile`, data);
export const getProfileById = (id) => axios.get(`/profile/${id}`);
export const getAllProfile = (id) => axios.get(`/allProfile/${id}`);
