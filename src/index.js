import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer from './module/reducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import TodoList from './components/TodoList';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
		<TodoList />
	  </Provider>
  </React.StrictMode>,
  document.getElementById('index')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
