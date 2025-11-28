'use client'

import React from 'react';
import {Layout, Menu, MenuProps, Button, theme} from 'antd';

const {Header, Sider, Content} = Layout;
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import {menus} from "../variable/menus";
import {usePathname} from 'next/navigation';
import {useEffect, useState} from 'react';

import Title from "antd/es/typography/Title";

interface Props {
  children?: React.ReactNode;
}

function currentPageIndexing(sidebar: MenuProps['items'], pathname: string) {
  const x: string[] = []
  sidebar?.map((item) => {
    if (item?.key === pathname) {
      x.push(item.key)
    }
  })
  return x;
}

const SidebarComponent: React.FC<Props> = ({children}) => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [defaultMenu, setDefaultMenu] = useState([""]);

  const {
    token: {colorBgContainer, borderRadiusLG},
  } = theme.useToken();

  useEffect(() => {
    setDefaultMenu(currentPageIndexing(menus, pathname))
  }, [pathname]);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} theme={'light'}>
        {/*<div className="demo-logo-vertical"/>*/}
        {collapsed ?
        <Title level={4} style={{margin: '27px'}}>DF</Title>
          :
        <Title level={4} style={{margin: '27px'}}>DimFinance</Title>
        }
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={menus}
        />
      </Sider>
      <Layout>
        <Header style={{padding: 0, background: colorBgContainer}}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};


export default SidebarComponent;