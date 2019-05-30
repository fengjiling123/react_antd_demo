import React from "react";
import PropTypes from "prop-types";
class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        onClick={() => {
          this.props.history.push("/");
        }}
      >
        登录
      </div>
    );
  }
}
Login.propTypes = {};
export default Login;
