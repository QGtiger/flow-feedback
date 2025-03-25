import { UserModel } from "@/models/UserModel";
import { Descriptions } from "antd";

export default function UserDescription() {
  const { userInfo } = UserModel.useModel();
  const {
    name,
    enterpriseUserName,
    phone,
    tenantUuid,
    uuid,
    organizationUuid,
    gradeName,
  } = userInfo!;
  return (
    <Descriptions size="small" column={2}>
      <Descriptions.Item label="创建人">
        {name} ({enterpriseUserName})
      </Descriptions.Item>
      <Descriptions.Item label="联系方式">
        <a>{phone}</a>
      </Descriptions.Item>
      <Descriptions.Item label="组织UUID">{organizationUuid}</Descriptions.Item>
      <Descriptions.Item label="租户UUID">{tenantUuid}</Descriptions.Item>
      <Descriptions.Item label="用户UUID">{uuid}</Descriptions.Item>
      <Descriptions.Item label="备注">{gradeName}</Descriptions.Item>
    </Descriptions>
  );
}
