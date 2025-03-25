import { PageContainer } from "@ant-design/pro-components";
import UserDescription from "./components/UserDescription";
import { UserModel } from "./models/UserModel";
import { token } from "./api";
import ProSkeleton from "@ant-design/pro-skeleton";
import RrwebPreview from "./components/RrwebPreview";
import { useState } from "react";
import classNames from "classnames";
import FlowViewer from "./components/FlowViewer";
import microApp from "@micro-zoe/micro-app";

microApp.start();

function AppPage() {
  const { userInfo } = UserModel.useModel();
  const [tabKey, setTabKey] = useState("base");

  if (!userInfo) {
    return (
      <div
        style={{
          background: "#fafafa",
          padding: 24,
        }}
        className="h-[100vh]"
      >
        <ProSkeleton type="result" />
      </div>
    );
  }
  return (
    <PageContainer
      title="Flow Feedback"
      content={<UserDescription />}
      tabList={[
        {
          tab: "用户录屏",
          key: "base",
        },
        {
          tab: "详细信息",
          key: "info",
        },
      ]}
      onTabChange={setTabKey}
    >
      <div
        className={classNames({
          " hidden": tabKey !== "base",
        })}
      >
        <RrwebPreview />
      </div>

      {/* <div
        className={classNames({
          " hidden": tabKey === "base",
        })}
      >
        <FlowViewer />
      </div> */}
      {tabKey !== "base" && <FlowViewer />}
    </PageContainer>
  );
}

export default function App() {
  if (!token) {
    throw new Error("access token can not be empty");
  }
  return (
    <UserModel.Provider>
      <AppPage />
    </UserModel.Provider>
  );
}
