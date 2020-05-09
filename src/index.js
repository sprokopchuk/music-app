import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';
import audioMiddleware from './middlewares/audioMiddleware';
import sagas from './sagas';
import reducers from './reducers';
import App from './components/App';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware, audioMiddleware)));

sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
