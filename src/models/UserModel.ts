import { createCustomModel } from "../common/createModel";
import { useQuery } from "@tanstack/react-query";
import { request } from "../api/request";

interface UserModelType {
  organizationUuid: string;
  userId: string;
  uuid: string;
  grade: string;
  avatarUrl?: string;
  enterpriseUserName: string;
  name: string;
  enterpriseUuid: string;
  phone: string;
  tenantUuid: string;
  gradeName: string;
}

export const UserModel = createCustomModel(() => {
  const { data: userInfo } = useQuery({
    queryKey: ["userInfo"],
    queryFn: () => {
      return request<UserModelType>({
        url: "/api/v1/user/info/rich",
        method: "get",
      }).then((res) => {
        return res.data;
      });
    },
  });

  return { userInfo };
});
