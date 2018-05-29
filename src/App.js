import React, { Component } from 'react';
import './App.css';
import { Layout } from 'antd';
import PageTop from './common/pageTop/pageTop';
import PageSide from './common/pageSide/pageSide';
const { Header, Footer, Sider, Content } = Layout;


class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header>
            <PageTop />
          </Header>
          <Layout>
            <Sider><PageSide /></Sider>
            <Content></Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
