import React, { Component } from 'react';
import './App.css';
import { Layout } from 'antd';
import PageTop from './common/pageTop/pageTop';
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
            <Sider>Sider</Sider>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
