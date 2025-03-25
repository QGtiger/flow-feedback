import axios from "axios";
import { GlobalConfig, queryParam } from "../common";
import { message } from "antd";

export const token = queryParam("token");

if (token) {
  localStorage.setItem("accessToken", token);
}

export const client = axios.create({
  baseURL: GlobalConfig.API_BASE_URL,
});

export const commonApiConfig = (function () {
  const config = {
    commonParams: {},
    commonBody: {},
  };
  return {
    setCommonParams(params: object) {
      config.commonParams = params;
    },
    setCommonBody(body: object) {
      config.commonBody = body;
    },
    getCommonParams() {
      return config.commonParams;
    },
    getCommonBody() {
      return config.commonBody;
    },
  };
})();

client.interceptors.request.use((config) => {
  // header 里面没带 token 就加上
  if (!config.headers.Authorization) {
    const access_token = token;
    config.headers.Authorization = `Bearer ${access_token}`;
  }

  config.params = {
    ...commonApiConfig.getCommonParams(),
    ...config.params,
  };

  config.data = {
    ...commonApiConfig.getCommonBody(),
    ...config.data,
  };
  return config;
});

client.interceptors.response.use(
  (res) => {
    if (res.data.code !== 200) {
      message.error(res.data.msg);
      return Promise.reject(res.data);
    }
    return res.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
