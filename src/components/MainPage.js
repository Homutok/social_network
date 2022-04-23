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
    <div className="App">
      <Layout>
        <Header>
          <HeaderLine/>
        </Header>

        <Content>
          <Routes>
              <Route path="blog" element={<Blog/>} />
              <Route path="blog/:id" element={<PostDetail/>} />
              <Route path="blog/action/:type=:id" element={<PostActions/>} />
              <Route path="profile" element={<Profile/>} />
              <Route path="login" element={<Login/>} />
              <Route path="" element={<Login/>} />
          </Routes>
        </Content>

        <Footer>
          Kuzmin Alexander IVT-13-18
        </Footer>
      </Layout>
    </div>

  );
}

