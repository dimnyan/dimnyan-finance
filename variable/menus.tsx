import {MenuProps} from "antd";
import {HomeOutlined} from "@ant-design/icons";

export const menus: MenuProps['items'] = [
  {
    key: "/",
    label: <a href={"/"}>Home</a>,
    icon: <HomeOutlined />,
  },
  {
    key: "/core-content",
    label: "Core Content",
    // icon: <HomeOutlined />,
    children: [
      {
        key: "Personal Finance & Budgeting",
        label: <a href={"/personal-finance"}>Personal Finance & Budgeting</a>,
      }
    ]
  },
  // {
  //   key: "/handbook",
  //   label: <a href={"/handbook"}>Handbook</a>,
  //   icon: <BookOutlined />,
  // },
]