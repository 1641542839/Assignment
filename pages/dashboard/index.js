import React, { useState } from "react";
import { render } from "react-dom";
import { Layout, Menu, Breadcrumb, Dropdown } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  ReadOutlined,
  ProjectOutlined,
  CalendarOutlined,
  FileAddOutlined,
  MessageOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BellOutlined,
} from "@ant-design/icons";

import { withRouter } from "next/router";
import StudentTable from "./overview";
export default function Page() {
  const { Header, Sider, Content } = Layout;
  const { SubMenu } = Menu;
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Overview
          </Menu.Item>
          <SubMenu key="sub1" icon={<ReadOutlined />} title="Course">
            <Menu.Item key="2" icon={<ProjectOutlined />}>
              All Course
            </Menu.Item>
            <Menu.Item key="3" icon={<FileAddOutlined />}>
              My Courses
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="4" icon={<CalendarOutlined />}>
            Class Schedule
          </Menu.Item>
          <Menu.Item key="5" icon={<MessageOutlined />}>
            Message
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
            }}
          >
            <span className="icon" onClick={toggle}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </span>
            <div>
              <span className="icon">
                <BellOutlined />
              </span>
              <span className="icon">
                <Dropdown.Button
                  overlay={menu}
                  placement="bottomCenter"
                  icon={<UserOutlined />}
                >
                </Dropdown.Button>
                
              </span>
            </div>

            {/* <Menu>
                                <Menu.Item key="1" icon={<UserOutlined />}>
                                  1st menu item
                                </Menu.Item>
                                <Menu.Item key="2" icon={<UserOutlined />}>
                                  2nd menu item
                                </Menu.Item>
                                <Menu.Item key="3" icon={<UserOutlined />}>
                                  3rd menu item
                                </Menu.Item>
                              </Menu>

                                                    ReactDOM.render(
                        <Dropdown overlay={menu}>
                          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Hover me <DownOutlined />
                          </a>
                        </Dropdown>,
                        mountNode, */}
          </div>
        </Header>
        <Content className="site-layout-background">
          <StudentTable></StudentTable>
        </Content>
      </Layout>
    </Layout>
  );

  // const onClick = () => {
  //   axios.post("https://cms.chtoma.com/api/logout").then(() => {
  //     localStorage.removeItem("cms", res.data.data);
  //   });
  // };

  // return (
  //   <Layout style={{ minHeight: "100vh" }}>
  //     <Sider trigger={null} collapsible collapsed={collapsed}>

  //       <div className="logo"/>
  //       <span style={{ color: "white" }}>CMS</span>

  //       <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
  //         <Menu.Item
  //           icon={collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
  //           onClick={toggleCollapsed}
  //         ></Menu.Item>
  //         {/* <Menu.Item key="2" icon={<UserOutlined /> <Link href="/login" onClick={onClick}>
  //                       Logout
  //                     </Link> }></Menu.Item> */}
  //         <Menu.Item key="2" icon={<UserOutlined />}></Menu.Item>
  //       </Menu>

  //       <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
  //         <Menu.Item key="1" icon={<PieChartOutlined />}>
  //           Overview
  //         </Menu.Item>
  //         <SubMenu key="sub1" icon={<ReadOutlined />} title="Course">
  //           <Menu.Item key="2" icon={<ProjectOutlined />}>
  //             All Course
  //           </Menu.Item>
  //           <Menu.Item key="3" icon={<FileAddOutlined />}>
  //             My Courses
  //           </Menu.Item>
  //         </SubMenu>
  //         <Menu.Item key="4" icon={<CalendarOutlined />}>
  //           Class Schedule
  //         </Menu.Item>
  //         <Menu.Item key="5" icon={<MessageOutlined />}>
  //           Message
  //         </Menu.Item>
  //       </Menu>
  //     </Sider>
  //     <Layout className="site-layout">
  //       <Header className="site-layout-background" style={{ padding: 0 }} />
  //       <Content style={{ margin: "0 16px" }}>
  //         <Breadcrumb style={{ margin: "16px 0" }}>
  //           <Breadcrumb.Item>User</Breadcrumb.Item>
  //           <Breadcrumb.Item>Bill</Breadcrumb.Item>
  //         </Breadcrumb>
  //         <div
  //           className="site-layout-background"
  //           style={{ padding: 24, minHeight: 360 }}
  //         >
  //           Bill is a cat.
  //         </div>
  //       </Content>
  //       <Footer style={{ textAlign: "center" }}>
  //         Ant Design ©2018 Created by Ant UED
  //       </Footer>
  //     </Layout>
  //   </Layout>
  // );
}
