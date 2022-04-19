import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MainPage from './components/main-pages/MainPage';

const App = () => {
  return (
      <>
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
        </Routes>
      </>
  );
};

export default App;