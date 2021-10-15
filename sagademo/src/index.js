import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider} from "react-redux"
import reducers from './reducers'
import {createStore , applyMiddleware ,compose} from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSagas'


const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware]

// Store creation with just reducers ,devtool is as follows
//const store = createStore(
  // reducers,
  // window.___REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(
  // );

const store = compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )(createStore)(reducers);

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
