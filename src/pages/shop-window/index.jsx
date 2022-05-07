import React from 'react';
import MenuSearch from './components/menu-search';
import Products from './components/products';

const ShopWindow = () => {
  return (
    <>
      <MenuSearch />
      <h2 className="content__title">Все пиццы</h2>
      <Products />
    </>
  );
};

export default ShopWindow;
