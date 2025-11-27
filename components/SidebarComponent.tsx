'use client'

import React from 'react';
import {Layout, Menu, MenuProps, theme} from 'antd';
import {menus} from "../variable/menus";
import {usePathname} from 'next/navigation';
import {useEffect, useState} from 'react';

const { Content, Footer, Sider } = Layout;

interface Props {
  children?: React.ReactNode;
}

function currentPageIndexing(sidebar:MenuProps['items'], pathname: string) {
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
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    setDefaultMenu(currentPageIndexing(menus, pathname))
  }, [pathname]);

  return (
    <Layout>
      {/*<Header style={{ display: 'flex', alignItems: 'center' }}>*/}
      {/*  <div className="demo-logo" />*/}
      {/*  <Menu*/}
      {/*    theme="dark"*/}
      {/*    mode="horizontal"*/}
      {/*    defaultSelectedKeys={['2']}*/}
      {/*    items={items1}*/}
      {/*    style={{ flex: 1, minWidth: 0 }}*/}
      {/*  />*/}
      {/*</Header>*/}
      <div>
        {/*<Breadcrumb*/}
        {/*  style={{ margin: '16px 0' }}*/}
        {/*  items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}*/}
        {/*/>*/}
        <Layout
          style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
        >
          <Sider style={{ background: colorBgContainer }} width={200} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={menus}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>{children}</Content>
        </Layout>
      </div>
      {/*<Footer style={{ textAlign: 'center' }}>*/}
      {/*  Ant Design ©{new Date().getFullYear()} Created by Ant UED*/}
      {/*</Footer>*/}
    </Layout>
  );
};


export default SidebarComponent;