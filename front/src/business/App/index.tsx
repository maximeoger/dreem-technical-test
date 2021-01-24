import React from 'react';
import Router from 'business/Router';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>header</Header>
      <Content>
        <Router/>
      </Content>
      <Footer>
        <span>Dreem ©2021 - technical test</span>
      </Footer>
    </Layout>
  );
}

export default App;
