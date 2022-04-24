import React from 'react';
import "antd/dist/antd.css";
import './MainPage.css';
import { Layout } from 'antd';
import { Routes, Route } from "react-router-dom";
import Profile from './ProfileForm/ProfileContainer'
import HeaderLine from './HeaderForm/HeaderContainer';
import Blog from './BlogForm/BlogListOfPost/BlogContainer';
import Login from './LoginForm/LoginContainer';
import PostDetail from './BlogForm/BlogListOfPost/BlogDetailOfPost/PostContainer'
import PostActions from './BlogForm/BlogActionPost/ActionPostContainer';
export default function App() {
  const { Header, Footer, Content } = Layout;
  return (
    <div className="App"

    >
      <Layout>
        <Header className="header">
          <HeaderLine />
        </Header>

        <Content>
          <Routes>
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<PostDetail />} />
            <Route path="blog/action/:type=:id" element={<PostActions />} />
            <Route path="profile" element={<Profile />} />
            <Route path="login" element={<Login />} />
            <Route path="" element={<Login />} />
          </Routes>
        </Content>

        <Footer
          style={{
            borderTop: '1px solid #e8e8e8',
            left: 0,
            bottom: 0,
            width: '100%',
            backgroundColor: 'white',
            textAlign: 'center'
          }}
        >
          Kuzmin Alexander IVT-13-18
        </Footer>
      </Layout>
    </div>

  );
}

