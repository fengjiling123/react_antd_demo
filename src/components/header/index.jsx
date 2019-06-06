import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Menu, Dropdown, Icon } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./index.less";

@withRouter
@connect(state => ({
  ...state.login
}))
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  logout() {
    const { history } = this.props;
    history.push("/login");
  }

  render() {
    const breadcrumb = ["首页"];
    const { loginUser } = this.props;
    const menu = (
      <Menu>
        <Menu.Item>
          <span onClick={this.logout.bind(this)}>退出登陆</span>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="--header">
        <Row className="contents">
          <Col span={16}>{breadcrumb.join(" / ")}</Col>
          <Col span={8} className="login-info">
            <Dropdown overlay={menu}>
              <span style={{ marginLeft: "10px" }}>
                {loginUser}&nbsp;
                <Icon type="down" style={{ fontSize: "16px" }} />
              </span>
            </Dropdown>
          </Col>
        </Row>
      </div>
    );
  }
}
Header.propTypes = {};
export default Header;
