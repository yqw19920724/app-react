import React, { Component } from 'react';
import './pageTop.less';
import { Button } from 'antd';

class PageTop extends Component {
  render() {
    return (
      <div className="PageTop">
        <div>
            <h2>7ehome后台管理系统</h2>
        </div>
        <div>
            <Button>登录</Button>
        </div>
      </div>
    );
  }
}

export default PageTop;
