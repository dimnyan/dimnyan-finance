import {MenuProps} from "antd";
import {HomeOutlined} from "@ant-design/icons";

export const menus: MenuProps['items'] = [
  {
    key: "/",
    label: <a href={"/"}>Home</a>,
    icon: <HomeOutlined />,
  },
  // {
  //   key: "/handbook",
  //   label: <a href={"/handbook"}>Handbook</a>,
  //   icon: <BookOutlined />,
  // },
]