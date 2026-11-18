import request from "./request";

export function getStuListApi() {
  return request.get("/students");
}
