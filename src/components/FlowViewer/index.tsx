/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */

import jsxCustomEvent from "@micro-zoe/micro-app/polyfill/jsx-custom-event";
console.log("🚀 ~ jsxCustomEvent:", jsxCustomEvent);

import { token } from "@/api";
import { UserModel } from "@/models/UserModel";
import { GlobalConfig } from "@/common";

export default function FlowViewer() {
  const { flowId } = UserModel.useModel();

  console.log(`/studio/${flowId}?mode=view&token=${token}`);

  const flowUrl = (() => {
    const _window = window;
    // @ts-expect-error 类型申明
    const _url = _window.YD.MICRO_APPS.find(
      (it: any) => it.name === "xybot-front-flow"
    )?.url;
    if (!_url) console.error("ipaas 地址获取错误");
    return _url;
  })();

  return (
    // @ts-expect-error 测试一下
    <micro-app
      name="flow"
      disable-memory-router={false}
      style={{
        height: "100%",
      }}
      router-mode="pure"
      iframe={false}
      destroy={false}
      url={flowUrl}
      baseroute="/"
      default-page={`/studio/${flowId}?mode=view&token=${token}`}
      data={{
        baseroute: "/",
        getToken() {
          return token;
        },
        requestBaseURL: GlobalConfig.API_BASE_URL,
        setHeaderVisible() {},
      }}
      // @ts-expect-error 测试一下
    ></micro-app>
  );
}
