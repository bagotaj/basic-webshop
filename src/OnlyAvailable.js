import React from 'react';
import Table from './components/Table';
import LayoutMyShopMenu from './LayoutMyShopMenu';

export default function OnlyAvailable({ products, linksHome }) {
  function filterOnlyAvailable() {
    let newProducts = [];

    products.forEach((product) => {
      if (product.quantityOfStock > 0) {
        newProducts.push(product);
      }
    });

    return newProducts;
  }

  return (
    <LayoutMyShopMenu linksHome={linksHome}>
      <Table products={filterOnlyAvailable()} />;
    </LayoutMyShopMenu>
  );
}
