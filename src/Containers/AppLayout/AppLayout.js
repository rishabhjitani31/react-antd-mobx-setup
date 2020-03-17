import React, { Component } from "react";
import { removeItem } from "Utils/Storage";
import { inject, observer } from "mobx-react";
import { ContentRoute } from "../../routes";
import Sidebar from "Components/Sidebar/Sidebar";
import "./AppLayout.scss";

import { Layout, Menu, Icon } from "antd";

const { Header, Content, Footer } = Layout;

@inject(stores => ({
  login: stores.login
}))
@observer
class AppLayout extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Sidebar collapsed={this.state.collapsed} />
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
            <span>header</span>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            <ContentRoute />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

AppLayout.propTypes = {};

export default AppLayout;
