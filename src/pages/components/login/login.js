import React, { Component } from 'react';
import './login.less';
import { Input, Button } from 'antd';
import { Link } from 'react-router-dom'
import CommonModule from '../../../common/commonModule'

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
        CommonModule.http('login', {
            username: this.state.username,
            password: this.state.password,
        }).then(({token, message}) => {
            CommonModule.msgSuccess(message);
            CommonModule.setCookie({'7ehome-Login': {token}}, 1)
            this.props.history.push("/")
        }).catch(err =>{
            CommonModule.msgError(err.err)
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
                        <span><Link to="/register">注册账号</Link></span>
                        <span>忘记密码</span>
                    </div>
                    <div>
                        <Button><Link to="/">取消</Link></Button>
                        <Button type="primary" onClick={this.login}>确定</Button>
                    </div>
                </div>
            </div>
          </div>
        );
      }
}

export default Login;