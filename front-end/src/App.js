import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/main-pages/MainPage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import GameRuleViewPage from './components/game-rule-page/GameRuleViewPage';
import WritePage from './components/community/WritePage';
import PostPage from './components/community/PostPage';
import PostListPage from './components/community/PostListPage';
import { Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Boardrule Boardrule</title>
      </Helmet>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/register'} element={<RegisterPage />} />
        <Route path={'/community'} element={<PostListPage />} />
        <Route path={'/rules'} element={<GameRuleViewPage />} />
        <Route path={'/write'} element={<WritePage />} />
        <Route path={'/@:username'}>
          <Route index element={<PostListPage />} />
          <Route path={':postId'} element={<PostPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;