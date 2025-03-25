export function queryParams() {
  const searchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(searchParams.entries());
  return params;
}

/**
 * 获取 url 参数
 * @param key 参数名
 * @returns 参数值
 */
export function queryParam(key: string) {
  const params = queryParams();
  return params[key];
}

export const GlobalConfig = {
  YDConfig: {},
  API_BASE_URL: "",
};

const YDConfig = JSON.parse(queryParam("YD") || "{}");
// @ts-expect-error 类型补充
GlobalConfig.YDConfig = window.YD = YDConfig;

GlobalConfig.API_BASE_URL = YDConfig.API_URL;
