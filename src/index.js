import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ApiService from './core/services/ApiService';
import App from './App';
import { ApiServiceProvider } from './views/components/ApiServiceContext';
import * as serviceWorker from './serviceWorker';
import store from './store';
import './index.css';
import ErrorBoundary from './views/components/ErrorBoundary';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <Router>
        <ApiServiceProvider value={ApiService}>
          <App />
        </ApiServiceProvider>
      </Router>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
