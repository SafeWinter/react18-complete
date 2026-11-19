import request from "./request";

export const getStuListApi = () => request.get("/students");

export const addStuApi = (data) => request.post("/students", data);

export const editStuApi = (id, data) => request.patch(`/students/${id}`, data);

export const delStuApi = (id) => request.delete(`/students/${id}`);

export const getStuById = (id) => request.get(`/students/${id}`);
