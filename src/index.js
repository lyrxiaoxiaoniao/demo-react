import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import titleReducer from './store/reducer';
import TodoList from './TodoList';
import './index.css'
// PWA progressive web applocation
// https协议的服务器上
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(titleReducer)
ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>, document.getElementById('root'));
// registerServiceWorker();
