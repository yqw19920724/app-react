import React, { Component } from 'react';
import './App.css';
import { Layout } from 'antd';
import PageTop from './common/pageTop/pageTop';
import PageSide from './common/pageSide/pageSide';
import Pages from './pages/pages'
import { BrowserRouter as Router} from 'react-router-dom'
const { Header, Footer, Sider, Content } = Layout;


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Layout>
            <Header>
              <PageTop />
            </Header>
            <Layout>
              <Sider><PageSide /></Sider>
              <Content><Pages /></Content>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
