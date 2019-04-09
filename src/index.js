import routes from '@/Router';
import Store from '@/Store';
import 'bootstrap/dist/css/bootstrap.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import 'typeface-roboto';

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
