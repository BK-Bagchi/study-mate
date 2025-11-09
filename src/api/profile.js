import axios from "./axiosInstance";

export const createProfile = (id, data) => axios.post(`/profile/${id}`, data);
export const getProfileById = (id) => axios.get(`/profile/${id}`);
export const getAllProfile = (id) => axios.get(`/allProfile/${id}`);
