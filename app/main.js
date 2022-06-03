import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import '../public/style.css';
import store from './store';
import Routes from './components/Routes';

//connects the store with the routes
render(
  // <Provider store={store}>
  <Routes />,
  // </Provider>,
  document.querySelector('#app')
);
