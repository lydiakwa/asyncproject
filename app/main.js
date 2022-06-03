import { Provider } from 'react-redux';

import '../public/style.css';
import store from './store';
import Routes from './components/Routes';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <Routes />
  </Provider>
);
//connects the store with the routes
