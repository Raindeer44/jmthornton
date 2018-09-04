import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import 'sanitize.css/sanitize.css';

import App from 'containers/App';

// CSS reset and Global Styles
import './assets/style/global-styles';

ReactDOM.render(
  <App />,
  document.querySelector('.container'),
);

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
