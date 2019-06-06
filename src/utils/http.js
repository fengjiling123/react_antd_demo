import history from "./history";
import { message } from "antd";
import axios from "axios";
import qs from "qs";
import store from "../store";

function getToken() {
  let states = store.getState();
  let token = states.login.token;
  return token;
}

let baseUrl = "";
if (process.env.NODE_ENV === "production") {
} else if (process.env.NODE_ENV === "development") {
  // 本地环境
  baseUrl = "http://sellerapi.yao6tong.net"; //本地服务器(链接开发的)
}

// 拦截请求
axios.interceptors.request.use(function(config) {
  return config;
});

// 拦截响应
axios.interceptors.response.use(function(config) {
  return config;
});

const http = (config = {}) => {
  const isFormData =
    Object.prototype.toString.call(config.data) === "[object FormData]";
  let headers = {};
  headers["Authorization"] = getToken();

  if (!(config.headers && config.headers["Content-Type"]) && !isFormData) {
    headers["Content-Type"] = "application/json";
  }

  headers = {
    ...headers,
    ...config.headers
  };

  let data = null;

  // Content-Type 为 application/x-www-form-urlencoded 并且 data 类型不为 formData 时序列化 data
  if (!isFormData) {
    data =
      !headers["Content-Type"] ||
      headers["Content-Type"].indexOf("application/x-www-form-urlencoded") > -1
        ? qs.stringify(config.data)
        : config.data || "";
  } else {
    data = config.data;
  }

  const newRequest = new Promise((resolve, reject) => {
    axios(
      Object.assign({}, config, {
        baseURL: config.baseUrl || baseUrl,
        url: config.url,
        method: config.method || "get",
        headers: headers,
        data: data,
        params: config.params || "", //与url拼接
        timeout: config.timeout || 0
      })
    )
      .then(response => {
        if (response.data.code === 1001) {
          history.push("/login");
        } else if (response.data.code !== 1000) {
          throw response.data.msg;
        } else {
          resolve(response);
        }
      })
      .catch(error => {
        message.error(JSON.stringify(error));
        reject(error);
      });
  });

  return newRequest;
};

export default http;
