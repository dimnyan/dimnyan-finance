import {MenuProps} from "antd";
// import {HomeOutlined} from "@ant-design/icons";

export const menus: MenuProps['items'] = [
  {
    key: "/",
    label: <a href={"/"}>Home</a>,
    // icon: <HomeOutlined />,
  },
  {
    key: "/core-content",
    label: "Core Content",
    // icon: <HomeOutlined />,
    children: [
      {
        key: "Personal Finance & Budgeting",
        label: <a href={"/personal-finance"}>Personal Finance & Budgeting</a>,
      },
      {
        key: "Investing",
        label: <a href={"/investing"}>Investing</a>,
      },
      {
        key: "Crypto",
        label: <a href={"/crypto"}>Cryptocurrency & Blockchain</a>,
      },
      {
        key: "Corporate Finance",
        label: <a href={"/corporate-finance"}>Corporate Finance & Valuation</a>,
      },
      {
        key: "Financial Accounting",
        label: <a href={"/financial-accounting"}>Financial Accounting & Statement Analysis</a>,
      },
      {
        key: "Economics",
        label: <a href={"/economics"}>Economics</a>,
      }
    ]
  },
  // {
  //   key: "/handbook",
  //   label: <a href={"/handbook"}>Handbook</a>,
  //   icon: <BookOutlined />,
  // },
]