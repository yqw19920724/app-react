import React, { Component } from 'react';
import './pages.less';
import { Route } from 'react-router-dom'
import Entry from './components/entry/entry'
import Threed from './components/threed/threed'
import Goods from './components/goods/goods'
import PageSide from '../common/pageSide/pageSide'
import PageTop from '../common/pageTop/pageTop'
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
              <Sider><PageSide /></Sider>
              <Content>
              <Route exact path="/" component={Entry} />
              <Route path="/goods" component={Goods} />
              <Route path="/3d" component={Threed} />
              </Content>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>
            
            </div>
        );
    }
}

export default Pages;