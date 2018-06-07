import React, { Component } from 'react';
import './login.less';
import { Input, Button, message } from 'antd';
import http from '../../../assets/js/http'
import Cookies from 'react-cookies';

const success = () => {
    message.success('登录成功！', 10);
};

class Login extends Component {

    constructor(props){
        super();
        this.props = props;
        this.state = {
            username: '',
            password: '',
        };
    }

    login = () => {
        http('login', {
            username: this.state.username,
            password: this.state.password,
        }).then(res => {
            console.log(res)
            success();
            const data = new Date();
            const expires = new Date(data.setDate((new Date()).getDate() + 1));
            Cookies.save('7ehome-Login', res, {expires: expires});
            this.props.history.push("/")
        }).catch(err =>{
            console.log(err)
        }) 
    }

    setUsername = (event) => {
        this.setState({username: event.target.value})
    }

    setPassword = (event) => {
        this.setState({password: event.target.value})
    }

    render() {
        return (
          <div className="Login">
            <div className="login-panel">
                <h3>登录</h3>
                <div className="body">
                    <Input value={this.state.username} onChange={this.setUsername} placeholder="请输入用户名" />
                    <Input value={this.state.password} onChange={this.setPassword} type="password" placeholder="请输入密码" />
                    <div>
                        <Button>取消</Button>
                        <Button type="primary" onClick={this.login}>确定</Button>
                    </div>
                </div>
            </div>
          </div>
        );
      }
}

export default Login;