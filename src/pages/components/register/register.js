import React, { Component } from 'react'
import './register.less'
import { Input, Button } from 'antd'
import CommonModule from '../../../common/commonModule'
import { Link } from 'react-router-dom'

class Register extends Component {

    constructor(props){
        super();
        this.props = props;
        this.state = {
            username: '',
            firstPassword: '',
            secondPassword: '',
        };
    }

    register = _ => {
        CommonModule.http('register', {
            username: this.state.username,
            firstPassword: this.state.firstPassword,
            secondPassword: this.state.secondPassword,
        }).then(res => {
            CommonModule.msgSuccess('注册成功！');
        }).catch(err =>{
            CommonModule.msgError(err.err)
        }) 
    }

    setUsername = event => {
        this.setState({username: event.target.value})
    }

    setFirstPassword = event => {
        this.setState({firstPassword: event.target.value})
    }

    setSecondPassword = event => {
        this.setState({secondPassword: event.target.value})
    }

    render() {
        return (
          <div className="Register">
            <div className="register-panel">
                <h3>注册</h3>
                <div className="body">
                    <Input value={this.state.username} onChange={this.setUsername} placeholder="请输入用户名" />
                    <Input value={this.state.firstPassword} onChange={this.setFirstPassword} type="password" placeholder="请输入密码" />
                    <Input value={this.state.secondPassword} onChange={this.setSecondPassword} type="password" placeholder="请再次确认密码" />
                    <div>
                        <span><Link to="/login">去登陆</Link></span>
                    </div>
                    <div>
                        <Button><Link to="/">取消</Link></Button>
                        <Button type="primary" onClick={this.register}>确定</Button>
                    </div>
                </div>
            </div>
          </div>
        );
      }
}

export default Register;