import { PageContainer } from "@ant-design/pro-components";
import UserDescription from "./components/UserDescription";
import { UserModel } from "./models/UserModel";
import { token } from "./api";

function AppPage() {
  return (
    <PageContainer title="Flow Feedback" content={<UserDescription />}>
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
