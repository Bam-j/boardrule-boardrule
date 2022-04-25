import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MainPage from './components/main-pages/MainPage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import CommunityMainPage from './components/community/CommunityMainPage';
import GameRuleViewPage from './components/game-rule-page/GameRuleViewPage';

const App = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/register'} element={<RegisterPage/>}/>
                <Route path={'/community'} element={<CommunityMainPage/>}/>
                <Route path={'/rules'} element={<GameRuleViewPage/>}/>
            </Routes>
        </>
    );
};

export default App;