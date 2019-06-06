import React from "react";
import { connect } from "react-redux";
// import LogoImg from '@/assets/images/logo.png';
import sideMenuData from "./sideMenuData";
import { Menu, Icon, Switch } from "antd";
// import history from '@/utils/history';
import { withRouter } from "react-router-dom";
import _ from "lodash";
import "./index.less";

const { SubMenu } = Menu;

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  menuClick({ item, key, keyPath }) {
    this.props.history.push(key);
  }

  openKeys(selectedKeys) {
    let openKeys = "";
    sideMenuData.map(item => {
      if (
        item.children &&
        item.children.find(menu => menu.path === selectedKeys)
      ) {
        openKeys = item.key;
        return;
      }
    });
    return openKeys;
  }

  render() {
    const selectedKeys = window.location.pathname;
    const openKeys = this.openKeys(selectedKeys);
    return (
      <div className="side-menu-container">
        <div className="logo">
          <span
            style={{
              color: "#fff",
              fontSize: "32px",
              lineHeight: "90px",
              wordSpacing: "12px",
              letterSpacing: "10px"
            }}
          >
            运营端
          </span>
        </div>
        <div className="menus">
          <Menu
            selectedKeys={[selectedKeys]}
            defaultOpenKeys={[openKeys]}
            onClick={this.menuClick.bind(this)}
            mode="inline"
            theme="dark"
          >
            {sideMenuData.map(item =>
              item.children ? (
                <SubMenu
                  key={item.key}
                  title={
                    <span>
                      <Icon type={item.icon} className="icon" />
                      <span>{item.name}</span>
                    </span>
                  }
                >
                  {item.children.map(menuItem => (
                    <Menu.Item key={menuItem.path}>{menuItem.name}</Menu.Item>
                  ))}
                </SubMenu>
              ) : (
                <Menu.Item key={item.path}>
                  <Icon type={item.icon} className="icon" />
                  {item.name}
                </Menu.Item>
              )
            )}
          </Menu>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(state => ({}))(SideMenu));
