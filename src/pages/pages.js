import React, { Component } from 'react';
import './pages.less';
import { Route } from 'react-router-dom'
import Entry from './components/entry/entry'
import Webgl from './components/webgl/webgl'
import Svg from './components/svg/svg'
import Goods from './components/goods/goods'
import PageSide from '../common/components/pageSide/pageSide'
import PageTop from '../common/components/pageTop/pageTop'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout

class Pages extends Component {

    constructor({match}) {
        super();
        console.log(match)  
        this.match = match;
    }
    render() {
        return (
            <div className="Pages">
            <Layout>
            <Header>
              <PageTop />
            </Header>
            <Layout>
              <Sider width="256" style={{ background: '#000' }}>
                <PageSide />
              </Sider>
              <Content>
                <Route exact path="/" component={Entry} />
                <Route path="/goods" component={Goods} />
                <Route path="/3d" component={Webgl} />
                <Route path="/2d" component={Svg} />
              </Content>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>
            
            </div>
        );
    }
}

export default Pages;