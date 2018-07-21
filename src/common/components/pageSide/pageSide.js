import React, { Component } from 'react';
import './pageSide.less';
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


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
                {/* <Menu 
                style={{ width: 256 }}
                defaultSelectedKeys={['1']} 
                defaultOpenKeys={['sub1', 'sub2', 'sub3']} 
                mode="inline" 
                theme="dark" 
                inlineCollapsed={this.state.collapsed}>
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>商品列表</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>上传商品</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="inbox" />
                        <span>Option 3</span>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>个人小铺</span></span>}>
                        <Menu.Item key="5"><Link to="/goods/list">商品列表</Link></Menu.Item>
                        <Menu.Item key="6"><Link to="/">上传商品</Link></Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>webgl学习</span></span>}>
                        <Menu.Item key="9"><Link to="/3d/demo1">实例一</Link></Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu> */}
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>个人中心</span></span>}>
                <Menu.Item key="1"><Link to="/goods/list">商品列表</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/">上传商品</Link></Menu.Item>
                <SubMenu key="sub2" title="webGL">
                    <Menu.Item key="3"><Link to="/3d/demo1">实例一</Link></Menu.Item>
                    <Menu.Item key="4">Option 8</Menu.Item>
                </SubMenu>
                </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default PageSide;