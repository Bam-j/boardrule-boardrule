import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MainPage from './components/main-pages/MainPage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';

const App = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/register'} element={<RegisterPage/>}/>
            </Routes>
        </>
    );
};

export default App;