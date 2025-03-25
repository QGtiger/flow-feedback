import { createCustomModel } from "../common/createModel";
import { useQuery } from "@tanstack/react-query";
import { request } from "../api/request";

export const UserModel = createCustomModel(() => {
  const { data: userInfo } = useQuery({
    queryKey: ["userInfo"],
    queryFn: () => {
      return request({
        url: "/api/v1/user/info/rich",
        method: "get",
      }).then((res) => {
        console.log(res);
      });
    },
  });

  return { userInfo };
});
