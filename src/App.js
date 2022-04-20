import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './header/head';
import Footer from './footer/footer';
import RouteApp from './routeApps/router';
import store from './pages/Redux/store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <RouteApp />
      <Footer />
    </BrowserRouter>
  </Provider>
);
export default App;
