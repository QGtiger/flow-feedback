import { PageContainer } from "@ant-design/pro-components";
import UserDescription from "./components/UserDescription";
import { UserModel } from "./models/UserModel";
import { token } from "./api";
import ProSkeleton from "@ant-design/pro-skeleton";

function AppPage() {
  const { userInfo } = UserModel.useModel();

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
      onTabChange={console.log}
    >
      <div>Hello World</div>
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
