import React, { Component } from 'react';
import './pageTop.less';
import { Button } from 'antd';
import { Link } from 'react-router-dom'

class PageTop extends Component {
  render() {
    return (
      <div className="PageTop">
        <div>
            <h2>后台管理系统</h2>
        </div>
        <div>
            <Button><Link to="/login">登录</Link></Button>
        </div>
      </div>
    );
  }
}

export default PageTop;
