import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer, { rootSaga } from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { check, tempSetUser } from './modules/user';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

function loadUser() {
  try {
    const user = localStorage.getItem('user');

    if (!user) {
      return;
    }

    store.dispatch(tempSetUser(JSON.parse(user)));
    store.dispatch(check());
  }
  catch (e) {
    console.log('로컬 스토리지 작동 오류');
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
