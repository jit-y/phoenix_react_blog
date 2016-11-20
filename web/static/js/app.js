import "../../../deps/phoenix_html/web/static/js/phoenix_html"
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configure-store';
import App from './containers/app';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
