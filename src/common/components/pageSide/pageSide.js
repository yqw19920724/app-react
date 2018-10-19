import React, { Component } from 'react';
import './pageSide.less';
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

class PageSide extends Component {

    constructor() {
        super();
        this.state = {collapsed: false}
    }

    toggleCollapsed() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <div className="PageSide">
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>个人中心</span></span>}>
                    <Menu.Item key="1"><Link to="/goods/list">商品列表</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/goods/upload">上传商品</Link></Menu.Item>
                    <SubMenu key="sub2" title="webGL">
                        <Menu.Item key="3"><Link to="/3d/demo1">实例一</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/3d/demo2">实例二</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title="svg">
                        <Menu.Item key="5"><Link to="/2d/demo1">实例一</Link></Menu.Item>
                        <Menu.Item key="6">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default PageSide;