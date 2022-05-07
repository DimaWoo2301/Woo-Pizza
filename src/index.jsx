import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/app.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainWindow from './pages/page-template';
import { Provider } from 'react-redux';
import store from './redux';
import NotFound from './pages/not-found';
import ShopWindow from './pages/shop-window';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainWindow />}>
        <Route index element={<ShopWindow />}/>
        <Route path="*" element={<NotFound />}/>
      </Route>
    </Routes>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
);

