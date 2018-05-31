import React, { Component } from 'react';
import './login.less';
import { Input } from 'antd';

class Login extends Component {

    constructor(props){
        super();
        this.props = props;
    }

    render() {
        return (
          <div className="Login">
            <div className="login-panel">
                <h3>登录</h3>
                <Input placeholder="请输入用户名" />
            </div>
          </div>
        );
      }
}

export default Login;