
import React from 'react';
import './index.less';

const AsynLoadingComponent = ({ isLoading, error, pastDelay }) => {
  if (error) {
    return <div className='aysn-load-status-error'>页面加载失败</div>;
  } else if (isLoading && pastDelay) {
    return <div className='aysn-load-status-success'>页面加载中</div>;
  } else {
    return null;
  }
};

export default AsynLoadingComponent;