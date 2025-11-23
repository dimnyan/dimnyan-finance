'use client'
import {Layout, Menu} from 'antd';
import {Header} from "antd/lib/layout/layout";
import {menus} from "../variable/menus";
import {usePathname} from 'next/navigation';
import {useEffect, useState} from 'react';

interface Props {
  children?: React.ReactNode;
}

function currentPageIndexing(sidebar, pathname: string) {
  const x: string[] = []
  sidebar?.map((item) => {
    if (item.key === pathname) {
      x.push(item.key)
    }
  })
  return x;
}

const HeaderComponent: React.FC<Props> = ({children}) => {
  const pathname = usePathname();
  const [defaultMenu, setDefaultMenu] = useState([""]);

  useEffect(() => {
    setDefaultMenu(currentPageIndexing(menus, pathname))
  }, [pathname]);

  console.log(defaultMenu)

  return (
    <Layout>
      <Header style={{display: 'flex', alignItems: 'center'}}>
        <div className="demo-logo"/>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={defaultMenu}
          items={menus}
          style={{flex: 1, minWidth: 0}}
        />
      </Header>
      {/*<Content style={{ padding: '0 48px' }}>*/}
      {/*<Breadcrumb*/}
      {/*  style={{ margin: '16px 0' }}*/}
      {/*  items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}*/}
      {/*/>*/}
      <div>
        {children}
      </div>
      {/*</Content>*/}
      {/*<Footer style={{ textAlign: 'center' }}>*/}
      {/*  Ant Design ©{new Date().getFullYear()} Created by Ant UED*/}
      {/*</Footer>*/}
    </Layout>
  );
};


export default HeaderComponent;