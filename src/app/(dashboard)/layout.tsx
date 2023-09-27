"use client";
import { useState } from "react";
import { Layout, Space } from "antd";
import MainHeader from "@/organisms/mainHeader/Page";
import SideMenu from "@/organisms/sideMenu/Page";

import "./layout.scss";
const { Header, Footer, Sider, Content } = Layout;

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider
        width="250"
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="left-sidebar border-right"
        // breakpoint="lg"
      >
        <SideMenu />
      </Sider>
      <Layout>
        <MainHeader />
        <Content className="dashboard-content">{children}</Content>
      </Layout>
    </Layout>
  );
}
