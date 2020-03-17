import React, { Component } from "react";
import PropTypes from "prop-types";
import { Layout, Menu, Icon } from "antd";
import SidebarContent from "./SidebarContent";
import { Link } from "react-router-dom";
const { Sider } = Layout;
const { SubMenu } = Menu;

class Sidebar extends Component {
  render() {
    const { collapsed } = this.props;
    return (
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline">
          {SidebarContent.map(content => {
            if (content.children.length) {
              return (
                <SubMenu
                  key={content.key}
                  title={
                    <span>
                      <Icon type={content.icon} />
                      <span>{content.name}</span>
                    </span>
                  }
                >
                  {content.children.map(child => {
                    return (
                      <Menu.Item key={child.key}>
                        <Link to={child.route}>
                          <Icon type={child.icon} />
                          <span>{child.name}</span>
                        </Link>
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
              );
            } else {
              return (
                <Menu.Item key={content.key}>
                  <Link to={content.route}>
                    <Icon type={content.icon} />
                    <span>{content.name}</span>
                  </Link>
                </Menu.Item>
              );
            }
          })}
        </Menu>
      </Sider>
    );
  }
}

Sidebar.defaultProps = {
  collapsed: false
};

Sidebar.propTypes = {
  collapsed: PropTypes.bool
};

export default Sidebar;
