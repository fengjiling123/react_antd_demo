import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/home';
import { Button, Icon } from 'antd';
import './index.less';

@connect(state => ({
  ...state.home
}))
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  changeNumber = () => {
    let { dispatch, number } = this.props;
    number++
    dispatch(actions.changeNumber(number));
  }

  render () {
    const { history, number } = this.props;
    return <div>
      <div>首页</div>
      <div>{number}</div>
      <Button type="primary" onClick={this.changeNumber}>
        <Icon type="plus" />
      </Button>
      <div onClick={() => { history.push('/mine') }}>去我的页面</div>
    </div>;
  };
}

export default Home;