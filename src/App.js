import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';

import { Overview } from './components/Overview';
import reducers from './reducers';

const store = createStore(reducers);

const rootDOMNode = document.getElementById('root');
if (rootDOMNode) {
  ReactDOM.render(
    <Provider store={store}>
      <Overview />
    </Provider>,
    rootDOMNode,
  );
}
