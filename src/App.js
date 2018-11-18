import React from 'react';
import ReactDOM from 'react-dom';

import { Overview } from './components/Overview';

const rootDOMNode = document.getElementById('root');
if (rootDOMNode) {
  ReactDOM.render(
      <Overview />,
    rootDOMNode,
  );
}
