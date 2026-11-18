import axios from "axios";

const request = axios.create({
  // backend mock API
  baseURL: "http://localhost:3001",
  timeout: 5000,
});

// 设置请求拦截
request.interceptors.request.use((req) => {
  // req 就是你的请求
  // 做一些其他的事情 。。。。
  // req.headers = ....

  // 请求放行
  return req;
});

// 设置响应拦截
request.interceptors.response.use((res) => {
  // 拦截到响应
  // 对响应进行相应的处理。。。

  // 处理完之后就放行
  return res;
});

export default request;
