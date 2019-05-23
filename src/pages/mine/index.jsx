import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

class Mine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };
  render () {
    const { history } = this.props;
    return <div>
      <div>我的页面</div>
      <div onClick={() => { history.push('/') }}>回首页</div>
    </div>;
  };
}
Mine.propTypes = {
};
export default Mine;