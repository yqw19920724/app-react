import React, { Component } from 'react';
import './login.less';
import { Input, Button } from 'antd';

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
                <div className="body">
                    <Input placeholder="请输入用户名" />
                    <Input type="password" placeholder="请输入密码" />
                    <div>
                        <Button>取消</Button>
                        <Button type="primary">确定</Button>
                    </div>
                </div>
            </div>
          </div>
        );
      }
}

export default Login;